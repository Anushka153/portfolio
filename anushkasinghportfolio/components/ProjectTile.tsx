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
        image: string,
        projectHeadline: string,
        projectLink: string
    }
) {
    const router = useRouter();
    return (
        <div className="flex flex-col gap-4">
            <Image src={image} alt={projectHeadline} width={400} height={400} />
            <span className="font-semibold">{projectHeadline}</span>
            <Button onClick={() => { router.push(projectLink) }}>View Project</Button>
        </div>
    )
}