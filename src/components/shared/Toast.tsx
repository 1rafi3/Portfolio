"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle } from "lucide-react";

interface IToast {
  id: string;
  message: string;
  type?: "info" | "error";
}

const listeners: Set<(toast: IToast) => void> = new Set();

export function showToast(message: string, type?: "info" | "error") {
  const toast: IToast = { id: crypto.randomUUID(), message, type };
  listeners.forEach((fn) => fn(toast));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<IToast[]>([]);

  useEffect(() => {
    function handle(toast: IToast) {
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== toast.id));
      }, 5000);
    }
    listeners.add(handle);
    return () => { listeners.delete(handle); };
  }, []);

  function dismiss(id: string) {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm ${
              toast.type === "error"
                ? "border-destructive/30 bg-destructive/10 text-destructive"
                : "border-border/50 bg-card text-foreground"
            }`}
          >
            {toast.type === "error" && (
              <AlertCircle className="h-4 w-4 shrink-0" />
            )}
            <p className="text-sm">{toast.message}</p>
            <button
              onClick={() => dismiss(toast.id)}
              className="ml-2 shrink-0 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100"
              aria-label="Dismiss"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
