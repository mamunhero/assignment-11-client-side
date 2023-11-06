import SliderTestimonials from './SliderTestimonials';
import TextTestimonials from './TextTestimonials';

const Testimonials = () => {
  return (
    <div className="mt-5 mb-5">
      
      <TextTestimonials></TextTestimonials>
      <SliderTestimonials></SliderTestimonials>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mb-5">
        
      </div>
    </div>
  );
};

export default Testimonials;

