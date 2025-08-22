/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { X, Mail, ArrowRight, Check } from "lucide-react";
import { trackCTAClick } from "../analytics";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

export default function WaitlistModal({
  isOpen,
  onClose,
  title = "Join the AI Revolution",
  description = "Be among the first to experience the future of AI-driven marketing. Get early access and exclusive benefits.",
}: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackCTAClick("Join Waitlist", "Waitlist Modal");
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("access_key", "0a3a70cf-9b31-4dcd-9b68-934df7b505fa");
      formData.append("email", email);
      formData.append("subject", "New Waitlist Signup");
      formData.append("from_name", "MarQait AI Waitlist");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setIsSubmitting(false);

        // Reset after 3 seconds
        setTimeout(() => {
          setEmail("");
          setIsSubmitted(false);
          onClose();
        }, 3000);
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error: any) {
      setError(error);
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setEmail("");
      setError("");
      setIsSubmitted(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md">
        <div
          className="relative rounded-3xl p-6 sm:p-8 lg:p-10"
          style={{
            background:
              "linear-gradient(135deg, #1a0b2e 0%, #2d1b4e 50%, #1a0b2e 100%)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
          }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-500/15 rounded-full blur-2xl"></div>
          </div>

          {/* Close Button */}
          {!isSubmitting && (
            <button
              onClick={handleClose}
              className="absolute z-2 cursor-pointer top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-gray-800/60 hover:bg-gray-700/80 rounded-full flex items-center justify-center transition-all duration-200 group"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white" />
            </button>
          )}

          {/* Content */}
          <div className="relative space-y-6 sm:space-y-8">
            {!isSubmitted ? (
              <>
                {/* Header */}
                <div className="text-center space-y-3 sm:space-y-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-purple-600/40 to-purple-700/60 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-bold">
                    {title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {description}
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <div className="space-y-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 sm:px-5 sm:py-4 bg-transparent border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/50 transition-all duration-200 text-sm sm:text-base disabled:opacity-50"
                      style={{
                        backgroundColor: "rgba(30, 32, 60, 0.6)",
                      }}
                    />
                    {error && (
                      <p className="text-red-400 text-xs sm:text-sm">{error}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !email.trim()}
                    className="w-full flex items-center bg-[rgba(140,69,255,0.40)] hover:bg-[rgba(140,69,255,0.50)] border border-[rgba(255,255,255,0.25)] text-[#F2F0F5] font-semibold rounded-2xl transition-all duration-200 justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[rgba(140,69,255,0.40)] cursor-pointer
                px-4 py-3 text-sm
                sm:px-5 sm:py-3 sm:text-base
                md:px-6 md:py-4
                lg:px-4 lg:py-4 lg:text-[19.8px] lg:leading-[30px] lg:tracking-[-0.4px]"
                    style={{
                      boxShadow:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1024
                          ? "0px 12px 16px 0px rgba(111, 17, 242, 0.25), 0px 0px 6px 3px rgba(255, 255, 255, 0.25) inset"
                          : "",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting && email.trim()) {
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #C084FC 100%)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting && email.trim()) {
                        e.currentTarget.style.background =
                          "linear-gradient(135deg, #8B5FBF 0%, #B372CF 50%, #D8B4FE 100%)";
                      }
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Joining Waitlist...
                      </>
                    ) : (
                      <>
                        Join Waitlist
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </form>

                {/* Footer */}
                <div className="text-center">
                  <p className="text-gray-400 text-xs sm:text-sm">
                    No spam, ever. Unsubscribe at any time.
                  </p>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="text-center space-y-4 sm:space-y-6 py-4 sm:py-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-white text-2xl sm:text-3xl font-bold">
                    You&apos;re In!
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Welcome to the future of AI marketing. We&apos;ll notify you
                    when early access is available.
                  </p>
                </div>
                <div className="pt-2">
                  <p className="text-purple-400 text-xs sm:text-sm font-medium">
                    Check your email for confirmation
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
