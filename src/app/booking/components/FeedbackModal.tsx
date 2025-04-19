import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  errorMessage: string;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  onClose,
  isSuccess,
  errorMessage,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop className="fixed inset-0 bg-gray-500/75 transition-opacity" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div
                  className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full ${
                    isSuccess ? 'bg-olive' : 'bg-fireBrick/85'
                  } sm:mx-0 sm:size-10`}
                >
                  {isSuccess ? (
                    <CheckIcon className="size-6 text-white" />
                  ) : (
                    <XMarkIcon className="size-6 text-white" />
                  )}
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    {isSuccess ? 'Message sent!' : 'Message not sent!'}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {isSuccess
                        ? 'Success! We will get back to you as soon as possible.'
                        : errorMessage || 'An error occurred while sending the message. Please try again later.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={onClose}
                className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white active:text-beige shadow-xs sm:ml-3 sm:w-auto cursor-pointer ${
                  isSuccess ? 'bg-olive hover:bg-darkGreen' : 'bg-fireBrick/85 hover:bg-fireBrick'
                }`}
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
