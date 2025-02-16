import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublicationCard from "@/components/PublicationCard";

const journalArticles = [
  {
    title: "Collaborative journalism and cross-border collaborations for newsafety",
    authors: "Mesquita, L., de-Lima-Santos, M.F., & Nicoletti, J.",
    journal: "Journalism",
    year: 2025,
    doi: "https://doi.org/10.1177/14648849241312830",
    scopusRank: "Q1",
    description: "Navigating security and solidarity mechanisms in cooperative practices in Latin American news media.",
  },
  {
    title: "Visual political communication on Instagram",
    authors: "de-Lima-Santos, M.F. Gonçalves, I., Quiles, M.G. et al.",
    journal: "EPJ Data Science",
    year: 2024,
    doi: "https://doi.org/10.1140/epjds/s13688-024-00502-0",
    scopusRank: "Q1",
    description: "A comparative study of Brazilian presidential elections.",
  },
  {
    title: "Bridging the AI Divide: Human and Responsible AI in News and Media Industries",
    authors: "de-Lima-Santos, M.F. & Jamil, S.",
    journal: "Emerging Media",
    year: 2024,
    doi: "https://doi.org/10.1177/27523543241291229",
  },
  {
    title: "Google News Initiative Innovation Challenge in Latin America",
    authors: "Mesquita, L. & de-Lima-Santos, M.F.",
    journal: "Journal of Media Business Studies",
    year: 2024,
    doi: "https://doi.org/10.1080/16522354.2024.2402630",
    scopusRank: "Q2",
    description: "Business Models Between Path Dependence and Power Relations",
  },
  {
    title: "Digital News Business Models in the Age of Industry 4.0",
    authors: "de-Lima-Santos, M.F., Mesquita, L., Melo Peixoto, J.G., & Camargo, I.",
    journal: "Digital Journalism",
    year: 2024,
    doi: "https://doi.org/10.1080/21670811.2022.2037444",
    scopusRank: "Q1",
    description: "Brazilian Digital News Players Find in Technology New Ways to Bring Revenue and Competitive Advantage",
  },
  {
    title: "Empowerment Through Sustainable Journalism Practices in Africa",
    authors: "Elega, A. A., Munoriyarwa, A., Mesquita, L., Gonçalves, I., & de-Lima-Santos, M.F.",
    journal: "Journalism Practice",
    year: 2024,
    doi: "https://doi.org/10.1080/17512786.2024.2399567",
    scopusRank: "Q1",
    description: "A Walkthrough of EcoNai+ and Ushahidi Digital Platforms",
  },
  {
    title: "The Philanthrocapitalism of Google News Initiative in Africa, Latin America, and the Middle East",
    authors: "Munoriyarwa, A., de-Lima-Santos, M.F., Mesquita, L., & Elega, A. A.",
    journal: "International Journal of Cultural Studies",
    year: 2024,
    doi: "https://doi.org/10.1177/13678779241265734",
    scopusRank: "Q1",
  },
  {
    title: "Guiding the Way: A Comprehensive Examination of AI Guidelines in Global Media",
    authors: "de-Lima-Santos, M.F., Yeung, W. N., & Dodds, T.",
    journal: "AI & Society",
    year: 2024,
    doi: "https://doi.org/10.1007/s00146-024-01973-5",
    scopusRank: "Q1",
  },
  {
    title: "Gendered disinformation: a pernicious threat to equality in the Asia Pacific",
    authors: "Veritasia, M. E., Muthmainnah, A.N., & de-Lima-Santos, M.F.",
    journal: "Media Asia",
    year: 2024,
    doi: "https://doi.org/10.1080/01296612.2024.2367859",
    scopusRank: "Q2",
  },
  {
    title: "Evolution of Brazilian Democracy",
    authors: "Gonçalves, I., de-Lima-Santos, M.F., Fenoll, V., & David, Y.",
    journal: "Politics and Governance",
    year: 2024,
    doi: "https://doi.org/10.17645/pag.8060",
    scopusRank: "Q1",
    description: "Unveiling Election Dynamics in Political Issues, Negativity, and Acclaim",
  },
  {
    title: "Mind the Gap: Facebook's Measures Against Information Disorder Do Not Go Far Enough",
    authors: "de-Lima-Santos, M.F. & Ceron, W.",
    journal: "Media, Culture & Society",
    year: 2024,
    doi: "https://doi.org/10.1177/01634437241237936",
    scopusRank: "Q1",
  },
  {
    title: "Geojournalism, Data Journalism and Crowdsourcing: The Case of Eco-Nai+ in Nigeria",
    authors: "Elega, A. A., de-Lima-Santos, M.F., & Mesquita, L.",
    journal: "Journalism",
    year: 2024,
    doi: "https://doi.org/10.1177/14648849231225324",
    scopusRank: "Q1",
  },
  {
    title: "The Entanglements between Data Journalism, Collaboration and Business Models",
    authors: "de-Lima-Santos, M.F.",
    journal: "Digital Journalism",
    year: 2024,
    doi: "https://doi.org/10.1080/21670811.2023.2247449",
    scopusRank: "Q1",
    description: "A Systematic Literature Review",
  },
  {
    title: "Google News Initiative's Influence on Technological Media Innovation in Africa and the Middle East",
    authors: "de-Lima-Santos, M.F., Munoriyarwa, A., Elega, A. A., & Papaevangelou, C.",
    journal: "Media and Communication",
    year: 2023,
    doi: "https://doi.org/10.17645/mac.v11i2.6400",
    scopusRank: "Q1",
  },
  {
    title: "Blurred Boundaries of Journalism to Guarantee Safety",
    authors: "Mesquita, L. & de-Lima-Santos, M.F.",
    journal: "Journalism Practice",
    year: 2023,
    doi: "https://doi.org/10.1080/1461670X.2023.2185078",
    scopusRank: "Q1",
    description: "Approaches of Resistance and Resilience for Investigative Journalism in Latin America",
  },
  {
    title: "Data Journalism in favela: Made by, for, and about Forgotten and Marginalized Communities",
    authors: "de-Lima-Santos, M.F., & Mesquita, L.",
    journal: "Journalism Practice",
    year: 2023,
    doi: "https://doi.org/10.1080/17512786.2021.1922301",
    scopusRank: "Q1",
    description: "Bob Franklin Journal Article Award Finalist",
  },
  {
    title: "Racism, Death, and Protests in Brazil",
    authors: "de-Lima-Santos, M.F. & Ceron, W.",
    journal: "Online Media and Global Communication",
    year: 2022,
    doi: "https://doi.org/10.1515/omgc-2022-0030",
    description: "Digital and traditional news coverage of Black Awareness Day after a racism crime on Twitter",
  },
  {
    title: "Instagrammable Data: Using Visuals to Showcase More Than Numbers on AJ Labs Instagram Page",
    authors: "de-Lima-Santos, M.F., & Kooli, A.",
    journal: "International Journal of Communication",
    year: 2022,
    doi: "https://doi.org/1932–8036/20220005",
    scopusRank: "Q1",
  },
  {
    title: "Setting an Agenda to Tackle Environmental Issues with Data and Collaboration",
    authors: "de-Lima-Santos, M.F.",
    journal: "Journalism Practice",
    year: 2022,
    doi: "https://doi.org/10.1080/17512786.2022.2031256",
    scopusRank: "Q1",
  },
  {
    title: "ProPublica's Data Journalism",
    authors: "de-Lima-Santos, M.F.",
    journal: "Media and Communication",
    year: 2022,
    doi: "https://doi.org/10.17645/mac.v10i1.4433",
    scopusRank: "Q1",
    description: "How Multidisciplinary Teams and Hybrid Profiles Create Impactful Data Stories",
  },
  {
    title: "Artificial Intelligence in News Media: Current Perceptions and Future Outlook",
    authors: "de-Lima-Santos, M.F., & Ceron, W.",
    journal: "Journalism and Media",
    year: 2022,
    doi: "https://doi.org/10.3390/journalmedia3010002",
  },
  {
    title: "Out-of-the-box versus in-house tools: how are they affecting data journalism in Australia?",
    authors: "de-Lima-Santos, M.F., Schapals, A. K., & Bruns, A.",
    journal: "Media International Australia",
    year: 2021,
    doi: "https://doi.org/10.1177/1329878X20961569",
    scopusRank: "Q1",
  },
  {
    title: "Collaborative Journalism from a Latin American Perspective: An Empirical Analysis",
    authors: "Mesquita, L., & de-Lima-Santos, M.F.",
    journal: "Journalism and Media",
    year: 2021,
    doi: "https://doi.org/10.3390/journalmedia2040033",
  },
  {
    title: "From Data Journalism to Artificial Intelligence",
    authors: "de-Lima-Santos, M.F., & Salaverría, R.",
    journal: "Palabra Clave",
    year: 2021,
    doi: "https://doi.org/10.5294/pacla.2021.24.3.7",
    scopusRank: "Q2",
    description: "Challenges Faced by La Nación in Implementing Computer Vision in News Reporting",
  },
  {
    title: "Data Journalism Beyond Technological Determinism",
    authors: "de-Lima-Santos, M.F., & Mesquita, L.",
    journal: "Journalism Studies",
    year: 2021,
    doi: "https://doi.org/10.1080/1461670X.2021.1944279",
    scopusRank: "Q1",
  },
  {
    title: "Experimenting With User-Generated Content in Journalistic Practices",
    authors: "Gruszynski Sanseverino, G., & de-Lima-Santos, M.F.",
    journal: "Brazilian Journalism Research",
    year: 2021,
    doi: "https://doi.org/10.25200/BJR.v17n2.2021.1369",
    scopusRank: "Q3",
    description: "Adopting a User-Centric Storytelling Approach during the Covid-19 Pandemic Coverage in Latin America",
  },
  {
    title: "COVID-19 fake news diffusion across Latin America",
    authors: "Ceron, W., Sanseverino, G. G., de-Lima-Santos, M.F., & Quiles, M. G.",
    journal: "Social Network Analysis and Mining",
    year: 2021,
    doi: "https://doi.org/10.1007/s13278-021-00753-z",
    scopusRank: "Q1",
  },
  {
    title: "Fake news agenda in the era of COVID-19: Identifying trends through fact-checking content",
    authors: "Ceron, W., de-Lima-Santos, M.F., & Quiles, M. G.",
    journal: "Online Social Networks and Media",
    year: 2021,
    doi: "https://doi.org/10.1016/j.osnem.2020.100116",
    scopusRank: "Q1",
  },
  {
    title: "Como as plataformas digitais provocaram uma ruptura no modelo de jornalismo consolidado no século XX",
    authors: "da Silva, G. C., de-Lima-Santos, M.F., Sanseverino, G. G., & Mesquita, L.",
    journal: "Revista Eptic",
    year: 2020,
    doi: "https://hal-univ-tlse3.archives-ouvertes.fr/hal-02547608",
    scopusRank: "Q4",
  },
];

