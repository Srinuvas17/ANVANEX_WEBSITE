
import React from 'react';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  icon: React.ReactNode; // Added icon property
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface NavLink {
  id: string;
  label: string;
  href: string; // Could be a full URL or an anchor like '#services'
  targetSectionId?: string; // For scrolling to sections
  icon?: React.ReactNode;
  // subLinks?: NavLink[]; // For future dropdowns
}