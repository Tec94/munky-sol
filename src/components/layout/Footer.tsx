import React from 'react';
import { SocialLink } from '../common/SocialLink';
import { SOCIAL_LINKS } from '../../utils/constants/social';

export const Footer: React.FC = () => (
  <footer className="py-8 px-4 border-t border-purple-800/20">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="flex space-x-4 mb-4 md:mb-0">
        <SocialLink href={SOCIAL_LINKS.TWITTER}>Twitter</SocialLink>
        <SocialLink href={SOCIAL_LINKS.TELEGRAM}>Telegram</SocialLink>
        <SocialLink href={SOCIAL_LINKS.DISCORD}>Discord</SocialLink>
      </div>
      <p className="text-sm text-purple-400/60">© 2024 $MUNKY. All rights reserved.</p>
    </div>
  </footer>
);