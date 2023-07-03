import React from "react";
import Navbar from "../Components/Navbar";
import RestaurantCard from "../Components/RestaurantCard";
import Footer from "../Components/Footer";

function Pizza() {
 const pizzaPoints = [
  {
    "name": "Domino’s Pizza Jhelum",
    "address": "XP25+JH7، G T Road, Jada, Jhelum, Punjab 49600",
    "contact": "0307 5489185",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Pizza Originale",
    "address": "WP9C+44R, Grand Trunk Rd، near PSO Petrol Pump, Jhelum Cantt, Jhelum, Punjab",
    "contact": "(0544) 621703",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Pizza Hot",
    "address": "WPJM+77F, Naya Mohalla Jhelum, Jhelum, Punjab 49600",
    "contact": "(0544) 623060",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Italy Pizza Jhelum",
    "address": "WPPP+JJM, Civil Lines, near fazal hospital, Dhoke Abdullah, Jhelum, Punjab 49600",
    "contact": "(0544) 276327",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Italian Pizza",
    "address": "WPGG+9JC, Paradise Rd, Jhelum Cantt, Jhelum, Punjab 49600",
    "contact": "(0544) 610629",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "The golden crust pizza",
    "address": "XP25+JQ5, NH 5, Jada, Jhelum, Punjab 49600",
    "contact": "0322 6229595",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Crunchie’s pizza kitchen",
    "address": "3 A, Machine Mohalla No.3 Machine Mohalla 3, Jhelum",
    "contact": "0326 6006633",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Peppery Chicken & Pizza",
    "address": "Shop # 41-42, GTS Plaza, G.T.S. Chowk, Jhelum, 49600",
    "contact": "0331 6625550",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Pizza17",
    "address": "Old G T Rd, Machine Mohalla No.2 Machine Mohalla 2, Jhelum, Punjab 49600",
    "contact": "0307 1881717",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "De Amigos",
    "address": "Grand Trunk Road, Kala phattak, Kala Gujran, Jhelum, Punjab 49600",
    "contact": "(0544) 275655",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Mirchi hud",
    "address": "Plot G 320, Machine Mohalla 2, Jhelum, Punjab 49600",
    "contact": "0317 7204405",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "Noor pizza orignal",
    "address": "Civil Lines, Jhelum, Punjab 49600",
    "contact": "(0544) 622239",
    "image": "https://source.unsplash.com/800x600/?pizza"
  },
  {
    "name": "HFC Jhelum",
    "address": "Near Old G T Rd, Machine Mohalla No.3 Machine Mohalla 3, Jhelum, Punjab 49600",
    "contact": "(0544) 613400",
    "image": "https://source.unsplash.com/800x600/?pizza"
  }
]
  

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#B8C6D9" }}>
        <div className="container md:p-20">
          <div className="bg-white rounded overflow-hidden shadow-lg p-10">
            <div class="font-bold text-2xl text-center text-stone-600">
              Pizza Points
            </div>
            <div class="container mt-10 grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
              {pizzaPoints.map((item) => {
                return <RestaurantCard item = {item}/>
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Pizza;
