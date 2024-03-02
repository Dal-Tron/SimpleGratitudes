import clsx from 'clsx';
import { ChangeEvent, TextareaHTMLAttributes, useEffect, useRef } from 'react';

interface ExpandingTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

export const ExpandingTextarea: React.FC<ExpandingTextareaProps> = ({
  className,
  onChange,
  value,
  placeholder,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const lineHeight = 24; // Define the line-height of your textarea here

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset the height to 'auto' to get the correct scrollHeight
    textarea.style.height = 'auto';
    // Calculate the required height
    const requiredHeight = textarea.scrollHeight;

    if (requiredHeight <= lineHeight * 7) {
      // If we have space for 7 lines or less, adjust the height
      textarea.style.height = `${requiredHeight}px`;
      textarea.style.overflowY = 'hidden'; // Disable scrolling when content is within limits
    } else {
      // Content requires more than 7 lines, set fixed height and enable scroll
      textarea.style.height = `${lineHeight * 7}px`;
      textarea.style.overflowY = 'scroll'; // Enable scrolling

      // Scroll to the bottom
      textarea.scrollTop = textarea.scrollHeight;
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      rows={1}
      className={clsx(
        'w-full focus:outline-none outline-none border-none resize-none bg-transparent',
        className,
      )}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ lineHeight: `${lineHeight}px` }}
    />
  );
};
