"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Myphoto from "@/public/myphoto.jpg"
import Image from "next/image";


export default function HomePage() {
    const router = useRouter();
    return (
        <div className="relative min-h-screen bg-gradient-to-b from-[#f3ffd2] to-[#fcffe2]">
            
      {/* Profile Image */}
      
      {/* Hero Section */}
            <div className="flex flex-col items-center justify-center text-center py-20 px-6 bg-[#58653b] text-white">
                <div className="flex justify-center py-12">
        <Image src={Myphoto} alt="Profile Picture" className="rounded-full w-48 h-48 object-cover shadow-lg" />
      </div>
        <h1 className="text-5xl font-bold mb-4">Welcome to My World</h1>
        <p className="text-lg max-w-2xl">
          Crafting products that aren’t just functional, but intuitive, delightful, and built for real people.
        </p>
      </div>
      
      {/* What Sets Me Apart Section */}
      <div className="py-20 px-8 sm:px-16 max-w-full mx-auto text-gray-900">
        <div className="bg-[#d6d6a0] rounded-lg shadow-xl py-16 px-8 sm:px-12 text-center hover:scale-105 transition-transform duration-700">
          <h2 className="text-4xl font-bold text-[#d07f33] mb-6">What Sets Me Apart</h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            I blend strategic thinking with hands-on execution, ensuring products don’t just meet expectations but redefine them.
            My approach is rooted in user empathy, business acumen, and a relentless drive for innovation.
            With a strong technical background and experience in product development, I bridge the gap between vision and execution,
            ensuring that every decision aligns with business goals and user needs.
          </p>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Whether it`s optimizing existing products or launching something entirely new, I thrive in creating solutions that resonate.
            My ability to collaborate across cross-functional teams and adapt to dynamic challenges is what sets me apart in the tech landscape.
            Open to feedback and constantly evolving, I embrace new perspectives to drive impactful outcomes.
          </p>
          <div className="mt-8">
            <button 
              onClick={() => router.push('/projects')} 
              className="px-6 py-3 text-lg font-semibold bg-[#d07f33] text-white rounded-lg shadow-lg hover:bg-[#b06a2c] transition-colors">
              Explore My Projects
            </button>
          </div>
        </div>
      </div>

    </div>
    )
}

