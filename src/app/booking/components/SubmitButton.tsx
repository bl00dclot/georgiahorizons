import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  text: string;
  loadingText: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  text,
  loadingText,
}) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="inline-flex items-center gap-2 rounded-md bg-olive py-1.5 px-3 text-sm leading-6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-darkGreen active:bg-darkGreen active:text-beige focus:outline-1 focus:outline-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isSubmitting ? (
        <>
          <svg
            className="animate-spin h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {loadingText}
        </>
      ) : (
        text
      )}
    </button>
  );
};