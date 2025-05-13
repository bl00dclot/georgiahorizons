import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
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
  const { register, handleSubmit, reset, formState:{errors} } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const csrfToken = useCsrfToken();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!csrfToken) {
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
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }

      // Success handling
      setIsSuccess(true);

      // Reset form on success
      reset();
    } catch (error: unknown) {
      // Error handling
      setIsSuccess(false);
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(true); // Open modal after the request completes (success or error)
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
            <div>
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    register={register}
                    autoComplete="given-name"
                    errors={errors}
                    required
                                      />
                </div>
                <div className="sm:col-span-3">
                  <FormField
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    register={register}
                    autoComplete="family-name"
                    errors={errors}
                    required
                                      />
                </div>
                <div className="sm:col-span-4">
                  <FormField
                    id="email"
                    name="email"
                    label="Email address"
                    type="email"
                    register={register}
                    autoComplete="email"
                    errors={errors}
                    required
                                      />
                </div>
                <div className="col-span-full">
                  <FormField
                    id="subject"
                    name="subject"
                    label="Subject"
                    register={register}
                    errors={errors}
                    required
                                      />
                  <div className="mt-4">
                    <FormField
                      id="message"
                      name="message"
                      label="Message"
                      type="textarea"
                      register={register}
                      rows={3}
                      errors={errors}
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
            
          </form>

          <FeedbackModal
            isOpen={isModalOpen}
            onClose={closeModal}
            isSuccess={isSuccess}
            errorMessage={errorMessage}
          />
          </div>
  );
};