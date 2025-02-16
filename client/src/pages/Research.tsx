import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublicationCard from "@/components/PublicationCard";

const journalArticles = [
  {
    title: "Collaborative journalism and cross-border collaborations for newsafety",
    authors: "Mesquita, L., de-Lima-Santos, M.F., & Nicoletti, J.",
    journal: "Journalism",
    year: 2025,
    doi: "https://doi.org/10.1177/14648849241312830",
    scopusRank: "Q1",
    description: "Navigating security and solidarity mechanisms in cooperative practices in Latin American news media.",
  },
  {
    title: "Visual political communication on Instagram",
    authors: "de-Lima-Santos, M.F. Gonçalves, I., Quiles, M.G. et al.",
    journal: "EPJ Data Science",
    year: 2024,
    doi: "https://doi.org/10.1140/epjds/s13688-024-00502-0",
    scopusRank: "Q1",
    description: "A comparative study of Brazilian presidential elections.",
  },
  {
    title: "Bridging the AI Divide: Human and Responsible AI in News and Media Industries",
    authors: "de-Lima-Santos, M.F. & Jamil, S.",
    journal: "Emerging Media",
    year: 2024,
    doi: "https://doi.org/10.1177/27523543241291229",
    description: "Research on responsible AI implementation in news and media industries.",
  }
];

const bookChapters = [
  {
    title: "Brazil",
    authors: "de-Lima-Santos, M.F.",
    journal: "Media Compass",
    year: 2024,
    doi: "https://doi.org/10.1002/9781394196272.ch20",
    editors: "A. K. Schapals & C. Pentzold"
  },
  {
    title: "Setting an Agenda to Tackle Environmental Issues with Data and Collaboration",
    authors: "de-Lima-Santos, M.F.",
    journal: "Journalism and Reporting Synergistic Effects of Climate Change",
    year: 2024,
    doi: "https://doi.org/10.4324/9781032627526-17",
    editors: "Gutsche Jr., R. E. & J. Pinto",
    pages: "304–324"
  },
  {
    title: "Reshaping Journalism Practices through Collaboration",
    authors: "Mesquita, L., Sanseverino, G. G., de-Lima-Santos, M.F., & Carpes, G.",
    journal: "Geo Spaces of Communication Research",
    year: 2024,
    doi: "https://doi.org/10.1108/S2050-206020240000026011",
    editors: "L. Robinson, K. Moles, S. V. Moreira, & J. Schulz",
    pages: "127–141",
    description: "An Analysis of Three Collaborative Projects in the Americas"
  }
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
            {journalArticles.map((pub) => (
              <motion.div
                key={pub.doi}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="chapters" className="space-y-6">
            {bookChapters.map((pub) => (
              <motion.div
                key={pub.doi}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}