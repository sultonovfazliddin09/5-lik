import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ChatModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    orderNumber: "",
    preferredLanguage: "English",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = "8181527285:AAHbwjuU715Wlp9KgM5Oe3phM3pwRl42FPY";
    const chatId = "8092169481";
    const text = `🛒 New Chat Request:\n
👤 Name: ${form.firstName} ${form.lastName}
📧 Email: ${form.email}
📱 Mobile: ${form.mobile}
🧾 Order Number: ${form.orderNumber}
🌐 Language: ${form.preferredLanguage}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
    });

    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white rounded-lg w-[90%] max-w-md p-6 overflow-y-auto max-h-[90vh] relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Chat</h2>
              <button onClick={onClose}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  name="firstName"
                  required
                  placeholder="First Name*"
                  className="w-1/2 border p-2 rounded"
                  onChange={handleChange}
                />
                <input
                  name="lastName"
                  required
                  placeholder="Last Name*"
                  className="w-1/2 border p-2 rounded"
                  onChange={handleChange}
                />
              </div>
              <input
                name="email"
                type="email"
                required
                placeholder="Email*"
                className="w-full border p-2 rounded"
                onChange={handleChange}
              />
              <input
                name="mobile"
                required
                placeholder="Mobile*"
                className="w-full border p-2 rounded"
                onChange={handleChange}
              />
              <input
                name="orderNumber"
                placeholder="Order Number"
                className="w-full border p-2 rounded"
                onChange={handleChange}
              />
              <select
                name="preferredLanguage"
                required
                className="w-full border p-2 rounded"
                onChange={handleChange}
              >
                <option>English</option>
                <option>Русский</option>
                <option>Oʻzbek</option>
                <option>Türkçe</option>
              </select>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded font-semibold hover:bg-gray-800"
              >
                Start Chatting
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
