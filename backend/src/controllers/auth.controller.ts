import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export class AuthController {
  async register(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;

      // Check if user already exists
      const existingUser = await prisma.user.findFirst({
        where: { OR: [{ email }, { username }] }
      });

      if (existingUser) {
        return res.status(400).json({
          message: 'User with this email or username already exists'
        });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          role: 'user'
        }
      });

      res.status(201).json({
        message: 'User created successfully'
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error creating user'
      });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      // Find user
      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(401).json({
          message: 'Invalid credentials'
        });
      }

      // Check password
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({
          message: 'Invalid credentials'
        });
      }

      // Generate JWT
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET!,
        { expiresIn: '24h' }
      );

      res.json({
        token,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error logging in'
      });
    }
  }

  async logout(req: Request, res: Response) {
    // Since we're using JWT, we don't need to do anything server-side
    // The client will handle removing the token
    res.json({ message: 'Logged out successfully' });
  }
} 