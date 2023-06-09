import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";

function Modal({ isOpen, setIsOpen }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    setIsBrowser(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const content = isOpen ? (
    <div
      onClick={closeModal}
      className="absolute w-screen h-full max-w-full flex justify-center items-center"
    >
      <div className="modal-backdrop" />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={handleModalClick}
        className="  p-10 flex flex-col fixed space-y-2 items-center justify-center bg-white rounded-xl flex-shrink-0 z-[60]"
      >
        <div className="">
          <InlineWidget url="https://calendly.com/trpk/20?hide_gdpr_banner=1&background_color=b0c4cd&primary_color=ffffff&month=2023-06" />
        </div>
      </motion.div>
    </div>
  ) : null;
  if (isBrowser)
    return createPortal(content, document.getElementById("modal-root"));
  else return null;
}

export default Modal;
