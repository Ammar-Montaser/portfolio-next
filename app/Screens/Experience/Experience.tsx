"use client";
import PreviousCompanies from "./components/PreviousCompanies";
import CountdownTimer from "./components/Timer";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
function Experience() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["70%", "-70%"]);
  return (
    <div ref={targetRef} className="relative h-[700vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-neutral-100 dark:bg-[#121212]">
        <div className="absolute flex h-3/4 w-screen flex-col items-center justify-evenly">
          <p className="w-10/12 text-center text-6xl font-bold text-black dark:text-neutral-200">
            My Next Milestone
          </p>
          <p className="text-center text-3xl font-extralight text-black dark:text-white lg:text-4xl">
            Forbes Thirty Under Thirty List
          </p>
          <CountdownTimer />
          <PreviousCompanies />
        </div>
        <motion.div className="flex" style={{ x: x }}>
          <div className="flex h-screen w-screen flex-1 flex-col justify-center bg-[#008BFF] pt-20 sm:pt-0">
            <div className="flex flex-col lg:flex-row">
              <div className="flex h-fit flex-col items-start justify-center px-5 md:px-24 lg:w-6/12">
                <h2 className="mb-2 text-3xl font-extrabold text-white lg:text-6xl">
                  Souq.com
                </h2>{" "}
                <h2 className="mb-2 text-2xl font-light text-white md:text-3xl">
                  UAE & Egypt Customer Service Agent
                </h2>{" "}
                <h2 className="text-md font-light text-white/70 md:text-xl">
                  Sep 2018 - Nov 2018
                </h2>{" "}
                <p className="text-md mb-6 text-white md:text-xl">
                  Worked as a full time UAE & Egypt Customer Service Agent at
                  Souq.com E-commerce, a leading e-commerce platform in the
                  region. Leveraged my background as a developer and
                  entrepreneur to gain valuable insights into the business
                  aspects of the industry.
                </p>
                <p className="text-sm text-white md:text-lg">
                  Skills: E-commerce Sector Knowledge, Customer Relation,
                  Business Operations, Sales, Account Management, Fraud
                  Investigations
                </p>
              </div>
              <div className="flex max-w-screen-xl flex-col items-center justify-center px-10 lg:w-6/12">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="my-5 h-44 rounded-3xl bg-white/70 object-contain px-10 py-5 shadow-lg sm:h-80 md:max-w-xl"
                  src="https://www.cdnlogo.com/logos/s/72/souq-primary-en.svg"
                  alt="Souq.com Logo"
                />
              </div>
            </div>
          </div>
          <div className="flex h-screen w-screen flex-1 flex-col justify-center bg-[#CD1E80] pt-20 sm:pt-0">
            <div className="flex flex-col lg:flex-row">
              <div className="flex h-fit flex-col items-start justify-center px-5 md:px-24 lg:w-6/12">
                <h2 className="mb-2 text-3xl font-extrabold text-white md:text-6xl">
                  Teleperformance
                </h2>{" "}
                <h2 className="mb-2 text-2xl font-light text-white md:text-3xl">
                  Travel Advisor (Expedia Canada)
                </h2>{" "}
                <h2 className="text-md font-light text-white/70 md:text-xl">
                  Sep 2018 - Nov 2018
                </h2>{" "}
                <p className="text-md mb-6 text-white md:text-xl">
                  Worked as a full time as a Travel Advisor at Teleperformance,
                  representing Expedia Canada, a leading travel booking
                  platform. This allowed me to expand my skills to support my
                  technical skills and entrepreneurial mindset regarding the
                  travel industry.
                </p>
                <p className="text-sm text-white md:text-lg">
                  Skills: Travel Sector Knowledge, Customer Relation, Business
                  Operations, Sales
                </p>
              </div>
              <div className="flex max-w-screen-xl flex-col items-center justify-center px-10 lg:w-6/12">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="my-5 h-40 rounded-3xl bg-white/70 object-contain px-10 py-5 shadow-lg sm:h-80 md:max-w-xl"
                  src="https://images.wuzzuf-data.net/files/company_logo/184062856462c1688817c1b.png"
                  alt="Teleperformance Logo"
                />
              </div>
            </div>
          </div>
          <div className="flex h-screen w-screen flex-1 flex-col justify-center bg-[#131313] pt-20 sm:pt-0">
            {" "}
            <div className="flex flex-col lg:flex-row">
              <div className="flex h-fit flex-col items-start justify-center px-5 md:px-24 lg:w-6/12">
                <h2 className="mb-2 text-3xl font-extrabold text-white md:text-6xl">
                  Secure Stream Technologies
                </h2>{" "}
                <h2 className="mb-2 text-2xl font-light text-white md:text-3xl">
                  Front End Developer Internship
                </h2>{" "}
                <h2 className="text-md font-light text-white/70 md:text-xl">
                  Mar 2020 - Apr 2020 | Remote
                </h2>{" "}
                <p className="text-md mb-6 text-white md:text-xl">
                  Interned as a Front End Web Developer at Secure Stream
                  Technologies. This marked one of my first steps into
                  production environments beyond classrooms and courses. I was
                  part of a team managing the Startup's Website. Mainly my
                  responsibilities were improving the UI & UX, Bug Fixes, Bug
                  Reports, and Writing Documentations.
                </p>
                <p className="text-sm text-white md:text-lg">
                  Skills: Angular JS, HTML, CSS, Agile, Jira, Git, Documentation
                </p>
              </div>
              <div className="flex max-w-screen-xl flex-col items-center justify-center px-10 lg:w-6/12">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="my-5 h-40 rounded-3xl bg-white/70 object-contain px-10 py-5 shadow-lg sm:h-80 md:max-w-xl"
                  src="https://securestream.tech/wp-content/uploads/2019/02/SSSheildv1.2_FULL_560x140.png"
                  alt="Secure Stream Logo"
                />
              </div>
            </div>
          </div>
          <div className="flex h-screen w-screen flex-1 flex-col justify-center bg-[#E70101] pt-20 sm:pt-0">
            <div className="flex flex-col lg:flex-row">
              <div className="flex h-fit flex-col items-start justify-center px-5 md:px-24 lg:w-6/12">
                <h2 className="mb-2 text-3xl font-extrabold text-white md:text-6xl">
                  Vodafone UK
                </h2>{" "}
                <h2 className="mb-2 text-2xl font-light text-white md:text-3xl">
                  Technical Support Engineer II
                </h2>{" "}
                <h2 className="text-md font-light text-white/70 md:text-xl">
                  Aug 2020 - Dec 2020 | Remote
                </h2>{" "}
                <p className="text-md mb-6 text-white md:text-xl">
                  As a Technical Support Engineer II at Vodafone UK, I provided
                  technical support for fiber services for UK based enterprises.
                  My responsibilities included conducting tests and diagnosing
                  faults to resolve connectivity issues. In addition to
                  resolving tickets, I collaborated with field engineers to
                  escalate complex issues and ensure timely service restoration.
                </p>
                <p className="text-sm text-white md:text-lg">
                  Skills: FTTH, OSI Model, Network Components, Packet Tracer,
                  Wire Shark, Telecom Industry Knowledge
                </p>
              </div>
              <div className="flex max-w-screen-xl flex-col items-center justify-center px-10 lg:w-6/12">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="my-5 h-40 rounded-3xl bg-white/70 object-contain px-10 py-5 shadow-lg sm:h-80 md:max-w-xl"
                  src="https://www.cdnlogo.com/logos/v/98/vodafone-2017.svg"
                  alt="Vodafone Logo"
                />
              </div>
            </div>
          </div>
          <div className="flex h-screen w-screen flex-1 flex-col justify-center bg-[#f36620]">
            {" "}
            <div className="flex flex-col lg:flex-row">
              <div className="flex h-fit flex-col items-start justify-center px-5 md:px-24 lg:w-6/12">
                <h2 className="mb-2 text-3xl font-extrabold text-white md:text-6xl">
                  Amazon
                </h2>{" "}
                <h2 className="mb-2 text-xl font-light text-white md:text-3xl">
                  Information Technology Operations Engineer (SDE L4)
                </h2>{" "}
                <h2 className="text-sm font-light text-white/70 md:text-xl">
                  Jun 2022 - Jan 2023
                </h2>{" "}
                <p className="mb-6 text-sm text-white md:text-xl">
                  I supported the operations department in the biggest Amazon
                  Warehouse in Egypt. I helped develop several internal tools
                  for the operations. I also designed and built an in-house
                  smart locker system to automate & track assets handling. I
                  held meetings with stakeholders, drafted documentation,
                  developed a plan and managed the whole project from seed phase
                  till delivery. This end-to-end project demonstrated my
                  abilities in hardware prototyping, mobile and cloud
                  application development, and bringing innovative ideas to life
                  through technical solutions.
                </p>
                <p className="text-xs text-white md:text-lg">
                  Skills: Flutter, Python, JS, React, AWS, Dynamo DB, Green
                  Grass, Lambda, IAM, Circuit design, IOT, Raspberry Pi
                </p>
              </div>
              <div className="flex max-w-screen-xl flex-col items-center justify-center px-10 lg:w-6/12">
                <motion.img
                  initial={{ y: 150 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 1 }}
                  className="mt-5 h-40 rounded-3xl bg-white/70 object-contain px-10 py-5 shadow-lg sm:h-80 md:max-w-xl"
                  src="https://www.cdnlogo.com/logos/a/33/amazon-com.svg"
                  alt="Amazon Logo"
                />
              </div>
            </div>
          </div>
          <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center bg-[#3844f3]">
            {" "}
            <div className="flex h-fit flex-col items-center justify-center px-5 md:px-24 lg:w-9/12">
              <h2 className="mb-2 text-3xl font-extrabold text-white md:text-6xl">
                Egyptian Ministry of Interior
              </h2>{" "}
              <h2 className="mb-2 text-xl font-light text-white md:text-3xl">
                Software Engineer{" "}
                <span className="font-bold">(Mandatory Military Service)</span>
              </h2>{" "}
              <h2 className="text-sm font-light text-white/70 md:text-xl">
                March 2023 - March 2024
              </h2>{" "}
              <p className="mb-6 text-center text-sm text-white md:text-xl">
                All male Egyptians are required to complete their Military
                Service right after graduation. I managed to make the most out
                of this unfortunate experience by convincing the Highest Ranking
                Officials in the state I served in to develop softwares for the
                Military Base I served In. These softwares aimed to computerize
                many processes which were done manually using pen and paper. I
                led a small team of other developers "Soliders", to accomplish
                the task. The softwares developed include a Solider Shooting
                Range, Vehicle Fleet, Operations Application, and Inventory
                Mangement Applications.
              </p>
              <p className="text-xs text-white md:text-lg">
                Skills: Flutter, Hive, Bloc, Project Management, Stakeholder
                Meetings, Requirement Gathering, Communication Skills
              </p>
            </div>
          </div>
          <div className="flex h-screen w-screen flex-1 flex-col items-center justify-center bg-[#8a2a72]">
            {" "}
            <div className="flex h-fit flex-col items-center justify-center px-5 md:px-24 lg:w-9/12">
              <h2 className="mb-2 text-2xl font-extrabold text-white md:text-5xl">
                Confidential Company (NDA)
              </h2>{" "}
              <h2 className="mb-2 text-xl font-light text-white md:text-2xl">
                Full Stack Web & Flutter Developer
              </h2>{" "}
              <h2 className="text-sm font-light text-white/70 md:text-xl">
                Aug 2024 - Dec 2024 | Remote
              </h2>{" "}
              <p className="mb-6 text-center text-sm text-white md:text-xl">
                Developed and led a SaaS SMS marketing platform similar to
                Twilio, designed to help small business owners and brands
                efficiently manage marketing campaigns. Created multiple landing
                pages tailored for various industries, including SaaS, real
                estate, and tech, ensuring high-quality user experience and
                optimized performance. Spearheaded the development of an
                AI-driven social media marketing application, akin to Hootsuite,
                with advanced features for generating, editing, and customizing
                social media campaigns, posts, and images. During my time in
                this role, I honed my technical skills in full-stack
                development, project leadership, and delivering impactful
                solutions for diverse business needs.
              </p>
              <p className="text-xs text-white md:text-lg">
                Skills: Flutter, Bloc, Cloud Functions, Node JS, Firebase,
                OpenAI, REST, System Design, Project Management, Stakeholder
                Meetings, Requirement Gathering,
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;
