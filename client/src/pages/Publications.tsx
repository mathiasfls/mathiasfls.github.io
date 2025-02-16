import { motion } from "framer-motion";
import PublicationCard from "@/components/PublicationCard";

const publications = [
  {
    title: "Example Publication Title 1",
    authors: "Santos, M. F. L., et al.",
    journal: "Digital Journalism",
    year: 2023,
    doi: "https://doi.org/10.1000/example1",
    scopusRank: "Q1",
    journalLogo: "https://placehold.co/100x100",
  },
  {
    title: "Example Publication Title 2",
    authors: "Santos, M. F. L., et al.",
    journal: "Journalism Studies",
    year: 2022,
    doi: "https://doi.org/10.1000/example2",
    scopusRank: "Q1",
    journalLogo: "https://placehold.co/100x100",
  },
];

export default function Publications() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-3xl font-bold mb-8">Research Publications</h1>
        
        <div className="grid gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.doi}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <PublicationCard {...pub} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
