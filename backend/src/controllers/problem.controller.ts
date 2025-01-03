import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { Problem } from '../types';

const prisma = new PrismaClient();

export class ProblemController {
  async getProblems(req: Request, res: Response) {
    const { page = 1, limit = 10, search, tags } = req.query;
    
    const problems = await prisma.problem.findMany({
      where: {
        isPublic: true,
        ...(search && {
          OR: [
            { title: { contains: search as string } },
            { id: parseInt(search as string) || undefined }
          ]
        }),
        ...(tags && {
          tags: {
            hasEvery: (tags as string).split(',')
          }
        })
      },
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      include: {
        _count: {
          select: {
            submissions: true
          }
        }
      }
    });

    res.json(problems);
  }

  async getProblem(req: Request, res: Response) {
    const { id } = req.params;
    
    const problem = await prisma.problem.findUnique({
      where: { id: Number(id) },
      include: {
        samples: true,
        subtasks: {
          include: {
            testcases: true
          }
        }
      }
    });

    if (!problem) {
      return res.status(404).json({ message: 'Problem not found' });
    }

    res.json(problem);
  }
} 