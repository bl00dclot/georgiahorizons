import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister;
  errors?: FieldErrors;
  autoComplete?: string;
  required?: boolean;
  rows?: number;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  register,
  errors = {},
  autoComplete,
  required = false,
  rows,
}) => {
  // Define the registration options based on field name
  const getRegisterOptions = () => {
    if (name === 'firstName' || name === 'lastName') {
      return {
        required: required ? 'This field is required' : false,
        maxLength: {
          value: 50,
          message: 'Maximum length is 50 characters'
        },
        minLength: {
          value: 1,
          message: 'Minimum length is 1 character'
        },
        pattern: {
          value: /^[a-zA-Z\s]*$/,
          message: 'Only letters and spaces are allowed'
        }
      };
    } else if (name === 'email') {
      return { 
        required: required ? 'Email is required' : false,
        maxLength: {
          value: 254,
          message: 'Email is too long'
        },
        minLength: {
          value: 1,
          message: 'Email is required'
        },
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Please enter a valid email address'
        }
      };
    } else if (name === 'subject') {
      return { 
        required: required ? 'Subject is required' : false,
        maxLength: {
          value: 1000,
          message: 'Subject is too long (max 1000 characters)'
        },
        minLength: {
          value: 5,
          message: 'Subject is required'
        },
        pattern: {
          value: /^[a-zA-Z0-9\s.,!?'"-]*$/,
          message: 'Please use only alphanumeric characters and common punctuation'
        }
      };
    } else if (name === 'message') {
      return {
        required: required ? 'Message is required' : false,
        maxLength: {
          value: 2000,
          message: 'Message is too long (max 2000 characters)'
        },
        minLength: {
          value: 10,
          message: 'Message is required'
        },
        pattern: {
          value: /^[a-zA-Z0-9\s.,!?'"-]*$/,
          message: 'Please use only alphanumeric characters and common punctuation'
        }
      };
    }
    return { 
      required: required ? 'This field is required' : false
    };
  };

  const inputStyles = "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6";
  const fieldError = errors[name];

  return (
    <div>
      <label htmlFor={id} className="block text-sm leading-6 font-medium text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        {type === 'textarea' ? (
          <>
            <textarea
              id={id}
              {...register(name, getRegisterOptions())}
              aria-invalid={fieldError ? 'true' : 'false'}
              rows={rows || 3}
              className={inputStyles}
            />
            {fieldError && (
              <span role="alert" className="text-fireBrick font-medium text-sm mt-1 block">
                {fieldError.message?.toString()}
              </span>
            )}
          </>
        ) : (
          <>
            <input
              id={id}
              type={type}
              {...register(name, getRegisterOptions())}
              aria-invalid={fieldError ? 'true' : 'false'}
              autoComplete={autoComplete}
              className={inputStyles}
            />
            {fieldError && (
              <span role="alert" className="text-fireBrick font-medium text-sm mt-1 block">
                {fieldError.message?.toString()}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};