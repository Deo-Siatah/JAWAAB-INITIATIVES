import {
  HeartPulse,
  Users,
  Leaf,
  Droplets,
} from "lucide-react";

export const programs = [
  {
    id: 0,
    title: "Mental Wellness",
    description:
      "Promoting mental health awareness, psychosocial support, and emotional resilience in communities.",
    icon: HeartPulse,
    glowClass: "bg-emerald-300",
    iconClass: "text-emerald-600",
  },
  {
    id: 1,
    title: "Gender Equity",
    description:
      "Advancing equality through education, advocacy, and empowerment of women and girls.",
    icon: Users,
    glowClass: "bg-rose-300",
    iconClass: "text-rose-600",
  },
  {
    id: 2,
    title: "Climate Change",
    description:
      "Community-led climate action focused on sustainability and environmental protection.",
    icon: Leaf,
    glowClass: "bg-lime-300",
    iconClass: "text-lime-600",
  },
  {
    id: 3,
    title: "WASH",
    description:
      "Ensuring access to clean water, sanitation, and hygiene for healthier lives.",
    icon: Droplets,
    glowClass: "bg-sky-300",
    iconClass: "text-sky-600",
  },
];
