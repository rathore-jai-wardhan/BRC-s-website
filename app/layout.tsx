import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SOCIALS } from '@/sanity/lib/constants';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bikaner Run Club",
  description: "Weekly runs, community, and events by Bikaner Run Club.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="flex items-center justify-between px-6 py-5 border-b border-[var(--surface-border)]">
          <div className="flex items-center gap-3">
            <img src="/BRC_logo.jpeg" alt="Bikaner Run Club" className="h-12 w-12 rounded-full ring-2 ring-[var(--brand)]" />
            <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--foreground)' }}>Bikaner Run Club</span>
          </div>
          <div className="flex gap-6">
            <a href={SOCIALS.instagram} target="_blank" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors">Instagram</a>
            <a href={SOCIALS.whatsapp} target="_blank" className="text-sm text-[var(--muted)] hover:text-[var(--brand)] transition-colors">WhatsApp</a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}