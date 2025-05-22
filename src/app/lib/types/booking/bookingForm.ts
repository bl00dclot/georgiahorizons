type BookingFormFieldName = 'firstName' | 'lastName' | 'email' | 'subject' | 'message';

export type BookingFormField = {
  name: BookingFormFieldName;
  label: string;
  type: string;
  placeholder: string;
  description: string | null;
  required: boolean;
};