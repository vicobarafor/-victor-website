import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dr Victor Obarafor | Privacy-Preserving ML Researcher",
  description:
    "Personal website of Dr Victor Obarafor, a Privacy-Preserving Machine Learning Researcher focused on federated learning, robust optimization, reproducible ML systems, and research-grade implementation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}