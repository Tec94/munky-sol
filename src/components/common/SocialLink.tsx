import React from 'react';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
}

export const SocialLink: React.FC<SocialLinkProps> = ({ href, children }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-purple-400 transition-colors"
  >
    {children}
  </a>
);