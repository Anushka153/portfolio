import React from 'react';

const sections = [
  {
    title: "SHEIN: From Obscurity to Fast Fashion Domination in the U.S.",
    content: "SHEIN has transformed from a little-known Chinese e-commerce retailer into a global fast fashion powerhouse, with the U.S. being one of its most lucrative markets. The brand's success isn't just about affordability - it's fueled by a data-driven approach, ultra-fast supply chains, and an aggressive digital strategy.",
  },
  {
    title: "How SHEIN Became a Fashion Giant",
    content: "Founded in 2008 by Chris Xu as a wedding dress retailer, SHEIN pivoted into fast fashion, leveraging a tech-first approach rather than relying on traditional retail models. Instead of maintaining large inventories, SHEIN perfected an on-demand production model, where manufacturers produce small batches of new styles, and only the most popular items get mass-produced. This allows SHEIN to introduce thousands of new products daily, significantly outpacing traditional fashion brands. By cutting out middlemen and selling directly to consumers, SHEIN keeps prices ultra-competitive, making it a go-to destination for Gen Z shoppers.",
  },
  {
    title: "How SHEIN Tracks User Behavior",
    content: "SHEIN's competitive edge lies in its relentless data collection and AI-driven insights. The brand monitors: User Engagement: Clicks, searches, and time spent on specific products guide future inventory decisions. Shopping Habits: SHEIN tracks what users add to their carts, wish lists, and purchase history to personalize recommendations. Social Media & Influencer Trends: The company actively scans TikTok, Instagram, and YouTube to spot emerging trends and replicate them within weeks. Heatmaps & A/B Testing: Through app and website heatmaps, SHEIN refines UI/UX, ensuring a frictionless shopping experience. This real-time tracking allows SHEIN to push targeted promotions, create personalized homepages, and even dictate which designs get manufactured - all maximizing conversion rates.",
  },
  {
    title: "SHEIN's Expansion & U.S. Dominance",
    content: "SHEIN has become one of the most downloaded shopping apps in the U.S., outperforming Amazon and traditional fashion brands like Zara and H&M. The company's strategy includes: Hyper-Personalization: AI-driven recommendations make every user's experience unique. Influencer & Social Commerce: Partnering with TikTok influencers and YouTubers drives massive engagement. Pop-Up Stores: Although SHEIN is digital-first, it experiments with pop-up stores in major U.S. cities to build brand affinity. Sustainability Claims: Facing criticism over fast fashion's environmental impact, SHEIN has started promoting 'recycled collections' and 'eco-friendly' initiatives, though skepticism remains.",
  },
  {
    title: "Controversies & India's Complicated Relationship with SHEIN",
    content: "While SHEIN thrives in the U.S., its return to the Indian market has been rocky. Banned in India in 2020 due to data security concerns, the brand is attempting a comeback through a strategic partnership with Reliance Retail. However, skepticism about data privacy and local competition remains. Meanwhile, in the U.S., SHEIN has faced scrutiny over: Labor Practices: Reports of poor working conditions in supplier factories have raised ethical concerns. Environmental Impact: Critics argue that SHEIN's ultra-fast fashion model leads to excessive waste and unsustainable production. Data Privacy: Given its deep user tracking, concerns about how SHEIN handles customer data have led to regulatory scrutiny.",
  },
  {
    title: "What's Next?",
    content: "SHEIN continues to expand its U.S. footprint, investing in local warehouses, diversifying its product lines (including beauty and home goods), and even exploring IPO opportunities. Despite challenges, its ability to pivot quickly, leverage data, and respond to trends faster than any competitor keeps it ahead in the fast fashion race.",
  },
  {
    title: "Final Thoughts",
    content: "SHEIN isn't just a retailer - it's a tech-driven fashion empire that reshapes consumer behavior. As it continues its aggressive expansion in the U.S. while navigating global controversies, the question remains: Will SHEIN's data-fueled dominance continue, or will ethical concerns and regulatory hurdles slow it down?",
  },
];

const SHEINCaseStudy = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Initial SHEIN Image */}
      <img src="path_to_shein_image.jpg" alt="SHEIN" className="w-full h-64 object-cover rounded-lg mb-6" />

      {/* Sections Content */}
      {sections.map((section, index) => (
        <div key={index} className="section mb-12 p-6 border border-gray-200 rounded-lg">
          <h2 className="section-title text-2xl font-bold mb-4">{section.title}</h2>
          <p className="section-content text-lg text-gray-700 leading-relaxed">{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SHEINCaseStudy;
