import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import "./Booking.css"
import {addDoc,collection} from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import { db } from './firebase'

const Booking = ({route}) => {
   const {state} =useLocation()
   const propertyData =state || {}
   const [fullname,setName] =useState('')
   const [email,setEmail]= useState('')
   const [checkin,setCheckin]=useState('')
   const [checkout,setCheckout]=useState('')
   const [numofpeople,setPeople]=useState('')
   const auth= getAuth()
   const user= auth.currentUser;
  //  console.log(user.uid)
   const [loading, setLoading]=useState(false)
    
   //function to save data in database 

        const saveBooking = async(e)=>{
          e.preventDefault()
          setLoading(true)
             try{
              await addDoc(collection(db,'booking'),{
                userId:user?.uid,
                propertyData:propertyData,
                fullname,
                email,
                checkin,
                checkout,
                numofpeople,
                status:'pending'
              });
              alert('Booking Successfuly Confirmed')
             }catch(err){
               alert(err.message || 'Booking Failed')
             }  
             setLoading(false)
        }

  return (
    <section  className='booking-wrapper'>
        <div className='booking-card'>
             <div className='property-summary'>
                   <img src={propertyData.propertyData?.image}/>
                   <div className='property-details'>
                        <h2>{propertyData.propertyData?.title}</h2>
                        <p>{propertyData.propertyData?.location}</p>
                        <p> <strong>{propertyData.propertyData?.price}</strong></p>
                   </div>
                   <form className='booking-form'>
                         <h2>Book Your Stay</h2>
                         <input value={fullname} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter full Name"/>
                         <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email"/>
                          <label>Checkin Date</label>
                         <input value={checkin} onChange={(e)=>setCheckin(e.target.value)} type="date" />
                         <label>Check Out Date</label>
                         <input value={checkout} onChange={(e)=>setCheckout(e.target.value)} type="date" />
                         <label>Number of people</label>
                         <input value={numofpeople} onChange={(e)=>setPeople(e.target.value)} type="number" />
                         <button onClick={saveBooking}> {loading?' Saving Data':'Confirm Booking'} </button>
                   </form>
             </div>
        </div>
    </section>
  )
}

export default Booking