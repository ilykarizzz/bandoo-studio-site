'use client';

import React from 'react';

export function SkipToContent() {
  return (
    <a 
      href="#main-content" 
      className="absolute z-[100] opacity-0 focus:opacity-100 bg-cyan text-black p-3 m-3 transition-opacity rounded-md left-0 top-0 transform -translate-y-full focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
