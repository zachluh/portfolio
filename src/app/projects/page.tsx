"use client"
import { useState } from "react"
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function Projects() {


    const searchParams = useSearchParams();
    const project = searchParams.get("id");

    const projects = {
        "allergen-ai": [
            {
                title: 'Allergen AI',
                tools: ['Flask', 'SQLAlchemy', 'PostgreSQL', 'AWS S3', 'OpenAI', 'Javascript', 'Bootstrap', 'Cloudflare'],
                description: 'Allergen-AI is a tool designed for people with/people with loved ones that have severe food allergies which allows them to submit a recipe and have it modified to fit their dietary restrictions.',
                demo_type: 'images',
                demo: '/images/allergen-ai.png',
                links: [
                    {
                        name: 'Website',
                        url: 'https://allergen-ai.com'
                    },
                    {
                        name: 'GitHub',
                        url: 'https://github.com/zachluh/allergen-ai'
                    }
                ]
            }
        ],

        "newgen.me": [
            {
                title: 'newgen.me',
                tools: ['NextJS', 'React', 'TypeScript', 'AWS S3', 'PrismaDB', 'PostgreSQL', 'Stripe', 'Resend', 'OpenAI'],
                description: 'A platform that serves two purposes: connecting people interested in fashion with brands that fit their aesthetic, and helping underground brands reach a more targeted audience',
                demo_type: 'video',
                demo: '/images/newgen.me.png',
                links: []
            }
        ]
    };


    return (
        <div>
            {!project && (
                <div className="flex flex-col justify-center items-center min-h-screen">
                    <h1 className="text-2xl mb-4 text-red-700">This project's page is still being built</h1>
                    <br />
                    <p className="text-lg text-white">Check back later for updates!</p>
                    <Button className="mt-40 bg-black ring-1 ring-white hover:bg-red-700 hover:text-black hover:ring-red-700 transition-all duration-300" onClick={() => window.location.href = "/"}>
                        <span className="group inline-flex items-center">
                            <ArrowLeftIcon className="mr-3 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            Back to home
                            
                        </span>
                    </Button>                   
                </div>
            )}

        </div>
    )
}