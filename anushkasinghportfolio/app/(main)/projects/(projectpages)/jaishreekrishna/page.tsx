import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Myphoto from "@/public/myphoto.jpg"
export default function JaiShreeKrishnaProject() {
    return (<>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            <Image src={Myphoto} alt="Anushka Singh" />
            <Card>
                <CardHeader>
                    <CardTitle>Anushka Singh</CardTitle>
                </CardHeader>
                <CardContent>
                    Here is my jai shree krishna project
                </CardContent>
            </Card>
        </div>
    </>)
}