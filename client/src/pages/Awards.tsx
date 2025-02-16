import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const awards = [
  {
    year: 2023,
    title: "Excellence in Digital Journalism Research",
    organization: "International Communication Association",
    type: "Award"
  },
  {
    year: 2022,
    title: "Research Grant for Digital Media Studies",
    organization: "National Research Foundation",
    amount: "$50,000",
    type: "Grant"
  },
];

export default function Awards() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-3xl font-bold mb-8">Awards & Grants</h1>
        
        <div className="space-y-6">
          {awards.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{item.title}</CardTitle>
                    <Badge variant="outline">{item.year}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.organization}</p>
                  {item.amount && (
                    <p className="text-sm text-primary mt-2">Grant Amount: {item.amount}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
