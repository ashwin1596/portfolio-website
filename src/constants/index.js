export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'Work',
        href: '#experience',
    },
    {
        id: 3,
        name: 'Project',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'DeepL - Efficient Deep Learning Framework',
        desc: 'A high-performance deep learning framework specifically designed to solve complex graph optimization challenges in machine learning, enabling researchers and developers to build more efficient and precise neural network models.',
        link: 'https://github.com/ashwin1596/deepL',
        image: '/myassets/deepL_image.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'C++',
                path: '/myassets/cpp_logo.svg',
            },
            {
                id: 2,
                name: 'Python',
                path: '/myassets/python_logo.svg',
            },
            {
                id: 3,
                name: 'CUDA',
                path: '/myassets/cuda_logo.svg',
            }
        ],
    },
    {
        title: 'Purchase Planner: Collaborative Shopping Intelligence',
        desc: 'Purchase Planner is a full-stack web application designed to help users manage and organize their purchases effectively. The application provides an intuitive interface for creating, maintaining, and prioritizing a personal purchase list.',
        link: 'https://github.com/ashwin1596/purchase_planner',
        image: '/myassets/pplanner_image.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/myassets/react_logo.svg',
            },
            {
                id: 2,
                name: 'Node.js',
                path: '/myassets/nodejs_logo.svg',
            },
            {
                id: 3,
                name: 'Express',
                path: '/myassets/express_logo.svg',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: '/myassets/mongodb_logo.svg',
            },
            {
                id: 5,
                name: 'Docker',
                path: '/myassets/docker_logo.svg',
            }
        ],
    },
    {
        title: 'P2P Storage: Decentralized Data Management',
        desc: 'A distributed storage platform that revolutionizes data accessibility and sharing through intelligent peer-to-peer networking.',
        link: '',
        texture: '/textures/project/project3.mp4',
        image: '/assets/grid1.png',
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
                name: 'grpc',
                path: '/myassets/grpc_logo.svg',
            },
            {
                id: 2,
                name: 'Python',
                path: '/myassets/python_logo.svg',
            }
        ],
    },
    {
        title: 'Interactive Portfolio: Professional Digital Storytelling',
        desc: 'A cutting-edge digital portfolio showcasing professional skills through immersive web technologies, built with React, Three.js, Tailwind CSS, and Vite.',
        link: 'https://github.com/ashwin1596/portfolio-website',
        image: '/myassets/portfolio_image.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/myassets/react_logo.svg',
            },
            {
                id: 2,
                name: 'Three.js',
                path: '/myassets/threejs_logo.png',
            },
            {
                id: 3,
                name: 'Tailwind CSS',
                path: '/myassets/tailwindcss_logo.png',
            },
            {
                id: 4,
                name: 'Vite',
                path: '/myassets/vite_logo.svg',
            }
        ],
    },
    {
        title: 'LoadBalancer: Smart Traffic Optimization',
        desc: 'A high-performance network traffic management system that optimizes server resource utilization and request processing.',
        link: 'https://github.com/ashwin1596/load_balancer_project',
        image: '/myassets/loadbalancer_image.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'java',
                path: '/myassets/java_logo.png',
            },
        ],
    },
    {
        title: 'TCP Tahoe: Advanced Network Communication',
        desc: 'A robust network communication protocol implementation that enhances data transmission reliability and network efficiency.',
        link: 'https://github.com/ashwin1596/tcp_project',
        image: '/myassets/tcp_image.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/myassets/python_logo.svg',
            },
        ],
    },
    {
        title: 'RIP Routing: Intelligent Network Pathfinding',
        desc: 'A dynamic network routing protocol that optimizes path selection and prevents routing inefficiencies in complex network environments.',
        link: 'https://github.com/ashwin1596/routing_protocol',
        image: '/myassets/rip_image.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Python',
                path: '/myassets/python_logo.svg',
            },
        ],
    },
    {
        title: 'Apparel Design using Deep Learning',
        desc: 'Used Deep Convolutional GAN to generate innovative apparel and footwear designs, reducing production time by 50% while preserving design quality and creativity. Engineered a data preprocessing pipeline with Numpy and Pandas to handle large-scale fashion image datasets for model training. Optimized the GAN architecture to ensure high-quality, creative, and marketable apparel designs.',
        link: '',
        image: '/assets/grid1.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'Pytorch',
                path: '/myassets/pytorch_logo.svg',
            },
            {
                id: 2,
                name: 'Numpy',
                path: '/myassets/numpy_logo.svg',
            },
            {
                id: 3,
                name: 'Pandas',
                path: '/myassets/pandas_logo.svg',
            },
        ],
    },
    {
        title: 'Luggage Tracking system on Airports using RFID(IoT)',
        desc: 'Engineered an RFID-based luggage tracking system with a React frontend, reducing baggage mishandling by 95%. Implemented a containerized microservices architecture using Docker and Kubernetes for scalable deployment and efficient monitoring of RFID tracking operations. Designed a real-time baggage location tracking and notification system, streamlining airport operations and improving the passenger experience.',
        link: '',
        image: '/assets/grid1.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/myassets/react_logo.svg',
            },
            {
                id: 2,
                name: 'Kubernetes',
                path: '/myassets/kubernetes_logo.svg',
            },
            {
                id: 3,
                name: 'Docker',
                path: '/myassets/docker_logo.svg',
            },
        ],
    },
    {
        title: 'Digital Locker',
        desc: 'Developed a secure digital document management system using the MERN stack, ensuring 80% uptime and zero security breaches. Implemented end-to-end encryption and secure authentication protocols for safe document storage and transmission. Engineered robust upload/download functionality with document versioning and access control, ensuring data integrity and user privacy.',
        link: '',
        image: '/assets/grid1.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/myassets/react_logo.svg',
            },
            {
                id: 2,
                name: 'Node.js',
                path: '/myassets/nodejs_logo.svg',
            },
            {
                id: 3,
                name: 'Express',
                path: '/myassets/express_logo.svg',
            },
            {
                id: 4,
                name: 'MongoDB',
                path: '/myassets/mongodb_logo.svg',
            },
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.02 : isMobile ? 0.02 : 0.08,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [9, -3.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Rochester Institute of Technology',
        pos: 'Teaching Assistant',
        duration: '08/2024 - Present',
        title: [
            {task : "Grade student assignments, projects, and examinations focusing on modern cryptographic concepts including public key infrastructure, digital signatures, and cryptographic hash functions."},
            {task : "Support students during lab sessions, helping them implement secure cryptographic algorithms and protocols."},
            {task : "Lead weekly discussion sections to reinforce core concepts and help students work through challenging problems."},
            {task : "Provide constructive feedback on students' programming assignments involving cryptographic implementations in languages like Python/Java."},
            {task : "Hold regular office hours to assist students with theoretical concepts and programming challenges."},
            {task : "Collaborate with course instructor to ensure consistent evaluation standards and maintain academic integrity."},
            {task : "Assist in developing and testing programming exercises that demonstrate practical applications of cryptographic principles."},
        ],
        icon: '/myassets/rit_logo.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Tata Consultancy Services',
        pos: 'Systems Engineer',
        duration: '07/2019 - 03/2022',
        title:
            [
                {task: "Executed migration of core services from legacy to cloud-native systems by implementing microservices using CQRS pattern; \n" +
                        "achieved 60% faster response time and 35% cost savings through enhanced resource efficiency."},
                {task: "Engineered and implemented a highly scalable Anti-corruption layer integrating legacy systems and microservices, slashing data \n" +
                        "conflicts by 40% and boosting system efficiency by 30%."},
                {task: "Led smooth microservices integration & parallel testing, migrating legacy components to cloud with zero disruptions, cutting \n" +
                        "downtime by 75% & elevated operational productivity by 40%."},
                {task: "CI/CD pipeline integration, code reviews, unit/end-to-end testing."},
                {task: "Collaborated with approximately 20 team members, following Agile methodology to ensure iterative development, regular stand\n" +
                        "ups, and continuous feedback on this project."},
                {task: "Tech Stack – C# | Kafka | Kubernetes | Docker | Azure | AWS | MongoDB | MSSQL | REST APIs | Event-Driven Architecture "},
            ],
        icon: '/myassets/tcs_logo.svg',
        animation: 'salute',
    }
];