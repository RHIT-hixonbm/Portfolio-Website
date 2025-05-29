import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Spacer from "@/components/Spacer";

export default function PageSetup({
  children,
  backgroundColor,
}: {
  children: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    
    <div className="flex flex-col min-h-screen" style={{ backgroundColor }}>
      <Navbar />

      {/* Main content area */}
      <div className="relative z-10">
        <main className="flex-1">{children}</main>
      </div>
      
      {/* Spacer to push footer down a bit */}
      <div className="relative z-10">
        <Spacer height="2rem" />
        <Footer />
      </div>
    </div>
  );
}
