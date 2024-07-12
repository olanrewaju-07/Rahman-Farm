 import React from 'react'
import './program.css'
import image_12 from "../../images/image-12.png"
import fish_image from "../../images/fish-image.jpg"
import image_9 from '../../images/image-9.jpg'
import egg_icon from  '../../images/egg-icon.png'
import chicken_icon from '../../images/chicken-icon.png'
import fish_icon from '../../images/fish-icon.png'


const program = () => {
  return (
    <div className="programs">
      <div className="program">
        <h3>EGG</h3>
        <img src={image_12} alt="" />
        <div className="caption">
          <img src={egg_icon} alt="" />
          <p>
            Eggs are rich in protein, vitamins, and minerals, supporting muscle
            health, brain function, and overall well-being. Farm-raised hens
            receive balanced diets ensuring nutrient-rich eggs.
          </p>
        </div>
      </div>
      <div className="program">
        <h3>CHICKEN</h3>
        <img src={image_9} alt="" />
        <div className="caption">
          <img src={chicken_icon} alt="" />
          <p>
            Chicken meat is packed with protein, essential vitamins, and
            minerals, promoting muscle growth, immune function, and overall
            health. Sourced from well-fed, healthy chickens on farms, ensuring
            nutrient-dense meat.
          </p>
        </div>
      </div>
      <div className="program">
        <h3>FISH</h3>
        <img src={fish_image} alt="" />
        <div className="caption">
          <img src={fish_icon} alt="" />
          <p>
            Fish provides high-quality protein, omega-3 fatty acids, vitamins,
            and minerals, supporting heart health, brain function, and reducing
            inflammation. Sustainably sourced fish from clean waters ensures
            nutrient-rich benefits.
          </p>
        </div>
      </div>
    </div>
  );
}

export default program