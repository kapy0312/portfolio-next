import { Space_Grotesk, Inter, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display-raw",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-raw",
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-tc-raw",
  display: "swap",
});

export const metadata = {
  title: "Kevin Lai — AI Application & Software Engineer",
  description:
    "Kevin Lai — AI 應用與軟體工程師，PLC／CNC 電控出身。專注於 LLM／RAG 應用、FastAPI、React、AWS，以及製造業的資料收集與 AI 導入。",
  authors: [{ name: "Kevin Lai" }],
  openGraph: {
    title: "Kevin Lai — AI Application & Software Engineer",
    description: "PLC／CNC 電控出身的 AI 應用與軟體工程師，從現場設備一路做到雲端與 LLM。",
    url: "https://kapy0312.github.io/portfolio-next/",
    siteName: "Kevin Lai Portfolio",
    locale: "zh_TW",
    type: "website",
  },
  icons: {
    icon: "/portfolio-next/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="zh-TW"
      className={`${spaceGrotesk.variable} ${inter.variable} ${notoSansTC.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
