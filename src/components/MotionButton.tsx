'use client';

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButtonProps = BaseButtonProps & 
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps> & 
  MotionProps & { href?: never };

type ButtonAsAnchorProps = BaseButtonProps & 
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof MotionProps> & 
  MotionProps & { href: string };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

export function MotionButton({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className = '',
  href,
  ...props
}: ButtonProps) {
  // Variant-specific classes
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan to-cyan/80 text-black font-semibold hover:shadow-cyan/40 shadow-lg shadow-cyan/20',
    secondary: 'bg-purple-500/80 text-white font-semibold hover:shadow-purple-500/40 shadow-lg shadow-purple-500/20',
    outline: 'bg-transparent border border-white/30 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/50',
    text: 'bg-transparent text-white hover:bg-white/5',
  };

  // Size-specific classes
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  // Base classes for all buttons
  const baseClasses = 'relative rounded-full transition-all duration-300 overflow-hidden';

  // Combined classes
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  // Animation defaults
  const defaultAnimations = {
    whileHover: { 
      scale: 1.05, 
      boxShadow: variant === 'primary' || variant === 'secondary' ? '0 0 20px rgba(34, 211, 238, 0.5)' : undefined 
    },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 }
  };

  // Extract motion props
  const { 
    initial, animate, exit, whileHover, whileTap, whileInView, transition,
    ...restProps 
  } = props as any;

  // Content to render inside button
  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan via-purple-500/50 to-cyan bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity"></span>
      )}
      <span className="relative flex items-center justify-center gap-2">
        {isLoading ? (
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
        ) : null}
        {children}
      </span>
    </>
  );

  // Render as link or button
  if (href) {
    return (
      <motion.a
        href={href}
        className={`${combinedClasses} group inline-flex items-center justify-center`}
        initial={initial}
        animate={animate}
        exit={exit}
        whileHover={whileHover || defaultAnimations.whileHover}
        whileTap={whileTap || defaultAnimations.whileTap}
        whileInView={whileInView}
        transition={transition || defaultAnimations.transition}
        {...restProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={`${combinedClasses} group inline-flex items-center justify-center`}
      disabled={isLoading}
      initial={initial}
      animate={animate}
      exit={exit}
      whileHover={whileHover || defaultAnimations.whileHover}
      whileTap={whileTap || defaultAnimations.whileTap}
      whileInView={whileInView}
      transition={transition || defaultAnimations.transition}
      {...restProps}
    >
      {content}
    </motion.button>
  );
}
