import React,{useEffect,useState,useRef} from 'react'
import "./Carousel.css"

const Carousel = () => {
    const [current,setCurrent]=useState(0);
    const touchStartX = useRef(null);
    
    const slides = [
        {
          id: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw47qaoiitEvAj0Xpp9c5C1gMlbE502_-Zpg&s',
          title: 'Braetd Girls Hostel',
          subtitle: 'USD $200 per-3month - 5 Bed, 4 Bath',
        },
        {
          id: 6,
          image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'Aryan Hostel',
          subtitle: 'USD $500 per-3month – Kampala Wandegeya',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
          title: 'Olympia Hostel',
          subtitle: 'USD $450 per-3month - Makerere',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
          title: 'Dream World Hostel',
          subtitle: 'USD $380 per-3month - Makerere',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
          title: 'Ideal Platinum Hostel',
          subtitle: 'USD $600 per-3month - Kampala',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
          title: 'Kampala Internation Hostel',
          subtitle: 'USD $1,000 per-3month - Kampala',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
          title: 'JB Paradise Hostel',
          subtitle: 'USD $200 per-3month - Wandegeya',
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80',
          title: 'Islamic Hostel',
          subtitle: 'USD $250 per-3month - Kibuli',
        },
      ];
      
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % slides.length);
        }, 7000);
        return () => clearInterval(timer);
      }, );
    
      const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      };
    
      const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
      };
    
      const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
      };
    
      const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX;
        if (diff > 50) nextSlide();
        if (diff < -50) prevSlide();
      };
      
  return (
    <div className='carousel'>
         {slides.map((slide,index)=>(
              <div
              className={`carousel__slide ${index === current ? 'active' : ''}`}
              key={slide.id}
            >
              <img src={slide.image} alt={slide.title} />
              <div className="carousel__caption">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <button className="carousel__btn">Book Now</button>
              </div>
            </div>
         ))

         }
    </div>
  )
}

export default Carousel