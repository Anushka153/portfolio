import ProjectTile from "@/components/ProjectTile";
import { Analytics } from "@vercel/analytics/react";


export default function Projects ()
{
    return (
        <div>
            <Analytics path="Viewed Projects Page" />
                <span className="text-2xl font-bold">Projects</span>
            <div className="relative min-h-screen bg-gradient-to-b from-[#fefee0] to-[#fdfeec] flex items-center justify-center">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <ProjectTile image="/shein.png" projectHeadline="Shein" projectLink="/projects/shein" />
                    <ProjectTile image="/splitwise.png" projectHeadline="Splitwise" projectLink="/projects/splitwise" />
                    {/* <ProjectTile projectHeadline="Jai Shree ram" projectLink="/projects/something" /> */ }
                    {/* <ProjectTile projectHeadline="Jai Shree Krishna" projectLink="/projects/jaishreekrishna" />
        <ProjectTile projectHeadline="Jai Shree ram" projectLink="/projects/jaishreeram" />
        <ProjectTile projectHeadline="Jai Shree Krishna" projectLink="/projects/jaishreekrishna" /> */}
                </div>
            </div></div>


    );
}

