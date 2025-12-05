import { useEffect, useState } from "react";
import FeatureDetails from "../../Component/Files/FeatureDetails";

const Feature = () => {
  const [cards, setCards] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('feature.json')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(error => console.error('Error fetching features:', error));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('feature-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="feature-section" className="relative bg-pink-100  text-white py-20 overflow-hidden">
     

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="px-8 py-2 text-xs font-medium tracking-[0.3em] mb-6 text-gray-400">
              Powerful Features
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight">
            Essential Tools<br />Zero Distractions
          </h1>
          
          <p className="text-black text-lg max-w-3xl mx-auto leading-relaxed">
            Create diverse products on the platform and leverage our powerful tools to drive sales within and beyond GrowHubs.
          </p>
          
         
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => (
            <div
              key={card._id}
              className={`transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureDetails card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;