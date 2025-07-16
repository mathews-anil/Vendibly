// Email template for contact form submissions
export function contactEmailTemplate(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; color: #222;">
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr><td style="font-weight: bold; padding: 4px 8px;">First Name:</td><td style="padding: 4px 8px;">${data.firstName}</td></tr>
        <tr><td style="font-weight: bold; padding: 4px 8px;">Last Name:</td><td style="padding: 4px 8px;">${data.lastName}</td></tr>
        <tr><td style="font-weight: bold; padding: 4px 8px;">Email:</td><td style="padding: 4px 8px;">${data.email}</td></tr>
        <tr><td style="font-weight: bold; padding: 4px 8px;">Phone:</td><td style="padding: 4px 8px;">${data.phone}</td></tr>
        <tr><td style="font-weight: bold; padding: 4px 8px;">Subject:</td><td style="padding: 4px 8px;">${data.subject}</td></tr>
        <tr><td style="font-weight: bold; padding: 4px 8px;">Message:</td><td style="padding: 4px 8px;">${data.message}</td></tr>
      </table>
    </div>
  `;
}
