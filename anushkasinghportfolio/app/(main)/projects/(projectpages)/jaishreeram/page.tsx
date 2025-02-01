import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Myphoto from "@/public/myphoto.jpg"
export default function JaiShreeRamProject() {
    return (<>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <Image src={Myphoto} alt="Anushka Singh" />
            <Card>
                <CardHeader>
                    <CardTitle>Anushka Singh</CardTitle>
                </CardHeader>
                <CardContent>
                    Here is my jai shree ram project
                </CardContent>
            </Card>
        </div>
    </>)
}