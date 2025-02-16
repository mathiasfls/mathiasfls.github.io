import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Bio() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8">Biography & CV</h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Ph.D. in Digital Media</h3>
              <p className="text-muted-foreground">University Example • 2018-2022</p>
            </div>
            <div>
              <h3 className="font-semibold">M.A. in Journalism</h3>
              <p className="text-muted-foreground">Another University • 2015-2017</p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Research Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Postdoctoral Researcher</h3>
              <p className="text-muted-foreground">Institution • 2022-Present</p>
              <p className="mt-2">Research focus on digital journalism and data analytics.</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">Data Journalist</h3>
              <p className="text-muted-foreground">News Organization • 2018-2022</p>
              <p className="mt-2">Led investigative data journalism projects.</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
