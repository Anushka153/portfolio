// Example React JSX structure
import Image from "next/image";
import React from "react";
import Shein from "@/public/splitwise.png"

const sections = [
  {
    title: "Overview",
    content:
      "Splitwise is a widely used expense-sharing application that allows users to split bills among friends, family, or roommates. The introduction of the Splitwise Wallet enables users to directly settle balances within the app, streamlining the payment process and offering a seamless user experience.",
  },
  {
    title: "Objective",
    content: [
      "Streamline expense settlements by enabling in-app transactions, eliminating the need for external payment apps.",
      "Enhance user convenience by combining expense tracking and payments into one platform.",
      "Introduce new monetization opportunities by facilitating wallet transactions, driving revenue through wallet fees or in-app purchases.",
    ],
   
  },
  {
    title: "Success Metrics",
    content: [
      "Percentage of users who activate and use the Splitwise Wallet feature.",
      "Transaction volume, tracking the total value of transactions made through the wallet.",
      "User retention percentage, tracking the continued engagement with the wallet feature.",
      "Revenue generated through wallet transactions, including fees and other monetization methods.",
    ],
  },
  {
    title: "Pain Points",
    content: [
      "Friction in settlements: Users currently need to use external payment apps, leading to user drop-offs and incomplete transactions.",
      "Delayed settlements: Many users forget to settle their balances, leading to prolonged unpaid debts among friends, which could cause frustration.",
      "Lack of financial insights: Users currently have no clear view of their past settlements and payment history within Splitwise, which affects transparency.",
    ],
   
  },
  {
    title: "User Flow",
    content: [
      "Wallet Activation: Users can easily activate the wallet by navigating to the wallet section and completing a simple 'Activate Wallet' process.",
      "Account Linking: The user links a bank account via KYC (Know Your Customer) verification for security purposes.",
      "Adding Money: Users can load money into the wallet using UPI or net banking methods.",
      "Splitting & Settling Expenses: Users can record an expense, and instead of using external apps, they can choose to settle via their Splitwise Wallet.",
      "Instant Transfer: The recipient immediately receives funds in their Splitwise Wallet, with an option to withdraw to a linked bank account.",
    ],
  },
  {
    title: "Key UI Components",
    content: [
      "Wallet Dashboard: Shows the current balance, recent transactions, and pending settlements for a user-friendly experience.",
      "Bank Linking: Users can link their bank accounts via UPI for easy wallet funding and withdrawals.",
      "KYC Verification: Required to meet regulatory requirements and ensure the safety of transactions.",
      "Loading Money: Users can add funds through UPI or net banking.",
      "Settle Up Screen: A screen where users can select 'Splitwise Wallet' to settle expenses instantly with their group or individual expenses.",
      "Transaction History: Shows past settlements, making it easy for users to track their spending and payments.",
      "Security & Compliance: Includes multi-factor authentication and end-to-end encryption to protect user data and financial information.",
    ],
   
  },
  {
    title: "Challenges & Considerations",
    content: [
      "Regulatory Compliance: The product must comply with digital wallet and fintech regulations to ensure safety and legal validity.",
      "User Trust & Security: Ensuring secure transactions is paramount, especially in a space as sensitive as money transfer and financial data.",
      "Market Competition: Differentiating from established payment providers, such as UPI and digital wallets like Paytm and PhonePe.",
      "Technical Scalability: The platform needs to handle high transaction volumes efficiently as the user base and activity grow.",
    ],
  },
  {
    title: "Fail-Safe Mechanisms",
    content: [
      "Transaction Reversals: In the event of failed or incomplete transactions, the system automatically reverses the amount to the sender’s wallet to prevent user loss.",
      "Spending Limits: New users are subject to initial transaction limits, mitigating the risk of misuse or fraud during early interactions.",
    ],
   
  },
  {
    title: "Design Flow",
    content: [
      "Wallet Dashboard: Central hub displaying wallet balance, recent transactions, and pending settlements.",
      "Settle Up Screen: A simple, user-friendly interface for selecting wallet as a payment option for instant settlements.",
      "Transaction History: A page showing detailed records of sent, received, and withdrawal transactions, allowing users to filter and track their financial activity.",
    ],
  },
];

const SplitwiseWallet = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fefee0] to-[#fdfeec]">
      <Image src={Shein} alt="Shein" className="mx-auto rounded-lg w-[700px] h-[350px] mb-8" />
      <div className="relative pt-12 pb-12 px-8 sm:px-16 max-w-full mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="section-title text-2xl font-bold text-[#b06d2e] mb-4">{section.title}</h2>
             { Array.isArray( section.content ) ? (
                    <ul className="list-disc pl-5">
                      { section.content.map( ( item, i ) => (
                        <li key={ i } className="hover:text-[color] transition-colors duration-200">{ item }</li>
                      ) ) }
                    </ul>
                  ) : (
                    <p>{ section.content }</p>
                  ) 
           
           }
          </div>
        ))}
      </div>
    </div>
  );
};

export default SplitwiseWallet;     

//  {true ? (
            //   <div className="flex flex-wrap">
            //     {/* <div className="w-full md:w-1/2 p-4">
            //       <Image src={section.image} alt="Shein" className="mx-auto rounded-lg w-[500px] h-[350px] mb-8" />
            //     </div> */}
            //     <div className="w-full md:w-1/2 p-4">
            //        { Array.isArray( section.content ) ? (
            //         <ul className="list-disc pl-5">
            //           { section.content.map( ( item, i ) => (
            //             <li key={ i } className="hover:text-[color] transition-colors duration-200">{ item }</li>
            //           ) ) }
            //         </ul>
            //       ) : (
            //         <p>{ section.content }</p>
            //       ) }
            //     </div>
            //   </div>
            // ) : (