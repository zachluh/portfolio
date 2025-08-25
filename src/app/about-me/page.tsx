"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const stats = [
  { label: "Years of Experience", value: "7+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Languages/Frameworks used", value: "20+" },
  { label: "Leetcode problems solved", value: "50+" },
  { label: "Max bench press", value:"225lbs"}
]

export default function AboutMe() {
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="p-32">
        <h1 className="text-5xl text-red-700">About Me</h1>
        <p className="text-sm text-gray-300 mt-32">
          At 12 years old, I wrote my first ever Python script, hoping that soon enough Id be able to hack into my school database to change my grades. While that never came to fruition,
          my interest in programming stayed and only grew stronger over time. Now at 19, Ive spent nearly a decade honing my skills as a full-stack developer, and frankly I enjoy it more than ever.
          When Im not coding, you can probably find me working out, editing videos, DJing, or looking for new clothes to buy.
          <br />
          Here are a few statistics I think you should know about me:
        </p>
        <div className="flex flex-row gap-10 mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <p className="font-semibold text-gray-300">{stat.label}</p>
              {stat.value === "225lbs." ? <br /> : null}
              <h1 className="text-5xl text-red-700 font-bold">{stat.value}</h1>
            </div>
          ))}
        </div>
        <Button className="mt-40 bg-black ring-1 ring-white hover:bg-red-700 hover:text-black hover:ring-red-700 transition-all duration-300" onClick={() => window.location.href = "/"}>
            <span className="group inline-flex items-center">
                <ArrowLeftIcon className="mr-3 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                Back to home
                
            </span>
        </Button>        
      </div>
      <div className="flex flex-col justify-center items-center overflow-y-auto">
        <img src="/profile-pic.jpeg" className="max-w-[95%] max-h-[95%]" alt="Profile Picture" />
      </div>
    </div>
  );
}
