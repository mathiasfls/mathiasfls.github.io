import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PROFILE } from "@/lib/constants";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 text-center">
      <motion.img
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={PROFILE.profileImage}
        alt={PROFILE.name}
        className="rounded-full w-48 h-48 object-cover border-4 border-primary/20"
      />
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold">{PROFILE.name}</h1>
        <p className="text-xl text-muted-foreground">{PROFILE.title}</p>
        <p className="max-w-2xl text-muted-foreground">{PROFILE.shortBio}</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-4"
      >
        <SocialIcons />
        
        <div className="flex gap-4">
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
  );
}
