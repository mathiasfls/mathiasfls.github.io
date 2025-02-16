import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Coins } from "lucide-react";

const awards = [
  // 2025
  {
    title: "Digital Good Research Fund",
    organization: "ESRC Digital Good Network",
    year: 2025,
    description: "Investigation of Global North philanthropies and Big Tech companies' influence on civil society and tech activism in the Global Majority.",
    amount: "£30,000",
  },
  {
    title: "International Networks Research Grant",
    organization: "CNPq",
    year: 2025,
    description: "Research on manipulation of digital spaces, focusing on bot behavior and coordinated efforts in YouTube comments.",
    amount: "BRL 397,960",
  },
  {
    title: "Max Gressly and Florian Fleck Fund",
    organization: "University of Fribourg",
    year: 2025,
    description: "Research project on the use of generative visual AI in news production, examining impact on representation in Latin America and Europe.",
    amount: "CHF 5,000",
  },
  // 2024
  {
    title: "Groningen Strategic Partner Travel Grant",
    organization: "Macquarie University",
    year: 2024,
    description: "Travel grant for research collaboration.",
    amount: "AUD 5,000",
  },
  {
    title: "Faculty Research Travel Scheme (FRTS)",
    organization: "Macquarie University",
    year: 2024,
    description: "Research travel funding support.",
    amount: "AUD 4,200",
  },
  {
    title: "Bob Franklin Journal Article Award Finalist",
    organization: "Taylor & Francis - Journalist Practice",
    year: 2024,
    description: "Top 3 Best Papers published at Journalism Practice in 2024",
    isAward: true,
  },
  {
    title: "Amazon Underworld Project Awards",
    organization: "WAN-IFRA, Gabo Award, ONA, Vladimir Herzog, and Brazilian Data Journalism Awards",
    year: 2024,
    description: "Multiple prestigious awards for the Amazon Underworld project.",
    isAward: true,
  },
  {
    title: "News Tech BM Research Grant",
    organization: "INSPER",
    year: 2024,
    description: "Research on sustainable business models for media organizations in emerging technologies landscape.",
    amount: "BRL 60,000",
  },
  // 2023
  {
    title: "Asia Pacific Research Network",
    organization: "Network Members",
    year: 2023,
    amount: "€20,000",
    description: "Research network focusing on platform power and AI deployment in the Asia Pacific region.",
  },
  // 2022
  {
    title: "AI4Media Project",
    organization: "European Union's Horizon 2020",
    year: 2022,
    description: "Centre of Excellence for AI advances in media sector, focusing on ethical and trustworthy AI deployment.",
    amount: "€11,999,722",
  },
  {
    title: "RPA Human(e) AI Research",
    organization: "University of Amsterdam",
    year: 2022,
    description: "Research on societal consequences of AI and automated decision-making in various sectors including news aggregation.",
  },
  {
    title: "ICFJ LEAP program",
    organization: "International Center for Journalists",
    year: 2022,
    amount: "USD 50,000",
    description: "Innovative Solution for Media Trust: Prototype of Boto, a AI-driven WhatsApp Chatbot",
  },
  {
    title: "ECO AWARD",
    organization: "AMCHAM",
    year: 2022,
    description: "Recognition for the PlenaMata project",
    isAward: true,
  },
  // 2021
  {
    title: "Best Student Paper",
    organization: "Association for Education in Journalism and Mass Communication (AEJMC)",
    year: 2021,
    description: "3rd Place for Best Student Paper",
    isAward: true,
  },
  {
    title: "Al Jazeera Fellowship",
    organization: "Al Jazeera Media Institute",
    year: 2021,
    amount: "USD 2,000",
    description: "Fellowship program to encourage research in media and journalism fields",
  },
  // 2019
  {
    title: "JOLT (Harnessing Data and Technology for Journalism)",
    organization: "European Commission",
    year: 2019,
    amount: "€3,912,451",
    description: "Marie-Skłodowska-Curie European Training Network investigating how to harness digital and data technology for journalism.",
  },
  // 2016
  {
    title: "Erasmus+ DCLEAD Scholarship",
    organization: "European Union",
    year: 2016,
    description: "Scholarship for Digital Communication Leadership program",
    isAward: true,
  },
  // 2011
  {
    title: "Erasmus Mundus EMUNDUS15 Scholarship",
    organization: "European Union",
    year: 2011,
    description: "International academic mobility scholarship",
    isAward: true,
  },
];

export default function Awards() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">Awards & Grants</h1>
        <p className="text-gray-600 mb-8">Recognition and research funding supporting work in journalism, technology, and society.</p>

        <div className="space-y-6">
          {awards.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-gray-500">{item.organization} • {item.year}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.isAward ? (
                      <Trophy className="h-6 w-6 text-yellow-500" />
                    ) : (
                      <div className="flex items-center gap-2 text-[#4F46E5]">
                        <Coins className="h-5 w-5" />
                        <span className="font-medium">{item.amount}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}