
import { useEffect, useState } from "react";

const BusinessAnalyticsImage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/lovable-uploads/bc2d4153-fc69-4139-be66-9ff710f6d083.png";
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-hustle-accent/10 rounded-full"></div>
      <div className={`relative z-10 transform transition-all duration-500 hover:scale-105 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
        <img
          src="/lovable-uploads/bc2d4153-fc69-4139-be66-9ff710f6d083.png"
          alt="Business Analytics Dashboard"
          className="max-w-full h-auto object-contain"
          style={{
            filter: "drop-shadow(0px 4px 8px rgba(193, 48, 239, 0.2))",
            maxHeight: "400px"
          }}
        />
      </div>
    </div>
  );
};

export default BusinessAnalyticsImage;
