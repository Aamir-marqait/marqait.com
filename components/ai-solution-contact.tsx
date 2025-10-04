/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import type React from "react";
// import Image from "next/image";

// import { useState } from "react";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     company: "",
//     message: "",
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus({ type: "", message: "" });

//     const formDataToSend = new FormData();
//     formDataToSend.append("access_key", "0a3a70cf-9b31-4dcd-9b68-934df7b505fa");
//     formDataToSend.append("name", formData.fullName);
//     formDataToSend.append("email", formData.email);
//     formDataToSend.append("company", formData.company);
//     formDataToSend.append("message", formData.message);

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formDataToSend,
//       });

//       const data = await response.json();

//       if (data.success) {
//         setSubmitStatus({
//           type: "success",
//           message: "Demo booked successfully! We'll contact you soon.",
//         });
//         setFormData({
//           fullName: "",
//           email: "",
//           company: "",
//           message: "",
//         });
//         setTimeout(() => setSubmitStatus({ type: "", message: "" }), 5000);
//       } else {
//         throw new Error("Form submission failed");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setSubmitStatus({
//         type: "error",
//         message: "❌ There was an error booking the demo. Please try again.",
//       });
//       setTimeout(() => setSubmitStatus({ type: "", message: "" }), 5000);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section
//       className="min-h-screen flex flex-row"
//       style={{
//         background:
//           "linear-gradient(180deg, rgba(2, 1, 3, 0.7) 0%, rgba(96, 42, 154, 0.7) 261.16%)",
//       }}
//     >
//       <div className="sm:px-8 md:px-16 lg:px-44 w-1/2 ">
//         <div className="flex items-center justify-center mb-4 sm:mb-5 min-w-md">
//           <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-r from-transparent to-gray-600"></div>
//           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
//           <span
//             className="text-[#F2F0F5] font-inter font-bold uppercase mx-3 sm:mx-4 md:mx-6
//               text-[10px] leading-[14px] tracking-[0.6px]
//               xs:text-[11px] xs:leading-[15px] xs:tracking-[0.7px]
//               sm:text-xs sm:leading-[16.8px] sm:tracking-[0.8px]
//               md:text-sm md:leading-[19.6px] md:tracking-[1px]"
//           >
//             LET'S CONNECT
//           </span>
//           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
//           <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-gray-600"></div>
//         </div>
//         <h2
//           className="text-white text-center mb-8 min-w-md"
//           style={{
//             fontFamily: "Inter",
//             fontWeight: 600,
//             fontSize: "43.8px",
//             lineHeight: "62.4px",
//             letterSpacing: "0px",
//           }}
//         >
//           Ready to Scale Your{" "}
//           <span style={{ color: "#B372CF" }}>Business?</span>
//         </h2>

//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6 px-8 py-5 rounded-lg min-w-md "
//           style={{
//             background:
//               "linear-gradient(180deg, rgba(0, 0, 0, 0) 29%, rgba(0, 0, 0, 0) 100%)",
//             border: "1px solid #FFFFFF26",
//             boxShadow: "0px 8px 12px 0px #000000",
//             backdropFilter: "blur(200px)",
//           }}
//         >
//           <div>
//             <label
//               htmlFor="fullName"
//               className="block text-white mb-2 text-[14px] leading-[20px] tracking-[0%]"
//               style={{ fontFamily: "Inter", fontWeight: 600 }}
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               placeholder="Enter Full Name"
//               autoComplete="off"
//               className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out text-[16px] leading-[24px] tracking-[0%]"
//               style={{
//                 fontFamily: "Inter",
//                 fontWeight: 400,
//                 fontSize: "15px",
//                 background:
//                   "linear-gradient(360deg, rgba(0, 0, 0, 0.12) 0%, rgba(68, 68, 68, 0.12) 50%, rgba(255, 255, 255, 0.048) 100%)",
//                 border: "1px solid #FFFFFF14",
//                 boxShadow: "0px 0px 16px 1px #FFFFFF14 inset",
//                 backdropFilter: "blur(14px)",
//               }}
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="email"
//               className="block text-white mb-2 text-[14px] leading-[20px] tracking-[0%]"
//               style={{ fontFamily: "Inter", fontWeight: 600 }}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter Your Email"
//               autoComplete="off"
//               className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out text-[16px] leading-[24px] tracking-[0%]"
//               style={{
//                 fontFamily: "Inter",
//                 fontWeight: 400,
//                 fontSize: "15px",
//                 background:
//                   "linear-gradient(360deg, rgba(0, 0, 0, 0.12) 0%, rgba(68, 68, 68, 0.12) 50%, rgba(255, 255, 255, 0.048) 100%)",
//                 border: "1px solid #FFFFFF14",
//                 boxShadow: "0px 0px 16px 1px #FFFFFF14 inset",
//                 backdropFilter: "blur(14px)",
//               }}
//               required
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="company"
//               className="block text-white mb-2 text-[14px] leading-[20px] tracking-[0%]"
//               style={{ fontFamily: "Inter", fontWeight: 600 }}
//             >
//               Company
//             </label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleInputChange}
//               placeholder="Enter Your Company Name"
//               autoComplete="off"
//               className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out text-[16px] leading-[24px] tracking-[0%]"
//               style={{
//                 fontFamily: "Inter",
//                 fontWeight: 400,
//                 fontSize: "15px",
//                 background:
//                   "linear-gradient(360deg, rgba(0, 0, 0, 0.12) 0%, rgba(68, 68, 68, 0.12) 50%, rgba(255, 255, 255, 0.048) 100%)",
//                 border: "1px solid #FFFFFF14",
//                 boxShadow: "0px 0px 16px 1px #FFFFFF14 inset",
//                 backdropFilter: "blur(14px)",
//               }}
//             />
//           </div>

