export interface Problem {
  id: number;
  title: string;
  tags: string[];
  description: string;
  inputFormat: string;
  outputFormat: string;
  samples: {
    input: string;
    output: string;
  }[];
  hint?: string;
  timeLimit: number;
  memoryLimit: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  acceptanceRate: number;
  subtasks: Subtask[];
}

export interface Subtask {
  id: number;
  score: number;
  testcases: number[];
  constraints: string[];
}

export interface Submission {
  id: number;
  problemId: number;
  userId: number;
  language: string;
  code: string;
  status: SubmissionStatus;
  score: number;
  timeUsed: number;
  memoryUsed: number;
  createdAt: Date;
  testcaseResults: TestcaseResult[];
}

export type SubmissionStatus = 
  | 'Accepted'
  | 'Wrong Answer'
  | 'Time Limit Exceeded'
  | 'Memory Limit Exceeded'
  | 'Runtime Error'
  | 'Compilation Error'
  | 'Pending';

export interface TestcaseResult {
  id: number;
  status: SubmissionStatus;
  timeUsed: number;
  memoryUsed: number;
}

export interface AuthUser {
  id: number;
  username: string;
  email: string;
  role: 'user' | 'admin';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
} 