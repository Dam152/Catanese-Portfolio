import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Giacomo Roberti | Voice Actor",
  description:
    "Giacomo Roberti - Attore di voce professionista con esperienza nel doppiaggio, pubblicità, videogiochi e narrazione. La sua voce versatile e coinvolgente dà vita a personaggi e progetti, offrendo performance di alta qualità per ogni esigenza di produzione. Scopri come la sua voce può elevare il tuo progetto a un nuovo livello.",
  keywords: [
    "Giacomo Roberti",
    "voice actor",
    "doppiatore",
    "attore di voce",
    "doppiaggio",
    "pubblicità",
    "videogiochi",
    "narrazione",
    "attore professionista",
  ],
  author: "Giacomo Roberti",
  openGraph: {
    title: "Giacomo Roberti | Voice Actor",
    description:
      "Giacomo Roberti - Attore di voce con esperienza nel doppiaggio, pubblicità, videogiochi e narrazione. Voce versatile e coinvolgente per ogni progetto.",
    type: "website",
    url: "https://www.giacomoroberti.com", // Cambia con l'URL reale
    images: [
      {
        url: "/volto.png", // Cambia con l'URL dell'immagine
        width: 1200,
        height: 630,
        alt: "Giacomo Roberti Voice Actor",
      },
    ],
    locale: "it_IT",
  },
  twitter: {
    card: "summary_large_image",
    site: "@giacomoroberti", // Cambia con l'handle Twitter
    title: "Giacomo Roberti | Voice Actor",
    description:
      "Attore di voce professionista con esperienza nel doppiaggio, pubblicità, videogiochi e narrazione. Scopri come Giacomo Roberti può dare voce al tuo progetto.",
    image: "https://www.giacomoroberti.com/profile.jpg", // Cambia con l'URL dell'immagine
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
