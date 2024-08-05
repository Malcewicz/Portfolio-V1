"use client";

import "@/app/_styles/update_dialog.css";
import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import ExternalLink from "@/app/_components/external_link";

const UpdateDialog = () => {
  const dialog = useRef<HTMLDivElement>(null);

  // Close dialog
  const closeDialog = () => {
    if (dialog.current) {
      dialog.current.style.display = "none";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      id="update-dialog"
      className="dialog"
      ref={dialog}
    >
      <div className="header">
        <h4 className="title">A new version of this portfolio is available!</h4>
        <AiOutlineClose onClick={closeDialog} size={22} />
      </div>
      <p className="subtitle">
        I'm excited to announce that a new version of this website is now
        available! It's a complete redesign and includes all the updated
        information about me and more. Please visit the new site for the latest
        updates and features.
      </p>
      <div className="btn">
        <Link href="https://v2.bernatowicz.dev/">
          Check it out
          <ExternalLink />
        </Link>
      </div>
    </motion.div>
  );
};

export default UpdateDialog;
