'use client';
import * as React from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import useCsrfToken from '@/app/hooks/useCsrfToken';
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Input } from '@/app/ui/input/input';
import { Textarea } from '@/app/ui/textarea/textarea';
import {Calendar} from "@/app/ui/calendar/calendar"
import { cn } from '@/app/lib/utils';
import { ButtonLoading } from '@/app/ui/button/button';
import { Button } from '@/app/ui/button/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/app/ui/form/form';
import
  { Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/ui/popover/popover"
import { Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle } from '../../ui/card/card';
  import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/app/ui/AlertDialog/AlertDialog"
import bookingFormData from '@/app/lib/data/booking/bookingFormData';

const formSchema = z.object({
  date: z.object({
    from: z.date({ required_error: 'Start date is required' }),
    to: z.date({ required_error: 'End date is required' }),
  }),
  firstName: z.string().min(1, { message: 'First name is required' }).max(50, { message: 'First name must be 50 characters or less' }),
  lastName: z.string().min(1, { message: 'Last name is required' }).max(50, { message: 'Last name must be 50 characters or less' }),
  email: z.string().email({ message: 'Invalid email address' }).min(1, { message: 'Email is required' }).max(254, { message: 'Email must be 254 characters or less' }),
  subject: z.string().min(1, { message: 'Subject is required' }).max(998, { message: 'Subject must be 100 characters or less' }),
  message: z.string().min(1, { message: 'Message is required' }).max(2000, { message: 'Message must be 1000 characters or less' }),
});




export default function Page(){
  const csrfToken = useCsrfToken();


  // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const form  = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  },
});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

const onSubmit = async (data: z.infer<typeof formSchema>) => {
if (!csrfToken) {
      setIsSubmitting(false);
      setErrorMessage('CSRF token not available');
      return;
    }

    setIsSubmitting(true);
    console.log(JSON.stringify(data))


    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData)

      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }
      // await sleep(2000)
      // Success handling
      setIsSuccess(true);
      setIsModalOpen(true);

      // Reset form on success
      // reset();
    } catch (error: unknown) {
      // Error handling
      setIsSuccess(false);
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };



return (
    <div>
      <Card>
  <CardHeader>
    <CardTitle>Apply for a journey</CardTitle>
    <CardDescription>Fill out the application to contact us</CardDescription>
  </CardHeader>
  <CardContent>
            <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
    <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='block'>Journey date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-auto justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, "LLL dd, y")} -{" "}
                            {format(field.value.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(field.value.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    selected={
                      field.value
                    }
                    onSelect={field.onChange}
                    numberOfMonths={2}
                    disabled={(date) =>
                      date < new Date()
                    }
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Please select a date
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      {bookingFormData().map((textfield, index) => (
        <FormField
        key={index}
          control={form.control}
          name={textfield.name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{textfield.label}</FormLabel>
              <FormControl>
                {textfield.type === 'textarea' ? (
                  <Textarea className='' placeholder={textfield.placeholder} rows={5} {...field} />
                ) : (
                  <Input type={textfield.type} placeholder={textfield.placeholder} {...field} />
                )}
              </FormControl>
              <FormDescription>
                {textfield.description === null ? null : textfield.description}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
  ))}
    <CardFooter>
  {isSubmitting === true ?
  (<ButtonLoading />
): (<Button type="submit">Submit</Button>)
}
{isSuccess === true ? (
  <AlertDialog open={isModalOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Message succefully sent!</AlertDialogTitle>
      <AlertDialogDescription>
        Thank you for booking with Georgia Horizons. We will get in contact with you shortly.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction onClick={() => setIsModalOpen(false)}>Close</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
): (
  <AlertDialog open={isModalOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Oops, something went wrong!</AlertDialogTitle>
      <AlertDialogDescription>
        An error happened: {errorMessage}
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogAction onClick={() => setIsModalOpen(false)}>Close</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
)}

  </CardFooter>
          </form>
    </Form>
  </CardContent>
</Card>
    </div>
  )
}