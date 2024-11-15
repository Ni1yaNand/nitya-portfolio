export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
 
  export const myProjects = [
    {
      title: 'MockPrep-AI - AI-powered Mock Interview Platform',
      desc: 'MockPrep-AI is an AI-driven platform that offers personalized mock interview experiences to help users refine their skills. With real-time feedback and adaptive questioning, it provides a tailored preparation journey for any job role.',
      subdesc:
        'Built using Next.js 14, Tailwind CSS, JavaScript and Neon, MockPrep-AI ensures seamless performance, scalability, and an intuitive user interface.',
      href: 'https://mockprep-ai-delta.vercel.app/',
      texture: '/textures/project/project1.png',
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/JavaScript-logo.png',
        },
        {
          id: 4,
          name: 'Neon',
          path: '/assets/neon-icon-seeklogo.svg',
        },
      ],
    },
    {
      title: 'ThreadCraft - AI content generation platform',
      desc: 'ThreadCraft is a content generation platform that enables users to effortlessly create engaging social media threads using AI-driven recommendations. It enhances productivity and creativity for content creators.',
      subdesc:
        'Developed with Next.js, TailwindCSS, TypeScript, and Stripe, ThreadCraft ensures a smooth user experience while offering powerful AI content capabilities.',
      href: 'https://github.com/Ni1yaNand/threadcraft',
      texture: '/textures/project/project2.mp4',
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Next.js',
          path: '/assets/nextjs.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Stripe',
          path: '/assets/stripe.svg',
        },
      ],
    },
    {
      title: 'Prescripto - Doctor Appointment Platform',
      desc: 'Prescripto is a user-friendly healthcare platform that streamlines patient registration, appointment scheduling, and medical record management for enhanced efficiency and convenience.',
      subdesc:
        'Built with React.js, JavaScript, Tailwindcss, and MongoDB, Prescripto ensures reliable communication, secure data handling, and smooth integration of complex healthcare workflows.',
      href: 'https://github.com/Ni1yaNand/Prescripto/tree/main',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/JavaScript-logo.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
      ],
    },
    {
      title: 'Aura Notes - Note-taking Platform',
      desc: 'Aura Notes is an intuitive note-taking platform that enables users to create, organize, and manage their notes efficiently. With its streamlined design, it simplifies personal and professional note management.',
      subdesc:
        'Powered by Ruby, Rails, TailwindCSS, and PostgreSQL, Aura Notes offers a robust backend with a visually appealing and responsive interface for an optimal user experience.',
      href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
      texture: '/textures/project/project4.mp4',
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Ruby',
          path: '/assets/ruby.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Rails',
          path: '/assets/Rails.png',
        },
        {
          id: 4,
          name: 'PostgreSQL',
          path: '/assets/postgresql.svg',
        },
      ],
    },
  ];
  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  