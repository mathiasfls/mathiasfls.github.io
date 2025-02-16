import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SocialIcons from "@/components/SocialIcons";

export default function Bio() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-[#4F46E5] mb-4">Bio</h1>

        <p className="text-gray-600 mb-6">
          A researcher, journalist, and computer scientist specializing in the intersection of journalism,
          technology, and society. Over 10 years of experience in research, project management, consulting,
          and journalism across various domains including digital journalism, data journalism, and media
          management.
        </p>

        <div className="mb-8">
          <SocialIcons />
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl">📚</div>
              <h2 className="text-xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">PhD in Communication</h3>
                <p className="text-gray-500">University of Navarra • Oct 2021</p>
                <p className="text-gray-500">Spain</p>
              </div>
              <div>
                <h3 className="font-semibold">Master's in Digital Communication Leadership (Media Management)</h3>
                <p className="text-gray-500">Aalborg University & University of Salzburg • Oct 2018</p>
                <p className="text-gray-500">Denmark & Austria; exchange at Queensland University of Technology, Australia</p>
              </div>
              <div>
                <h3 className="font-semibold">BA in Communication and Journalism</h3>
                <p className="text-gray-500">Federal University of Rio de Janeiro • Dec 2018</p>
                <p className="text-gray-500">Brazil</p>
              </div>
              <div>
                <h3 className="font-semibold">BSc in Computer Science</h3>
                <p className="text-gray-500">Federal University of São Paulo • Jun 2013</p>
                <p className="text-gray-500">Brazil; exchange at Masaryk University, Czech Republic</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="text-2xl">💼</div>
              <h2 className="text-xl font-bold">Experience</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold">AI Mentor (Consultant)</h3>
                <p className="text-gray-500">Bastion/Google • Sep 2024 — Now</p>
                <p className="mt-2">Responsible for mentoring Australian media organizations in the deployment of Generative AI tools in their newsrooms. Guiding companies such as Private Media, Australian Chinese News, North East Media, and Gazette News in adopting AI to improve storytelling, optimize workflows, and enhance audience engagement.</p>
              </div>

              <div>
                <h3 className="font-semibold">Lecturer (Assistant Professor)</h3>
                <p className="text-gray-500">Macquarie University • Mar 2024 — Now</p>
                <p className="mt-2">Responsible for researching and teaching multiplatform journalism, focusing on data-driven storytelling, media technology and innovation. Developed and delivered courses integrating theoretical frameworks with practical skills, preparing students for the evolving media landscape.</p>
              </div>

              <div>
                <h3 className="font-semibold">Senior Researcher (Consultant)</h3>
                <p className="text-gray-500">International Center for Journalists (ICFJ) • Jan 2024 — Mar 2024</p>
                <p className="mt-2">Leading a research project on Brazilian news outlets' responses to disinformation and contributing to the trailblazing ICFJ Online Violence Project which is developing policies and tools to combat gender-based abuse toward journalists.</p>
              </div>

              <div>
                <h3 className="font-semibold">Postdoctoral Researcher</h3>
                <p className="text-gray-500">University of Amsterdam — Netherlands • Sep 2022 — Mar 2024</p>
                <p className="mt-2">Conducting research on Responsible AI as part of the broader Humane (AI) project. Host of the Humane Conversations. Contributing to events, research meetings, and guest-lectures. Collaborating with the Horizon Europe project AI4Media.</p>
              </div>

              <div>
                <h3 className="font-semibold">Research Associate</h3>
                <p className="text-gray-500">Federal University of São Paulo — Brazil • Jan 2022 — Now</p>
                <p className="mt-2">Co-founder of the Digital Media and Society Observatory (DMSO), a research and education hub tasked with tackling online harm and information disorder. Delivering theoretical and practical insights through studies, talks, and media interviews.</p>
              </div>

              <div>
                <h3 className="font-semibold">Project Manager/Tech Lead</h3>
                <p className="text-gray-500">InfoAmazonia — Brazil • Jun 2021 — Sep 2023</p>
                <p className="mt-2">Managing data-driven and web projects for InfoAmazonia and its partners, PlenaMata and Amazon Underworld. PlenaMata is celebrated for combating deforestation and receiving two awards for its innovation.</p>
              </div>

              <div>
                <h3 className="font-semibold">Researcher/Journalist</h3>
                <p className="text-gray-500">*desinformante — Brazil • July 2021 — Aug 2022</p>
                <p className="mt-2">Producing content and supporting the team to follow main debates and analysis on events involving efforts against mis-/disinformation in Brazil and globally.</p>
              </div>

              <div>
                <h3 className="font-semibold">Data Quality Lead Consultant</h3>
                <p className="text-gray-500">Internews — USA • Dec 2021 — May 2022</p>
                <p className="mt-2">Supporting the team to conduct data collection and analysis of main rumors and narratives about COVID-19 in 10 countries under the Rooted in Trust project.</p>
              </div>

              <div>
                <h3 className="font-semibold">Researcher – Data Journalism</h3>
                <p className="text-gray-500">JOLT/University of Navarra — Spain • Dec 2018 — Jan 2022</p>
                <p className="mt-2">Exploring digital technology's potential for journalism, providing theoretical insights, technical innovations, and best practices through collaborative projects with industry partners to enhance the news landscape.</p>
              </div>

              <div>
                <h3 className="font-semibold">Disinformation Researcher/Consultant</h3>
                <p className="text-gray-500">Avaaz — USA • Aug 2018 — Nov 2018/Sep 2020 — Mar 2021</p>
                <p className="mt-2">Supporting the team in research related to information disorder in Brazil. Analyzing methodologies and data from Twitter and Facebook content. Monitoring events and identifying opportunities for campaigns to protect Brazil from mis-/disinformation.</p>
              </div>

              <div>
                <h3 className="font-semibold">Product Owner/Data Journalist</h3>
                <p className="text-gray-500">La Nación — Argentina • Jan 2020 — Mar 2020</p>
                <p className="mt-2">Investigating and identifying requirements to develop the first AI news product. Project management of news products. Reporting stories using data.</p>
              </div>

              <div>
                <h3 className="font-semibold">Investigative Journalist</h3>
                <p className="text-gray-500">ethiXBase — Singapore • Jan 2017 — Jan 2019</p>
                <p className="mt-2">Performing due diligence of companies and special interest persons to verify that there are no issues, scandals, or corruption problems. Development of reports and translation of files (Spanish and Portuguese).</p>
              </div>

              <div>
                <h3 className="font-semibold">Communications Assistant</h3>
                <p className="text-gray-500">Copenhagen Business School (CBS) — Denmark • May 2017 — Feb 2018</p>
                <p className="mt-2">Development of tutorials and surveys about financial data. Translation of financial data to content that is easily accessible. Interviewing companies about topics related to financial data in their daily business.</p>
              </div>

              <div>
                <h3 className="font-semibold">Communication and Project Manager</h3>
                <p className="text-gray-500">Hevea — Denmark • Jun 2017 — Jan 2018</p>
                <p className="mt-2">Management of the catalogs of products for distributors. Tracking and reporting progress of ongoing communication projects. Production of content for social media platforms.</p>
              </div>

              <div>
                <h3 className="font-semibold">Previous Positions</h3>
                <ul className="mt-2 space-y-2 text-gray-500">
                  <li>Production Assistant • Olympic Channel/OBS — Brazil • Jan 2016 — Sep 2016</li>
                  <li>Sports Journalist • Tijuca Tênis Clube — Brazil • 2016</li>
                  <li>Professional Educator • SENAC SP — Brazil • 2014</li>
                  <li>Digital Marketing Project Manager • Johnson & Johnson — Brazil • 2013</li>
                  <li>Assistant for Business Administration • Embraer — Brazil • 2012</li>
                  <li>Assistant for IT Logistics • Ericsson — Brazil • 2010</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center mt-8 mb-12">
          <a
            href="https://drive.google.com/file/d/1o2y0ZqLrBJDWIYAzvNbkJyTNs4-Gvewd/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4F46E5] text-white px-6 py-3 rounded-lg hover:bg-[#4338CA] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Full CV
          </a>
        </div>
      </motion.div>
    </div>
  );
}