//           <div>
//             <label
//               htmlFor="message"
//               className="block text-white mb-2 text-[14px] leading-[20px] tracking-[0%]"
//               style={{ fontFamily: "Inter", fontWeight: 600 }}
//             >
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               placeholder="Enter your Message"
//               rows={4}
//               autoComplete="off"
//               className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out resize-none text-[16px] leading-[24px] tracking-[0%]"
//               style={{
//                 fontFamily: "Inter",
//                 fontWeight: 400,
//                 fontSize: "15px",
//                 background:
//                   "linear-gradient(360deg, rgba(0, 0, 0, 0.12) 0%, rgba(68, 68, 68, 0.12) 50%, rgba(255, 255, 255, 0.048) 100%)",
//                 border: "1px solid #FFFFFF14",
//                 boxShadow: "0px 0px 16px 1px #FFFFFF14 inset",
//                 backdropFilter: "blur(14px)",
//               }}
//             />
//           </div>

//           {/* Status Message */}
//           {submitStatus.message && (
//             <div
//               className={`p-4 rounded-lg border text-center font-inter text-sm mb-4 ${
//                 submitStatus.type === "success"
//                   ? "bg-green-500/10 border-green-500/30 text-purple-400"
//                   : "bg-red-500/10 border-red-500/30 text-red-400"
//               }`}
//             >
//               {submitStatus.message}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="cursor-pointer w-full transition-all duration-200 justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//             style={{
//               borderRadius: "15px",
//               borderWidth: "1px",
//               paddingTop: "6px",
//               paddingRight: "11px",
//               paddingBottom: "6px",
//               paddingLeft: "11px",
//               background:
//                 "linear-gradient(180deg, rgba(184, 18, 255, 0.85) 0%, rgba(110, 11, 153, 0.85) 100%)",
//               border: "1px solid #E6D4FF99",
//               fontFamily: "Inter",
//               fontWeight: 600,
//               fontSize: "14px",
//               lineHeight: "30px",
//               letterSpacing: "0px",
//               verticalAlign: "middle",
//               color: "#F2F0F5",
//             }}
//           >
//             {isSubmitting ? (
//               <>
//                 <svg
//                   className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Booking Demo...
//               </>
//             ) : (
//               "Book Demo"
//             )}
//           </button>
//         </form>
//       </div>

//       {/* Right side - Image with world map */}

//       <div className="w-1/2 flex items-end justify-end">
//         <Image
//           src="/seo/contact.png"
//           alt="Woman with megaphone ready to scale business"
//           width={1000}
//           height={500}
//           className="max-w-full w-[100%] object-cover"
//         />
//       </div>
//     </section>
//   );
// }

"use client";

