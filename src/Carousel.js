import React,{useEffect,useState,useRef} from 'react'
import "./Carousel.css"

const Carousel = () => {
    const [current,setCurrent]=useState(0);
    const touchStartX = useRef(null);
    
    const slides = [
        {
          id: 1,
          image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/503090629.jpg?k=d46517aa799dc4966fcb6bcd8113e03c26e1734476600cb2577c470d25b760f0&o=&hp=1',
          title: 'Braetd Girls Hostel',
          subtitle: 'USD $200 per-3month - 5 Bed, 4 Bath',
        },
        {
          id: 6,
          image: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1024,format=auto/sites/default/files/images/methode/2018/01/12/c32de698-f6c3-11e7-8693-80d4e18fb3a2_972x_223827.JPG',
          title: 'Aryan Hostel',
          subtitle: 'USD $500 per-3month – Kampala Wandegeya',
        },
        {
          id: 3,
          image: 'https://www.hostelz.com/pics/slp/81/private-rooms-hostels-london.jpg',
          title: 'Olympia Hostel',
          subtitle: 'USD $450 per-3month - Makerere',
        },
        {
          id: 3,
          image: 'https://yellowsquare.com/wp-content/uploads/2024/09/hostel-dorms-yellowsquare-1024x663.webp',
          title: 'Dream World Hostel',
          subtitle: 'USD $380 per-3month - Makerere',
        },
        {
          id: 3,
          image: 'https://www.hostelz.com/pics/slp/98/best-hostels-rome-private-rooms.jpg',
          title: 'Ideal Platinum Hostel',
          subtitle: 'USD $600 per-3month - Kampala',
        },
        {
          id: 3,
          image: 'https://globalindianschool.org/sg/wp-content/uploads/sites/12/2024/08/hostel-1-jpg.webp',
          title: 'Akamwesi Hostel',
          subtitle: 'USD $270 per-3month - Nakawa',
        },
        {
          id: 3,
          image: 'https://cdn.aohostels.com/img/house/gallery/edinburgh-city/22473.jpg',
          title: 'Paradise Hostel',
          subtitle: 'USD $200 per-3month - Kireka',
        },
        {
          id: 3,
          image: 'https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/room-imgs/201801221238265038-3058758-8e37e1aed6b011e9bfb30242ac110004.jpg',
          title: 'Premium Hostel',
          subtitle: 'USD $300 per-3month - UCU Mukono',
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