import React from "react";
import PayWithEaseSliderSection from "./PayWithEaseSliderSection";
import womanImg from "../../assets/home/paywithease.png";
import scanImg from "../../assets/home/scan.png";
import sendImg from "../../assets/home/money.png";
import supportImg from "../../assets/home/support.png";


const slides = [
  {
    image: womanImg,
    headingTop: "What we bring to the table?",
    subheading: "One app for every payment",
    heading: "Pay with Ease",
    description:
      "Manage utility bills, online shopping, and more — all through a secure, seamless app. Link your cards and accounts once, and you're set to pay anytime, anywhere.",
    points: [
      "Go fully cashless with confidence",
      "Pay bills in seconds — utilities, services, and more",
      "One dashboard for all your payments",
      "Industry-grade security (PCI DSS certified)"
    ]
  },
  {
      image: scanImg,
    headingTop: "What we bring to the table?",
    subheading: "Skip the wallet. Use your phone.",
    heading: "Scan to Pay",
    description:
      "Make lightning-fast, contactless payments at any LankaQR-enabled merchant — with zero transaction fees.",
    points: [
      "Contactless, safe & hygienic payments",
      "Pay via card or bank account instantly",
      "Use at 200,000+ LankaQR merchants",
      "Absolutely no transaction charges"
    ]
  },{
    image: sendImg,
    headingTop: "What we bring to the table?",
    subheading: "The fastest way to send peace of mind.",
    heading: "Send Money Instantly",
    description:
      "Transfer funds to any Sri Lankan bank account directly from your app — fast, secure, and available 24/7.",
    points: [
      "Real-time transfers between local banks",
      "Cashless, convenient money movement",
      "Best-in-class security with each transaction",
      "Available anytime, from anywhere"
    ]
  },{
    image: supportImg,
    headingTop: "What we bring to the table?",
    subheading: "You’re never alone with Rubaai.",
    heading: "Personalized Support",
    description:
      "Got questions or need help? Our team is always ready to assist you — whether it’s technical support or financial guidance.",
    points: [
      "Around-the-clock customer service",
      "Instant solutions for your queries",
      "Friendly support, right when you need it",
      "Secure, reliable, and always there for you"
    ]
  },

];

const PayWithEaseSection = () => (
  <PayWithEaseSliderSection slides={slides} />
);

export default PayWithEaseSection; 