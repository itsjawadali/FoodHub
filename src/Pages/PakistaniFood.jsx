import React from "react";
import Navbar from "../Components/Navbar";

import RestaurantCard from "../Components/RestaurantCard";
import Footer from "../Components/Footer";

function PakistaniFood() {
  const pakFood =[
    {
      "name": "Chayee khana",
      "address": "Restaurant · Grand Trunk Rd، near PSO Filling Station",
      "contact": "0300 0509505",
      "image": "https://source.unsplash.com/800x600/?biryani"

    },
    {
      "name": "Jhelum lnn Sizzlers",
      "address": "WPG9+FF4, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "(0544) 628777",
      "image": "https://source.unsplash.com/800x600/?chicken-pasta"
    },
    {
      "name": "Ajwa Bakers and Restaurant",
      "address": "G T Road, Chawani Chowk, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "(0544) 627475",
      "image": "https://source.unsplash.com/800x600/?paratha"
    },
    {
      "name": "2nd Wife Restaurant",
      "address": "Kashmir Colony, Jhelum, Punjab 49600",
      "contact": "0346 1170000",
      "image": "https://source.unsplash.com/800x600/?cooked-food"
    },
    {
      "name": "Greedy Munchkin Restaurant",
      "address": "Grand Trunk Rd, adjacent Honda Express, Kala Gujran, Jhelum, Punjab",
      "contact": "0311 1266663",
      "image": "https://source.unsplash.com/800x600/?pulao"
    },
    {
      "name": "Al bilal hotel and restaurant",
      "address": "XM8W+P5P, Grand Trunk Rd, Kala Gujran, Jhelum, Punjab",
      "contact": "(0544) 270431",
      "image": "https://source.unsplash.com/800x600/?continental-food"
    },
    {
      "name": "Monarch lounge",
      "address": "Chakwal – Jehlum Road, Raja Colony Kala Gujran, Jhelum, Punjab",
      "contact": "0330 0275700",
      "image": "https://source.unsplash.com/800x600/?desi-cuisine"
    },
    {
      "name": "China CITI",
      "address": "XMV6+88F, Satellite Town, Jhelum, Punjab",
      "contact": "(0544) 225053",
      "image": "https://source.unsplash.com/800x600/?noodles"
    },
    {
      "name": "Tulip Riverside Hotel And Restaurant Jehlum",
      "address": "WP4J+X73، Jhelum Bridge، Grand Trunk Road, River Jhelum Mews, Gujrat, Punjab 54000",
      "contact": "(0544) 652555",
      "image": "https://source.unsplash.com/800x600/?salmon"
    },
    {
      "name": "New Sheikh Chargha House",
      "address": "Old G T Rd, Machine Mohalla No.2 Lalazar Colony, Jhelum, Punjab 49600",
      "contact": "(0544) 612443",
      "image": "https://source.unsplash.com/800x600/?meat"
    },
    {
      "name": "Dewane Saeed",
      "address": "XP34+XRP, Grand Trunk Rd, Jada, Jhelum, Punjab 49600",
      "contact": "0321 5439547",
      "image": "https://source.unsplash.com/800x600/?beef-bbq"
    },
    {
      "name": "Evergreen Hotel & Restaurant",
      "address": "WPGG+HCW, Railway Rd, Jhelum, Punjab, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "(0544) 626227",
      "image": "https://source.unsplash.com/800x600/?chicken-bbq"
    },
    {
      "name": "Anbala Restaurant and Bar B Q",
      "address": "Jaadah, Road, Machine Mohalla 2, Jhelum, Punjab 49600",
      "contact": "0300 5437305",
      "image": "https://source.unsplash.com/800x600/?mutton-bbq"
    },
    {
      "name": "Star BBQ: Chinese & Pakistani Restaurant",
      "address": "WP95+Q58, Jhelum Cantt, Jhelum, Punjab",
      "contact": null,
      "image": "https://source.unsplash.com/800x600/?food-bbq"
    },
    {
      "name": "Butt karahi",
      "address": "Butt karahi Tikka، Main G T Road, Jada, Jhelum, Punjab 49600",
      "contact": "(0544) 273923",
      "image": "https://source.unsplash.com/800x600/?karahi"
    }
  ]
  

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#B8C6D9" }}>
        <div className="container md:p-20">
          <div className="bg-white rounded overflow-hidden shadow-lg p-10">
            <div class="font-bold text-2xl text-center text-stone-600">
              Restaurants for Famous Pakistani Food
            </div>
            <div class="container mt-10 grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
              {pakFood.map((item) => {
              return <RestaurantCard item={item}/>
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default PakistaniFood;
