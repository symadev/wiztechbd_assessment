const PropertyCard = ({ item }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-xl">
      <figure className="px-8 pt-10">
        <img
          src={item.image}
          alt={item.title}
          className="rounded-xl w-full h-52 object-cover"
        />
      </figure>

      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.title}</h2>
        <p className="text-gray-500">{item.location}</p>
        <p className="font-bold">${item.price_per_week}/week</p>
        <p className="text-sm mt-2">
          🛏 {item.beds} Beds • 🛁 {item.bathrooms} Baths • 📐 {item.area}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
