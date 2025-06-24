
import React from 'react';
import { Service, ProcessStep, SocialLink, NavLink } from './types';
import {
  ShieldCheckIcon as ShieldCheckIconOutline, // Renamed to avoid conflict if Solid version is also named ShieldCheckIcon
  PaintBrushIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'; 

import {
  HomeIcon,
  UserGroupIcon, 
  WrenchScrewdriverIcon, 
  BriefcaseIcon, 
  ChatBubbleLeftEllipsisIcon,
  // Icons for Process Steps
  RocketLaunchIcon,
  AcademicCapIcon,
  BoltIcon,
  UsersIcon,
  LockClosedIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/solid';


// Social Icons (simple SVGs as Heroicons doesn't include them by default)
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.04c-5.5 0-10 4.49-10 10s4.5 10 10 10 10-4.49 10-10S17.5 2.04 12 2.04zm.5 14.75H10v-5.5H8.5v-2.25h1.5V7.54c0-1.78.88-2.75 2.87-2.75.82 0 1.37.1 1.37.1L14 6.94s-.46-.07-.9-.07c-.96 0-1.13.43-1.13 1.13v1.75h2.25l-.25 2.25H12v5.5z" /></svg>
);
const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.5 2.5-2.5 2.5 1.2 2.5 2.5S5.5 6.5 4 6.5zm15 15h-5v-6.5c0-1.5-.5-2.5-2-2.5s-1.5 1-1.5 2.5V21.5h-5v-13h5V10s1-2 3.5-2c2.5 0 4.5 1.5 4.5 5v8.5z" /></svg>
);
const TwitterIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.58-1.37 1.9-2.38-.84.5-1.77.86-2.77 1.05C18.3.27 17.22 0 16 0c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.1.98C8.28 5.08 5.12 3.32 3 0c-.36.6-.56 1.3-.56 2.03 0 1.48.76 2.78 1.9 3.54-.7-.02-1.37-.22-1.95-.5v.05c0 2.07 1.47 3.8 3.42 4.18-.36.1-.73.15-1.12.15-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.93 3.95 2.96-1.45 1.14-3.3 1.82-5.3 1.82-.34 0-.68-.02-1.02-.06 1.88 1.2 4.12 1.9 6.56 1.9 7.88 0 12.2-6.54 12.2-12.2 0-.18 0-.37-.01-.55.83-.6 1.56-1.35 2.14-2.23z" /></svg>
);
const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M12 2.16c-3.2 0-3.58.01-4.85.07-1.27.06-2.15.28-2.92.58-.78.3-1.45.75-2.12 1.42S.92 5.86.62 6.63c-.3.77-.52 1.65-.58 2.92-.06 1.27-.07 1.65-.07 4.85s.01 3.58.07 4.85c.06 1.27.28 2.15.58 2.92.3.78.75 1.45 1.42 2.12.67.67 1.34 1.12 2.12 1.42.77.3 1.65.52 2.92.58 1.27.06 1.65.07 4.85.07s3.58-.01 4.85-.07c1.27-.06 2.15-.28 2.92-.58.78-.3 1.45-.75 2.12-1.42.67-.67 1.12-1.34 1.42-2.12.3-.77.52-1.65.58-2.92.06-1.27.07-1.65.07-4.85s-.01-3.58-.07-4.85c-.06-1.27-.28-2.15-.58-2.92-.3-.78-.75-1.45-1.42-2.12C18.14.92 17.47.47 16.6.17c-.77-.3-1.65-.52-2.92-.58C12.42 2.17 12 2.16 12 2.16zm0 1.8c3.15 0 3.48.01 4.7.07 1.17.05 1.8.27 2.22.42.5.17.88.38 1.28.78.4.4.6.78.78 1.28.15.42.37.95.42 2.22.06 1.22.07 1.55.07 4.7s-.01 3.48-.07 4.7c-.05 1.17-.27 1.8-.42 2.22-.17.5-.38.88-.78 1.28-.4.4-.78.6-1.28.78-.42.15-.95.37-2.22.42-1.22.06-1.55.07-4.7.07s-3.48-.01-4.7-.07c-1.17-.05-1.8-.27-2.22-.42-.5-.17-.88-.38-1.28-.78-.4-.4-.6-.78-.78-1.28-.15-.42-.37-.95-.42-2.22-.06-1.22-.07-1.55-.07-4.7s.01-3.48.07-4.7c.05-1.17.27 1.8.42 2.22.17-.5.38-.88.78-1.28.4-.4.78-.6 1.28-.78.42-.15-.95-.37 2.22-.42C8.52 3.97 8.85 3.96 12 3.96zm0 2.9c-2.8 0-5.08 2.28-5.08 5.08s2.28 5.08 5.08 5.08 5.08-2.28 5.08-5.08S14.8 6.86 12 6.86zm0 8.36c-1.8 0-3.28-1.48-3.28-3.28s1.48-3.28 3.28-3.28 3.28 1.48 3.28 3.28-1.48 3.28-3.28 3.28zm5.42-8.4c-.66 0-1.2.54-1.2 1.2s.54 1.2 1.2 1.2 1.2-.54 1.2-1.2-.54-1.2-1.2-1.2z" /></svg>
);
const YouTubeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23-1.54.91-1.77 1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM9.75 15.02V8.98L15.47 12l-5.72 3.02z" /></svg>
);


