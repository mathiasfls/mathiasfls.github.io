import { SiGooglescholar, SiGithub, SiLinkedin, SiOrcid, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function SocialIcons() {
  return (
    <div className="flex gap-2">
      <Button variant="ghost" size="icon" asChild>
        <a href={SOCIAL_LINKS.scholar} target="_blank" rel="noopener noreferrer">
          <SiGooglescholar className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href={SOCIAL_LINKS.orcid} target="_blank" rel="noopener noreferrer">
          <SiOrcid className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          <SiLinkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
          <SiGithub className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer">
          <SiX className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
}
