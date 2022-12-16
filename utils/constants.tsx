// external
import { FcHome, FcIdea, FcPortraitMode, FcContacts } from 'react-icons/fc';

export const navLinks = [
  {
    name: 'Home',
    icon: <FcHome />,
    href: '/',
    description: 'Just a home page. Nothing more to this page.',
  },
  {
    name: 'About',
    icon: <FcPortraitMode />,
    href: '/about',
    description: "There's more to me than a frontend engineer!",
  },
  {
    name: 'Projects',
    icon: <FcIdea />,
    href: '/projects',
    description:
      "Check out the Projects that I've worked on and the tech I've used!",
  },
  {
    name: 'Contact',
    icon: <FcContacts />,
    href: '/contact',
    description: "Get in touch with me! I don't bite, I promise!",
  },
];
