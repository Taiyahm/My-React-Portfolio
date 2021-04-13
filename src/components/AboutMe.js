import React from 'react';
import pic from "../350x150.png" 

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                  <div className="photo-wrap">
                 <img className="profile-photo" src={pic} alt="pic..."/>
                 </div>
                </div>
                <div className="col-lg-6 col-xm-12" >
                    <h1 className="about">About Me</h1>
                    <p>
                      
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;
