import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PROFILE } from "@/lib/constants";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-start gap-6 py-6">
        {/* Left Column - Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
              {PROFILE.name}
            </h1>
            <div className="mt-4 space-y-2">
              <p className="text-xl font-semibold">{PROFILE.title}</p>
              {PROFILE.positions.map((position, index) => (
                <p key={index} className="text-muted-foreground">
                  {position}
                </p>
              ))}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/publications">
                  View Publications <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <img
            src={PROFILE.profileImage}
            alt={PROFILE.name}
            className="w-64 h-64 object-cover shadow-lg rounded-lg"
          />
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-4 max-w-4xl"
      >
        <h2 className="text-2xl font-bold">About Me</h2>
        {PROFILE.bio.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <SocialIcons />
      </motion.div>
    </div>
  );
}