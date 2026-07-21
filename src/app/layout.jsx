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
  title: "Kevin Lai — CIM × Industrial AI Engineer",
  description:
    "Kevin Lai — CIM 工程師 × 工業 AI 全端開發。跨足 OT/IT 雙域的工程師，專注於 Siemens SINUMERIK、OPC-UA、FastAPI、React 與 AI 整合。",
  authors: [{ name: "Kevin Lai" }],
  openGraph: {
    title: "Kevin Lai — CIM × Industrial AI Engineer",
    description: "跨足 OT/IT 雙域的工程師，專注於工業自動化與 AI 全端開發。",
    url: "https://kapy0312.github.io/portfolio-web/",
    siteName: "Kevin Lai Portfolio",
    locale: "zh_TW",
    type: "website",
  },
  icons: {
    icon: "/portfolio-web/favicon.svg",
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
