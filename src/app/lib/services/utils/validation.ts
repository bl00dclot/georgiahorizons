// utils/emailValidation.ts
import { z } from 'zod';

// Constants for validation limits
const NAME_MAX_LENGTH = 50; // Reasonable limit for names
const EMAIL_MAX_LENGTH = 254; // RFC 5321 SMTP standard maximum
const SUBJECT_MAX_LENGTH = 998; // RFC 5322 recommended maximum
const MESSAGE_MAX_LENGTH = 2000; // Custom limit for message body

// Basic email schema with maximum length validation
export const EmailSchema = z.string()
  .email('Invalid email format')
  .max(EMAIL_MAX_LENGTH, `Email must be less than ${EMAIL_MAX_LENGTH} characters`);

// Email schema for form submissions
export const EmailRequestSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(NAME_MAX_LENGTH, `First name must be less than ${NAME_MAX_LENGTH} characters`),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(NAME_MAX_LENGTH, `Last name must be less than ${NAME_MAX_LENGTH} characters`),
  email: EmailSchema,
  subject: z.string()
    .min(1, 'Subject is required')
    .max(SUBJECT_MAX_LENGTH, `Subject must be less than ${SUBJECT_MAX_LENGTH} characters`),
  message: z.string()
    .min(1, 'Message is required')
    .max(MESSAGE_MAX_LENGTH, `Message must be less than ${MESSAGE_MAX_LENGTH} characters`),
});

// Email schema for the actual email sending API
export const MailgunEmailSchema = z.object({
  from: z.string().min(1, 'Sender is required'),
  to: z.string().min(1, 'Recipient is required'),
  subject: z.string().min(1, 'Subject is required').max(998, 'Subject is too long'),
  text: z.string().optional(),
  html: z.string().optional(),
}).refine(data => data.text || data.html, {
  message: 'Either text or HTML content is required'
});

// Type definitions based on the schemas
export type ValidatedEmailRequest = z.infer<typeof EmailRequestSchema>;
export type ValidatedMailgunEmail = z.infer<typeof MailgunEmailSchema>;

// Helper function to validate email sending requests
export function validateEmailRequest(data: unknown) {
  const result = EmailRequestSchema.safeParse(data);
  
  if (result.success) {
    return { valid: true, errors: [], data: result.data };
  } else {
    const errors = result.error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
    return { valid: false, errors, data: null };
  }
}

// Helper function to validate Mailgun email requests
export function validateMailgunEmail(data: unknown) {
  const result = MailgunEmailSchema.safeParse(data);
  
  if (result.success) {
    return { valid: true, errors: [], data: result.data };
  } else {
    const errors = result.error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
    return { valid: false, errors, data: null };
  }
}

// For validating a simple email string
export function isValidEmail(email: string): boolean {
  const result = EmailSchema.safeParse(email);
  return result.success;
}