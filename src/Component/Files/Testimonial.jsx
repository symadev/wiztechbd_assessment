import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Fetch reviews from JSON file
  useEffect(() => {
    fetch('review.json')
      .then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => {
        console.error('Error fetching reviews:', error);
        setReviews([]);
      });
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`${
          i < rating 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        } transition-colors duration-300`}
      />
    ));
  };

  if (reviews.length === 0) {
    return (
      <div className="flex items-center justify-center h-96  bg-gradient-to-b from-[#340132] via-[#540a4f] to-pink-100 py-6 overflow-hidden">

        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-b from-[#340132] via-[#540a4f] to-pink-100 py-16 overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 text-xs font-medium tracking-[0.3em] mb-6 text-gray-400">
            TESTIMONIALS
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Trusted by Creators
            <br />
            & Proven by Results.
          </h2>
          
          <p className="text-purple-200 text-lg max-w-2xl mx-auto">
            See how others grow with Growtubs — real stories, real success.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative bg-white backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Flex Container for Image and Content */}
            <div className={`flex flex-col md:flex-row items-center md:items-stretch transition-all duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              
              {/* Left Side - Video/Image Section */}
              <div className="w-full md:w-2/5 bg-gradient-to-br from-orange-100 to-pink-100 p-8 flex items-center justify-center">
                <div className="relative w-full max-w-xs aspect-square rounded-3xl overflow-hidden shadow-xl">
                  <img 
                    className="w-full h-full object-cover" 
                    src={reviews[currentIndex]?.image} 
                    alt={reviews[currentIndex]?.name}
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-purple-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content Section */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                {/* User Avatar and Name Header */}
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    className="w-16 h-16 rounded-full shadow-lg ring-2 ring-purple-200 object-cover" 
                    src={reviews[currentIndex]?.image} 
                    alt={reviews[currentIndex]?.name}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">
                      {reviews[currentIndex]?.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {reviews[currentIndex]?.role}
                    </p>
                  </div>
                  {/* Star Rating - Top Right */}
                  <div className="flex space-x-1">
                    {renderStars(reviews[currentIndex]?.rating)}
                  </div>
                </div>

                {/* Tags/Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    Content Creator
                  </span>
                  <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    Youtuber
                  </span>
                  <span className="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    Growth Expert
                  </span>
                </div>

                {/* Review Message */}
                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                  {reviews[currentIndex]?.message}
                </p>

                {/* Earnings Badge */}
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 px-6 py-3 rounded-xl border border-purple-100 w-fit">
                  <div className="text-3xl font-bold text-gray-900">$2M</div>
                  <div className="text-sm text-gray-600 uppercase tracking-wide">
                    Earned in Helenuil
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-purple-600" />
            </button>

            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 disabled:opacity-50 z-10"
            >
              <ChevronRight className="w-6 h-6 text-purple-600" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;