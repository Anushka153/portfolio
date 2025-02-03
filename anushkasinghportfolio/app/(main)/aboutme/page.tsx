import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Myphoto from "@/public/myphoto.jpg"

export default function AboutMe ()
{
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            <Image src={ Myphoto } alt="Anushka Singh" className="w-32 h-32"/>
            <div>
            
                <div>Aspiring product manager with a deep interest in understanding the “why” and “how” behind systems. </div>
                <div>
                    I currently live in Madison, pursuing my MBA from Wisconsin School Of Business, but my roots trace back to the spiritual city of Lucknow, India.
                </div>
            </div>
            <Image src={Myphoto} alt="Anushka Singh" />
            <div>
            
                <div>Aspiring product manager with a deep interest in understanding the “why” and “how” behind systems. </div>
                <div>
                    I currently live in Madison, pursuing my MBA from Wisconsin School Of Business, but my roots trace back to the spiritual city of Lucknow, India.
                </div>
            </div>
             <Image src={Myphoto} alt="Anushka Singh" />
            <div>
            
                <div>Aspiring product manager with a deep interest in understanding the “why” and “how” behind systems. </div>
                <div>
                    I currently live in Madison, pursuing my MBA from Wisconsin School Of Business, but my roots trace back to the spiritual city of Lucknow, India.
                </div>
            </div>
        </div>
    )
}