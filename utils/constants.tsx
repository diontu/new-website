// external
import { FcFilingCabinet, FcPortraitMode, FcContacts } from 'react-icons/fc';

export const navLinks = [
  {
    name: 'About',
    icon: <FcPortraitMode />,
    href: '#footerid',
    description: "There's more to me than a frontend engineer!",
  },
  {
    name: 'Projects',
    icon: <FcFilingCabinet />,
    href: '#footerid',
    description:
      "Check out the Projects that I've worked on and the tech I've used!",
  },
  {
    name: 'Contact',
    icon: <FcContacts />,
    href: '#footerid',
    description: "Get in touch with me! I don't bite, I promise!",
  },
];
