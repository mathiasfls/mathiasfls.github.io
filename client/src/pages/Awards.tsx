import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Trophy, Coins } from "lucide-react";

const awards = [
  {
    title: "Max Gressly and Florian Fleck Fund",
    organization: "University of Fribourg",
    year: 2025,
    description: "Research project on the use of generative visual AI in news production, examining impact on representation in Latin America and Europe.",
    amount: "5,000 CHF",
  },
  {
    title: "International Networks Research Grant",
    organization: "CNPq",
    year: 2025,
    description: "Research on manipulation of digital spaces, focusing on bot behavior and coordinated efforts in YouTube comments.",
    amount: "BRL 397,960",
  },
  {
    title: "Digital Good Research Fund",
    organization: "ESRC Digital Good Network",
    year: 2025,
    description: "Investigation of Global North philanthropies and Big Tech companies' influence on civil society and tech activism in the Global Majority.",
    amount: "£30,000",
  },
  {
    title: "News Tech BM Research Grant",
    organization: "INSPER",
    year: 2024,
    description: "Research on sustainable business models for media organizations in emerging technologies landscape.",
    amount: "BRL 60,000",
  },
  {
    title: "Amazon Underworld Project Awards",
    organization: "WAN-IFRA, Gabo Award, ONA, Vladimir Herzog, and Brazilian Data Journalism Awards",
    year: 2024,
    description: "Multiple prestigious awards for the Amazon Underworld project.",
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