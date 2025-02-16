import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface MediaAppearance {
  title: string;
  outlet: string;
  date: string;
  description: string;
  url: string;
  language?: string;
}

const mediaAppearances: MediaAppearance[] = [
  // Example media appearances - we'll need to populate this with actual data
  {
    title: "The Rising Star: Dr. Mathias Felipe de Lima Santos",
    outlet: "The Australian",
    date: "2024",
    description: "Recognition as a rising star in the field of Communication and Cultural Studies by The Australian and The Australian Academy of the Humanities.",
    url: "#",
    language: "English"
  }
];

export default function MediaCoverage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">Media Coverage</h1>
        <p className="text-gray-600 mb-8">Notable mentions and appearances in media outlets covering research, expertise, and contributions to the field.</p>

        <div className="space-y-6">
          {mediaAppearances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <div className="flex items-center gap-2 flex-wrap text-gray-500">
                        <span>{item.outlet}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                        {item.language && (
                          <>
                            <span>•</span>
                            <span>{item.language}</span>
                          </>
                        )}
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline whitespace-nowrap"
                    >
                      <span className="text-sm">Read Article</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
