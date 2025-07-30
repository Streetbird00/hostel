import React from 'react'
import "./About.css"
import Footer from './Footer'

const About = () => {
  return (
      <section className='about-section'>
          <div className='about-container'>
               <div className='about-text'>
                   <h2> About Us</h2>
                   <p className='about-subheading'>OUR STORY: WHERE COMFORT MEETS COMMUNITY. </p>
                   <p>
                   The idea for my hostel apartment began with a simple observation: students and young professionals in our area needed more than just a place to sleep—they needed a space that felt like home. Back in 2020, a small group of friends and former university classmates came to me with a vision of creating an environment that would offer affordability, security, and a strong sense of community.
What started as a single-floor apartment renovated from an old residential building has blossomed into a vibrant hostel that welcomes residents from all walks of life. The transformation wasn't easy—walls were rebuilt, plumbing modernized, and common areas redesigned with warmth and purpose. But we believed in the project, and the support from our first tenants proved we were on the right track.
Every detail of the hostel was inspired by personal experience: the shared lounges echo late-night study sessions, the rooftop terrace channels weekend vibes with friends, and even the color scheme was chosen to evoke energy and calm. We've prioritized reliable Wi-Fi, clean facilities, and responsive management to ensure everyone here feels valued.
Our hostel apartment isn't just a building—it's a living space filled with stories, laughter, and connection. We’ve grown, learned, and adapted, always putting our residents first. Whether you're here for a semester or staying long-term, we welcome you to be part of the next chapter in our journey.

                   </p>
                   <p>
                   So feel free like you in heaven. From luxury Hostel and Apartments to family homes and urban apartments, our team is committed to providing expert guidance and unparalleled service. thank you for choosing us as your trusted partner in finding the perfect place to call home.
                   </p>
               </div>
               <div className='about-image'>
                   <img  src='https://www.ugandapropertyagents.com/wp/wp-content/uploads/bfi_thumb/WhatsApp-Image-2025-07-21-at-15.58.42-r96jb2oni9q4s2ebykd4uzfuqw53u73hfnheijz1yw.jpeg'/>
               </div>
          </div>
          <Footer/>
      </section>
  )
}

export default About