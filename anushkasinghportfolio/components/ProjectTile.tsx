"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function ProjectTile(
    {
        image,
        projectHeadline,
        projectLink
    }: {
        image?: string,
        projectHeadline: string,
        projectLink: string
    }
) {
    const router = useRouter();
    return (
        <div className="flex flex-col items-center gap-4 p-4 rounded-2xl">
          <div className="w-[300px] h-[300px] bg-[#f5f0bf] flex items-center justify-center shadow-lg rounded-lg">
    <Image src={image} alt={projectHeadline} width={250} height={250} className="rounded-lg" />
</div>


            
            <span className="text-xl font-semibold text-gray-800">{projectHeadline}</span>
            <Button 
                className="bg-[#d07f33] text-white px-4 py-2 rounded-lg hover:bg-[#b5692e]  transition transform hover:scale-105 hover:shadow-xl" 
                onClick={() => router.push(projectLink)}
            >
                View Project
            </Button>
        </div>
    );

}

    