"use client";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";

const jobs = [
  { date: "2025", 
    title: "Tutor", 
    location:"Cégep Gerald-Godin", 
    description: "Spent 100+ hours tutoring college students in my CS program, in person and online. The content of my tutoring mostly consisted of either Java (specifically JavaFX) or Javascript problems",
    skills: ["Java", "JavaFX", "JavaScript"]
  },
  { date: "2025", 
    title: "Volunteer developer for Parks Canada", 
    location:"Remote", 
    description: "Worked on CanalNet, a management web app meant to allow different Ontario park administrators to submit requests for materials",
    skills: ["Flask", "SQLAlchemy", "Bootstrap"]
  },
  { date: "2021",
    title: "Developer for E-Corp",
    location:"Remote",
    description: "E-Corp was a Roblox group focused around the development of the game that shared its name. I created their discord's 'job bot' which saw 1000+ active users aswell as their website, plus some minor contributions to the E-Corp game",
    skills: ["Javascript", "Python", "Discord API", "HTML/CSS"]
  },
]

const internships = [
    {
        date: "2025",
        title: "Intern at UDEM",
        location: "UDEM",
        description: "Shadowed Professor Houari Sahraoui as he gave presentations and completed work around the University"
    }
]

const education = [
    {
        date: "2023-2025",
        institution: "Cégep Gerald-Godin",
        location: "Pierrefonds, QC",
        description: "Pursuing a Diploma of College Studies (DEC) in Computer Science",
        courses: ["Desktop Development", "Web Development", "Database Management", "Project Administration"]
    }
]

const grades = [
    {course: "Programming concepts", grade: "94%", classAvg: "63%"},
    {course: "Application of programming concepts", grade: "95%", classAvg: "67%"},
    {course: "Web Client programming", grade: "84%", classAvg: "57%"},
    {course: "Object Oriented Programming 1", grade: "86%", classAvg: "63%"},
    {course: "Web programming tools", grade: "96%", classAvg: "77%"},
    {course: "Object Oriented Programming 2", grade: "92%", classAvg: "65%"}
]

export default function ExperienceEducation() {
    return (
            <div className="grid grid-cols-2 h-screen">
                <div className="p-32">
                    <h1 className="text-5xl text-red-700">Experience+Education</h1>
                    <Button className="mt-96 bg-black ring-1 ring-white hover:bg-red-700 hover:text-black hover:ring-red-700 transition-all duration-300" onClick={() => window.location.href = "/"}>
                        <span className="group inline-flex items-center">
                            <ArrowLeftIcon className="mr-3 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            Back to home
                            
                        </span>
                    </Button>
                </div>
                <div className="p-32 overflow-y-auto [mask-image:linear-gradient(to_top,transparent_5%,#000_100%)]">
                    <h1 className="text-2xl text-white mb-8">Work experience</h1>
                    {jobs.map((job) => (
                        <div key={job.title} className="mb-4 p-1 hover:ring-1 hover:ring-white transition-all duration-300">
                            <h2 className="text-lg text-red-700">{job.title}</h2>
                            <p className="text-gray-400 text-sm">{job.date} - {job.location}</p>
                            <p className="text-gray-300 text-sm">{job.description}</p>
                            <div className="flex flex-wrap">
                                {job.skills.map((skill) => (
                                    <span key={skill} className="mt-2 text-white text-sm px-2 py-1 rounded-full mr-2 mb-2 ring-1 ring-white hover:bg-white hover:text-black transition-all duration-300">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="mt-12">
                        <h2 className="text-2xl text-white mb-8">Internships</h2>
                    </div>
                    {internships.map((internship) => (
                        <div key={internship.title} className="mb-4 p-1 hover:ring-1 hover:ring-white transition-all duration-300">
                            <h2 className="text-lg text-red-700">{internship.title}</h2>
                            <p className="text-gray-400 text-sm">{internship.date} - {internship.location}</p>
                            <p className="text-gray-300 text-sm">{internship.description}</p>
                        </div>
                    ))}
                    <div className="mt-12">
                        <h2 className="text-2xl text-white mb-8">Education</h2>
                        {education.map((edu) => (
                            <div key={edu.institution} className="mb-4 p-1 hover:ring-1 hover:ring-white transition-all duration-300">
                                <h2 className="text-lg text-red-700">{edu.institution}</h2>
                                <p className="text-gray-400 text-sm">{edu.date} - {edu.location}</p>
                                <p className="text-gray-300 text-sm">{edu.description}</p>
                                <div className="flex flex-wrap">
                                    {edu.courses.map((course) => (
                                        <span key={course} className="mt-2 text-white text-sm px-2 py-1 rounded-full mr-2 mb-2 ring-1 ring-white">{course}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <h2 className="text-2xl text-white mb-8">Grades</h2>
                        {grades.map((grade) => (
                            <div key={grade.course} className="mb-4 p-1 hover:ring-1 hover:ring-white transition-all duration-300">
                                <h2 className="text-lg text-red-700">{grade.course}</h2>
                                <p className="text-gray-300 text-sm">Grade: {grade.grade}, Class Average: {grade.classAvg}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
    );
}