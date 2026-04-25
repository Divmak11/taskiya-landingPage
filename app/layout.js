import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://taskiya.in"),
  title: "Taskiya — Project-First Task Manager for iOS & Android",
  description:
    "Organize tasks, notes, and projects in one calm space. Free, offline-first task manager. Download for iOS and Android.",
  keywords: [
    "task manager",
    "todo app",
    "project management",
    "offline task app",
    "free todo app",
    "task organizer",
    "productivity app",
    "ios task manager",
    "android task manager",
    "taskiya",
  ],
  authors: [{ name: "Taskiya" }],
  creator: "Taskiya",
  publisher: "Taskiya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://taskiya.in",
    siteName: "Taskiya",
    title: "Taskiya — Stay Clear. Stay Focused. Stay Done.",
    description:
      "Organize tasks, notes, and projects in one calm space. Free, offline-first. Download now.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Taskiya — Project-First Task Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskiya — Stay Clear. Stay Focused. Stay Done.",
    description:
      "Organize tasks, notes, and projects in one calm space. Free, offline-first.",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://taskiya.in",
  },
};

export const viewport = {
  themeColor: "#5F4EA5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/images/logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Taskiya",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "iOS, Android",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Project-first task and note manager. Organize everything in one calm space.",
              url: "https://taskiya.in",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
