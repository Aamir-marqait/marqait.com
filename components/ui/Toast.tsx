import { useState, useEffect } from "react";

interface ToastProps {
  show: boolean;
  onClose: () => void;
  message: string;
  duration?: number;
}

const Toast = ({ show, onClose, message, duration = 3000 }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 300); // Wait for fade out animation
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show && !isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transform transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-[#1A0B29] border border-[rgba(255,255,255,0.25)] rounded-lg shadow-lg p-4 min-w-[300px] max-w-[400px]">
        <div className="flex items-center justify-between">
          <p className="text-white text-sm font-medium">{message}</p>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(onClose, 300);
            }}
            className="text-white/60 hover:text-white ml-4 text-lg leading-none"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;