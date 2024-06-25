'use client'
import { Dancing_Script } from 'next/font/google'
import { useEffect } from "react";
import { StickyScroll } from './components/sticky-scroll-reveal';
import Image from "next/image";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";


// If loading a variable font, you don't need to specify the font weight
const inter = Dancing_Script({ subsets: ['latin'] })

const content = [
  {
    title: "About Me",
    description: "Hello! My name is Bartosz Marciszewski, and I am a passionate Full-Stack Developer with expertise in Next.js and Java. I have a strong background in creating dynamic and responsive web applications. My goal is to deliver high-quality user experiences and contribute to impactful projects. ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/me.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Education",
    description: "I completed my education at Białystok University of Technology with an engineering degree. This academic background has provided me with a solid foundation in technical and analytical skills, giving me an advantage in understanding complex systems and developing efficient solutions. The rigorous curriculum and hands-on projects have equipped me with the knowledge and experience needed to excel in the field of frontend development.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/education.jpg"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />      </div>
    ),
  },
  {
    title: "Projects",
    description: "While my portfolio might not be brimming with a multitude of public projects, it is not for lack of experience or expertise. Much of my work has been conducted in professional settings where the projects and products remain private due to company policies and confidentiality agreements. However, I am excited to showcase one of my significant public projects that highlights my skills and capabilities.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/projects.jpg"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },

  {
    title: "BarrowMed",
    description: "BarrowMed Breathing Exercises Platform is a comprehensive digital initiative aimed at promoting respiratory health through accessible exercises, innovative products, and educational courses. The project focuses on empowering users to enhance their breathing techniques for improved overall well-being.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/bm.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Ripple",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/db.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "RQUEST",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/bc.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />      </div>
    ),
  },
  {
    title: "Pfizer dashboard",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/pf.png"
          width={600}
          height={600}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Thats is for now :)",
    description:
      "I hope next project on that list will be yours!",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

export default function Home() {
  return (
    <main className=" p-4 bg-gray-100">
      <div className='min-h-screen flex flex-col items-center justify-center text-center'>
        <h1 className={`text-6xl font-bold mb-4 ${inter.className}`}>Bartosz Marciszewski</h1>
        <p className="text-4xl mb-8">Full Stack Developer with primary focus on Frontend</p>
      </div>

      <StickyScroll content={content} />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 3,
        }}
        className="div"
      >
        <h2 className=" pt-5 text-center text-xl md:text-4xl font-bold text-black dark:text-white">
          Let's connect
        </h2>
        <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
          Write me an email, and let's discuss your requirements, I will be happy to provide my services.
        </p>
      </motion.div>

      {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                I check email everyday make sure to leave your contact info, so I am able to respond :)
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">+48 xxx xxx xxx </a>

                <address className="mt-2 not-italic">Ostrolenka, Poland</address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="https://formsubmit.co/bartoszmarciszewski555@gmail.com" method="POST" className="space-y-4" >
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                </div>

                <div>
                  <label className="sr-only" htmlFor="message">Message</label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>



    </main >
  );
}
