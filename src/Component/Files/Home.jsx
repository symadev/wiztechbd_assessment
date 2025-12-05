import Feature from "./Feature";
import HeroWithStats from "./HeroWithStats";
import MarqueeSection from "./MarqueeSection";
import PropertyList from "./PropertyList";
import RevenueStats from "./RevenueStats";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <PropertyList></PropertyList>
            <HeroWithStats></HeroWithStats>
            <MarqueeSection></MarqueeSection>
            <RevenueStats></RevenueStats>
            <Testimonial></Testimonial>
            <Feature></Feature>
            

            
        </div>
    );
};

export default Home;