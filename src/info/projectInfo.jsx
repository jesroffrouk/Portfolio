import React from 'react';
import { Code, Zap, Database, GitBranch } from 'lucide-react';

export const projectInfo = 
{
moviezone: {
    title: 'Moviezone',
    description: 'A Platform for cinephiles',
    icon: <Code className="w-10 h-10 text-blue-400" />,
    stats: {
      stars: '1.2k',
      forks: '234',
      watchers: '89'
    },
    techStack: [
      { name: 'Next.js', color: 'bg-blue-500' },
      { name: 'Node.js', color: 'bg-green-600' },
      { name: 'MongoDB', color: 'bg-green-500' },
      { name: 'Redux', color: 'bg-gray-900' },
      { name: 'TailwindCSS', color: 'bg-cyan-400' },
      { name: 'Git', color: 'bg-purple-500' }
    ],
    features: [
      {
        icon: <Zap className="w-5 h-5" />,
        title: 'Write and Edit reviews',
        description: 'Instant synchronization across all connected clients using WebSocket technology'
      },
      {
        icon: <Database className="w-5 h-5" />,
        title: 'User authentication',
        description: 'simple to use user authentication'
      },
      {
        icon: <Code className="w-5 h-5" />,
        title: 'Responsive Design',
        description: 'Follows best practices with modular, maintainable, and well-documented code'
      },
      {
        icon: <GitBranch className="w-5 h-5" />,
        title: 'Follow system',
        description: 'Follow other users and see their latest reviews'
      }
    ],
    challenges: [
      {
        problem: 'less user engagments - During testing, I realized users couldn’t easily view reviews from people they know, making the experience feel impersonal.',
        solution: 'I introduced a connection feature that lets users follow others and view reviews from their connections, creating a more personalized and social experience.'
      },
      {
        problem: 'State management and auto refetching',
        solution: 'so that is why I introduced redux state to manage states centrally and also using rtk query to auto refetch.'
      },
      {
        problem: 'Rating system and span reviews - as plaform is just a mvp, it is simple to spam reviews',
        solution: 'working on it...'
      }
    ],
    screenshots: [
      {
        title: 'Dashboard View',
        url: '/project1/pic1.png', // Add image URL here
        placeholder: 'Add your screenshot here'
      },
      {
        title: 'Collaboration Interface',
        url: '/project1/pic2.png', // Add image URL here
        placeholder: 'Add your screenshot here'
      }
    ],
    systemArchitecture: {
      url: '/project1/systemdesign.png', // Add image URL here
      placeholder: 'Replace this with your architecture diagram'
    },
    databaseModel: {
      url: '/project1/db.png', // Add image URL here
      placeholder: 'Replace this with your database schema'
    },
    conclusion: {
      summary: 'This movie review platform helps viewers share honest opinions and discover films worth watching. It brings together real voices to make movie recommendations more authentic and community-driven.',
      learnings: 'This helped me understand the flow of user authentication , managing database and external api and handling centralized state management system. As it is my first full stack project , I am happy to make this project more than just mvp'
    },
    links: {
      demo: 'https://moviezone-jacks-projects-5af6c6ee.vercel.app/',
      github: 'https://github.com/jesroffrouk/movie-review-platform'
    },
    footer: 'Made with 💙 by Jesroff • Licensed under MIT'
  },
  pinpic: {
        title: 'PinPic',
        description: 'platform where pictures are bound to locations',
        icon: <Code className="w-10 h-10 text-blue-400" />,
        stats: {
        stars: '1.2k',
        forks: '234',
        watchers: '89'
        },
        techStack: [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'Node.js', color: 'bg-green-600' },
        { name: 'Postgresql', color: 'bg-blue-500' },
        { name: 'Express', color: 'bg-gray-500' },
        { name: 'TailwindCSS', color: 'bg-cyan-400' },
        { name: 'Socket.io', color: 'bg-purple-500' }
        ],
        features: [
        {
            icon: <Zap className="w-5 h-5" />,
            title: 'Location based Image sharing',
            description: 'Bind your photos to real world places'
        },
        {
            icon: <Database className="w-5 h-5" />,
            title: 'User authentication',
            description: 'Seamless user authentication using Google Identity Service(GIS)'
        },
        {
            icon: <Code className="w-5 h-5" />,
            title: 'Upvote',
            description: 'Upvote images to make them appear at top'
        },
        {
            icon: <GitBranch className="w-5 h-5" />,
            title: 'Notification',
            description: 'get Notifications for nearby updates and upvotes'
        }
        ],
        challenges: [
        {
            problem: 'how to store coordinates of locations',
            solution: 'Choosing a database to store coordinates was kind of tricky but I found postgresql which helps to store location geographically with coordinates using postgis'
        },
        {
            problem: 'Getting user location',
            solution: 'I used browser built in navigator.geolocation api. Instead of using getCurrentPosition or getLocation I used WatchPosition which helped in getting user location with updates if user change his position'
        },
        {
            problem: 'Having just pictures in a location was kind of simpler but not engaging and interesting',
            solution: 'that is why I introduced upvotes feature so that others can upvote it to show it at the top and also sends notification to user if someone upvoted their image'
        }
        ],
        screenshots: [
        {
            title: 'Dashboard View',
            url: '/project2/pic1.png', // Add image URL here
            placeholder: 'Add your screenshot here'
        },
        {
            title: 'Collaboration Interface',
            url: '/project2/pic2.png', // Add image URL here
            placeholder: 'Add your screenshot here'
        }
        ],
        systemArchitecture: {
        url: '/project2/systemdesign.png', // Add image URL here
        placeholder: 'Replace this with your architecture diagram'
        },
        databaseModel: {
        url: '/project2/db.png', // Add image URL here
        placeholder: 'Replace this with your database schema'
        },
        conclusion: {
        summary: 'Building PinPic helped me understand how location-based systems and user interaction can shape communities. It’s a project that turned an idea into a real product — connecting people through the places they love',
        learnings: 'Pinpic helped me understand how process of storing images and binding it to location works behind the scene. I learnt about choosing right architecture and improving codebase. I learnt about problem solving with the mindset of a product builder.'
        },
        links: {
        demo: '#',
        github: 'https://github.com/jesroffrouk/PinPic'
        },
        footer: 'Made with 💙 by Jesroff • Licensed under Non-commerical(Custom)'
    },
  passwordmanager: {
        title: 'Password Manager',
        description: 'A platform to store your passwords locally',
        icon: <Code className="w-10 h-10 text-blue-400" />,
        stats: {
        stars: '1.2k',
        forks: '234',
        watchers: '89'
        },
        techStack: [
        { name: 'React', color: 'bg-blue-500' },
        { name: 'TailwindCSS', color: 'bg-cyan-400' },
        { name: 'indexedDB', color: 'bg-green-400' },
        ],
        features: [
        {
            icon: <Zap className="w-5 h-5" />,
            title: 'Your Data Never Leaves Your Device',
            description: 'All encryption, decryption, and data handling stay completely on your machine.'
        },
        {
            icon: <Database className="w-5 h-5" />,
            title: 'No User authentication',
            description: 'You don’t have to make an account for the password manager itself. Just your master key is enough.'
        },
        {
            icon: <Code className="w-5 h-5" />,
            title: 'Simplicity and Speed',
            description: 'Because everything happens locally, performance is fast and independent of internet connectivity.'
        },
        {
            icon: <GitBranch className="w-5 h-5" />,
            title: 'Full Ownership of Your Data',
            description: 'The app works like a tool, nothing more. You decide where the file stays, how you back it up, and how you use it.'
        }
        ],
        screenshots: [
        {
            title: 'Dashboard View',
            url: '/project3/img1.png',
            placeholder: 'Add your screenshot here'
        },
        {
            title: 'Collaboration Interface',
            url: '/project3/img2.png',
            placeholder: 'Add your screenshot here'
        }
        ],
        systemArchitecture: {
        url: '/project3/system.png', 
        placeholder: 'Replace this with your architecture diagram'
        },
        conclusion: {
        summary: 'Building a password manager that runs entirely on the client helped me understand how encryption and decryption work, and how much security workflow needs to be managed. It’s a project that answered my simple question about why passwords usually need to be stored on a server—and it did so effectively.',
        learnings: 'One thing I am not able to manage in my password manager is that it has browser vulnerabilities. It made me learn that security is tough in the browser compared to software running on the OS. The password manager helped me try out my idea and motivated me to think beyond regular barriers.'
        },
        links: {
        demo: 'https://cvault-jesroff.vercel.app/',
        github: 'https://github.com/jesroffrouk/Password-Manager'
        },
        footer: 'Made with 💙 by Jesroff • Licensed under MIT'
    },
}
