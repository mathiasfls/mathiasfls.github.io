import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PROFILE } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Left Column - Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent leading-tight">
              Dr. Mathias Felipe<br />de Lima Santos
            </h1>
            <div className="mt-2 space-y-1">
              <p className="text-lg font-medium">{PROFILE.title}</p>
              {PROFILE.positions.map((position, index) => (
                <p key={index} className="text-muted-foreground">
                  {position}
                </p>
              ))}
            </div>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <Button 
                asChild 
                className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white border-0 hover:opacity-90"
              >
                <Link href="/publications">
                  View Publications
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white border-gray-200">
                <Link href="/contact">Read News Articles</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/MF.png"
            alt={PROFILE.name}
            className="w-[280px] h-[280px] object-cover rounded-lg"
          />
        </motion.div>
      </div>

      {/* About Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8"
      >
        <Card className="bg-white">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            {PROFILE.bio.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground mb-4">
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}