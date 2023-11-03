import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import certificate1 from "../../assets/Hilt Web Tech.jpeg"
import certificate2 from "../../assets/True_Tech.jpg";
import certificate3 from "../../assets/Udemy.jpg";
import certificate4 from "../../assets/friends.jpg";
import media1 from '../../assets/linkedin.png';
import media2 from '../../assets/instagram.png';
import media3 from '../../assets/facebook.png';
import media4 from '../../assets/github.png';
 
const Contact = () => {

    const hello = () =>
    {
        console.log('hello');
    }
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_i9djn4k', 'template_hzobjzp', form.current, 'MvwNQEvzSe7tgnhHl')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('Email Sent !');
          }, (error) => {
              console.log(error.text);
          });
      };
    return ( 
        <section id='contactPage'>
            <div id='photos'>
                <h1 className='Title'>My <span style={{color:'yellow'}}>Photos</span></h1>
                <p className='photoDesc'>
                Discover a treasure trove of memories and achievements with our collection of captivating photos and prestigious internship certificates. Uncover your journey in every snapshot!
                </p>
                <div className='clientImages'>
                    <img src={certificate1} alt='Hilt Web Technology Certificate' className='clientImage'/>
                    <img src={certificate2} alt='Treue Technology Certificate' className='clientImage'/>
                    <img src={certificate3} alt='Udemy Java Development' className='clientImage'/>
                    <img src={certificate4} alt='My Friends' className='clientImage'/>
                </div>                
            </div>
            <div id='contact'>
                <h1 className='Title'>Contact <span style={{color:'yellow'}}>Me</span></h1>
                <span className='Desc'>Please fill the out the form below to discuss any work opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input className='name' type='text' placeholder='Your Name...' name='from_name'/>
                    <input className='email' type='email' placeholder='Your Email...' name='from_email'/>
                    <textarea className='textArea' name='message' rows='5' placeholder='Your Message...'/>
                    <button className='submitBtn' value='Send' type='submit'>Submit</button>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/priyanshu-verma-b46a4b212/' target='_blank'><img src={media1} alt='LinkedIn' className='link'/></a>
                        <a href='https://www.instagram.com/rohanverma40/' target='_blank'><img src={media2} alt='Instagram' className='link'/></a>
                        <a href='https://www.facebook.com/profile.php?id=100012462542582' target='_blank'><img src={media3} alt='Facebook' className='link'/></a>
                        <a href='https://github.com/Priyanshu-07' target='_blank'><img src={media4} alt='Github' className='link'/></a>
                    </div>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;