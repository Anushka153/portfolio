"use client";
import { Button } from "@/components/ui/button";

export default function ProjectRootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <div className="items-center bg-[#f7f5d0]">
            <Button onClick={() => { window.history.back() }} className="mb-4 ">Back</Button>
            {children}
        </div>
    )
}