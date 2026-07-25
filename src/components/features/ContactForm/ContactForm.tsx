"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

import { contactFormSchema, type TContactFormValues } from "@/lib/validators";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { TContactFormProps } from "./types";

type TStatus = "idle" | "sending" | "success" | "error";

export function ContactForm({ endpoint }: TContactFormProps) {
  const [status, setStatus] = useState<TStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: TContactFormValues) {
    setStatus("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 rounded-lg border border-border/50 bg-card p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 15 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
          >
            <CheckCircle className="h-6 w-6 text-primary" />
          </motion.div>
          <h3 className="text-lg font-semibold text-foreground">Message sent!</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Thank you for reaching out. I&apos;ll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border border-border/50 bg-card p-6"
        >
          <div className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                autoComplete="name"
                className="transition-all duration-200 focus-visible:shadow-sm focus-visible:shadow-primary/10"
                {...register("name")}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-destructive"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                className="transition-all duration-200 focus-visible:shadow-sm focus-visible:shadow-primary/10"
                {...register("email")}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-destructive"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="What is this about?"
                autoComplete="subject"
                className="transition-all duration-200 focus-visible:shadow-sm focus-visible:shadow-primary/10"
                {...register("subject")}
                aria-invalid={!!errors.subject}
              />
              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-destructive"
                >
                  {errors.subject.message}
                </motion.p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                autoComplete="off"
                className="transition-all duration-200 focus-visible:shadow-sm focus-visible:shadow-primary/10"
                {...register("message")}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-destructive"
                >
                  {errors.message.message}
                </motion.p>
              )}
            </div>

            <AnimatePresence>
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 overflow-hidden rounded-md bg-destructive/10 p-3 text-sm text-destructive"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </AnimatePresence>

            <Button type="submit" disabled={status === "sending"} className="relative">
              {status === "sending" ? (
                <span className="inline-flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                <span className="inline-flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
