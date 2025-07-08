import { 
  Home, 
  FileText, 
  Globe, 
  FileEdit, 
  Bot, 
  Users 
} from 'lucide-react';

export const projects = [
  {
    title: '🏠 ApnaGhar',
    overview: 'A comprehensive MERN stack real-estate platform with full authentication, property management, and responsive design.',
    details: [
      'Frontend: React with Tailwind CSS for dynamic UI and responsive design',
      'Backend: Node.js + Express with JWT authentication and protected routes',
      'Database: MongoDB with property listings and user management',
      'Features: CRUD operations, role-based access, client-side validation'
    ],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    highlights: [
      'Complete end-to-end real estate platform',
      'Secure JWT authentication system',
      'Dynamic property listings with full CRUD functionality',
      'Role-based dashboard protection',
      'Responsive design across all devices'
    ],
    icon: Home,
    gradient: 'bg-gradient-to-r from-green-400 to-blue-500',
    status: 'Dummy'
  },
  {
    title: '📄 JSON-to-PDF Converter',
    overview: 'Automated conversion tool that transforms JSON schemas into professionally formatted PDF documents with cloud integration.',
    details: [
      'Backend: Node.js + Express with morphological schema parsing',
      'Rendering: Puppeteer + HTML2PDF for dynamic template generation',
      'Cloud: Cloudinary integration for PDF storage and secure links',
      'Processing: Advanced JSON validation and error handling'
    ],
    techStack: ['Node.js', 'Express', 'Puppeteer', 'Cloudinary', 'PDF Generation'],
    highlights: [
      'Full conversion pipeline automation',
      'Dynamic PDF template generation',
      'Cloud storage with secure link generation',
      'Robust error handling for malformed JSON',
      'Scalable architecture for high-volume processing'
    ],
    icon: FileText,
    gradient: 'bg-gradient-to-r from-purple-400 to-pink-500',
    status: 'Prod'
  },
  {
    title: '🕷️ Universal Page Scraper',
    overview: 'Intelligent Chrome extension that extracts structured data from any webpage with smart content detection and transformation.',
    details: [
      'Architecture: Chrome extension with content scripts and DOM APIs',
      'Extraction: Form fields, text content, tables, images, and links',
      'Intelligence: Semantic grouping and dynamic field detection',
      'Output: Auto-generated transformer scripts for data normalization'
    ],
    techStack: ['JavaScript', 'Chrome Extension API', 'DOM Manipulation', 'RegEx'],
    highlights: [
      'Universal compatibility across websites',
      'Smart content labeling and grouping',
      'Dynamic field detection with heuristics',
      'Automated transformer generation',
      'Filters out hidden and irrelevant elements'
    ],
    icon: Globe,
    gradient: 'bg-gradient-to-r from-orange-400 to-red-500',
    status: 'QA'
  },
  {
    title: '📝 ONLYOFFICE Document Editor',
    overview: 'Enterprise document management system with real-time collaborative editing and secure cloud storage integration.',
    details: [
      'Backend: Node.js + Express with REST API architecture',
      'Editor: ONLYOFFICE Document Server with Docker deployment',
      'Storage: Cloudinary integration with metadata management',
      'Security: JWT-secured callbacks and route protection'
    ],
    techStack: ['Node.js', 'Express', 'Docker', 'ONLYOFFICE', 'Cloudinary', 'JWT'],
    highlights: [
      'Real-time collaborative document editing',
      'Secure file upload and storage system',
      'Docker-orchestrated deployment',
      'Auto-save functionality',
      'Enterprise-grade security with JWT'
    ],
    icon: FileEdit,
    gradient: 'bg-gradient-to-r from-teal-400 to-cyan-500',
    status: 'Prod'
  },
  {
    title: '🤖 AI-Powered BRD Generator',
    overview: 'Intelligent Business Requirements Document generator with AI orchestration and seamless Confluence integration.',
    details: [
      'Frontend: React with Context API and dynamic form builder',
      'Backend: Node.js + Express with MongoDB for audit trails',
      'AI: OpenAI integration with structured prompt engineering',
      'Integration: Confluence REST API for automated publishing'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Confluence API'],
    highlights: [
      'AI-powered content generation',
      'Dynamic form builder with validation',
      'Section-level content regeneration',
      'Automated Confluence publishing',
      'Comprehensive audit trail system'
    ],
    icon: Bot,
    gradient: 'bg-gradient-to-r from-indigo-400 to-purple-500',
    status: 'QA'
  },
  {
    title: '🎯 Talent Tracker System',
    overview: 'Comprehensive role-based intern management platform with automated workflows and performance tracking.',
    details: [
      'Backend: PHP Yii 1.1 framework with MongoDB integration',
      'Frontend: Bootstrap with JavaScript interactivity',
      'Automation: Cron jobs for reports and email notifications',
      'Security: RBAC system with session management'
    ],
    techStack: ['PHP Yii', 'MongoDB', 'Bootstrap', 'Cron Jobs', 'AWS S3'],
    highlights: [
      'Complete role-based access control system',
      'Automated batch creation and credential generation',
      'Performance tracking with leaderboards',
      'Scheduled reporting and email automation',
      'Multi-phase training workflow management'
    ],
    icon: Users,
    gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500',
    status: 'Dummy'
  }
];