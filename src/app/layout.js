import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Luca Catanese | Social Media Manager",
  description: "Luca Catanese - Esperto Social Media Manager con anni di esperienza nel creare strategie digitali efficaci, migliorare la presenza online e aumentare l'engagement del pubblico. Scopri come posso aiutarti a raggiungere i tuoi obiettivi di marketing attraverso un approccio creativo e data-driven.",
  keywords: "Luca Catanese, Social Media Manager, Digital Marketing, Gestione Social Media, Strategie Social Media, Content Creation, Marketing Digitale, Brand Awareness, Engagement",
  author: "Luca Catanese",
  openGraph: {
    title: "Luca Catanese | Social Media Manager",
    description: "Scopri come Luca Catanese può trasformare la tua presenza sui social media con strategie innovative e un'esperienza consolidata nel settore.",
    url: "https://www.lucacatanese.com", 
    type: "website",
    images: [
      {
        url: "/volto.png", 
        width: 1200,
        height: 630,
        alt: "Luca Catanese - Social Media Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@LucaCatanese", // Sostituisci con l'handle Twitter
    title: "Luca Catanese | Social Media Manager",
    description: "Esperto in strategie di social media marketing, Luca Catanese aiuta i brand a crescere e ad aumentare l'engagement con contenuti mirati e creativi.",
    image: "/volto.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}><Navbar></Navbar>{children}</body>
    </html>
  );
}
