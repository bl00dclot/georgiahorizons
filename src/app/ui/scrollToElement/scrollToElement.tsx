'use client'; // Required for client-side interactions in Next.js App Router

import React, { ReactNode } from 'react';

interface ScrollToElementButtonProps {
  /**
   * The ID of the HTML element to scroll to.
   */
  targetId: string;
  /**
   * The text to display on the button.
   */
  buttonText?: string | null;
  /**
   * Optional: Vertical alignment of the target element after scrolling.
   * 'start': Aligns the top of the element to the top of the visible area.
   * 'center': Aligns the center of the element to the center of the visible area.
   * 'end': Aligns the bottom of the element to the bottom of the visible area.
   * 'nearest': Aligns the element to the nearest edge of the visible area.
   * Defaults to 'start'.
   */
  block?: 'start' | 'center' | 'end' | 'nearest';
   /**
   * Optional: Horizontal alignment of the target element after scrolling.
   * 'start': Aligns the left of the element to the left of the visible area.
   * 'center': Aligns the center of the element to the center of the visible area.
   * 'end': Aligns the right of the element to the right of the visible area.
   * 'nearest': Aligns the element to the nearest edge of the visible area.
   * Defaults to 'nearest'.
   */
  inline?: 'start' | 'center' | 'end' | 'nearest';
  className?: string;
  children?: ReactNode;
}

/**
 * A button component that scrolls the window to a specific HTML element.
 * This version has no specific CSS styling applied directly in the component.
 */
const ScrollToElementButton: React.FC<ScrollToElementButtonProps> = ({
  targetId,
  buttonText = null,
  block = 'start',
  inline = 'nearest',
  className,
  children
}) => {
  // Function to handle the button click and scroll
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Enables smooth scrolling
        block: block,       // Vertical alignment
        inline: inline,     // Horizontal alignment
      });
    } else {
      console.warn(`ScrollToElementButton: Element with ID "${targetId}" not found.`);
    }
  };

  return (
    <div
      onClick={handleScroll}
      className={className}
    >
      {buttonText ? buttonText : children}

    </div>
  );
};

export default ScrollToElementButton;
