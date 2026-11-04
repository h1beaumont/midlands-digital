import { createRoot } from "react-dom/client";
import { onCLS, onLCP, onFCP, onTTFB, onINP } from 'web-vitals';

// Import Inter font weights from @fontsource
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import App from "./App";
import "./index.css";

// Real User Monitoring (RUM) for Core Web Vitals
function sendToAnalytics(metric: any) {
  // Log to console in development, send to analytics in production
  if (import.meta.env.DEV) {
    console.log('[Web Vitals]', metric.name, metric.value, metric.rating);
  } else {
    // In production, send to your analytics endpoint
    const body = JSON.stringify(metric);
    const blob = new Blob([body], { type: 'application/json' });
    
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/analytics/vitals', blob);
    } else {
      fetch('/api/analytics/vitals', { 
        body, 
        method: 'POST', 
        keepalive: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  }
}

// Monitor Core Web Vitals
onCLS(sendToAnalytics);
onLCP(sendToAnalytics);
onFCP(sendToAnalytics);
onTTFB(sendToAnalytics);
onINP(sendToAnalytics);

createRoot(document.getElementById("root")!).render(<App />);
