import { useEffect, useRef, useState } from "react";

export default function SlidingToastPanel() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error" | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("added")) {
      setMessage("🛒 Product added to cart!");
      setType("success");
      setOpen(true);
      params.delete("added");
      history.replaceState(null, "", `${location.pathname}?${params}`);
    }

    if (params.get("error")) {
      const errorMsg = decodeURIComponent(params.get("error") || "An error occurred.");
      setMessage(errorMsg);
      setType("error");
      setOpen(true);
      params.delete("error");
      history.replaceState(null, "", `${location.pathname}?${params}`);
    }
  }, []);

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (open && panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Semi-transparent backdrop */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Sliding Panel */}
      <div
        ref={panelRef}
        className={`
          relative w-72 h-full p-6 shadow-lg transition-transform duration-300
          ${type === "success" ? "bg-green-500 text-white" : ""}
          ${type === "error" ? "bg-red-500 text-white" : ""}
        `}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">
            {type === "success" ? "Success" : "Error"}
          </h3>
          <button onClick={() => setOpen(false)} className="text-xl font-bold">
            &times;
          </button>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
}