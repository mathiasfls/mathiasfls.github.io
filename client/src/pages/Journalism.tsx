import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Amazon Underworld",
    publication: "InfoAmazonia, La Liga Contra el Silencio, Armando.info",
    date: "August 2023",
    description: "An investigation into the environmental and social impacts of armed groups in Amazon.",
    link: "#",
    image: "/amazon-underworld.jpg"
  },
  {
    title: "Big tech is painting itself as journalism's savior. We should tread carefully",
    publication: "NiemanLab",
    date: "September 2024",
    description: "How big tech's "philanthrocapitalism" could be reshaping the news industry.",
    link: "#",
    image: "/google-office.jpg"
  }
];

export default function Journalism() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">Journalism Portfolio</h1>
        <p className="text-gray-600 mb-8">Featured articles and investigations from my work as a journalist.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{article.publication} • {article.date}</p>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-primary hover:text-primary/90 flex items-center gap-2"
                    asChild
                  >
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      View Publication
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
