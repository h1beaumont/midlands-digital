import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Shield, X } from "lucide-react";
import { useState, useEffect } from "react";

const STORAGE_KEY = "guarantee-bar-dismissed";

export function GuaranteeBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setIsDismissed(false);
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  if (isDismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop Sticky Guarantee Bar */}
          <motion.div
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            exit={{ y: -60 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-[60] hidden md:block"
          >
            <div className="bg-chart-4 text-white shadow-lg">
              <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex items-center justify-center gap-3 py-2.5 relative">
                  <Shield className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-sm font-medium">
                    <span className="font-bold">30-Day Guarantee:</span> First Measurable Win in 30 Days—Or We Keep Working at No Cost
                  </p>
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <button
                    onClick={handleDismiss}
                    className="absolute right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Dismiss guarantee banner"
                    data-testid="button-dismiss-guarantee"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Sticky Guarantee Bar */}
          <motion.div
            initial={{ y: -60 }}
            animate={{ y: 0 }}
            exit={{ y: -60 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 right-0 z-[60] md:hidden"
          >
            <div className="bg-chart-4 text-white shadow-lg">
              <div className="px-4 py-2.5 relative">
                <div className="flex items-center justify-center gap-2 text-center pr-6">
                  <Shield className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <p className="text-xs font-medium">
                    <span className="font-bold">30-Day Guarantee</span> • Measurable Win or No Cost
                  </p>
                </div>
                <button
                  onClick={handleDismiss}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Dismiss guarantee banner"
                  data-testid="button-dismiss-guarantee-mobile"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Spacer to prevent content from being hidden under the bar */}
          <div className="h-[44px] md:h-[48px]" />
        </>
      )}
    </AnimatePresence>
  );
}
