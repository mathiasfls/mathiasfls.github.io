import { useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="flex flex-col items-center space-y-6">
          <h3 className="text-lg font-medium text-gray-500">Affiliated Institutions</h3>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8 text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎓</span>
              <span>Macquarie University</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🏛️</span>
              <span>Federal University of São Paulo (Unifesp)</span>
            </div>
          </div>
          <div className="text-sm text-gray-500">
            © 2025 Dr. Mathias Felipe de Lima Santos. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}