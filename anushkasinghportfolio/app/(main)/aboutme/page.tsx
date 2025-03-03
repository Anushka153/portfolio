import React from 'react';
import Image from 'next/image';
import ProfilePic from "@/public/myphoto.jpg"; // Replace with your actual profile image
import SectionImage from "@/public/shein.png"; // Replace with actual section image


const sections = [
  {
    title: "About Me",
    content: [
      {
        type: "text",
        text: "I’m a Product Manager on a mission to make tech simple, sleek, and downright irresistible."
      },
      {
        type: "text",
        text: "Based in Madison, but my roots run deep in Lucknow, India – the city where spirituality meets sass."
      },
      {
        type: "text",
        text: "I’m at the crossroads of tech, strategy, and user experience, turning complex problems into elegant solutions."
      },
      {
        type: "text",
        text: "Oh, and I’m currently in the middle of an MBA at the University Of Wisconsin - Madison, juggling my love for tech with a serious dose of business smarts."
      },
      {
        type: "text",
        text: "Over five years of experience? You bet. Let’s just say I’ve mastered the art of building solutions that don’t just work – they wow."
      },
      {
        type: "image",
        src: ProfilePic, // Replace with actual section image
        alt: "Section Image",
      }
    ],
    bgColor: "bg-[#d6d6a0]", // Soft yellow background
  },
  {
    title: "What Drives Me",
    content: [
      {
        type: "text",
        text: "I’m driven by the thrill of solving problems – and not just any problems, the complex, wicked ones."
      },
      {
        type: "text",
        text: "I’m all about making technology accessible and, frankly, fun."
      },
      {
        type: "text",
        text: "It’s about bridging that gap between user needs and cutting-edge tech in ways that leave everyone saying, 'Why didn’t we think of that?'"
      },
      {
        type: "image",
        src: '', // Replace with actual section image
        alt: "Section Image",
      }
    ],
    bgColor: "bg-[#7a8a56]", // Muted green background
  },
  {
    title: "Experience & Expertise",
    content: [
      {
        type: "text",
        text: "Five years of building scalable solutions, creating slick interfaces, and making tech feel like magic."
      },
      {
        type: "text",
        text: "I’ve dabbled in software development, dived deep into project management, and now, I’m sharpening my skills in product management at the MBA level."
      },
      {
        type: "text",
        text: "The goal? To lead the charge in transforming tech into a user’s dream come true."
      },
      {
        type: "image",
        src: '', // Replace with actual section image
        alt: "Section Image",
      }
    ],
    bgColor: "bg-[#d6d6a0]", // Soft yellow background
  },
  {
    title: "Mentoring & Community Involvement",
    content: [
      {
        type: "text",
        text: "When I’m not busy building the future of tech, I’m mentoring the next wave of trailblazers."
      },
      {
        type: "text",
        text: "I’ve got a knack for helping aspiring tech professionals navigate their journey with a mix of tough love and real-world wisdom."
      },
      {
        type: "text",
        text: "I believe in giving back, empowering others to crush their goals, and building a community where everyone rises together."
      },
      {
        type: "image",
        src: '', // Replace with actual section image
        alt: "Section Image",
      }
    ],
    bgColor: "bg-[#7a8a56]", // Muted green background
  },
  {
    title: "Hobbies & Interests",
    content: [
      {
        type: "text",
        text: "When I’m not conquering the tech world, you’ll find me embracing the art of travel, capturing life’s best moments with my camera, and soaking in all the beauty this world has to offer."
      },
      {
        type: "text",
        text: "I’m always up for a new adventure – it’s all about new perspectives, fresh ideas, and finding inspiration in the unexpected."
      },
      {
        type: "text",
        text: "Trust me, a little wanderlust goes a long way in keeping the creativity flowing."
      },
      {
        type: "image",
        src: '', // Replace with actual section image
        alt: "Section Image",
      }
    ],
    bgColor: "bg-[#d6d6a0]", // Soft yellow background
  },
];

const PersonalProfilePage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fefee0] to-[#fdfeec]">
      {/* Profile Picture Section */}
      <div className="absolute top-0 left-0 right-0 h-[25vh] flex justify-center items-center bg-[#7a8a56] text-white">
      </div>

      {/* Main Content Section */}
      <div className="relative pt-32 pb-12 px-8 sm:px-16 max-w-full mx-auto">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`section w-full py-20 px-6 sm:px-12 mb-12 text-white ${section.bgColor} rounded-lg shadow-xl transform transition-all duration-1000 ease-in-out hover:scale-105`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-16">
              {/* Left Half for Text Content */}
              <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                <h2 className="section-title text-4xl font-bold mb-6 text-[#d07f33]"> {/* Warm orange header */}
                  {section.title}
                </h2>
                <div className="section-content text-lg leading-relaxed text-gray-900">
                  {section.content.map((contentItem, idx) => {
                    if (contentItem.type === "text" && contentItem.text) {
                      return (
                        <p key={idx} className="mb-4">
                          {contentItem.text.split(' ').map((word, i) => {
                            const importantWords = ['Product Manager', 'University Of Wisconsin - Madison', 'trailblazers', 'creativity'];
                            // Highlight words using warm orange color
                            return importantWords.includes(word) ? (
                              <span key={i} className="font-semibold text-[#d07f33]">{word} </span>
                            ) : (
                              <span key={i}>{word} </span>
                            );
                          })}
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {/* Right Half for Profile Pic or Illustrations */}
              <div className="w-full sm:w-1/2 flex justify-center">
                {section.content.map((contentItem, idx) => {
                  if (contentItem.type === "image") {
                    return (
                      <div key={idx} className="w-70 h-70 rounded-t-full">
                        {!!contentItem?.src && <Image
                          src={contentItem.src}
                          alt={contentItem.alt}
                          className="w-full h-full object-cover rounded-t-full"
                        />}
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProfilePage;
