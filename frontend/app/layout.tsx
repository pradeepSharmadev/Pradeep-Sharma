import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--serif-font",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--sans-font",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pradeep-sharma.vercel.app"),

  title: {
    default:
      "Pradeep Sharma | Full Stack Developer in India | React, Next.js, Node.js Expert",
    template: "%s | Pradeep Sharma",
  },

  description:
    "Pradeep Sharma is a Full Stack Developer based in India specializing in React.js, Next.js, Node.js, Express, MongoDB, MySQL, and Python. Expert in Frontend, Backend, UI/UX Design, and scalable web applications for global clients.",

  keywords: [
    // Primary
    "Pradeep Sharma",
    "Full Stack Developer India",
    "Frontend Developer India",
    "Backend Developer India",
    "UI UX Designer India",

    // Technologies
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MongoDB Developer",
    "MySQL Developer",
    "Python Developer",
    "JavaScript Developer",
    "HTML CSS Developer",

    // Stack targeting
    "MERN Stack Developer",
    "Full Stack JavaScript Developer",
    "Web Developer India",
    "Hire Full Stack Developer India",
    "Remote Developer India",
  ],

  authors: [{ name: "Pradeep Sharma" }],
  creator: "Pradeep Sharma",
  publisher: "Pradeep Sharma",

  alternates: {
    canonical: "https://pradeep-sharma.vercel.app",
  },

  openGraph: {
    title:
      "Pradeep Sharma | Full Stack Developer (React, Next.js, Node.js) | India",
    description:
      "India-based Full Stack Developer building scalable, modern web applications using React, Next.js, Node.js, Express, MongoDB, MySQL, and Python. Available for global projects.",
    url: "https://pradeep-sharma.vercel.app",
    siteName: "Pradeep Sharma Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pradeep Sharma Full Stack Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pradeep Sharma | Full Stack Developer in India",
    description:
      "React, Next.js, Node.js, Express, MongoDB & Python Developer. UI/UX focused web solutions for global clients.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${jakarta.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&amp;family=Plus+Jakarta+Sans:wght@200;300;400;500;600&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pradeep Sharma",
              jobTitle: "Full Stack Developer",
              address: {
                "@type": "PostalAddress",
                addressCountry: "India",
              },
              url: "https://pradeep-sharma.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/pradeepsharma01",
                "https://github.com/pradeepSharmadev",
              ],
              knowsAbout: [
                "JavaScript",
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "MySQL",
                "Python",
                "UI/UX Design",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
