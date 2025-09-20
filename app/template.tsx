"use client";

import { useState } from "react";
import Layout from "../components/Layout";
import WaitlistModal from "../components/waitlist-modal";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  const openWaitlistModal = () => {
    setIsWaitlistModalOpen(true);
  };

  const closeWaitlistModal = () => {
    setIsWaitlistModalOpen(false);
  };

  return (
    <>
      <Layout onOpenWaitlist={openWaitlistModal}>
        {children}
      </Layout>
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={closeWaitlistModal}
      />
    </>
  );
}