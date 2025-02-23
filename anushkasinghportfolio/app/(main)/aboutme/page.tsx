import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Myphoto from "@/public/myphoto.jpg";

export default function AboutMe() {
    // const router = useRouter();
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6">
            <Card className="max-w-3xl w-full shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="flex flex-col items-center text-center">
                    <Image src={Myphoto} alt="Anushka Singh" className="w-32 h-32 rounded-full border-4 border-gray-300" />
                    <CardTitle className="text-xl font-semibold mt-4 text-red-600">Curious Product Manager passionate about simplifying user experiences.</CardTitle>
                    <p className="text-gray-600">Based in Madison, originally from the spiritual city of Lucknow, India.</p>
                    <p className="text-blue-600">Exploring the intersection of technology, strategy, and user experience.</p>
                </CardHeader>
                <CardContent className="text-center text-gray-700 space-y-4">
                    <p>
                        Currently pursuing my MBA at the Wisconsin School of Business. I have over five years of experience in software development and project management, focusing on building scalable solutions and improving user experiences.
                    </p>
                    <p>
                        My passion lies in solving complex problems and making technology accessible to all.
                    </p>
                    <p>
                        Outside of work, I enjoy mentoring aspiring tech professionals, exploring new cultures through travel, and indulging in photography to capture meaningful moments.
                    </p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
                        Connect with Me
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}