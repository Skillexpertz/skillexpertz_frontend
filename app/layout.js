import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillExpertz – Learn Skills That Matter",
  description:
    "SkillExpertz offers high-quality online courses designed to help you master in-demand skills. Learn from industry experts, gain practical knowledge, and advance your career at your own pace.",
  keywords: [
    "online courses",
    "SkillExpertz",
    "learn online",
    "professional skills",
    "career development",
    "skill building",
    "certification courses",
    "e-learning"
  ],
  authors: [{ name: "Samaresh Das", url: "https://portfolio-2-tau-sable.vercel.app/" }],
  creator: "Samaresh Das",
  openGraph: {
    title: "SkillExpertz – Learn Skills That Matter",
    description:
      "Join SkillExpertz to access high-quality courses from industry experts. Gain practical skills, earn certifications, and boost your career opportunities.",
    url: "https://skillexpertz.com/", // Replace with your actual site URL
    siteName: "SkillExpertz",
    images: [
      {
        url: "https://your-app.vercel.app/og-image.png", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "SkillExpertz Course Platform Preview"
      }
    ],
    type: "website"
  }
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
