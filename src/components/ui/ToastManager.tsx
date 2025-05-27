// components/ToastManager.tsx
import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

export default function ToastManager() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("added")) {
      toast.success("Product added to cart!", {
        duration: 2000,
        style: {
          background: '#4CAF50',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
        icon: '🛒',
      });
      params.delete("added");
      history.replaceState(null, "", `${location.pathname}?${params}`);
    }
    if (params.get("error")) {
      toast.error(decodeURIComponent(params.get("error") || "An error occurred."), {
        duration: 3000,
        style: {
          background: '#f44336',
          color: '#fff',
          padding: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      });
      params.delete("error");
      history.replaceState(null, "", `${location.pathname}?${params}`);
    }
  }, []);

  return (
    <Toaster
      position="top-center"
      toastOptions={{
        className: '',
        style: {
          border: '1px solid #e5e7eb',
          padding: '16px',
          color: '#1f2937',
          background: '#fff',
        },
      }}
    />
  );
}