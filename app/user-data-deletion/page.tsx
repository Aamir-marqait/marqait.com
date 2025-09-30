"use client";

import { useState } from "react";
import { z } from "zod";

const deleteDataFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters").max(50, "Full name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  reason: z.string().min(10, "Please provide a reason (minimum 10 characters)").max(500, "Reason must be less than 500 characters"),
  accountEmail: z.string().email("Please enter the email address associated with your Marqait account"),
  consent: z.boolean().refine(val => val === true, "You must confirm your request to proceed")
});

export default function DeleteUserDataPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    reason: "",
    accountEmail: "",
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });
    setErrors({});

    // Validate form data with Zod
    const validation = deleteDataFormSchema.safeParse(formData);
    
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
    formDataToSend.append("subject", "Data Deletion Request - Marqait");
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("account_email", formData.accountEmail);
    formDataToSend.append("reason", formData.reason);
    formDataToSend.append("request_type", "Data Deletion Request");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Data deletion request submitted successfully! We will process your request within 30 days and send a confirmation email.",
        });
        setFormData({
          fullName: "",
          email: "",
          reason: "",
          accountEmail: "",
          consent: false,
        });
        setTimeout(() => setSubmitStatus({ type: "", message: "" }), 8000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "There was an error submitting your request. Please try again or contact us directly at hello@marqait.com.",
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
            Delete User Data
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
            Request deletion of your personal data from Marqait. We take your privacy seriously and will process your request within 30 business days in accordance with applicable data protection laws.
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
                {/* Information Section */}
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <h2
                    className="text-white font-inter font-bold mb-4 sm:mb-6 lg:mb-8
                    text-xl sm:text-2xl md:text-3xl lg:text-[30px]"
                    style={{
                      fontSize: "30px",
                      lineHeight: "60px"
                    }}
                  >
                    Data Deletion Information :
                  </h2>
                  <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-white font-inter font-semibold text-lg">
                        What data will be deleted?
                      </h3>
                      <div className="text-gray-300 font-inter font-normal text-sm space-y-2">
                        <p>• Personal account information</p>
                        <p>• Campaign data and ad creatives</p>
                        <p>• Usage analytics and preferences</p>
                        <p>• Connected social media account data</p>
                        <p>• All associated files and documents</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-white font-inter font-semibold text-lg">
                        Important Notes:
                      </h3>
                      <div className="text-gray-300 font-inter font-normal text-sm space-y-2">
                        <p>• This action cannot be undone</p>
                        <p>• Active subscriptions will be cancelled</p>
                        <p>• Processing takes up to 30 business days</p>
                        <p>• You'll receive confirmation via email</p>
                      </div>
                    </div>

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
                      <div>
                        <p className="text-gray-300 font-inter font-normal text-sm">
                          Questions? Contact us at:
                        </p>
                        <a
                          href="mailto:hello@marqait.com"
                          className="text-[#8C45FF] hover:text-purple-300 transition-colors font-inter font-normal text-sm"
                        >
                          aamir@marqait.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deletion Request Form */}
                <div className="space-y-4 sm:space-y-6">
                  <h2
                    className="text-white font-inter font-bold mb-4 sm:mb-6 lg:mb-8
                    text-xl sm:text-2xl md:text-3xl lg:text-[30px]"
                    style={{
                      fontSize: "30px",
                      lineHeight: "60px"
                    }}
                  >
                    Request Data Deletion :
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
                          fontSize: "14px",
                          lineHeight: "20px",
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
                        placeholder="Enter your full name"
                        className={`w-full px-3 sm:px-4 bg-transparent border rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200
                        h-10 sm:h-11 lg:h-12
                        text-sm sm:text-base lg:text-[16px] ${
                          errors.fullName ? 'border-purple-500' : 'border-white/15'
                        }`}
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize: "16px",
                          lineHeight: "24px",
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
                          fontSize: "14px",
                          lineHeight: "20px",
                        }}
                      >
                        Your Contact Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your contact email"
                        className={`w-full px-3 sm:px-4 bg-transparent border rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200
                        h-10 sm:h-11 lg:h-12
                        text-sm sm:text-base lg:text-[16px] ${
                          errors.email ? 'border-purple-500' : 'border-white/15'
                        }`}
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      />
                      {errors.email && (
                        <p className="text-purple-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="accountEmail"
                        className="block text-white font-inter font-semibold
                        text-xs sm:text-sm lg:text-[14px]"
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                        }}
                      >
                        Marqait Account Email
                      </label>
                      <input
                        id="accountEmail"
                        name="accountEmail"
                        type="email"
                        value={formData.accountEmail}
                        onChange={handleInputChange}
                        placeholder="Enter the email associated with your Marqait account"
                        className={`w-full px-3 sm:px-4 bg-transparent border rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200
                        h-10 sm:h-11 lg:h-12
                        text-sm sm:text-base lg:text-[16px] ${
                          errors.accountEmail ? 'border-purple-500' : 'border-white/15'
                        }`}
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      />
                      {errors.accountEmail && (
                        <p className="text-purple-400 text-xs mt-1">{errors.accountEmail}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="reason"
                        className="block text-white font-inter font-semibold
                        text-xs sm:text-sm lg:text-[14px]"
                        style={{
                          fontSize: "14px",
                          lineHeight: "20px",
                        }}
                      >
                        Reason for Data Deletion
                      </label>
                      <textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        placeholder="Please explain why you want to delete your data (e.g., no longer using the service, privacy concerns, etc.)"
                        rows={4}
                        className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-transparent border rounded-[6px] text-white placeholder:text-[#9CA3AF] font-inter font-normal focus:border-purple-400 focus:outline-none transition-all duration-200 resize-none
                        text-sm sm:text-base lg:text-[16px] ${
                          errors.reason ? 'border-purple-500' : 'border-white/15'
                        }`}
                        style={{
                          backdropFilter: "blur(7px)",
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      />
                      {errors.reason && (
                        <p className="text-purple-400 text-xs mt-1">{errors.reason}</p>
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
                          width: "472px",
                          fontSize: "14px",
                          lineHeight: "20px",
                        }}
                      >
                        I understand that this action will permanently delete all my data from Marqait and cannot be undone. I confirm that I want to proceed with this deletion request.
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
                            ? "bg-green-500/10 border-green-500/30 text-green-400"
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
                          background: "rgba(220, 38, 38, 0.40)",
                          boxShadow:
                            "0px 12px 16px 0px rgba(220, 38, 38, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                          fontSize: "16px",
                          lineHeight: "24px",
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
                            Processing Request...
                          </>
                        ) : (
                          "Submit Deletion Request"
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