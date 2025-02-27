import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const sections = [
  {
    title: "Overview",
    content: 
      "Splitwise is a widely used expense-sharing application that allows users to split bills among friends, family, or roommates. This enhancement introduces an in-app Splitwise Wallet, enabling users to directly settle balances within the app, creating a seamless experience.",
    image: "/images/overview.png",
    alternateColor: true,  // Example of alternating color
  },
  {
    title: "Objective",
    content: [
      "Streamline expense settlements by enabling in-app transactions.",
      "Enhance user convenience by combining expense tracking and payments.",
      "Introduce new monetization opportunities via wallet transactions.",
    ],
    image: "/images/objective.png",
    alternateColor: false,  // Alternating color as false for this section
  },
  {
    title: "Success Metrics",
    content: [
      "Percentage of users who create wallets.",
      "Transaction volume.",
      "User retention percentage.",
      "Revenue generated.",
    ],
    image: "/images/success-metrics.png",
    alternateColor: true,  // Alternating color set to true here
  },
  {
    title: "Pain Points",
    content: [
      "Friction in settlements: Users currently have to use external payment apps, leading to drop-offs.",
      "Delayed settlements: Users forget to settle balances, leading to unpaid debts.",
      "Lack of financial insights: No clear view of past settlements and payment history within Splitwise.",
    ],
    image: "/images/pain-points.png",
    alternateColor: false,
  },
  {
    title: "User Flow",
    content: [
      "Wallet Activation: User navigates to the wallet section and selects 'Activate Wallet.'",
      "Completes KYC and links a bank account.",
      "Adds money to the wallet.",
      "Splitting & Settling Expenses: Users record an expense in a group or individual entry.",
      "Users can choose to settle the amount via the wallet.",
      "Recipient receives funds instantly in their Splitwise Wallet, with an option to withdraw to their bank account.",
    ],
    image: "/images/user-flow.png",
    alternateColor: true,
  },
  {
    title: "Key UI Components",
    content: [
      "Wallet Dashboard: Displays balance, recent transactions, and pending settlements.",
      "Users can create a Splitwise Wallet by linking their bank account via UPI.",
      "KYC verification required for regulatory compliance.",
      "Users can load money into the wallet via UPI or net banking.",
      "Settle Up Screen: Users can choose 'Splitwise Wallet' for instant payments.",
      "Transaction History Page: View past settlements and expenses.",
      "Security & Compliance: Multi-factor authentication and end-to-end encryption.",
    ],
    image: "/images/key-ui-components.png",
    alternateColor: false,
  },
  {
    title: "Challenges & Considerations",
    content: [
      "Regulatory Compliance: Adhering to fintech regulations for digital wallets.",
      "User Trust & Security: Ensuring seamless and fraud-free transactions.",
      "Market Competition: Differentiating from established UPI and wallet providers.",
      "Technical Scalability: Managing high transaction volumes efficiently.",
    ],
    image: "/images/challenges.png",
    alternateColor: true,
  },
  {
    title: "Fail-Safe Mechanisms",
    content: [
      "Transaction Reversals: In case of failed transactions, the amount is auto-reversed to the sender’s wallet.",
      "Spending Limits: Initial transaction limits for new users to prevent misuse.",
    ],
    image: "/images/fail-safe.png",
    alternateColor: false,
  },
  {
    title: "Design Flow",
    content: [
      "Wallet Dashboard: Displays balance, recent transactions, and pending settlements.",
      "Settle Up Screen: Users can choose 'Splitwise Wallet' for instant payments.",
      "Transaction History Page: Filter by sent, received, and withdrawal transactions.",
    ],
    image: "/images/design-flow.png",
    alternateColor: true,
  },
];


const SplitwiseWalletPRD = () =>
{
  
  return (
    <div className="w-full min-h-screen p-6 bg-[#f7f5d0] text-[#8f8803]">
      <h1 className="text-3xl font-bold  text-[#8f8820] text-center">
        Splitwise Wallet - Product Requirements Document
      </h1>
      
      <div className="space-y-10">
        {
          sections.map( ( section, index ) =>
          {
            let color = 'blue';
            if ( section.alternateColor )
            {
             color = '#f7f5d0'
            }
            else { color = '#8f8820'}
            return (
              <div
                key={ index }
                className={ `bg-[${color}] flex flex-col md:flex-row items-center gap-6 ${ index % 2 === 0 ? 'md:flex-row-reverse' : '' }` }
              >
                <div className="md:w-1/2 flex justify-center">
                  <Image src={ section.image } alt={ section.title } width={ 400 } height={ 250 } className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-1/2 p-4">
                  <h2 className={ `text-xl font-semibold mb-2 text-${color}` }>{ section.title }</h2>
                  { Array.isArray( section.content ) ? (
                    <ul className="list-disc pl-5">
                      { section.content.map( ( item, i ) => (
                        <li key={ i } className="hover:text-[color] transition-colors duration-200">{ item }</li>
                      ) ) }
                    </ul>
                  ) : (
                    <p>{ section.content }</p>
                  ) }
                </div>
              </div>
            );
          } )}
      </div>
    </div>
  );
};

export default SplitwiseWalletPRD;
