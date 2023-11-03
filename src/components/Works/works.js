import React from "react";
import "./works.css";
import portfolio1 from "../../assets/portfolio1.jpg"
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.jpg";
import portfolio6 from "../../assets/portfolio6.jpg";

const works = () => {
    return ( 
        <section id="works">
            <h2 className="worksTitle">My <span style={{color:'yellow'}}>Portfolio</span></h2>
            <spam className="worksDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</spam>
            <div className="worksImages">
                <img src={portfolio1} alt="Attendance Management System and Face Recognition System" className="worksImage"/>
                <img src={portfolio2} alt="Java Quiz Game by Java" className="worksImage"/>
                <img src={portfolio3} alt="Auda Static Website" className="worksImage"/>
                <img src={portfolio4} alt="ATM Simulation System by Java" className="worksImage"/>
                <img src={portfolio5} alt="ATM Simulation System by Java" className="worksImage"/>
                <img src={portfolio6} alt="ATM Simulation System by Java" className="worksImage"/>
            </div>
            <button className="worksBtn">See More</button>
        </section>
     );
}
 
export default works;
