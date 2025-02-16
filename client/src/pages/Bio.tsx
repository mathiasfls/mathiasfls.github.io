import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SocialIcons from "@/components/SocialIcons";

export default function Bio() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">Curriculum Vitae</h1>

        <p className="text-gray-600 mb-6">
          A researcher, journalist, and computer scientist specializing in the intersection of journalism,
          technology, and society. Over 10 years of experience in research, project management, consulting,
          and journalism across various domains including digital journalism, data journalism, and media
          management.
        </p>

        <div className="mb-8">
          <SocialIcons />
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl">📚</div>
              <h2 className="text-xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">PhD in Communication</h3>
                <p className="text-gray-500">University of Navarra • 2021</p>
                <p className="text-gray-500">Spain</p>
              </div>
              <div>
                <h3 className="font-semibold">Master's in Digital Communication Leadership (Media Management)</h3>
                <p className="text-gray-500">Aalborg University & University of Salzburg • 2018</p>
                <p className="text-gray-500">Denmark & Austria; exchange at Queensland University of Technology, Australia</p>
              </div>
              <div>
                <h3 className="font-semibold">BA in Communication and Journalism</h3>
                <p className="text-gray-500">Federal University of Rio de Janeiro • 2018</p>
                <p className="text-gray-500">Brazil</p>
              </div>
              <div>
                <h3 className="font-semibold">BSc in Computer Science</h3>
                <p className="text-gray-500">Federal University of São Paulo • 2013</p>
                <p className="text-gray-500">Brazil; exchange at Masaryk University, Czech Republic</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl">💼</div>
              <h2 className="text-xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">AI Mentor (Consultant)</h3>
                <p className="text-gray-500">Bastion/Google • Sep 2024 — Now</p>
                <p className="mt-2">Responsible for mentoring Australian media organizations in the deployment of Generative AI tools in their newsrooms. I have guided companies such as Private Media, Australian Chinese News, North East Media, and Gazette News in adopting AI to improve storytelling, optimize workflows, and enhance audience engagement.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}