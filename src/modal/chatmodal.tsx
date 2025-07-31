"use client";

import { useState } from "react";
import { X, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ChatModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    orderNumber: "",
    language: "English",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToTelegram = async () => {
    const message = `
📩 *New Chat Form Submission*:
👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Mobile: ${formData.mobile}
🔢 Order #: ${formData.orderNumber}
🌐 Language: ${formData.language}
    `;
    await fetch(
      `https://api.telegram.org/bot8181527285:AAHbwjuU715Wlp9KgM5Oe3phM3pwRl42FPY/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "8092169481",
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div className="bg-white rounded-xl p-4 w-[90%] max-w-sm overflow-y-auto max-h-[90vh] relative">
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-2 mb-4">
              <h3 className="font-semibold text-lg">Chat</h3>
              <div className="flex items-center gap-2">
                <button className="hover:opacity-70">
                  <Minus className="w-5 h-5" />
                </button>
                <button onClick={onClose} className="hover:opacity-70">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="space-y-3">
              <div className="flex gap-2">
                <input
                  name="firstName"
                  placeholder="First Name*"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="border p-2 rounded w-1/2"
                />
                <input
                  name="lastName"
                  placeholder="Last Name*"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="border p-2 rounded w-1/2"
                />
              </div>

              <input
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              <input
                name="mobile"
                placeholder="Mobile*"
                value={formData.mobile}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />
              <input
                name="orderNumber"
                placeholder="Order Number"
                value={formData.orderNumber}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              />

              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="border p-2 rounded w-full"
              >
                <option>English</option>
                <option>Русский</option>
                <option>O'zbek</option>
                <option>Türkçe</option>
              </select>
            </div>

            <button
              onClick={sendToTelegram}
              className="bg-black text-white w-full py-3 rounded-full mt-6 font-semibold"
            >
              Start Chatting
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
