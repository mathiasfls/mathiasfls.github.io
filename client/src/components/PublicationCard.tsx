import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface PublicationCardProps {
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  scopusRank?: string;
  journalLogo?: string;
}

export default function PublicationCard({
  title,
  authors,
  journal,
  year,
  doi,
  scopusRank,
  journalLogo,
}: PublicationCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center gap-4">
        {journalLogo && (
          <img src={journalLogo} alt={journal} className="h-12 w-12 object-contain" />
        )}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{authors}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm">{journal}</span>
            <span className="text-sm text-muted-foreground">({year})</span>
            {scopusRank && (
              <Badge variant="secondary">{scopusRank}</Badge>
            )}
          </div>
          <a
            href={doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            <span className="text-sm">DOI</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
