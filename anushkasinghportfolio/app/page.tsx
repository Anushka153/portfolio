"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/aboutme");
  }, [])
  return (
    <main className="">
      
    </main>
  );
}
