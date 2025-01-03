export interface Problem {
  id: number;
  title: string;
  tags: string[];
  description: string;
  inputFormat: string;
  outputFormat: string;
  samples: Sample[];
  hint?: string;
  timeLimit: number;
  memoryLimit: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  subtasks: Subtask[];
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Sample {
  input: string;
  output: string;
}

export interface Subtask {
  id: number;
  score: number;
  testcases: Testcase[];
  constraints: string[];
}

export interface Testcase {
  id: number;
  input: string;
  output: string;
  subtaskId: number;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
} 