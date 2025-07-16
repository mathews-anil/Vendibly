"use client";

import IconArrowRightUp from "@/components/icons/icon-arrow-right-up";
import Button from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof schema>;

// const resend = new Resend(process.env.RESEND_API_KEY || "");

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success("Your message has been sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-10 sm:py-20 2xl:py-36 !pb-8 sm:!pb-10">
      <ToastContainer position="top-right" />
      <div className="absolute left-0 top-0 w-full h-fit isolate z-[-1] max-lg:hidden">
        <Image
          src={"/imgs/Hero.PNG"}
          alt={"top-hero-bg"}
          width={1920}
          height={900}
          className={"img"}
          quality={100}
          priority
        />
      </div>
      <div className="wrapper mt-[88px] sm:mt-[120px] lg:mt-[200px] xl:mt-[300px]">
        <div className="mb-8 sm:mb-11.75 flex flex-col md:flex-row md:items-center gap-8 md:gap-14 lg:gap-[100px]">
          <h1 className="title max-w-[239px] w-full text-nowrap">Contact Us</h1>
        </div>

        {/* Form */}
        <div className="bg-white rounded-3xl shadow-[-16.813px_50.439px_84.064px_0px_rgba(31,_29,_85,_0.05)] overflow-hidden">
          <div>
            {/* Contact Form */}
            <div className="w-full p-5 sm:p-10 xl:py-20 xl:px-10.5 xl:border-r xl:border-r-foreground/10">
              <form
                className="space-y-4 sm:space-y-10 lg:space-y-12.5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="space-y-4 sm:space-y-5 lg:space-y-7.5">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-7.5">
                    <div>
                      <label htmlFor="firstName" className="label">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="Enter First Name"
                        className="input"
                        {...register("firstName")}
                        disabled={loading}
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-base mt-1.5">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="label">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Enter Last Name"
                        className="input"
                        {...register("lastName")}
                        disabled={loading}
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-base mt-1.5">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-7.5">
                    <div>
                      <label htmlFor="email" className="label">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your Email"
                        className="input"
                        {...register("email")}
                        disabled={loading}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-base mt-1.5">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Enter Phone Number"
                        className="input"
                        {...register("phone")}
                        disabled={loading}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-base mt-1.5">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="label">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Enter your Subject"
                      className="input"
                      {...register("subject")}
                      disabled={loading}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-base mt-1.5">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Enter your Message here..."
                    rows={6}
                    className="input resize-none max-h-[178px] h-full"
                    {...register("message")}
                    disabled={loading}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-base mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="center">
                  <Button
                    variant="secondary"
                    text={loading ? "Sending..." : "Send Your Message"}
                    className="bg-app-orange rounded-xl mx-auto"
                    icon={<IconArrowRightUp className="w-6 h-6" />}
                    iconSize={24}
                    moveUp
                    type="submit"
                    disabled={loading}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// OLD CONTACT SECTION

// const Contact = () => {
//   return (
//     <section className="relative py-10 sm:py-20 2xl:py-36 !pb-8 sm:!pb-10">
//       <div className="absolute left-0 top-0 w-full h-fit isolate z-[-1] max-lg:hidden">
//         <Image
//           src={"/imgs/Hero.PNG"}
//           alt={"top-hero-bg"}
//           width={1920}
//           height={900}
//           className={"img"}
//           quality={100}
//           priority
//         />
//       </div>
//       <div className="wrapper mt-[88px] sm:mt-[120px] lg:mt-[200px] xl:mt-[300px]">
//         <div className="mb-8 sm:mb-11.75 flex flex-col md:flex-row md:items-center gap-8 md:gap-14 lg:gap-[100px]">
//           <h1 className="title max-w-[239px] w-full text-nowrap">Contact Us</h1>
//           {/* <p className="text-xs/[18px] sm:text-sm/[22px] lg:text-base/[27px] font-inter text-foreground-copy">
//             Welcome to SkillBridge&apos;s Pricing Plan page, where we offer two
//             comprehensive options to cater to your needs: Free and Pro. We
//             believe in providing flexible and affordable pricing options for our
//             services. Whether you&apos;re an individual looking to enhance your
//             skills or a business seeking professional development solutions, we
//             have a plan that suits you. Explore our pricing options below and
//             choose the one that best fits your requirements.
//           </p> */}
//         </div>

//         {/* Form */}
//         <div className="bg-white rounded-3xl shadow-[-16.813px_50.439px_84.064px_0px_rgba(31,_29,_85,_0.05)] overflow-hidden">
//           <div className="grid grid-cols-1 xl:grid-cols-[692px_1fr]">
//             {/* Contact Form */}
//             <div className="w-full p-5 sm:p-10 xl:py-20 xl:px-10.5 xl:border-r xl:border-r-foreground/10">
//               {/* <div className="w-full py-20 xl:px-10.5 xl:border-r xl:border-r-foreground/10"> */}
//               <form className="space-y-4 sm:space-y-10 lg:space-y-12.5">
//                 <div className="space-y-4 sm:space-y-5 lg:space-y-7.5">
//                   {/* Name Fields */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-7.5">
//                     <div className="">
//                       <label htmlFor="firstName" className="label">
//                         First Name
//                       </label>
//                       <input
//                         id="firstName"
//                         type="text"
//                         placeholder="Enter First Name"
//                         className="input"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="lastName" className="label">
//                         Last Name
//                       </label>
//                       <input
//                         id="lastName"
//                         type="text"
//                         placeholder="Enter Last Name"
//                         className="input"
//                       />
//                     </div>
//                   </div>

//                   {/* Email and Phone */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-7.5">
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="label">
//                         Email
//                       </label>
//                       <input
//                         id="email"
//                         type="email"
//                         placeholder="Enter your Email"
//                         className="input"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="phone" className="label">
//                         Phone
//                       </label>
//                       <input
//                         id="phone"
//                         type="tel"
//                         placeholder="Enter Phone Number"
//                         className="input"
//                       />
//                     </div>
//                   </div>

//                   {/* Subject */}
//                   <div className="">
//                     <label htmlFor="subject" className="label">
//                       Subject
//                     </label>
//                     <input
//                       id="subject"
//                       type="text"
//                       placeholder="Enter your Subject"
//                       className="input"
//                     />
//                   </div>
//                 </div>

//                 {/* Message */}
//                 <div className="">
//                   <label htmlFor="message" className="label">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     placeholder="Enter your Message here..."
//                     rows={6}
//                     className="input resize-none max-h-[178px] h-full"
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <div className="center">
//                   <Button
//                     variant="secondary"
//                     text="Send Your Message"
//                     className="bg-app-orange rounded-xl mx-auto"
//                     icon={<IconArrowRightUp className="w-6 h-6" />}
//                     iconSize={24}
//                     moveUp
//                     onClick={(e) => e.preventDefault()}
//                   />
//                 </div>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div className="p-5 sm:p-10 xl:p-20">
//               {/* <div className="p-5 sm:p-10 xl:p-20 border"> */}
//               <div className="xl:space-y-12.5 max-xl:grid max-sm:grid-cols-1 max-xl:grid-cols-2 max-sm:gap-4 max-xl:gap-7">
//                 {/* Email Card */}
//                 <div className="contact-card">
//                   <div className="contact-icon-card">
//                     <IconEnvelope />
//                   </div>

//                   <p className="contact-card-text">support@skillbridge.com</p>
//                 </div>

//                 {/* Phone Card */}
//                 <div className="contact-card">
//                   <div className="contact-icon-card">
//                     <IconPhone />
//                   </div>

//                   <p className="contact-card-text">+91 00000 00000</p>
//                 </div>

//                 {/* Location Card */}
//                 <div className="contact-card">
//                   <div className="contact-icon-card">
//                     <IconPin />
//                   </div>

//                   <p className="contact-card-text">Some Where in the World</p>
//                 </div>

//                 {/* Social Profiles Card */}
//                 <div className="contact-card">
//                   <div className="center gap-4">
//                     <a
//                       href="#"
//                       className="contact-icon-card !mx-0 duration-300 hover:opacity-80"
//                     >
//                       <IconFacebook />
//                     </a>
//                     <a
//                       href="#"
//                       className="contact-icon-card !mx-0 duration-300 hover:opacity-80"
//                     >
//                       <IconTwitter />
//                     </a>
//                     <a
//                       href="#"
//                       className="contact-icon-card !mx-0 duration-300 hover:opacity-80"
//                     >
//                       <IconLinkedin />
//                     </a>
//                   </div>
//                   <div className="text-center">
//                     <p className="contact-card-text">Social Profiles</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
//
