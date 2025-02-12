import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { BedDouble, Wifi, Utensils, ParkingCircle, ThermometerSnowflake, Tv, ShieldCheck, Mountain, Coffee } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Aminities", to: "Aminities" },
  { label: "Gallery", to: "Gallery" },
  { label: "Rooms", to: "RoomsAndPrice" },
  { label: "Reviews", to: "Reviews" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];


export const features = [
  {
    icon: <BedDouble />,
    text: "Cozy & Comfortable Rooms",
    description: "Spacious, well-furnished rooms with soft bedding and beautiful mountain views.",
  },
  {
    icon: <Mountain />,
    text: "Breathtaking Mountain Views",
    description: "Wake up to stunning panoramic views of the Himalayas, a sight that soothes the soul and refreshes the mind.",
  },
  {
    icon: <Mountain />,
    text: "Scenic Outdoor Views",
    description: "Breathtaking views of the Himalayas and peaceful nature all around.",
  },
  {
    icon: <Coffee />,
    text: "Complimentary Morning Tea",
    description: "Start your day with a refreshing cup of tea or coffee, on the house!",
  },
  {
    icon: <Utensils />,
    text: "Delicious Homemade Meals",
    description: "Enjoy fresh, home-cooked local and Indian meals made with love.",
  },
  {
    icon: <ParkingCircle />,
    text: "Free Parking",
    description: "Hassle-free parking for your vehicles with 24/7 security.",
  },
  {
    icon: <ThermometerSnowflake />,
    text: "Hot Water & Heating",
    description: "24/7 hot water and room heaters to keep you warm on chilly nights.",
  },
  {
    icon: <Tv />,
    text: "Entertainment & TV",
    description: "Relax with your favorite shows and entertainment in every room.",
  },
  {
    icon: <ShieldCheck />,
    text: "Safe & Secure Stay",
    description: "Your safety is our priority with secure locks and CCTV surveillance.",
  },
 
];

export const checklistItems = [
  {
    title: "Scenic Himalayan Views",
    description:
      "Enjoy breathtaking sunrise and sunset views right from your room, surrounded by the serene beauty of nature.",
  },
  {
    title: "Authentic Pahadi Cuisine",
    description:
      "Savor the flavors of traditional mountain food made with fresh, locally sourced ingredients for a truly authentic experience.",
  },
  {
    title: "Cozy & Comfortable Stay",
    description:
      "Relax in warm, beautifully designed rooms that blend modern comfort with traditional mountain charm.",
  },
  {
    title: "Bonfire & Stargazing",
    description:
      "Gather around a warm bonfire under the clear night sky and witness a mesmerizing view of countless stars.",
  },
  {
    title: "Peaceful & Pollution-Free Environment",
    description:
      "Escape the hustle of city life and breathe in the fresh mountain air, free from noise and pollution.",
  },
  {
    title: "Guided Nature Walks",
    description:
      "Explore scenic trails with guided nature walks, discovering hidden waterfalls and lush green forests.",
  },
  {
    title: "Local Culture & Traditions",
    description:
      "Experience the rich heritage of the mountains by interacting with locals and learning about their traditions.",
  },
  {
    title: "Adventure Activities",
    description:
      "For thrill-seekers, enjoy nearby activities like trekking, camping, and nature exploration.",
  },
  {
    title: "Pet-Friendly Homestay",
    description:
      "Bring along your furry friends and let them enjoy the open space and fresh mountain air with you.",
  },
  {
    title: "Eco-Friendly & Sustainable Living",
    description:
      "We follow sustainable practices to preserve nature, ensuring a responsible and eco-friendly stay.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
