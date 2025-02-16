import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { PROFILE } from "@/lib/constants";
import SocialIcons from "@/components/SocialIcons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 py-12 px-4 text-center">
      <motion.img
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        src={PROFILE.profileImage}
        alt={PROFILE.name}
        className="rounded-full w-48 h-48 md:w-56 md:h-56 object-cover shadow-lg border-2 border-primary/10"
      />

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="space-y-6 max-w-2xl mx-auto"
      >
        <div className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            {PROFILE.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {PROFILE.title}
          </p>
        </div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          {PROFILE.shortBio}
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="space-y-8"
      >
        <SocialIcons />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/publications">
              View Publications <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}