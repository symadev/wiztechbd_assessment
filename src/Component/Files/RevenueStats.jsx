import { useState, useEffect } from "react";
import logo from '../../assets/images/image7.png';
import { Book, Users, Briefcase, ShoppingBag, Mic, Calendar, TrendingUp } from "lucide-react";

const RevenueStats = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("courses");

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const tabs = [
        { id: "courses", label: "Courses", icon: Book },
        { id: "communities", label: "Communities", icon: Users },
        { id: "coaching", label: "Coaching & Consulting", icon: Briefcase },
        { id: "merchandise", label: "Merchandise", icon: ShoppingBag },
        { id: "podcasts", label: "Podcasts", icon: Mic },
        { id: "events", label: "Events", icon: Calendar },
        { id: "brokerage", label: "Brokerage", icon: TrendingUp },
    ];

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 min-h-screen py-12 sm:py-16">
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className={`text-center mb-10 sm:mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    <div className="inline-block text-xs font-medium tracking-[0.3em] mb-6 text-gray-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full  sm:text-sm  sm:mb-6">
                        DIVERSIFY REVENUE STREAM
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                        <span className="text-gray-900">Maximise earnings with</span>
                        <br />
                        <span className="text-gray-900">limitless revenue streams.</span>
                    </h1>
                    
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8">
                        Create and sell courses, consulting services, and communities - with Zero marketing cost and a built-in sales network.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                                    activeTab === tab.id
                                        ? "bg-[#1a0f26] text-white shadow-lg scale-105"
                                        : "bg-white text-gray-700 hover:bg-gray-100"
                                }`}
                            >
                                <Icon size={16} className="sm:mr-0" />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>

               {/* Content Card */}
<div className={`max-w-7xl mx-auto transform transition-all duration-1000 delay-400 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
    <div className="bg-gradient-to-b from-[#340132] via-[#540a4f] to-pink-100 text-white shadow-2xl overflow-hidden rounded-t-full sm:rounded-tl-full lg:rounded-l-full lg:rounded-r-3xl">
        <div className="flex flex-col lg:flex-row items-center">
{/* Left Content */}
<div className="w-full  ml-6 lg:w-1/2 flex-1 p-4 sm:p-6 md:p-10 lg:p-14 text-white text-center lg:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6">
        Courses
    </h2>

    <p className="text-purple-200 text-sm sm:text-base md:text-lg lg:text-lg mb-2 sm:mb-3 md:mb-4 font-medium">
        Turn your knowledge into structured, sellable products.
    </p>

    <p className="text-purple-100 text-sm sm:text-base md:text-base mb-2 sm:mb-3 md:mb-4 leading-relaxed">
        Build online, drip, academic, or challenge-based courses with built-in tools for gamification, accountability, and engagement.
    </p>

    <p className="text-purple-100 text-sm sm:text-base md:text-base mb-4 sm:mb-5 md:mb-6 leading-relaxed">
        Every course is optimized to deliver value and generate recurring income.
    </p>
    
    <button className="bg-white text-purple-900 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs sm:text-sm md:text-base">
        Learn More
    </button>
</div>


            {/* Right Image Section with  Card */}
            <div className="w-full lg:w-1/2 flex-1 relative p-2 sm:p-4 md:p-8 lg:p-12">
                <div className="relative">
                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-lg">
                        <img 
                            src={logo}
                            alt="Course Preview"
                            className="w-full h-auto object-cover"
                        />
                        
                        
                        <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 right-2 sm:right-4 md:right-6 bg-white rounded-xl shadow-2xl p-2 sm:p-3 md:p-4 max-w-xs transform hover:scale-105 transition-transform duration-300">
                            <div className="flex items-start gap-1 sm:gap-2 md:gap-3 mb-1 sm:mb-2 md:mb-3">
                                <div className="flex-shrink-0">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <Book size={16} className="text-purple-600" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-xs sm:text-sm md:text-sm font-semibold text-gray-900 mb-0.5">
                                        Lady Dantes Annotating MBE
                                    </h3>
                                    <p className="text-xs sm:text-xs md:text-xs text-gray-500">
                                        Oct 11, 2019
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <svg className="w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12l-6-6h12l-6 6z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <button className="w-full bg-blue-500 text-white py-1.5 px-2 sm:py-2 sm:px-3 md:py-2.5 md:px-4 rounded-lg font-medium text-xs sm:text-xs md:text-sm hover:bg-blue-600 transition-colors shadow-md">
                                Subscribe for $5.00/mo
                            </button>
                        </div>
                    </div>

                  
                    <div className="absolute -top-2 sm:-top-4 md:-top-6 -right-2 sm:-right-4 md:-right-6 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -bottom-2 sm:-bottom-4 md:-bottom-6 -left-2 sm:-left-4 md:-left-6 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
                </div>
            </div>

        </div>
    </div>
</div>


            </div>
        </div>
    );
};

export default RevenueStats;
