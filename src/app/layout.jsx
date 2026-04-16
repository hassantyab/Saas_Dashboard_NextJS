import "../styles/globals.css";

export const metadata = {
  title: "Dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-[Inter]">
        {children}
      </body>
    </html>
  );
}