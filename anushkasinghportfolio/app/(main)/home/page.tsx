"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Myphoto from "@/public/myphoto.jpg"
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
    const router = useRouter();
    return (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            <Image src={Myphoto} alt="Anushka Singh" />
            <Card>
                <CardHeader>
                    <CardTitle>Anushka Singh</CardTitle>
                </CardHeader>
                <CardContent>
                    Here is my description
                </CardContent>
                <CardFooter>
                    <Button onClick={() => { router.push("/projects") }}>Projects</Button>
                </CardFooter>
            </Card>
        </div>
    )
}