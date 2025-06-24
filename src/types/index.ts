export interface Course {
  id: string;
  title: string;
  code: string;
  level: 'foundational' | 'associate' | 'professional' | 'specialty';
  description: string;
  duration: string;
  lessons: Lesson[];
  difficulty: number;
  prerequisites?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'reading' | 'practice';
  duration: string;
  completed: boolean;
  content?: string;
}

export interface MockQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  domain: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface MockTest {
  id: string;
  courseId: string;
  title: string;
  questions: MockQuestion[];
  timeLimit: number;
  passingScore: number;
}

export interface UserProgress {
  courseId: string;
  completedLessons: string[];
  testScores: { [testId: string]: number };
  totalProgress: number;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  courses: string[];
  estimatedTime: string;
}