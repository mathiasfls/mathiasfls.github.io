import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  scopusRank?: string;
}

export default function PublicationCard({
  title,
  authors,
  journal,
  year,
  doi,
  scopusRank,
}: PublicationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h3 className="font-medium text-lg leading-tight">{title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">{journal}</span>
              <span className="text-gray-500">• {year}</span>
            </div>
            {scopusRank && <Badge variant="secondary">{scopusRank}</Badge>}
            <p className="text-sm text-gray-500">{authors}</p>
          </div>
          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-primary hover:underline"
          >
            <span className="text-sm">View Publication</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}