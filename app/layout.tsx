import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'IELTS Writing AI Helper',
  description: 'Improve and grade your IELTS writing skills using AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}