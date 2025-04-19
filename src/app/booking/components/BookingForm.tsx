import React, { useState } from 'react';
import { FormField } from './FormField';
import { SubmitButton } from './SubmitButton';
import { FeedbackModal } from './FeedbackModal';
import useCsrfToken from '../../hooks/useCsrfToken';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!useCsrfToken) {
      setIsSubmitting(false);
      setErrorMessage('CSRF token not available');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      // Success handling
      setIsSuccess(true);

      // Reset form on success
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
    } catch (error: unknown) {
      // Error handling
      setIsSuccess(false);
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(true); // Open modal after the request completes (success or error)
    }
    // Simulate a successful submission
    // setTimeout(() => {
    //   setIsSuccess(true);
    //   setIsSubmitting(false);
    //   setIsModalOpen(true);
    // }
    // , 2000);
    // Simulate an error
    // setTimeout(() => {
    //   setIsSuccess(false);
    //   setErrorMessage('An error occurred');
    //   setIsSubmitting(false);
    //   setIsModalOpen(true);
    // }, 2000); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="w-5/6 bg-white">
        <div className="p-5">
          <form onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-8">
              <h2 className="text-base leading-7 font-semibold text-gray-900">
                Booking details
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <FormField
                    id="firstName"
                    name="firstName"
                    label="First name"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                    required
                  />
                </div>
                <div className="sm:col-span-3">
                  <FormField
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    required
                  />
                </div>
                <div className="sm:col-span-4">
                  <FormField
                    id="email"
                    name="email"
                    label="Email address"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="col-span-full">
                  <FormField
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <div className="mt-4">
                    <FormField
                      id="message"
                      name="message"
                      label="Message"
                      type="textarea"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      required
                    />
                  </div>
                  <p className="my-3 text-sm leading-6 text-gray-600">
                    Feel free to send us a message about the tours and trips you have in
                    mind or any activities youre curious about. Were here to answer all your
                    questions!
                  </p>
                  <div className="flex justify-end">
                    <div className="mt-6">
                      <SubmitButton
                        isSubmitting={isSubmitting}
                        text="Send Message"
                        loadingText="Sending..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <FeedbackModal
            isOpen={isModalOpen}
            onClose={closeModal}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </div>
  );
};
