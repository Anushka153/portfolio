"use client";
import React from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/home");
  }, [])
  return (
    <main className="">
      
    </main>
  );
}
