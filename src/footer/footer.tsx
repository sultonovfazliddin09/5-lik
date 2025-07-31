import Modal from "@/modal/modal";
import { useState } from "react";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { MessageCircle } from "lucide-react";
import ChatModal from "@/modal/modal";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [chatModalOpen, setChatModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-black text-white text-sm py-10 px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-10">
          <div className="space-y-2 col-span-1">
            <h4 className="font-semibold">FIND A STORE</h4>
            <p className="font-semibold">SIGN UP FOR EMAIL</p>
          </div>

          <div className="space-y-2 col-span-1">
            <h4 className="font-semibold">GET HELP</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Order Status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="space-y-2 col-span-1">
            <h4 className="font-semibold">ABOUT NIKE</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Become a Member</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>

          <div className="space-y-2 col-span-1">
            <h4 className="font-semibold">NIKE APPS</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Nike Run Club</li>
              <li>Nike Training Club</li>
            </ul>
          </div>

          <div className="flex items-center justify-start md:justify-end gap-4 text-lg">
            <FaTwitter />
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 text-gray-400 text-xs gap-4 w-full">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setModalOpen(true)}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:scale-110 transition"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
                alt="Nike logo"
                className="h-4"
              />
            </button>
            <span>Kuwait</span>
            <span className="text-white">|</span>
            <span>العربية</span>
          </div>

          <div className="flex flex-wrap gap-6 mt-2 md:mt-0 items-center">
            <span>Terms of Use</span>
            <span>Terms and Conditions of Sale</span>
            <span>Company Details</span>
            <span>Privacy & Cookie Policy</span>

            <button
              onClick={() => setChatModalOpen(true)}
              className="ml-4 bg-white text-black p-2 rounded-full shadow hover:scale-110 transition"
              title="Chat with us"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </footer>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <ChatModal
        isOpen={chatModalOpen}
        onClose={() => setChatModalOpen(false)}
      />
    </>
  );
}
