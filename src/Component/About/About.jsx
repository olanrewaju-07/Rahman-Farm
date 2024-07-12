import React from 'react'
import './About.css'
import image_13 from '../../images/image-13.png'
import playVideo from "../../images/play-icon.png"

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-left"> 
          <img src={image_13} alt="" />
          <img src={playVideo} alt="" className='play-icon' onClick={() =>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
          <h1>The Founder</h1>
          <h3>Bello Rahman Adewale</h3>
          <h2>"From Nest to Net: Nurturing Nature's Bounty"</h2>
          <p>
            Mr Bello Rahman Adewale is a respectable man and a good father to
            his family. He is a graduate of Agriculture from the prestigious
            institution(Olabisi Onabajo University, Ago-iwuye, Ogun State.).
            <br />
            <br />
            Where he specialized in Animal Proiduction. He had worked for the
            renowned Livestock Feed, serving as Sales Manager, Production
            Manager and Managing Director at different branches of thr company.
            <br />
            <br />
            He gather a 17years experience from there and later resigned to
            implement his knowledge in rearing of poultry birds and managing of
            fish productin. he set up his own Agricultural farm ( poultry &
            fishery) a move futher to implement and practicalise his knowlwdge
            and proficiency in Animal Production.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About