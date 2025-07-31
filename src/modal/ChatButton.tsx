"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatModal from "./chatmodal";

export default function ChatButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        <MessageCircle className="w-5 h-5" />
      </button>

      <ChatModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
