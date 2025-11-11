import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppWidget = () => {
  const phoneNumber = "+61451309844"; // Replace with actual WhatsApp number
  const message = "Hello! I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group animate-bounce hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-[#25D366] hover:bg-[#20BD5A] text-white pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppWidget;
