import React from "react";
import "./intro.css";
import {Link} from 'react-scroll';
import img from '../../assets/approved.png'
import mainImg from '../../assets/MainImg.png';
const Intro = () => {

    const handDownload = (e) => 
    {
        e.preventDefault();
          
        const link = document.createElement("a");
        link.href = "https://drive.google.com/file/d/1WO79RzZ8mwNdseANEa18mCjScVvT4nDz/view?usp=sharing"; // Replace with the actual URL of your resume file
        link.download = "Priyanshu_Resume.pdf"; // Set the desired name for the downloaded file
          
            // Trigger a click event on the link to initiate the download
        link.click();
    };
    return ( 
        <section id="intro">
            <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText"> I'm<span className="introName"> Priyanshu</span><br/> Website Developer</span>
        <p className="introPara">Where Code Meets Creativity - Your Journey into the World of Software and Web Development Begins Here.</p>
        <button className="btn" onClick={handDownload}><img  className="img" src={img} alt="Resume Download" />Hire Me</button>
            </div>
            <img src={mainImg} alt="" className="mainImg"/>
        </section>
     );
}
 
export default Intro;