import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface MediaAppearance {
  title: string;
  outlet: string;
  date: string;
  description?: string;
  url?: string;
  language?: string;
}

const mediaAppearances: MediaAppearance[] = [
  {
    title: "Rising stars: Ten humanities EMCRs shaping the future",
    outlet: "The Australian Academy of the Humanities",
    date: "2024",
    url: "https://humanities.org.au/power-of-the-humanities/humanities-emcr-named-rising-stars/",
  },
  {
    title: "These eight young rising stars are poised to make their mark",
    outlet: "The Australian",
    date: "2024",
    url: "https://www.theaustralian.com.au/special-reports/research-magazine/these-eight-young-rising-stars-are-poised-to-make-their-mark/news-story/951a88d53913fe1476a107306e4915c4",
  },
  {
    title: "Amazon Underworld",
    outlet: "Radio 2SER",
    date: "2024",
    description: "Media Interview about Amazon Underworld investigation",
    url: "https://2ser.com/amazon-underworld/",
  },
  {
    title: "Google's support for news media in Latin America may lead to dependency",
    outlet: "LatAm Journalism Review (USA)",
    date: "2024",
    description: "Study findings on Google's media support impact",
    url: "https://latamjournalismreview.org/articles/googles-support-for-news-media-in-latin-america-may-lead-to-dependency-study-finds/",
  },
  {
    title: "Vice e Buzzfeed News: O acidente fatal das plataformas digitais da moda",
    outlet: "Público (Portugal)",
    date: "2023",
    language: "Portuguese",
    url: "https://www.publico.pt/2023/07/13/tecnologia/noticia/vice-buzzfeed-news-acidente-fatal-plataformas-digitais-moda-2055096",
  },
  {
    title: "ChatGPT, DALL-E and more: how AI impacts the future of creativity",
    outlet: "TechTudo",
    date: "2022",
    language: "Portuguese",
    url: "https://www.techtudo.com.br/noticias/2023/02/chatgpt-dall-e-e-mais-cfomo-a-ia-impacta-o-futuro-da-criatividade.ghtml",
  },
  {
    title: "ChatGPT: Understand how OpenAI's know-it-all chatbot works",
    outlet: "TechTudo",
    date: "2022",
    language: "Portuguese",
    url: "https://www.techtudo.com.br/listas/2022/12/chatgpt-saiba-tudo-sobre-o-chatbot-que-usa-ia-para-responder-perguntas.ghtml",
  },
  {
    title: "Journalism, AI and satellite imagery",
    outlet: "Online Journalism Blog",
    date: "2022",
    url: "https://onlinejournalismblog.com/2022/10/27/journalism-ai-and-satellite-imagery-how-to-get-started/",
  },
  {
    title: "Coar fact-checking project focuses on news deserts in Northern and Northeastern Brazil",
    outlet: "LatAm Journalism Review",
    date: "2022",
    url: "https://latamjournalismreview.org/articles/coar-fact-checking-project-focuses-on-news-deserts-in-northern-and-northeastern-brazil/",
  },
  {
    title: "Data Journalism in Favela",
    outlet: "Journalism Practice",
    date: "2021",
    description: "Podcast episode discussing data journalism practices",
    url: "https://open.spotify.com/episode/05C9GYT6okpetgxrh9nUrg",
  },
  {
    title: "Freedom of the Press",
    outlet: "National Radio of Colombia",
    date: "2021",
    description: "Interview about press freedom",
  }
];

export default function MediaCoverage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">Media Coverage</h1>
        <p className="text-gray-600 mb-8">Notable mentions, interviews, and appearances in media outlets covering research, expertise, and contributions to the field.</p>

        <div className="space-y-6">
          {mediaAppearances.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <div className="flex items-center gap-2 flex-wrap text-gray-500">
                        <span>{item.outlet}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                        {item.language && (
                          <>
                            <span>•</span>
                            <span>{item.language}</span>
                          </>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-gray-600">{item.description}</p>
                      )}
                    </div>
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:underline whitespace-nowrap"
                      >
                        <span className="text-sm">Read More</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}