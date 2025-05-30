"use client";

import { InstagramEmbed } from 'react-social-media-embed';
import { useEffect, useRef } from 'react';

interface InstagramEmbedClientProps {
  url: string;
  [key: string]: any;
}

const InstagramEmbedClient: React.FC<InstagramEmbedClientProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Suppress React's DOM property warning for third-party iframe
    const originalError = console.error;
    console.error = (...args) => {
      if (args[0]?.includes?.('allowfullscreen') || args[0]?.includes?.('allowFullScreen')) {
        return; // Suppress this specific warning
      }
      originalError.apply(console, args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return (
    <div ref={containerRef}>
      <InstagramEmbed {...props} />
    </div>
  );
};

export default InstagramEmbedClient; 