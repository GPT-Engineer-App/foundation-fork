import { Home } from "lucide-react";
import HomePage from "./pages/Home";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <HomePage />,
  },
  // Add more navigation items here as you create new pages
];