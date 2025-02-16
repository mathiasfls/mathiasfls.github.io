import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublicationCard from "@/components/PublicationCard";

const publications = [
  {
    title: "Collaborative journalism and cross-border collaborations for newsafety",
    authors: "Santos, M. F. L., et al.",
    journal: "Journalism",
    year: 2025,
    doi: "https://doi.org/example1",
    scopusRank: "Q1",
  },
  {
    title: "Visual political communication on Instagram",
    authors: "Santos, M. F. L., et al.",
    journal: "EPJ Data Science",
    year: 2024,
    doi: "https://doi.org/example2",
  },
  {
    title: "Bridging the AI Divide: Human and Responsible AI in News and Media Industries",
    authors: "Santos, M. F. L., et al.",
    journal: "Emerging Media",
    year: 2024,
    doi: "https://doi.org/example3",
  },
  {
    title: "Google News Initiative Innovation Challenge in Latin America",
    authors: "Santos, M. F. L., et al.",
    journal: "Journal of Media Business Studies",
    year: 2024,
    doi: "https://doi.org/example4",
    scopusRank: "Q2",
  },
];

export default function Research() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">Research Publications</h1>
        <p className="text-gray-600 mb-8">Publications focusing on journalism, technology, and society.</p>

        <Tabs defaultValue="journal" className="space-y-8">
          <TabsList className="bg-gray-100 text-gray-600">
            <TabsTrigger value="journal">Journal Articles</TabsTrigger>
            <TabsTrigger value="chapters">Book Chapters</TabsTrigger>
          </TabsList>

          <TabsContent value="journal" className="space-y-6">
            {publications.map((pub) => (
              <motion.div
                key={pub.doi}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="chapters">
            <p className="text-gray-600">Book chapters will be listed here.</p>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}
