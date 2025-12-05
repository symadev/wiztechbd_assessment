import React, { useState, useEffect, useRef } from 'react';
import MarqueeBanner from './MarqueeBanner';

const HeroWithStats = () => {
  const [email, setEmail] = useState('');
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { 
      label: 'CO-SELLERS IN NETWORK',
      target: 21500,
      suffix: '+',
      description: 'People who can co-promote'
    },
    { 
      label: 'EXPECTED BUYERS / MONTH',
      target: 86,
      suffix: '',
      description: 'With zero personal audience'
    },
    { 
      label: 'EST. MRR AT US$9/MO',
      target: 774,
      prefix: 'US$',
      suffix: '',
      description: 'From membership sales'
    },
    { 
      label: 'EARN W/O A PRODUCT',
      target: 300,
      prefix: 'US$',
      suffix: '',
      description: 'Just by co-selling'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = stat.target;
            return newValues;
          });
          clearInterval(timer);
        } else {
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(current);
            return newValues;
          });
        }
      }, stepDuration);
    });
  };

  const formatValue = (value, stat) => {
    const prefix = stat.prefix || '';
    const suffix = stat.suffix || '';
    const formattedNumber = value.toLocaleString();
    return `${prefix}${formattedNumber}${suffix}`;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#340132] via-[#540a4f] to-[#da98d5] text-white overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute top-[10%] left-[5%] w-1 h-1 bg-white/80 rounded-full animate-pulse"></div>
        <div className="absolute top-[15%] right-[15%] w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-[25%] left-[20%] w-1 h-1 bg-white/70 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-[35%] right-[25%] w-1 h-1 bg-white/50 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-[30%] left-[10%] w-1.5 h-1.5 bg-white/80 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-[40%] right-[10%] w-1 h-1 bg-white/60 rounded-full animate-pulse delay-250"></div>
        <div className="absolute top-[60%] left-[30%] w-1 h-1 bg-white/70 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[30%] w-1 h-1 bg-white/50 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-[8%] right-[35%] w-1 h-1 bg-white/60 rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-[15%] left-[40%] w-1 h-1 bg-white/70 rounded-full animate-pulse delay-350"></div>
      </div>

     

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-20 pb-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-[0.3em] mb-6 text-gray-400">
            BUILD FOR YOU
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">
              Built for Creators.
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200 bg-clip-text text-transparent">
              Powered for Profit
            </span>
          </h1>
          <p className="text-gray-300 text-base max-w-2xl mx-auto mb-10">
            Create and sell courses, consulting services, and communities - with Zero<br />
            marketing cost and a built-in sales network.
          </p>

          {/* Email Input Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto mb-4">
            <input
              type="email"
              placeholder="Enter Your Email Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-6 py-3.5 rounded-full bg-[#340132] backdrop-blur-sm border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] hover:from-[#9333ea] hover:to-[#db2777] text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <span className="block text-sm font-semibold">Start for Free</span>
              <span className="block text-[10px] font-normal opacity-90">No credit card required</span>
            </button>
          </div>
          <p className="text-xs text-gray-500">
            By proceeding you agree to our{' '}
            <a href="#" className="underline hover:text-gray-300">Platform terms</a>
            {' & '}
            <a href="#" className="underline hover:text-gray-300">Privacy Notice</a>
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className=" bg-gradient-to-b from-[#340132] via-[#540a4f]  backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-lg font-normal">
              Sell from day one - even with zero audience
            </h2>
            <button className="px-5 py-2 rounded-full border border-white/30 hover:bg-white/10 transition-all text-sm font-normal">
              Open calculator
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#340132] rounded-2xl p-6 border border-white/5 hover:border-purple-500/30 transition-all">
                <p className="text-[10px] text-gray-500 mb-3 uppercase tracking-wider font-medium">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold mb-2 text-white">
                  {formatValue(animatedValues[index], stat)}
                </p>
                <p className="text-xs text-gray-400 font-light">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>


         <div>
            <MarqueeBanner></MarqueeBanner>
         </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-250 {
          animation-delay: 0.25s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-350 {
          animation-delay: 0.35s;
        }
      `}</style>
    </div>
  );
};

export default HeroWithStats;