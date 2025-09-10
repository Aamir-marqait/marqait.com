import { useState, forwardRef, Ref } from "react";
import Image from "next/image";
import { trackCTAClick } from "../../analytics";

const ContactFormSection = forwardRef<HTMLElement>((_props, ref: Ref<HTMLElement>) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    trackCTAClick('Book Demo', 'Contact Form Section');
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "0a3a70cf-9b31-4dcd-9b68-934df7b505fa");
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: 'Demo booked successfully! We\'ll contact you soon.' 
        });
        setFormData({
          fullName: "",
          email: "",
          company: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({ 
        type: 'error', 
        message: '❌ There was an error booking the demo. Please try again.' 
      });
      setTimeout(() => setSubmitStatus({ type: '', message: '' }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="relative py-16 sm:py-20 lg:py-12 xl:py-20 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/svg/contactBackground.svg"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.8 }}
          priority
        />
      </div>

      {/* Ellipse at top center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 z-5">
        <Image
          src="/svg/ellipse.svg"
          alt=""
          width={6000}
          height={2800}
          className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[6000px] xl:h-[2800px]"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="flex-1 max-w-[100px] sm:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-r from-transparent to-purple-400/60"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-[#F2F0F5] font-inter text-xs sm:text-sm font-bold leading-[16.8px] sm:leading-[19.6px] tracking-[0.8px] sm:tracking-[1px] uppercase mx-4 sm:mx-6">
              LET&apos;S CONNECT
            </span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="flex-1 max-w-[100px] sm:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-purple-400/60"></div>
          </div>

          {/* Main Heading */}
          <h2
            className="self-stretch text-center font-inter text-[43.8px] font-semibold leading-[62.4px] max-w-md mx-auto mb-6 sm:mb-8"
            style={{
              background: "linear-gradient(183deg, #FFF 2.18%, #B372CF 97.82%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ready to Scale Your Business?
          </h2>

          {/* Subtitle */}
          <p className="self-stretch text-center font-inter text-[20px] font-medium leading-[27px] tracking-[-0.5px] max-w-[30rem] mx-auto text-[rgba(255,255,255,0.90)]">
            Tell us about your business goals, and we&apos;ll craft your AI-powered
            growth plan within one business day.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div
            className="p-6 rounded-2xl"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 29%, rgba(0, 0, 0, 0.00) 100%)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-6 sm:space-y-8"
            >
              {/* Full Name Field */}
              <div className="space-y-3">
                <label
                  htmlFor="fullName"
                  className="block text-[#FFF] font-inter text-[14px] font-semibold leading-[20px]"
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
                  className="w-full flex px-[13px] py-[9px] items-center self-stretch rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none font-inter text-[16px] font-normal leading-[24px]"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    // boxShadow:
                    //   "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                    backdropFilter: "blur(7px)",
                  }}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-3">
                <label
                  htmlFor="email"
                  className="block text-[#FFF] font-inter text-[14px] font-semibold leading-[20px]"
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
                  className="w-full flex px-[13px] py-[9px] items-center self-stretch rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none font-inter text-[16px] font-normal leading-[24px]"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    // boxShadow:
                    //   "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                    backdropFilter: "blur(7px)",
                  }}
                />
              </div>

              {/* Company Field */}
              <div className="space-y-3">
                <label
                  htmlFor="company"
                  className="block text-[#FFF] font-inter text-[14px] font-semibold leading-[20px]"
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
                  className="w-full flex px-[13px] py-[9px] items-center self-stretch rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none font-inter text-[16px] font-normal leading-[24px]"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    // boxShadow:
                    //   "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                    backdropFilter: "blur(7px)",
                  }}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="block text-[#FFF] font-inter text-[14px] font-semibold leading-[20px]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your Message"
                  rows={4}
                  className="w-full flex px-[13px] py-[9px] items-center self-stretch rounded-md bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none font-inter text-[16px] font-normal leading-[24px]"
                  style={{
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    // boxShadow:
                    //   "0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset",
                    backdropFilter: "blur(7px)",
                  }}
                />
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div className={`p-4 rounded-lg border text-center font-inter text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border-green-500/30 text-purple-400' 
                    : 'bg-red-500/10 border-red-500/30 text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 px-4 py-3 text-sm sm:px-5 sm:py-3 sm:text-base md:px-6 md:py-4 lg:px-4 lg:py-4 lg:text-[19.8px] lg:leading-[30px] lg:tracking-[-0.4px] w-full disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  boxShadow: "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset"
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Booking Demo...
                  </>
                ) : (
                  "Book Demo"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

ContactFormSection.displayName = 'ContactFormSection';

export default ContactFormSection;
