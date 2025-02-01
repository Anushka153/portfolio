import ProjectTile from "@/components/ProjectTile";

export default function Projects() {
    return (
        <div className="items-center flex flex-col gap-4">
            <span className="text-2xl font-bold">Projects</span>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                <ProjectTile image="/myphoto.jpg" projectHeadline="Jai Shree ram" projectLink="/projects/jaishreeram" />
                <ProjectTile image="/myphoto.jpg" projectHeadline="Jai Shree Krishna" projectLink="/projects/jaishreekrishna" />
                <ProjectTile image="/myphoto.jpg" projectHeadline="Jai Shree ram" projectLink="/projects/jaishreeram" />
                <ProjectTile image="/myphoto.jpg" projectHeadline="Jai Shree Krishna" projectLink="/projects/jaishreekrishna" />
                <ProjectTile image="/myphoto.jpg" projectHeadline="Jai Shree ram" projectLink="/projects/jaishreeram" />
                <ProjectTile image="/myphoto.jpg" projectHeadline="Jai Shree Krishna" projectLink="/projects/jaishreekrishna" />
            </div>
        </div>
    )
}