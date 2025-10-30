import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Lanora Electroplaters | Precision Industrial Coatings",
  description: "Electroplating specialists for automotive and industrial manufacturing sectors.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-800">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
