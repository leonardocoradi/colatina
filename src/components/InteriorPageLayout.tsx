import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const InteriorPageLayout = ({ children, showWhatsApp = true }: { children: ReactNode; showWhatsApp?: boolean }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-16 sm:pt-20">{children}</main>
      <Footer />
      {showWhatsApp && <WhatsAppButton />}
    </div>
  );
};

export default InteriorPageLayout;
