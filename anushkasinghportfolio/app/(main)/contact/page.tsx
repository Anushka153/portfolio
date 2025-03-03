import React from 'react';
import Image from 'next/image';
// import ContactImage from "@/public/.png"; // Replace with an actual contact-related image

const contactDetails = [
  {
    title: "Let's Connect",
    content: [
      {
        type: "text",
        text: "Got a project, an idea, or just want to chat? Let’s make it happen!"
      },
      {
        type: "text",
        text: "I’m always open to new opportunities, collaborations, or simply exchanging thoughts over a virtual coffee."
      },
      {
        type: "image",
        // src: ContactImage,
        alt: "Contact Image",
      }
    ],
    bgColor: "bg-[#d6d6a0]",
  },
  {
    title: "Reach Me At",
    content: [
      {
        type: "text",
        text: "📧 Email: anushka.singh@wisc.edu"
      },
      {
        type: "text",
        text: "📞 Phone: (608) 239-0509"
      },
      {
        type: "text",
        text: "💼 LinkedIn: linkedin.com/in/anushkasingh15"
      },
    ],
    bgColor: "bg-[#7a8a56]",
  },
  {
    title: "Drop a Message",
    content: [
      {
        type: "form"
      }
    ],
    bgColor: "bg-[#d6d6a0]",
  },
];

const ContactPage = () => {
    return (
      
        <div className="relative min-h-screen bg-gradient-to-b from-[#fefee0] to-[#fdfeec]">
              <div className="absolute top-0 left-0 right-0 h-[25vh] flex justify-center items-center bg-[#7a8a56] text-white">
      </div>
      <div className="relative pt-32 pb-12 px-8 sm:px-16 max-w-full mx-auto">
        {contactDetails.map((section, index) => (
          <div
            key={index}
            className={`section w-full py-20 px-6 sm:px-12 mb-12 text-white ${section.bgColor} rounded-lg shadow-xl transform transition-all duration-1000 ease-in-out hover:scale-105`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center gap-12 sm:gap-16">
              <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
                <h2 className="section-title text-4xl font-bold mb-6 text-[#d07f33]">{section.title}</h2>
                <div className="section-content text-lg leading-relaxed text-gray-900">
                  {section.content.map((contentItem, idx) => {
                    if (contentItem.type === "text") {
                      return <p key={idx} className="mb-4">{contentItem.text}</p>;
                    }
                    return null;
                  })}
                </div>
              </div>

              <div className="w-full sm:w-1/2 flex justify-center">
                {section.content.map((contentItem, idx) => {
                  if (contentItem.type === "image") {
                    return (
                      <div key={idx} className="w-70 h-70 rounded-t-full">
                        {/* <Image
                          src={contentItem.src}
                          alt={contentItem.alt}
                          className="w-full h-full object-cover rounded-t-full"
                        /> */}
                      </div>
                    );
                  }
                  return null;
                })}

                {section.content.some(contentItem => contentItem.type === "form") && (
                  <form className="w-full flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-400" />
                    <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-400" />
                    <textarea placeholder="Your Message" className="p-3 rounded-lg border border-gray-400 h-32"></textarea>
                    <button type="submit" className="p-3 bg-[#d07f33] text-white font-bold rounded-lg hover:bg-[#b86b2c]">Send Message</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
