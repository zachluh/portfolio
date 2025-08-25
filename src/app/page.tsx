"use client";

import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { cn } from "@/lib/utils";
import React, {useState, useEffect} from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input"; 

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Marquee } from "@/components/magicui/marquee";
import { Button, buttonVariants } from "@/components/ui/button";
import { HomeIcon, MailIcon, PencilIcon, Braces, GraduationCap, FolderKanban, User, FileTextIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  email: (props: IconProps) => ( <MailIcon {...props} /> ),
  CV : (props: IconProps) => ( <FileTextIcon {...props} /> ),
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="white"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="white"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>youtube</title>
      <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="white"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}


const skills = [
  { name: "JavaScript", level: "red" },
  { name: "TypeScript", level: "red" },
  { name: "React", level: "red" },
  { name: "Next.js", level: "red" },
  { name: "Flask", level: "red" },
  { name: "SQL / Databases", level: "red-400" },
  { name: "ORMs (Prisma, Sequelize, SQLAlchemy)", level: "white" },
  { name: "AWS", level: "white" },
  { name: "Tailwind CSS", level: "white" },
  { name: "Radix UI / shadcn/ui", level: "white" },
  { name: "Railway / Hosting", level: "white" },
  { name: "OpenCV / Tesseract OCR", level: "white" },
];

const projects = [
  { name: "newgen.me", description: "A NextJS website that uses AI to match user submitted clothing brands with a client's fashion taste", href: "projects/newgen-me"},
  { name: "allergen-ai.com", description: "A Flask website that allows users to edit allergens out of a recipe to make it usable to them", href: "projects/allergen-ai"},
  { name: "CanalNet", description: "A management web app used by Parks Canada", href: "projects/canalnet"},
  { name: "zaynary", description: "A React website made for couples which allows them to send each other long messages, songs or photos", href: "projects/zaynary"},
  { name: "Scout", description: "A device made for visually impaired people that aims to help them find products on their shopping list", href: "projects/scout"},
  { name: "PyLiveTranslator", description: "A live translator that allowed gamers to communicate with teammates that spoke a different language than theirs", href: "projects/pylivetranslator"},
]






export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const bentoCardData = [
    {
      Icon: GraduationCap,
      name: "Experience/Education",
      description: "",
      href: "/experience-education",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: null
    },
    {
      Icon: Braces,
      name: "Skills",
      description: "Expertise in red, good knowledge in white",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div className="top-10 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] p-3 overflow-y-hidden hover:overflow-y-auto scroll-smooth blur-[1px] hover:blur-none h-auto"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            {skills.map((skill) => (
              <div key={skill.name} className={`text-black w-auto inline-block m-1 px-1 py-2 rounded-lg ${skill.level === "red" ? "bg-red-700" : "bg-white"}`}>
                {skill.name}
              </div>
            ))}
        </div>
      )
    },
    {
      Icon: FolderKanban,
      name: "Projects",
      description: "",
      href: "#",
      cta: "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <Marquee pauseOnHover className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] ">
          {projects.map((project) => (
            <figure
              key={project.name}
              className={cn(
                "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none text-white",
              )}
              onClick={() => window.open(project.href, "_blank")}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="flex flex-row items-center gap-2">
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium text-red-700 ">
                    {project.name}
                  </figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs">{project.description}</blockquote>
            </figure>
          ))}
        </Marquee>
      )
    },
    {
      Icon: User,
      name: "About me",
      description: "",
      className: "col-span-3 lg:col-span-1",
      href: "/about-me",
      cta: "Learn more",
      background: null
    },
  ];

  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.1, // smoothing factor (0.1 = more delay)
        y: prev.y + (target.y - prev.y) * 0.1,
      }));
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target]);

  return (

    

    <div className={`relative grid min-h-screen ${currentSlide === 0 ? 'grid-cols-[3fr_1fr]' : 'grid-cols-[1fr_2fr_1fr]'}`} onMouseMove={(e) => setTarget({ x: e.clientX, y: e.clientY })}>
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovering ? 0 : 1, 
          background: `${`radial-gradient(500px at ${pos.x}px ${pos.y}px, rgba(255,0,0,0.10), transparent 95%)`}`,
        }}
      />
      
      {currentSlide != 0 && (
      <div className="text-white flex flex-col justify-center items-center hover:bg-red-700 hover:text-black transition-all duration-300" onClick={() => setCurrentSlide(currentSlide-1)}>
        &lt;
      </div>
      )}
      {currentSlide === 0 && (
        <div className="p-80">
          <h1 className="font-bold text-5xl text-white">Zachary Tristan Luheshi</h1>
          <p className="text-lg text-white">Full-stack software engineer</p>
          <p className="text-sm text-gray-400 mt-2">
            Welcome to my portfolio!
            <br />
            Im a <span className="text-white">full-stack developer</span> based in Montreal with a passion for building web applications.
            <br />
            My main tools are <span className="text-white">React, Next.js, Node.js, and Python</span>.
            <br />
            I also like working with databases, I tend to use <span className="text-white">PrismaDB, Sequelize and SQLAlchemy</span>.
          </p>
          <Dock direction="middle">
            <DockIcon>
              <Icons.github className="size-6" onClick={() => window.open("https://github.com/zachluh", "_blank")}/>
            </DockIcon>
            <DockIcon>
              <Icons.linkedin className="size-6" onClick={() => window.open("https://www.linkedin.com/in/zachary-tristan-luheshi-680005315/", "_blank")}/>
            </DockIcon>
            <DockIcon>
              <Icons.email className="size-6 text-white" onClick={() => window.open("mailto:zluheshi@gmail.com", "_blank")}/>
            </DockIcon>
            <DockIcon>
              <Icons.CV className="size-6 text-white" onClick={() => window.open("/CV.pdf", "_blank")}/>
            </DockIcon>
        </Dock>
        </div>          
      )}
      {currentSlide === 1 && (
        <div className="flex flex-col justify-center items-center p-20">
          <BentoGrid>
            {bentoCardData.map((card, idx) => (
              <BentoCard key={idx} {...card} />
            ))}
          </BentoGrid>
        </div>
      )}
      {currentSlide === 2 && (
        <div className="flex flex-col justify-center items-center p-20">
          <h2 className="font-bold text-3xl text-white">Contact Me</h2>
          <p className="text-sm text-gray-400 mt-2">
            Or e-mail me at <a href="mailto:zluheshi@gmail.com" className="text-white">zluheshi@gmail.com</a>!
          </p>
          <Input placeholder="E-mail" className="mt-4 min-w-[50%] text-white"/>
          <Textarea placeholder="Type your message here..." className="mt-4 min-w-[50%] text-white" onFocus={() => {setHovering(true)}} onBlur={() => {setHovering(false)}}/>
          <Button className="mt-4 bg-black text-white ring-white ring-2 hover:bg-red-700 hover:text-black hover:ring-red-700 transition-all duration-300">Submit</Button>
        </div>
      )}
      {currentSlide !== 2 && (
        <div className="text-white flex flex-col justify-center items-center hover:bg-red-700 hover:text-black transition-all duration-300" onClick={() => setCurrentSlide(currentSlide+1)}>
          &gt;
        </div>
      )}
    </div>
    
  );
}

  
  


