
// lib/services/email/mailgun.ts
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { MailgunEmailSchema, ValidatedEmailRequest } from '../services/utils/validation';

// Initialize Mailgun client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});

const DOMAIN = process.env.MAILGUN_DOMAIN || '';
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || '';

/**
 * Sends an email using Mailgun
 */
export async function sendEmail(data: ValidatedEmailRequest) {
    console.log(data)
    const { date, firstName, lastName, email, subject, message } = data;
    const mailData = {
        from: `${firstName} ${lastName} <${email}>`,
        to: RECIPIENT_EMAIL,
        subject: subject,
        text: `FROM: ${data.date.from.substring(0, 10)} TO: ${data.date.to.substring(0, 10)}\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
            <h3>New Booking request</h3>
            <h4>Desired dates from ${date.from.substring(0, 10)} to ${date.to.substring(0, 10)}</h4>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
        `
    };
    // Validate the Mailgun-specific structure
    try {
        console.log(mailData)
        MailgunEmailSchema.parse(mailData);
    }
    catch (validationError) {
        throw new Error(`Invalid email structure: ${validationError}`);
    }
    // Send email using Mailgun
        console.log(mailData)

    return mg.messages.create(DOMAIN, mailData);
}

// /**
//  * Gets domain verification status from Mailgun
//  */
// export async function getDomainVerificationStatus() {
//     try {
//       // Get domain info from Mailgun
//       const response = await mg.domains.get(DOMAIN);
      
//       return {
//         domain: response.name || DOMAIN,
//         isVerified: response.is_verified || false,
//         state: response.state || 'unknown',
//         dnsRecords: response.sending_dns_records || []
//       };
//     } catch (error) {
//       console.error('Error checking domain verification:', error);
//       throw error;
//     }
//   }

// //   * Check if all DNS records are valid for the domain
// //   */
//  export async function validateDomainDnsRecords() {
//    try {
//      const status = await getDomainVerificationStatus();
     
//      if (!status.dnsRecords) {
//        return { isValid: false, message: 'No DNS records found' };
//      }
     
//      const allValid = status.dnsRecords.every(record => record.valid);
     
//      return {
//        isValid: allValid,
//        state: status.state,
//        isVerified: status.isVerified,
//        invalidRecords: allValid ? [] : status.dnsRecords.filter(record => !record.valid)
//      };
//    } catch (error) {
//      console.error('Error validating DNS records:', error);
//      throw error;
//    }
//  }