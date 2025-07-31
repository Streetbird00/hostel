import React,{useEffect,useState} from 'react';
import './MyBooking.css';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { getAuth } from 'firebase/auth'



const MyBooking = () => {
    const auth= getAuth()
    const user= auth.currentUser;
    const [bookings,setMyBookings]=useState([])

    //fetch adata from database

    useEffect(()=>{
        fetchMyBookings()
    },
  )


    const fetchMyBookings = async () => {
        if (!user?.uid) return;
      
        try {
          const q = query(
            collection(db, 'booking'),
            where('userId', '==', user.uid)
          );
          const querySnapshot = await getDocs(q);
          const bookings = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          
          console.log('My Bookings:', bookings);
          // You can now set state to display these in your UI
          setMyBookings(bookings);
        } catch (err) {
          console.error('Failed to fetch bookings:', err);
        }
      };
      
  return (
    <div className="page-wrapper">
      <h1 className="page-title">MY BOOKINGS</h1>
      <div className="bookings-list">
        {bookings.map((booking) => (
          <div key={booking.id} className="mybooking-card">
            <img src={booking?.propertyData?.propertyData.image} alt="name" className="booking-image" />
            <div className="booking-details">
              <h2 className="property-name">{booking?.propertyData?.propertyData.title}</h2>
              <p className="location">{booking?.propertyData?.propertyData.location}</p>
              <span><strong>Price</strong>{booking?.propertyData?.propertyData.price}</span>
              <div className="dates">
                <span>Check-in: {booking.checkin}</span>
                <span>Check-out: {booking.checkout}</span>
                
              </div>
              <p className="guests">Guests: {booking.numofpeople}</p>
              <span className={`status ${booking.status?.toLowerCase()}`}>{booking?.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;