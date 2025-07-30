import React,{useState, useRef} from 'react'
import "./ContactUs.css"
import emailjs from '@emailjs/browser';

const ContactUS = () => {
    const [name,setName]=useState('')
    const [email, setEmail]=useState('')
    const [message,setMessage]=useState('')
    const form = useRef();

    //send message function

    const sendMessage =(e)=>{
        e.preventDefault()
        emailjs.sendForm(
            'service_7d2029i',      // Replace with EmailJS service ID
            'template_x5h4daw',     // Replace with EmailJS template ID
            form.current,
            'J794i_MUXHBwjUxzD'       // Replace with EmailJS public key
          )
          .then((result) => {
            alert('Message sent successfully!');
            console.log(result.text);
          }, (error) => {
            alert('Failed to send message.');
            console.log(error.text);
          });

    }

  return (
     <section  className="contact-wrapper">
           <div className='contact-card'>
               <div className='contact-left'>
                <h2>Lets Talk About Hostel Apartments</h2>
                    <p>Do you Have a question, Feedback, or looking to list your Property Apartments , Fill the form on the right</p>
                    <div className='contact-info'>
                        <p><strong>Email:</strong> boxteljonathan@gmail.com</p>
                        <p><strong>Phone:</strong> 0782977954</p>
                        <p><strong>Location:</strong> Uganda Kampala, Kawempe Tula</p>
                    </div>
               </div>
               <form  ref={form} onSubmit={sendMessage} className='contact-form'>
                    <input name='name' value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Full NAme' />
                    
                    <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder='Enter Email Address' />
                    <textarea name='message'  value={message} onChange={(e)=>setMessage(e.target.value)} rows="5" placeholder='Enter your MEssage'>

                    </textarea>
                    <button  type="submit">Send Message</button>
               </form>

           </div>
     </section>
  )
}

export default ContactUS