const bookChapters = [
  {
    title: "Brazil",
    authors: "de-Lima-Santos, M.F.",
    journal: "Media Compass",
    year: 2024,
    doi: "https://doi.org/10.1002/9781394196272.ch20",
    editors: "A. K. Schapals & C. Pentzold",
  },
  {
    title: "Setting an Agenda to Tackle Environmental Issues with Data and Collaboration",
    authors: "de-Lima-Santos, M.F.",
    journal: "Journalism and Reporting Synergistic Effects of Climate Change",
    year: 2024,
    doi: "https://doi.org/10.4324/9781032627526-17",
    editors: "Gutsche Jr., R. E. & J. Pinto",
    pages: "304–324",
  },
  {
    title: "Reshaping Journalism Practices through Collaboration",
    authors: "Mesquita, L., Sanseverino, G. G., de-Lima-Santos, M.F., & Carpes, G.",
    journal: "Geo Spaces of Communication Research",
    year: 2024,
    doi: "https://doi.org/10.1108/S2050-206020240000026011",
    editors: "L. Robinson, K. Moles, S. V. Moreira, & J. Schulz",
    pages: "127–141",
    description: "An Analysis of Three Collaborative Projects in the Americas",
  },
  {
    title: "Disinformation Echo-Chambers on Facebook",
    authors: "de-Lima-Santos, M.F. and Ceron, W.",
    journal: "Fighting Fake Fact",
    year: 2023,
    doi: "https://doi.org/10.3390/books978-3-0365-1347-8-4",
    editors: "Seitz, P., Eisenegger, M., & Bergman, M. M.",
  },
  {
    title: "Coordinated Amplification, Coordinated Inauthentic Behavior, Orchestrated Campaigns?",
    authors: "de-Lima-Santos, M.F. and Ceron, W.",
    journal: "Mapping Lies in the Global Media Sphere",
    year: 2023,
    doi: "https://doi.org/10.4324/9781003403203-14",
    editors: "Filibeli, T. and Özbek, M. Ö.",
    description: "A Systematic Literature Review of Coordinated Inauthentic Content on Online Social Networks",
  },
  {
    title: "Google News Initiative Innovation Challenge: Technological Innovation Triggers by Google Grants",
    authors: "Mesquita, L., de-Lima-Santos, M.F., and Muthmainnah, A. N.",
    journal: "Digital Disruption and Media Transformation",
    year: 2023,
    doi: "https://doi.org/10.1007/978-3-031-39940-4_5",
    editors: "Godulla, A. and Bohm, S.",
  },
  {
    title: "Harnessing Data and Digital Journalism in Latin America",
    authors: "de-Lima-Santos, M.F., Mesquita, L., Sanseverino, G. G., Carpes, G., Fernandes, K., & Salaverría, R.",
    journal: "Different Global Journalisms",
    year: 2023,
    doi: "https://doi.org/10.1007/978-3-031-18992-0_2",
    editors: "S. Bebawi & O. Onilov",
  },
  {
    title: "Transformation of the News Media Industry in the Global South",
    authors: "Salaverría, R., & de-Lima-Santos, M.F.",
    journal: "Journalism, Data and Technology in Latin America",
    year: 2021,
    doi: "http://doi.org/10.1007/978-3-030-65860-1_1",
    editors: "Salaverría, R., & de-Lima-Santos, M.-F.",
  },
  {
    title: "In Search for Sustainability: Digitalization and Its Influence on Business Models in Latin America",
    authors: "de-Lima-Santos, M.F., & Mesquita, L.",
    journal: "Journalism, Data and Technology in Latin America",
    year: 2021,
    doi: "http://doi.org/10.1007/978-3-030-65860-1_3",
    editors: "Salaverría, R., & de-Lima-Santos, M.-F.",
  },
  {
    title: "The Strategic Value of Data Journalism",
    authors: "de-Lima-Santos, M.F., & Mesquita, L.",
    journal: "Journalism, Data and Technology in Latin America",
    year: 2021,
    doi: "http://doi.org/10.1007/978-3-030-65860-1_4",
    editors: "Salaverría, R., & de-Lima-Santos, M.-F.",
  },
  {
    title: "A Challenging Future for the Latin American News Media Industry",
    authors: "de-Lima-Santos, M.F., & Mesquita, L.",
    journal: "Journalism, Data and Technology in Latin America",
    year: 2021,
    doi: "http://doi.org/10.1007/978-3-030-65860-1_8",
    editors: "Salaverría, R., & de-Lima-Santos, M.-F.",
  },
  {
    title: "Towards Ubiquitous Journalism: Impacts of IoT on News",
    authors: "Salaverría, R., & de-Lima-Santos, M.F.",
    journal: "Journalistic Metamorphosis: Media Transformation in the Digital Age",
    year: 2020,
    doi: "https://doi.org/10.1007/978-3-030-36315-4_1",
    editors: "J. Vázquez-Herrero, S. Direito-Rebollal, A. Silva-Rodríguez, & X. López-García",
    pages: "1–15",
  },
];

export default function Research() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">Research Publications</h1>
        <p className="text-gray-600 mb-8">Publications focusing on journalism, technology, and society.</p>

        <Tabs defaultValue="journal" className="space-y-8">
          <TabsList className="bg-gray-100 text-gray-600">
            <TabsTrigger value="journal">Journal Articles</TabsTrigger>
            <TabsTrigger value="chapters">Book Chapters</TabsTrigger>
          </TabsList>

          <TabsContent value="journal" className="space-y-6">
            {journalArticles.map((pub) => (
              <motion.div
                key={pub.doi}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </TabsContent>

          <TabsContent value="chapters" className="space-y-6">
            {bookChapters.map((pub) => (
              <motion.div
                key={pub.doi}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}