export const CONTACT_EMAIL = "support@anvanex.in";
export const CONTACT_PHONE = "+91 9542495286";
export const WHATSAPP_LINK = "https://wa.me/919542495286";

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Facebook', url: 'https://facebook.com/anvanex', icon: <FacebookIcon className="w-5 h-5" /> },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/anvanex', icon: <LinkedInIcon className="w-5 h-5" /> },
  { name: 'Twitter', url: 'https://twitter.com/anvanex', icon: <TwitterIcon className="w-5 h-5" /> },
  { name: 'Instagram', url: 'https://instagram.com/anvanex', icon: <InstagramIcon className="w-5 h-5" /> },
  { name: 'YouTube', url: 'https://youtube.com/anvanex', icon: <YouTubeIcon className="w-5 h-5" /> },
];

export const MAIN_NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#hero', targetSectionId: 'hero', icon: <HomeIcon className="w-5 h-5 mr-1" /> },
  { id: 'about', label: 'About Us', href: '#how-we-work', targetSectionId: 'how-we-work', icon: <UserGroupIcon className="w-5 h-5 mr-1" /> },
  { id: 'services', label: 'Our Services', href: '#services', targetSectionId: 'services', icon: <WrenchScrewdriverIcon className="w-5 h-5 mr-1" /> },
  { id: 'portfolio', label: 'Our Portfolio', href: '#contact', targetSectionId: 'contact', icon: <BriefcaseIcon className="w-5 h-5 mr-1" /> }, 
  { id: 'contact', label: 'Contact Us', href: '#contact', targetSectionId: 'contact', icon: <ChatBubbleLeftEllipsisIcon className="w-5 h-5 mr-1" /> },
];


export const SERVICES_DATA: Service[] = [
  { id: 'cybersecurity', icon: <ShieldCheckIconOutline className="w-12 h-12 text-cyan-400 mb-4" />, title: 'Cybersecurity', description: 'Robust protection for your digital assets.' },
  { id: 'ui-ux', icon: <PaintBrushIcon className="w-12 h-12 text-cyan-400 mb-4" />, title: 'UI/UX Design', description: 'Intuitive and engaging user experiences.' },
  { id: 'web-dev', icon: <GlobeAltIcon className="w-12 h-12 text-cyan-400 mb-4" />, title: 'Website Development', description: 'Scalable and high-performance websites.' },
  { id: 'app-dev', icon: <DevicePhoneMobileIcon className="w-12 h-12 text-cyan-400 mb-4" />, title: 'App Development', description: 'Cross-platform mobile application solutions.' },
  { id: 'it-consulting', icon: <CpuChipIcon className="w-12 h-12 text-cyan-400 mb-4" />, title: 'IT Consulting', description: 'Strategic IT guidance to fuel your growth.' },
];

const iconClass = "w-10 h-10 text-green-500"; // Common class for process icons

export const HOW_WE_WORK_STEPS: ProcessStep[] = [
  { 
    id: 'agile', 
    icon: <RocketLaunchIcon className={iconClass} />, 
    title: 'Agile Delivery', 
    description: 'Iterative development for flexible and fast results.' 
  },
  { 
    id: 'excellence', 
    icon: <AcademicCapIcon className={iconClass} />, 
    title: 'Technical Excellence', 
    description: 'Leveraging latest technologies for optimal performance.' 
  },
  { 
    id: 'iteration', 
    icon: <BoltIcon className={iconClass} />, 
    title: 'Fast Iterations', 
    description: 'Quick turnarounds and continuous feedback loops.' 
  },
  { 
    id: 'user-centric', 
    icon: <UsersIcon className={iconClass} />, 
    title: 'User-Centered Design', 
    description: 'Solutions designed with your users in mind.' 
  },
  { 
    id: 'security-default', 
    icon: <LockClosedIcon className={iconClass} />, 
    title: 'Security by Default', 
    description: 'Integrating security from the ground up.' 
  },
  { 
    id: 'collaboration', 
    icon: <ChatBubbleLeftRightIcon className={iconClass} />, 
    title: 'Real-Time Collaboration', 
    description: 'Transparent communication and partnership.' 
  },
];

export const HERO_TYPED_STRINGS = ['Secure Ideas.', 'Bold Designs.', 'Scalable Solutions.'];

// tsParticles configuration
export const PARTICLE_OPTIONS = {
  background: {
    color: {
      value: '#111827', // Dark background for particles, e.g., Tailwind gray-900
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 150,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.2, 
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: { 
        default: 'bounce',
      },
      random: false,
      speed: 2, 
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800, 
      },
      value: 80, 
    },
    opacity: {
      value: 0.3, 
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 }, 
    },
  },
  detectRetina: true,
};