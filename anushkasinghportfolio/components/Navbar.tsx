"use client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
    const router = useRouter();
    return (
        <nav className="w-full flex flex-row gap-4 border shadow-md p-2">
            <Button variant={"link"} onClick={() => { router.push("/home") }}>Home</Button>
            <Button variant={"link"} onClick={() => { router.push("/projects") }}>Projects</Button>
            <Button variant={"link"} onClick={() => { router.push("/aboutme") }}>About Me</Button>
            <Button variant={"link"} onClick={() => { router.push("/contact") }}>Get in touch</Button>
        </nav>
    )
}