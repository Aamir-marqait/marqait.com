import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Data Deletion Requests - Marqait AI",
  description: "Request deletion of your personal data from Marqait. We take your privacy seriously and will process your request within 30 business days in accordance with applicable data protection laws.",
  keywords: "data deletion, user data deletion, privacy rights, GDPR, data protection, Marqait AI",
  alternates: {
    canonical: "https://www.marqait.com/user-data-deletion",
  },
  openGraph: {
    title: "User Data Deletion Requests - Marqait AI",
    description: "Request deletion of your personal data from Marqait. We take your privacy seriously and will process your request within 30 business days in accordance with applicable data protection laws.",
    url: "https://www.marqait.com/user-data-deletion",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "User Data Deletion Requests - Marqait AI",
    description: "Request deletion of your personal data from Marqait. We take your privacy seriously and will process your request within 30 business days in accordance with applicable data protection laws.",
  },
};

export default function UserDataDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}