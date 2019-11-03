import React from "react";

function AboutMe() {
    return (
        <div className="container scrollspy" id="AboutMe" throttle="500">
            <div className="section">
                <div className="row">
                    <div className="col s12 center">

                        <h4 data-aos="fade-right" data-aos-duration="800" data-aos-offset="100"><i className=" blue-grey-text text-darken-4">Who am I?</i></h4>
                        <section data-aos="fade-up" data-aos-duration="800" data-aos-offset="400">
                            <p className="blue-grey-text text-darken-4 mainContentHighlighted">Hi! My name is Troy Garcia! I am a Full Stack Software Developer and CompEng Student! </p>

                            <p className=" blue-grey-text text-darken-4 mainContent">Coding for me isn't just a job. It's a passion! I code for fun just to explore new ways to create things! Throughout my Carrer as a CompEng Student, I encountered and learned many different programming languages. This was mostly back end code that run microcontrolers or application specific intergrated circuits. Recently, I decided to embark on another branch of software engineering. This side of Software Engineering mainly deals with the Internet flow both within the User interface all the way to the back end server interface. This field is commonly known as Full Stack Software Development!</p>
                            <br></br><br></br>
                            <p className="blue-grey-text text-lighten-1">Within this Portfolio, you can see all my past projects that i've completed as well as current projects that i'm tackling!</p>
                            <p className="blue-grey-text text-darken-4">For a more complete list of my projects, feel free to visit my <a className="blue-grey-text text-lighten-1" href="http://www.github.com/Garciat427">Github</a></p>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
