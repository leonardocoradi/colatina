import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5527997357959"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(120,60%,45%)] animate-pulse-glow transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-7 w-7 fill-foreground stroke-foreground sm:h-8 sm:w-8" />
    </a>
  );
};

export default WhatsAppButton;
