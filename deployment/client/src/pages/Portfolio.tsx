import { motion } from "framer-motion";
import PortfolioCard from "@/components/PortfolioCard";

const articles = [
  {
    title: "Example Feature Article 1",
    publication: "Major News Outlet",
    date: "2023",
    description: "An investigative piece on digital transformation in newsrooms.",
    link: "https://example.com/article1",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Example Feature Article 2",
    publication: "Another News Outlet",
    date: "2022",
    description: "Data-driven analysis of media consumption patterns.",
    link: "https://example.com/article2",
    image: "https://placehold.co/600x400",
  },
];

export default function Portfolio() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-3xl font-bold mb-8">Journalism Portfolio</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <motion.div
              key={article.link}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <PortfolioCard {...article} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
