
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  const partners = [
    { id: 1, src: '/Marquee/image1.png', alt: '' },
    { id: 2, src: '/Marquee/image2.png', alt: '' },
    { id: 3, src: '/Marquee/image3.png', alt: '' },
    { id: 4, src: '/Marquee/image4.png', alt: '' },
    { id: 5, src: '/Marquee/image5.png', alt: '' },
    
  ];


  return (
    <div className="bg-pink-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h3 className="text-gray-600 text-xl font-medium uppercase tracking-wide">
            TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
          </h3>
        </div>

       
        <div className="overflow-hidden">
          <Marquee pauseOnHover speed={200} gradient={false}>
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="mx-12 flex items-center justify-center"
              >
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-28 w-28 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;