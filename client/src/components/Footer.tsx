import { useLocation } from "wouter";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  const [location] = useLocation();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <img 
              src="https://www.mq.edu.au/__data/assets/image/0024/1215567/MQ-Logo-Standard.svg" 
              alt="Macquarie University"
              className="h-12"
            />
            <img 
              src="https://www.unifesp.br/reitoria/dci/images/docs/manual_da_marca/assinatura_marca/marca_unifespArtboard_1_copy_3.png" 
              alt="Federal University of São Paulo"
              className="h-12"
            />
          </div>
          <SocialIcons />
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dr. Mathias Felipe de Lima Santos
          </div>
        </div>
      </div>
    </footer>
  );
}