import type React from "react";
import Image from "next/image";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "0a3a70cf-9b31-4dcd-9b68-934df7b505fa");
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("company", formData.company);
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
          message: "Demo booked successfully! We'll contact you soon.",
        });
        setFormData({
          fullName: "",
          email: "",
          company: "",
          message: "",
        });
        setTimeout(() => setSubmitStatus({ type: "", message: "" }), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "❌ There was an error booking the demo. Please try again.",
      });
      setTimeout(() => setSubmitStatus({ type: "", message: "" }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col lg:flex-row"
      style={{
        background:
          "linear-gradient(180deg, rgba(2, 1, 3, 0.7) 0%, rgba(96, 42, 154, 0.7) 261.16%)",
      }}
    >
      {/* LEFT SECTION: FORM */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center py-8 sm:py-16 px-4 sm:px-8 md:px-16 lg:px-20">
        <div className="flex items-center justify-center mb-4 sm:mb-5 w-full">
          <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-r from-transparent to-gray-600"></div>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
          <span
            className="text-[#F2F0F5] font-inter font-bold uppercase mx-3 sm:mx-4 md:mx-6
              text-[10px] leading-[14px] tracking-[0.6px]
              xs:text-[11px] xs:leading-[15px] xs:tracking-[0.7px]
              sm:text-xs sm:leading-[16.8px] sm:tracking-[0.8px]
              md:text-sm md:leading-[19.6px] md:tracking-[1px]"
          >
            LET'S CONNECT
          </span>
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
          <div className="flex-1 max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[150px] lg:max-w-[250px] h-px bg-gradient-to-l from-transparent to-gray-600"></div>
        </div>
        <h2
          className="text-white text-center mb-8 w-full max-w-2xl"
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "2.3rem",
            lineHeight: "2.6rem",
            letterSpacing: "0px",
          }}
        >
          Ready to Scale Your{" "}
          <span style={{ color: "#B372CF" }}>Business?</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 w-full max-w-md px-4 sm:px-8 py-5 rounded-lg"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 29%, rgba(0, 0, 0, 0) 100%)",
            border: "1px solid #FFFFFF26",
            boxShadow: "0px 8px 12px 0px #000000",
            backdropFilter: "blur(200px)",
          }}
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-white mb-2 text-[14px] leading-[20px] tracking-[0%]"
              style={{ fontFamily: "Inter", fontWeight: 600 }}
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
              autoComplete="off"
              className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out text-[16px] leading-[24px] tracking-[0%]"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "15px",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.12) 0%, rgba(68, 68, 68, 0.12) 50%, rgba(255, 255, 255, 0.048) 100%)",
                border: "1px solid #FFFFFF14",
                boxShadow: "0px 0px 16px 1px #FFFFFF14 inset",
                backdropFilter: "blur(14px)",
              }}
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-white mb-2 text-[14px] leading-[20px] tracking-[0%]"
              style={{ fontFamily: "Inter", fontWeight: 600 }}
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
              autoComplete="off"
              className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out text-[16px] leading-[24px] tracking-[0%]"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "15px",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.12) 0%, rgba(68, 68, 68, 0.12) 50%, rgba(255, 255, 255, 0.048) 100%)",
                border: "1px solid #FFFFFF14",
                boxShadow: "0px 0px 16px 1px #FFFFFF14 inset",
                backdropFilter: "blur(14px)",
              }}
              required
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-white mb-2 text-[14px] leading-[20px] tracking-[0%]"
              style={{ fontFamily: "Inter", fontWeight: 600 }}
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
              autoComplete="off"
              className="w-full px-4 py-2 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out text-[16px] leading-[24px] tracking-[0%]"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "15px",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.12) 0%, rgba(68, 68, 68, 0.12) 50%, rgba(255, 255, 255, 0.048) 100%)",
                border: "1px solid #FFFFFF14",
                boxShadow: "0px 0px 16px 1px #FFFFFF14 inset",
                backdropFilter: "blur(14px)",
              }}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white mb-2 text-[14px] leading-[20px] tracking-[0%]"
              style={{ fontFamily: "Inter", fontWeight: 600 }}
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
              autoComplete="off"
              className="w-full px-4 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all duration-300 ease-out resize-none text-[16px] leading-[24px] tracking-[0%]"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "15px",
                background:
                  "linear-gradient(360deg, rgba(0, 0, 0, 0.12) 0%, rgba(68, 68, 68, 0.12) 50%, rgba(255, 255, 255, 0.048) 100%)",
                border: "1px solid #FFFFFF14",
                boxShadow: "0px 0px 16px 1px #FFFFFF14 inset",
                backdropFilter: "blur(14px)",
              }}
            />
          </div>

          {/* Status Message */}
          {submitStatus.message && (
            <div
              className={`p-4 rounded-lg border text-center font-inter text-sm mb-4 ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border-green-500/30 text-purple-400"
                  : "bg-red-500/10 border-red-500/30 text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="cursor-pointer w-full transition-all duration-200 justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              borderRadius: "15px",
              borderWidth: "1px",
              paddingTop: "6px",
              paddingRight: "11px",
              paddingBottom: "6px",
              paddingLeft: "11px",
              background:
                "linear-gradient(180deg, rgba(184, 18, 255, 0.85) 0%, rgba(110, 11, 153, 0.85) 100%)",
              border: "1px solid #E6D4FF99",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "30px",
              letterSpacing: "0px",
              verticalAlign: "middle",
              color: "#F2F0F5",
            }}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
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
                Booking Demo...
              </>
            ) : (
              "Book Demo"
            )}
          </button>
        </form>
      </div>

      {/* RIGHT SECTION: IMAGE */}
      <div className="w-full lg:w-1/2 flex items-end justify-end">
        <Image
          src="/seo/contact.png"
          alt="Woman with megaphone ready to scale business"
          width={1000}
          height={500}
          className="max-w-full w-full object-cover h-[260px] sm:h-[350px] md:h-[400px] lg:h-auto"
          priority
        />
      </div>
    </section>
  );
}
