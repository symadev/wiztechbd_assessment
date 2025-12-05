import React, { useState, useEffect } from 'react';
import { Bed, Bath, Maximize, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PropertyListing() {
    const [rentBudget, setRentBudget] = useState([0, 100000]);
    const [selectedSuburbs, setSelectedSuburbs] = useState([]);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('Low to High');
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);

    const itemsPerPage = 6;

 
    useEffect(() => {
        fetch('properties.json')
            .then((res) => res.json())
            .then((data) => {
                setProperties(data);
                setFilteredProperties(data);
            })
            .catch((err) => {
                console.error('Error loading properties:', err);
                setProperties([]);
            });
    }, []);

    // Filter and sort properties
    useEffect(() => {
        if (properties.length === 0) return;

        let filtered = [...properties];

        // Filter by budget
        filtered = filtered.filter(
            (prop) => prop.price_per_week >= rentBudget[0] && prop.price_per_week <= rentBudget[1]
        );

        // Filter by suburbs (only if suburbs are selected)
        if (selectedSuburbs.length > 0) {
            filtered = filtered.filter((prop) =>
                selectedSuburbs.some((suburb) => prop.location && prop.location.toLowerCase().includes(suburb.toLowerCase()))
            );
        }


        // Sort
        if (sortBy === 'Low to High') {
            filtered.sort((a, b) => (a.price_per_week || 0) - (b.price_per_week || 0));
        } else if (sortBy === 'High to Low') {
            filtered.sort((a, b) => (b.price_per_week || 0) - (a.price_per_week || 0));
        }

        setFilteredProperties(filtered);
        setCurrentPage(1);
    }, [properties, rentBudget, selectedSuburbs, selectedPropertyTypes, sortBy]);

    // Get unique suburbs and property types from data
    const suburbs = [...new Set(properties.map((p) => p.location).filter(Boolean))];
    const propertyTypes = ["House", "Land", "Apartment", "Town House", "Villa", "Acreage"];
    const amenities = ["Pet-Friendly", "Parking", "Private Pool", "Garden"];

    const toggleSelection = (item, list, setList) => {
        if (list.includes(item)) {
            setList(list.filter((i) => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    // Pagination
    const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const resetFilters = () => {
        setRentBudget([300, 67000]);
        setSelectedSuburbs([]);
        setSelectedPropertyTypes([]);
        setSelectedAmenities([]);
        setSortBy('Low to High');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Left Sidebar - Filters */}
            <div className="w-80 bg-white border-r border-gray-200 p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold">Property Preferences</h2>
                    <button
                        onClick={resetFilters}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
                    >
                        Reset Filter
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                    </button>
                </div>

                {/* Rent Budget */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">Rent Budget</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative pt-6 pb-2">
                        <input
                            type="range"
                            min="0"
                            max="100000"
                            value={rentBudget[1]}
                            onChange={(e) => setRentBudget([rentBudget[0], parseInt(e.target.value)])}
                            className="w-full h-1 bg-pink-800 rounded-lg appearance-none cursor-pointer"
                            style={{
                                accentColor: "#7A0631",
                            }}
                        />

                    </div>
                    <div className="flex justify-between text-sm text-pink-600 mt-2">
                        <span>${rentBudget[0]}</span>
                        <span>${rentBudget[1]}</span>
                    </div>
                </div>


                {/* Suburb */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">Suburb</h3>
                        <button className="text-gray-400 hover:text-white">
                            <svg className="w-4 h-4 bg-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-2">
                        {suburbs.slice(0, 3).map((suburb) => (
                            <label key={suburb} className="flex items-center gap-2 cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={selectedSuburbs.includes(suburb)}
                                        onChange={() =>
                                            toggleSelection(suburb, selectedSuburbs, setSelectedSuburbs)
                                        }
                                        className="w-4 h-4 border-2 border-gray-400 rounded appearance-none bg-white checked:bg-white checked:border-gray-400 cursor-pointer"
                                    />
                                    {selectedSuburbs.includes(suburb) && (
                                        <svg className="w-3 h-3 absolute top-0.5 left-0.5 pointer-events-none" fill="white" viewBox="0 0 12 12">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm text-gray-700">{suburb}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Property Type */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">Property Type</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-2">
                        {propertyTypes.map((type) => (
                            <label key={type} className="flex items-center gap-2 cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={selectedPropertyTypes.includes(type)}
                                        onChange={() => toggleSelection(type, selectedPropertyTypes, setSelectedPropertyTypes)}
                                        className="w-4 h-4 border-2 border-gray-400 rounded appearance-none bg-white checked:bg-white checked:border-gray-400 cursor-pointer"
                                    />
                                    {selectedPropertyTypes.includes(type) && (
                                        <svg className="w-3 h-3 absolute top-0.5 left-0.5 pointer-events-none" fill="white" viewBox="0 0 12 12">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm text-gray-700">{type}</span>
                            </label>
                        ))}
                    </div>
                </div>


                <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">Amenities</h3>
                        <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="space-y-2">
                        {amenities.map((amenity, idx) => (
                            <label key={`${amenity}-${idx}`} className="flex items-center gap-2 cursor-pointer">
                                <div className="relative">
                                    <input
                                        type="checkbox"
                                        checked={selectedAmenities.includes(amenity)}
                                        onChange={() => toggleSelection(amenity, selectedAmenities, setSelectedAmenities)}
                                        className="w-4 h-4 border-2 border-gray-400 rounded appearance-none bg-white checked:bg-white checked:border-gray-400 cursor-pointer"
                                    />
                                    {selectedAmenities.includes(amenity) && (
                                        <svg className="w-3 h-3 absolute top-0.5 left-0.5 pointer-events-none" fill="white" viewBox="0 0 12 12">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                </div>
                                <span className="text-sm text-gray-700">{amenity}</span>
                            </label>
                        ))}
                    </div>
                    <button className="text-sm text-purple-600 hover:text-purple-700 mt-3">
                        see more
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Property <span className="text-gray-400 text-base font-normal ml-2">— Showing result: {filteredProperties.length}</span>
                    </h1>
                    <div className="flex items-center gap-4">
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300  bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-700 text-sm"
                        >
                            <option className='bg-white'>Low to High</option>
                            <option className='bg-white'>High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Property Grid */}
                {currentProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {currentProperties.map((property) => (
                            <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                                <div className="relative h-64">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{property.title}</h3>
                                            <p className="text-sm text-gray-500">{property.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                        <span className="flex items-center gap-1">
                                            <Bed size={16} />
                                            {property.beds}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Bath size={16} />
                                            Bathroom: {property.bathrooms}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Maximize size={16} />
                                            {property.area}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-2xl font-bold text-gray-900">${property.price_per_week}</span>
                                            <span className="text-gray-500 text-sm">/week</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-xl">No properties found matching your criteria</p>
                    </div>
                )}

                {/* Pagination */}
                {filteredProperties.length > 0 && (
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-700 font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={20} />
                            Previous
                        </button>
                        <div className="flex items-center gap-2">
                            {[...Array(Math.min(totalPages, 10))].map((_, idx) => {
                                const page = idx + 1;
                                return (
                                    <button
                                        key={page}
                                        onClick={() => handlePageChange(page)}
                                        className={`w-10 h-10 rounded-lg font-medium ${currentPage === page
                                            ? 'bg-purple-600 text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                );
                            })}
                        </div>
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-2 px-4 py-2 text-purple-600 hover:text-purple-700 font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
                        >
                            Next
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}