import Marquee from "react-fast-marquee";

const MarqueeBanner = () => {
    return (
        <div className="bg-[#340132] p-6  m-8 text-white  border-b text-xl">
            <Marquee pauseOnHover speed={50} gradient={false}>
                 Stay updated with RentEase: Track rent payments, due dates, and maintenance requests — all from your phone! &nbsp;&nbsp;&nbsp;
                 Helping tenants and landlords manage properties effortlessly in real-time. &nbsp;&nbsp;&nbsp;
                 Landlords can post notices, update rent info, and resolve issues instantly.
                !
            </Marquee>
        </div>
    );
};

export default MarqueeBanner;
