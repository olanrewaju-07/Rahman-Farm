import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Program from "./Component/Program/program";
import Title from "./Component/Title/Title";
import About from "./Component/About/About";
import Booking from "./Component/Booking/Booking";
import Checkout from "./Component/Checkoutpage/Checkout";
import Testimonials from "./Component/Testimonial/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/footer";
import Videoplayer from "./Component/Videoplayer/Videoplayer";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Chicken", price: 5000, quantity: "" },
    { id: 2, name: "Eggs", price: 4500, quantity: "" },
    { id: 3, name: "Fish", price: 2500, quantity: "" },
  ]);

  const [playState, setPlayState] = useState(false);


  return (
    <Router>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our PROGRAM" title="What We Offer" />
        <Program />
        <Title title="About Us" />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Book Your Choice" title="Farm Product" />
        <Routes>
          <Route
            path="/"
            element={<Booking products={products} setProducts={setProducts} />}
          />
          <Route path="/checkout" element={<Checkout products={products} />} />
        </Routes>

        <Title subTitle="TESTIMONIALS" title="What Customer Says" />
        <Testimonials />
        <Title subTitle="CONTACT US" title="Get In Touch" />
        <Contact />
      </div>
      <Footer />
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </Router>
  );
};

export default App;
