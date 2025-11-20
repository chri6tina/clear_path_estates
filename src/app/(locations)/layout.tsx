import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-[#1f1f1f]">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

