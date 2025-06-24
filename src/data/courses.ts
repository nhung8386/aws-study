import { Course, MockTest, LearningPath } from '../types';

export const courses: Course[] = [
  {
    id: 'clf-c02',
    title: 'AWS Certified Cloud Practitioner',
    code: 'CLF-C02',
    level: 'foundational',
    description: 'Validate your understanding of the AWS Cloud and basic global infrastructure',
    duration: '40 hours',
    difficulty: 1,
    lessons: [
      {
        id: 'clf-1',
        title: 'Introduction to Cloud Computing',
        type: 'video',
        duration: '45 min',
        completed: false,
        content: 'Understanding cloud computing fundamentals and AWS basics'
      },
      {
        id: 'clf-2',
        title: 'AWS Global Infrastructure',
        type: 'reading',
        duration: '30 min',
        completed: false,
        content: 'Learn about AWS regions, availability zones, and edge locations'
      },
      {
        id: 'clf-3',
        title: 'Core AWS Services',
        type: 'video',
        duration: '60 min',
        completed: false,
        content: 'Overview of EC2, S3, RDS, and other fundamental services'
      },
      {
        id: 'clf-4',
        title: 'AWS Pricing and Billing',
        type: 'reading',
        duration: '25 min',
        completed: false,
        content: 'Understanding AWS pricing models and cost optimization'
      },
      {
        id: 'clf-5',
        title: 'Security and Compliance',
        type: 'video',
        duration: '40 min',
        completed: false,
        content: 'AWS security fundamentals and shared responsibility model'
      }
    ]
  },
  {
    id: 'saa-c03',
    title: 'AWS Certified Solutions Architect - Associate',
    code: 'SAA-C03',
    level: 'associate',
    description: 'Demonstrate your ability to design distributed systems on AWS',
    duration: '80 hours',
    difficulty: 3,
    prerequisites: ['CLF-C02'],
    lessons: [
      {
        id: 'saa-1',
        title: 'Designing Resilient Architectures',
        type: 'video',
        duration: '90 min',
        completed: false,
        content: 'Multi-tier architecture design and fault tolerance'
      },
      {
        id: 'saa-2',
        title: 'High-Performance Architectures',
        type: 'video',
        duration: '75 min',
        completed: false,
        content: 'Scalability patterns and performance optimization'
      },
      {
        id: 'saa-3',
        title: 'Secure Applications and Architectures',
        type: 'reading',
        duration: '60 min',
        completed: false,
        content: 'Security best practices and encryption strategies'
      },
      {
        id: 'saa-4',
        title: 'Cost-Optimized Architectures',
        type: 'video',
        duration: '50 min',
        completed: false,
        content: 'Cost optimization strategies and resource management'
      }
    ]
  },
  {
    id: 'dva-c02',
    title: 'AWS Certified Developer - Associate',
    code: 'DVA-C02',
    level: 'associate',
    description: 'Validate your ability to develop and maintain applications on AWS',
    duration: '70 hours',
    difficulty: 3,
    prerequisites: ['CLF-C02'],
    lessons: [
      {
        id: 'dva-1',
        title: 'Development with AWS Services',
        type: 'video',
        duration: '85 min',
        completed: false,
        content: 'Using AWS SDKs and developing cloud-native applications'
      },
      {
        id: 'dva-2',
        title: 'Security and Deployment',
        type: 'practice',
        duration: '120 min',
        completed: false,
        content: 'Hands-on security implementation and CI/CD practices'
      },
      {
        id: 'dva-3',
        title: 'Debugging and Optimization',
        type: 'video',
        duration: '65 min',
        completed: false,
        content: 'Application monitoring and performance tuning'
      }
    ]
  },
  {
    id: 'soa-c02',
    title: 'AWS Certified SysOps Administrator - Associate',
    code: 'SOA-C02',
    level: 'associate',
    description: 'Demonstrate your ability to deploy, manage, and operate systems on AWS',
    duration: '75 hours',
    difficulty: 3,
    prerequisites: ['CLF-C02'],
    lessons: [
      {
        id: 'soa-1',
        title: 'Monitoring and Reporting',
        type: 'video',
        duration: '70 min',
        completed: false,
        content: 'CloudWatch, monitoring strategies, and alerting'
      },
      {
        id: 'soa-2',
        title: 'High Availability and Deployment',
        type: 'practice',
        duration: '90 min',
        completed: false,
        content: 'Implementing HA solutions and deployment strategies'
      },
      {
        id: 'soa-3',
        title: 'Provisioning and Data Management',
        type: 'video',
        duration: '80 min',
        completed: false,
        content: 'Infrastructure as Code and data lifecycle management'
      }
    ]
  },
  {
    id: 'sap-c02',
    title: 'AWS Certified Solutions Architect - Professional',
    code: 'SAP-C02',
    level: 'professional',
    description: 'Validate your ability to design complex distributed systems on AWS',
    duration: '120 hours',
    difficulty: 5,
    prerequisites: ['SAA-C03'],
    lessons: [
      {
        id: 'sap-1',
        title: 'Complex Multi-Tier Architectures',
        type: 'video',
        duration: '120 min',
        completed: false,
        content: 'Advanced architectural patterns and enterprise solutions'
      },
      {
        id: 'sap-2',
        title: 'Migration and Hybrid Architectures',
        type: 'reading',
        duration: '90 min',
        completed: false,
        content: 'Large-scale migration strategies and hybrid cloud designs'
      },
      {
        id: 'sap-3',
        title: 'Cost Control and Optimization',
        type: 'practice',
        duration: '100 min',
        completed: false,
        content: 'Advanced cost optimization and resource management'
      }
    ]
  },
  {
    id: 'dop-c02',
    title: 'AWS Certified DevOps Engineer - Professional',
    code: 'DOP-C02',
    level: 'professional',
    description: 'Validate your technical expertise in provisioning, operating, and managing AWS environments',
    duration: '110 hours',
    difficulty: 5,
    prerequisites: ['DVA-C02', 'SOA-C02'],
    lessons: [
      {
        id: 'dop-1',
        title: 'CI/CD Pipeline Design',
        type: 'practice',
        duration: '110 min',
        completed: false,
        content: 'Advanced CI/CD patterns and automation strategies'
      },
      {
        id: 'dop-2',
        title: 'Infrastructure as Code',
        type: 'video',
        duration: '95 min',
        completed: false,
        content: 'CloudFormation, CDK, and infrastructure automation'
      },
      {
        id: 'dop-3',
        title: 'Monitoring and Logging',
        type: 'practice',
        duration: '85 min',
        completed: false,
        content: 'Advanced monitoring, alerting, and log analysis'
      }
    ]
  }
];

