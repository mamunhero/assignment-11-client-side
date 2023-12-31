import NewsLetter from "./NewsLetter";
import Offer from "./Offer";
import Slider from "./Slider";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Offer></Offer>
      <Testimonials></Testimonials>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;