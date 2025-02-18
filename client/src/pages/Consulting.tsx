import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SocialIcons from "@/components/SocialIcons";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    title: "AI & Data Strategy for Media",
    description: "Expert guidance on implementing AI solutions in newsrooms, from content optimization to workflow automation. Specializing in responsible AI adoption and data-driven storytelling.",
  },
  {
    title: "Media Innovation & Digital Transformation",
    description: "Strategic consulting on digital transformation, helping organizations adapt to the evolving media landscape through innovative technologies and methodologies.",
  },
  {
    title: "Research & Academic Collaboration",
    description: "Conducting research projects, academic partnerships, and grant writing services focusing on media technology, journalism innovation, and information disorder.",
  },
  {
    title: "Platform Governance & Policy Advice",
    description: "Expert consultation on platform governance, content moderation strategies, and policy development for addressing misinformation and online harm.",
  },
];

const achievements = [
  "Led AI implementation at La Nación (Argentina), pioneering computer vision for environmental reporting",
  "Developed innovative WhatsApp-based LLM solutions for InfoAmazonia's audience engagement",
  "Mentored Australian media organizations in AI adoption through Google's initiative",
  "Co-founded the Digital Media and Society Observatory (DMSO)",
];

export default function Consulting() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent mb-6">
          Expert Consulting Services
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Empowering media organizations, academic institutions, and policymakers with cutting-edge expertise in AI, journalism innovation, and digital transformation.
        </p>
        <div className="mb-6">
          <SocialIcons />
        </div>
      </motion.div>

      {/* Value Proposition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Why Work With Me?</h2>
            <p className="text-muted-foreground mb-4">
              As a versatile professional with over a decade of experience spanning technology, journalism, research, and project management, I bring a unique perspective to every engagement. My work at prestigious institutions and organizations worldwide has equipped me with the expertise to tackle complex challenges in the modern media landscape.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2"
                >
                  <div className="text-primary text-xl">•</div>
                  <p className="text-sm text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid md:grid-cols-2 gap-6 mb-12"
      >
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Notable Collaborations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-12"
      >
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">Notable Collaborations</h2>
            <p className="text-muted-foreground mb-4">
              I've had the privilege of working with leading organizations worldwide, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                "Google",
                "La Nación",
                "InfoAmazonia",
                "Avaaz",
                "ICFJ",
                "Internews",
                "Natura",
                "RAI",
              ].map((company, index) => (
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-50 rounded-md text-sm font-medium"
                >
                  {company}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h2>
        <p className="text-muted-foreground mb-6">
          Let's discuss how my expertise can help you achieve your goals.
        </p>
        <Button asChild className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white">
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </div>
  );
}
