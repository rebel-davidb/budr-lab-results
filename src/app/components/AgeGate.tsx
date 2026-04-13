import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const AGE_VERIFICATION_KEY = "budr_age_verified";
const VERIFICATION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export function AgeGate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has verified their age recently
    const verificationData = localStorage.getItem(AGE_VERIFICATION_KEY);
    
    if (verificationData) {
      const { timestamp } = JSON.parse(verificationData);
      const now = Date.now();
      
      // Check if verification is still valid (within 24 hours)
      if (now - timestamp < VERIFICATION_DURATION) {
        setIsVisible(false);
        return;
      }
    }
    
    // Show age gate if no valid verification exists
    setIsVisible(true);
  }, []);

  const handleYes = () => {
    // Save verification with timestamp
    const verificationData = {
      verified: true,
      timestamp: Date.now()
    };
    localStorage.setItem(AGE_VERIFICATION_KEY, JSON.stringify(verificationData));
    setIsVisible(false);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a283c] px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#F5EFE0] p-8 md:p-12 max-w-2xl w-full flex flex-col md:flex-row items-center gap-8"
            style={{ borderRadius: '20px' }}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <ImageWithFallback
                src="https://budrcannabis.com/wp-content/uploads/2023/03/Budr-Logo-Icon_Copper.png"
                alt="BUDR"
                className="h-32 w-32 md:h-40 md:w-40 object-contain"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1a283c] mb-8 uppercase tracking-wide leading-tight">
                Are you at least 21 years old?
              </h2>

              {/* Buttons */}
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={handleYes}
                  className="flex-1 md:flex-initial bg-[#1a283c] text-[#F5EFE0] py-4 px-12 uppercase tracking-wider font-semibold hover:bg-[#2a3a50] transition-colors"
                  style={{ borderRadius: '12px' }}
                >
                  Yes
                </button>
                <button
                  onClick={handleNo}
                  className="flex-1 md:flex-initial bg-[#1a283c] text-[#F5EFE0] py-4 px-12 uppercase tracking-wider font-semibold hover:bg-[#2a3a50] transition-colors"
                  style={{ borderRadius: '12px' }}
                >
                  No
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}