export const mockTests: MockTest[] = [
  {
    id: 'clf-mock-1',
    courseId: 'clf-c02',
    title: 'CLF-C02 Practice Test 1',
    timeLimit: 90,
    passingScore: 70,
    questions: [
      {
        id: 'clf-q1',
        question: 'Which AWS service is used to store and retrieve any amount of data from anywhere on the web?',
        options: [
          'Amazon EC2',
          'Amazon S3',
          'Amazon RDS',
          'Amazon Lambda'
        ],
        correctAnswer: 1,
        explanation: 'Amazon S3 (Simple Storage Service) is designed to store and retrieve any amount of data from anywhere on the web. It provides industry-leading scalability, data availability, security, and performance.',
        domain: 'Core Services',
        difficulty: 'easy'
      },
      {
        id: 'clf-q2',
        question: 'What is the AWS shared responsibility model?',
        options: [
          'AWS is responsible for everything',
          'Customer is responsible for everything',
          'AWS secures the infrastructure, customer secures their data and applications',
          'Both AWS and customer share all responsibilities equally'
        ],
        correctAnswer: 2,
        explanation: 'The AWS shared responsibility model divides security responsibilities between AWS and the customer. AWS secures the underlying infrastructure, while customers are responsible for securing their data, applications, and configurations.',
        domain: 'Security',
        difficulty: 'medium'
      }
    ]
  },
  {
    id: 'saa-mock-1',
    courseId: 'saa-c03',
    title: 'SAA-C03 Practice Test 1',
    timeLimit: 130,
    passingScore: 72,
    questions: [
      {
        id: 'saa-q1',
        question: 'A company needs to ensure their application can handle sudden traffic spikes. Which AWS service should they use?',
        options: [
          'Amazon EC2 Auto Scaling',
          'Amazon CloudFront',
          'Amazon RDS',
          'AWS Lambda'
        ],
        correctAnswer: 0,
        explanation: 'Amazon EC2 Auto Scaling helps maintain application availability and allows you to automatically add or remove EC2 instances according to conditions you define, making it perfect for handling traffic spikes.',
        domain: 'High Availability',
        difficulty: 'medium'
      }
    ]
  }
];

export const learningPaths: LearningPath[] = [
  {
    id: 'beginner-path',
    title: 'Cloud Beginner Path',
    description: 'Perfect for those new to cloud computing and AWS',
    level: 'beginner',
    courses: ['clf-c02'],
    estimatedTime: '2-3 months'
  },
  {
    id: 'architect-path',
    title: 'Solutions Architect Path',
    description: 'Comprehensive path for aspiring cloud architects',
    level: 'intermediate',
    courses: ['clf-c02', 'saa-c03', 'sap-c02'],
    estimatedTime: '6-8 months'
  },
  {
    id: 'developer-path',
    title: 'Developer Path',
    description: 'Focused on development and DevOps practices',
    level: 'intermediate',
    courses: ['clf-c02', 'dva-c02', 'dop-c02'],
    estimatedTime: '5-7 months'
  },
  {
    id: 'operations-path',
    title: 'Operations Path',
    description: 'For system administrators and operations professionals',
    level: 'intermediate',
    courses: ['clf-c02', 'soa-c02'],
    estimatedTime: '4-5 months'
  }
];