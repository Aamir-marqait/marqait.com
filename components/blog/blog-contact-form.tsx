"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function BlogContactForm({ className = "" }: { className?: string }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Contact form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className={`${className}`}>
        <div
          className="flex flex-col items-start gap-4 rounded-2xl border border-[rgba(255,255,255,0.15)]"
          style={{
            padding: "40px 53px 56px 50px",
            background:
              "linear-gradient(180deg, #05000A 0%, #1B1125 100%), linear-gradient(180deg, rgba(242, 240, 245, 0.10) 0%, #B782FF 100%)",
          }}
        >
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-bold">
              Thank You!
            </h3>
            <p className="text-gray-300 text-base sm:text-lg">
              Your message has been sent successfully. We&apos;ll get back to you
              soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className}`}>
      <div
        className="flex flex-col items-start gap-4 rounded-2xl border border-[rgba(255,255,255,0.15)]"
        style={{
          padding: "40px 53px 56px 50px",
          background:
            "linear-gradient(180deg, #05000A 0%, #1B1125 100%), linear-gradient(180deg, rgba(242, 240, 245, 0.10) 0%, #B782FF 100%)",
        }}
      >
        <div className="mb-8">
          <h3
            className="self-stretch text-white font-bold leading-[44px]"
            style={{
              fontFamily: "Inter",
              fontSize: "24px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "44px",
            }}
          >
            Contact Us Today
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="w-full space-y-6 sm:space-y-8">
          <div className="w-full space-y-1">
            <label
              htmlFor="fullName"
              className="block text-white font-semibold leading-5"
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "20px",
              }}
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter Full Name"
              required
              className="w-full rounded-md border border-[rgba(255,255,255,0.15)] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 text-base sm:text-lg"
              style={{
                padding: "9px 13px",
                // boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                backdropFilter: "blur(7px)",
                color: "white",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            />
          </div>

          <div className="w-full space-y-1">
            <label
              htmlFor="email"
              className="block text-white font-semibold leading-5"
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "20px",
              }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              required
              className="w-full rounded-md border border-[rgba(255,255,255,0.15)] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 text-base sm:text-lg"
              style={{
                padding: "9px 13px",
                // boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                backdropFilter: "blur(7px)",
                color: "white",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            />
          </div>

          <div className="w-full space-y-1">
            <label
              htmlFor="company"
              className="block text-white font-semibold leading-5"
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "20px",
              }}
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Enter Your Company Name"
              required
              className="w-full rounded-md border border-[rgba(255,255,255,0.15)] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 text-base sm:text-lg"
              style={{
                padding: "9px 13px",
                // boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                backdropFilter: "blur(7px)",
                color: "white",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            />
          </div>

          <div className="w-full space-y-1">
            <label
              htmlFor="message"
              className="block text-white font-semibold leading-5"
              style={{
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "20px",
              }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your Message"
              rows={5}
              className="w-full rounded-md border border-[rgba(255,255,255,0.15)] text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 resize-none text-base sm:text-lg"
              style={{
                padding: "9px 13px",
                // boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                backdropFilter: "blur(7px)",
                color: "white",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "24px",
              }}
            />
          </div>

          {/* Submit Button */}
          <div className="">
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer flex items-center justify-center gap-2  px-4 md:px-10 py-3 rounded-2xl border border-[rgba(255,255,255,0.25)] bg-[rgba(140,69,255,0.40)] transition-all duration-200 hover:bg-[rgba(140,69,255,0.50)] hover:border-[rgba(255,255,255,0.35)] font-semibold leading-6"
              style={{
                boxShadow: "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                color: "#F2F0F5",
                fontSize: "15.9px",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
