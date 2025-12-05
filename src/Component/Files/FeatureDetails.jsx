import { useState } from "react";
import { ArrowRight } from "lucide-react";

const FeatureDetails = ({ card }) => {
  const { icon, title, description } = card;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden p-6">
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          
          {/* Header with Title and Icon */}
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800 flex-1 leading-tight">
              {title}
            </h2>
            
            {/* Icon Container */}
            <div className="flex-shrink-0 ml-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={icon}
                  alt={title}
                  className="w-7 h-7 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-4">
            {description}
          </p>

          {/* Learn More Link */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium text-sm transition-colors duration-300 group/btn">
              Learn more
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;