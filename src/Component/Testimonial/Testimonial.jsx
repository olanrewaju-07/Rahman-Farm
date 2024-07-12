import React, {useRef} from 'react'
import './Testimonial.css'
import next_icon from '../../images/next-icon.png'
import back_icon from '../../images/back-icon.png'
import user_1 from '../../images/user-1.png'
import user_2 from "../../images/user-2.png";
import user_3 from "../../images/user-3.png";
import user_4 from "../../images/user-4.png";

const Testimonial = () => {
   const slider = useRef();
   let tx = 0;

   const slideFoward = () => {
     if (tx > -60) {
       tx -= 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
   };
   const slideBackward = () => {
     if (tx < -0) {
       tx += 25;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
   };
  return (
    <div className="Testimonial">
      <img src={next_icon} alt="" className="next-btn" onClick={slideFoward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Issa AbdulBasit</h3>
                  <span>Ibadan Nigeria</span>
                </div>
              </div>
              <p>
                I'm consistently amazed by the care and attention to detail
                evident in every aspect of your farm. The fish are always
                healthy and thriving, the poultry is well-raised, and the eggs
                are consistently fresh. It's clear that you're passionate about
                what you do, and it truly shows in the exceptional quality of
                your products.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Mummy Abdulrahman</h3>
                  <span>Ijebu Nigeria</span>
                </div>
              </div>
              <p>
                The variety at your farm is truly impressive! From the fresh
                fish to the delicious eggs, my family and I always look forward
                to our visits. Thank you for providing such high-quality,
                locally sourced products.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Mummy Soliha</h3>
                  <span>Oshogbo Nigeria</span>
                </div>
              </div>
              <p>
                From the moment I step onto your farm, I'm greeted with warmth
                and enthusiasm. Your dedication to customer service is evident
                in every interaction, and it's clear that you value each and
                every customer. Thank you for always going above and beyond to
                ensure that we have a positive experience and access to the best
                products around.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>AbdulMumin Solih</h3>
                  <span>Ilorin Nigeria</span>
                </div>
              </div>
              <p>
                As someone who values sustainability, I can't express enough
                how much I appreciate your farm's commitment to eco-friendly
                practices. Knowing that I can support a local business that
                prioritizes responsible farming methods makes every purchase
                even more rewarding. Keep up the fantastic work!.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonial