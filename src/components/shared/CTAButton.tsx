
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ButtonProps } from "@/components/ui/button";

// Create a custom type for button variants
type CTAVariant = "default" | "outline" | "black" | "white";
interface CTAButtonProps {
  text: string;
  to: string;
  icon?: boolean;
  variant?: CTAVariant;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
}
const CTAButton = ({
  text,
  to,
  icon = true,
  variant = "default",
  className,
  size = "default",
  ...props
}: CTAButtonProps) => {
  let buttonClass = "";
  switch (variant) {
    case "black":
      buttonClass = "bg-black text-white hover:bg-black/90 shadow-md hover:shadow-lg";
      break;
    case "white":
      buttonClass = "bg-white text-black hover:bg-white/90 shadow-md hover:shadow-lg";
      break;
    case "outline":
      buttonClass = "bg-transparent border border-current text-current hover:bg-hustle-muted/10";
      break;
    default:
      buttonClass = "bg-hustle-accent text-white hover:bg-hustle-accent/90 shadow-md hover:shadow-lg";
  }
  
  const handleClick = () => {
    // Scroll to top when link is clicked with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <Button 
      asChild 
      className={`rounded-md font-medium ${buttonClass} ${className || ""} transition-all duration-300 hover:-translate-y-1`} 
      size={size} 
      {...props}
    >
      <Link to={to} onClick={handleClick} className="flex items-center gap-2">
        {text}
        {icon && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
      </Link>
    </Button>
  );
};

export default CTAButton;
