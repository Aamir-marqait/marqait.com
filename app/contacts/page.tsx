"use client";

import { useSEO } from "@/utils/seo";
import { useState } from "react";
import { z } from "zod";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(50, "Full name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  consent: z.boolean().refine(val => val === true, "You must give consent to submit the form")
});


export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    // service: "",
    message: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: any) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  useSEO({
    canonical: "https://www.marqait.com/contacts",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });
    setErrors({});

    // Validate form data with Zod
    const validation = contactFormSchema.safeParse(formData);
    
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.issues.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0] as string] = error.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "0a3a70cf-9b31-4dcd-9b68-934df7b505fa");
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company);
    // formDataToSend.append("service", formData.service);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({
          fullName: "",
          email: "",
          company: "",
          // service: "",
          message: "",
          consent: false,
        });
        setTimeout(() => setSubmitStatus({ type: "", message: "" }), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          "❌ There was an error sending your message. Please try again.",
      });
      setTimeout(() => setSubmitStatus({ type: "", message: "" }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: "url('/contact.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-16 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1
            className="font-bold text-white mb-4 sm:mb-4
            text-2xl sm:text-3xl md:text-4xl lg:text-[36px]"
            style={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "36px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "60px",
            }}
          >
            Contact Us
          </h1>
          <p
            className="mx-auto px-4 sm:px-6 md:px-8 lg:px-0
            text-sm sm:text-base md:text-lg lg:text-[20px]
            max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-[1128px]"
            style={{
              width: "1128px",
              color: "#FFF",
              textAlign: "center",
              fontFamily: "Inter",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "32px",
            }}
          >
            Looking to collaborate or learn how our solutions can support your
            business objectives? Fill out the form below and a member of our
            team will be in touch shortly to explore how we can work together.
          </p>
        </div>

        {/* Purple glow effect positioned above form */}
        <div className="max-w-6xl relative">
          <div
            className="absolute inset-0 rounded-2xl
            w-[300px] h-[200px] -top-4 -left-8
            sm:w-[500px] sm:h-[300px] sm:-top-8 sm:-left-12
            md:w-[800px] md:h-[400px] md:-top-12 md:-left-16
            lg:w-[1400px] lg:h-[500px] lg:-top-0 lg:-left-[70px]"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(147, 51, 234, 7) 50%, rgba(147, 51, 234, 01.8) 50%, transparent 55%)",
              filter: "blur(60px)",
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div
            className="rounded-2xl border border-white/15 p-4 sm:p-6 md:p-8 lg:p-12 shadow-2xl relative"
            style={{
              backgroundImage: "url('/form.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
                {/* Contact Information */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <h2
                    className="text-white font-inter font-bold mb-4 sm:mb-6 lg:mb-8
                    text-xl sm:text-2xl md:text-3xl lg:text-[30px]"
                    style={{
                      fontSize: "30px",
                      lineHeight: "60px"
                    }}
                  >
                    Contact Information :
                  </h2>
                  <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                    {/* <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-5 h-5 mt-1 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div
                        className="text-white font-inter font-normal
                        text-sm sm:text-base md:text-lg lg:text-[18px]"
                        style={{
                          fontSize:
                            "18px",
                          lineHeight:
                            "27px",
                        }}
                      >
                        <p>Lorem ipsum, Lorem ipsum</p>
                        <p>4517 Washington Ave. Manchester,</p>
                        <p>Kentucky 39495</p>
                      </div>
                    </div> */}

                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-5 h-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <a
                        href="mailto: hello@marqait.com"
                        className="text-[#8C45FF] hover:text-purple-300 transition-colors font-inter font-normal
                        text-sm sm:text-base lg:text-[16px]"
                        style={{
                          fontSize:
                            "16px",
                          lineHeight:
                            "24px",
                        }}
                      >
                        hello@marqait.com
                      </a>
                    </div>

                    {/* <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-5 h-5 flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M8.2793 3L8.27935 2H8.2793V3ZM9.22754 3.68359L10.1762 3.3673L10.1761 3.36709L9.22754 3.68359ZM10.7256 8.17676L11.6743 7.86053L11.6742 7.86047L10.7256 8.17676ZM10.2246 9.3877L10.6717 10.2822L10.6722 10.282L10.2246 9.3877ZM7.96973 10.5146L7.52267 9.62014C7.04255 9.8601 6.83749 10.4363 7.05808 10.9256L7.96973 10.5146ZM13.4844 16.0293L13.0733 16.9409C13.5624 17.1615 14.1385 16.9567 14.3786 16.4768L13.4844 16.0293ZM14.6123 13.7754L13.718 13.3278L13.718 13.3279L14.6123 13.7754ZM15.8232 13.2744L16.1395 12.3258L16.1395 12.3257L15.8232 13.2744ZM20.3164 14.7725L20.6329 13.8239L20.6327 13.8238L20.3164 14.7725ZM21 15.7207H22V15.7206L21 15.7207ZM19 21V22V21ZM5 3V2V3ZM8.2793 3L8.27924 4L8.27895 4.0001L9.22754 3.68359L10.1761 3.36709C9.90391 2.55122 9.14048 2.00005 8.27935 2L8.2793 3ZM9.22754 3.68359L8.27888 3.99988L9.77692 8.49305L10.7256 8.17676L11.6742 7.86047L10.1762 3.3673L9.22754 3.68359ZM10.7256 8.17676L9.7769 8.49299L9.77706 8.49344L10.2246 9.3877L10.6722 10.282C11.5625 9.83639 11.9887 8.80395 11.6743 7.86053L10.7256 8.17676ZM10.2246 9.3877L9.77755 8.49319L7.52267 9.62014L7.96973 10.5146L8.41679 11.4092L10.6717 10.2822L10.2246 9.3877ZM7.96973 10.5146L7.05808 10.9256C8.26046 13.5928 10.4065 15.7383 13.0733 16.9409L13.4844 16.0293L13.8955 15.1177C11.6731 14.1155 9.88319 12.326 8.88137 10.1037L7.96973 10.5146ZM13.4844 16.0293L14.3786 16.4768L15.5066 14.2229L14.6123 13.7754L13.718 13.3279L12.5901 15.5818L13.4844 16.0293ZM14.6123 13.7754L15.5066 14.2229L15.507 14.2231L15.8232 13.2744L16.1395 12.3257C15.196 12.0113 14.1636 12.4375 13.718 13.3278L14.6123 13.7754ZM15.8232 13.2744L15.507 14.2231L20.0001 15.7211L20.3164 14.7725L20.6327 13.8238L16.1395 12.3258L15.8232 13.2744ZM20.3164 14.7725L19.9999 15.7211L20 15.7208L21 15.7207L22 15.7206C22 14.8595 21.4488 14.0961 20.6329 13.8239L20.3164 14.7725ZM21 15.7207H20V19H21H22V15.7207H21ZM21 19H20C20 19.5523 19.5523 20 19 20V21V22C20.6569 22 22 20.6569 22 19H21ZM19 21V20H18V21V22H19V21ZM18 21V20C10.268 20 4 13.732 4 6H3H2C2 14.8366 9.16344 22 18 22V21ZM3 6H4V5H3H2V6H3ZM3 5H4C4 4.44772 4.44772 4 5 4V3V2C3.34315 2 2 3.34315 2 5H3ZM5 3V4H8.2793V3V2H5V3Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <a
                        href="tel:+917988998891"
                        className="text-white hover:text-gray-300 transition-colors font-inter font-normal
                        text-sm sm:text-base lg:text-[16px]"
                        style={{
                          fontSize:
                            "16px",
                          lineHeight:
                            "24px",
                        }}
                      >
                        +91-7988998891
                      </a>
                    </div> */}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-4 sm:space-y-6">
                  <h2
                    className="text-white font-inter font-bold mb-4 sm:mb-6 lg:mb-8
                    text-xl sm:text-2xl md:text-3xl lg:text-[30px]"
                    style={{
                      fontSize: "30px",
                      lineHeight: "60px"
                    }}
                  >
                    Get In Touch :
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4 lg:space-y-6"
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="fullName"
                        className="block text-white font-inter font-semibold
                        text-xs sm:text-sm lg:text-[14px]"
                        style={{
                          fontSize:
                            "14px",
                          lineHeight:
                            "20px",
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Enter Full Name"
                        className={`w-full px-3 sm:px-4 bg-transparent border rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200
                        h-10 sm:h-11 lg:h-12
                        text-sm sm:text-base lg:text-[16px] ${
                          errors.fullName ? 'border-purple-500' : 'border-white/15'
                        }`}
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize:
                            "16px",
                          lineHeight:
                            "24px",
                        }}
                      />
                      {errors.fullName && (
                        <p className="text-purple-400 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-white font-inter font-semibold
                        text-xs sm:text-sm lg:text-[14px]"
                        style={{
                          fontSize:
                            "14px",
                          lineHeight:
                            "20px",
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter Email Address"
                        className={`w-full px-3 sm:px-4 bg-transparent border rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200
                        h-10 sm:h-11 lg:h-12
                        text-sm sm:text-base lg:text-[16px] ${
                          errors.email ? 'border-purple-500' : 'border-white/15'
                        }`}
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize:
                            "16px",
                          lineHeight:
                            "24px",
                        }}
                      />
                      {errors.email && (
                        <p className="text-purple-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="block text-white font-inter font-semibold
                        text-xs sm:text-sm lg:text-[14px]"
                        style={{
                          fontSize:
                            "14px",
                          lineHeight:
                            "20px",
                        }}
                      >
                        Company{" "}
                        <span className="text-gray-400">(optional)</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Enter Company Name"
                        className="w-full px-3 sm:px-4 bg-transparent border border-white/15 rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200
                        h-10 sm:h-11 lg:h-12
                        text-sm sm:text-base lg:text-[16px]"
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize:
                            "16px",
                          lineHeight:
                            "24px",
                        }}
                      />
                    </div>

                    {/* <div className="space-y-2">
                      <label
                        htmlFor="service"
                        className="block text-white font-inter font-semibold
                        text-xs sm:text-sm lg:text-[14px]"
                        style={{
                          fontSize:
                            "14px",
                          lineHeight:
                            "20px",
                        }}
                      >
                        Product Of Interest
                      </label>
                      <input
                        id="service"
                        name="service"
                        type="text"
                        value={formData.service}
                        onChange={handleInputChange}
                        placeholder="Enter Product Of Interest"
                        className="w-full px-3 sm:px-4 bg-transparent border border-white/15 rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200
                        h-10 sm:h-11 lg:h-12
                        text-sm sm:text-base lg:text-[16px]"
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize:
                            "16px",
                          lineHeight:
                            "24px",
                        }}
                      />
                    </div> */}

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-white font-inter font-semibold
                        text-xs sm:text-sm lg:text-[14px]"
                        style={{
                          fontSize:
                            "14px",
                          lineHeight:
                            "20px",
                        }}
                      >
                        Message For Our Team
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Enter your Message..."
                        rows={4}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200 resize-none
                        text-sm sm:text-base lg:text-[16px] ${
                          errors.message ? 'border-purple-500' : 'border-white/15'
                        }`}
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize:
                            "16px",
                          lineHeight:
                            "24px",
                        }}
                      />
                      {errors.message && (
                        <p className="text-purple-400 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start gap-2 sm:gap-3 pt-2">
                      <div className="relative items-center flex-shrink-0 mt-0.5">
                        <input
                          id="consent"
                          name="consent"
                          type="checkbox"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <label
                          htmlFor="consent"
                          className="flex items-center justify-center w-4 h-4 border border-white rounded-[4px] cursor-pointer transition-all duration-200 hover:border-purple-400"
                          style={{
                            backgroundColor: formData.consent
                              ? "#9333ea"
                              : "transparent",
                            borderColor: formData.consent ? "#9333ea" : "#FFF",
                          }}
                        >
                          {formData.consent && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </label>
                      </div>
                      <label
                        htmlFor="consent"
                        className="text-white font-inter font-normal cursor-pointer
                        text-xs sm:text-sm lg:text-[14px]
                        max-w-full lg:max-w-[472px]"
                        style={{
                          width:
                            "472px",
                          fontSize:
                            "14px",
                          lineHeight:
                            "20px",
                        }}
                      >
                        By submitting this form, you are giving consent to
                        Marqait to store your submitted information.
                      </label>
                    </div>
                    {errors.consent && (
                      <p className="text-purple-400 text-xs mt-1">{errors.consent}</p>
                    )}

                    {/* Status Message */}
                    {submitStatus.message && (
                      <div
                        className={`p-4 rounded-lg border text-center font-inter text-sm ${
                          submitStatus.type === "success"
                            ? "bg-green-500/10 border-green-500/30 text-purple-400"
                            : "bg-red-500/10 border-red-500/30 text-red-400"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex justify-center items-center gap-3 rounded-[16px] border border-white/25 text-[#F2F0F5] font-inter font-bold transition-all duration-200 focus:outline-none hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
                        px-8 py-3 text-sm
                        sm:px-10 sm:py-3 sm:text-base
                        lg:px-[50px] lg:py-[12px] lg:text-[16px]"
                        style={{
                          background: "rgba(140, 69, 255, 0.40)",
                          boxShadow:
                            "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                          fontSize:
                            "16px",
                          lineHeight:
                            "24px",
                        }}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending Message...
                          </>
                        ) : (
                          "Submit Now"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
