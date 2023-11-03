import React from "react";
import './about.css';
import webDeveloper from "../../assets/webDevelopment.png";
import javaDeveloper from "../../assets/javaDeveloper.png";
import code from "../../assets/coder.png";

const about = () => {
    return ( 
        <section id="about">
            <span className="aboutTitle">Who I <span style={{color:'yellow'}}>am</span></span>
            <span className="aboutDesc"><span className="headingIntro">Priyanshu Verma | MCA Graduate | Aspiring IT Professional</span><br/><br/>Hello, I'm Priyanshu Verma, a recent MCA graduate with a passion for IT. Skilled in HTML, CSS, JavaScript, Java, WordPress, and Bootstrap, I completed a valuable web technology internship. Eager to contribute my knowledge and collaborate in a dynamic IT environment.</span>
            <div className="aboutBars">
                <div className="aboutBar">
                    <img src={webDeveloper} alt="Web Developer" className="aboutImg" />
                    <div className="aboutBarText">
                        <h2>Website Developer</h2>
                        <p>Crafting the digital world one line of code at a time.</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={javaDeveloper} alt="Java Developer" className="aboutImg" />
                    <div className="aboutBarText">
                        <h2>Java Developer</h2>
                        <p>Transforming complex problems into elegant solutions with Java code.</p>
                    </div>
                </div>
                <div className="aboutBar">
                    <img src={code} alt="Coder" className="aboutImg" />
                    <div className="aboutBarText">
                        <h2>Coder</h2>
                        <p>Coding the future, one algorithm at a time.</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default about;