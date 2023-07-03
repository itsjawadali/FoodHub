import React from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";

function FastFood() {
  const fastFood = [
    {
      "name": "Chicken Cottage",
      "address": "Lahore Islamabad, Grand Trunk Rd, Kashmir Colony, Jhelum, Punjab 49600",
      "contact": "(0544) 646111",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "Club Kitchen Jhelum",
      "address": "XM9V+892, Grand Trunk Rd, Kala Gujran, Jhelum, Punjab 49600",
      "contact": "0344 4447874",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "Cafe 23",
      "address": "WPG6+HF5, Jhelum Cantt, Jhelum, Punjab",
      "contact": "0307 5491392",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "Food Palace",
      "address": "WPHJ+938, Railway Rd, Jhelum, Punjab, Model Colony, Jhelum, Punjab 49600",
      "contact": "(0544) 627795",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "Subway",
      "address": "WP9C+42P, Jhelum Cantt, Jhelum, Punjab",
      "contact": "(0544) 621701",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "Cuisine one",
      "address": "Near MCB mohammadi chowk, Chishtiyan Mohallah Mohalla Islampura, Jhelum, Punjab 49600",
      "contact": "0300 1281717",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "KFC",
      "address": "49600 Punjabپنجاب,، ,Jhelumچھاؤنی،، ,Bridge Jhelum nearجی ٹی روڈ،،",
      "contact": "(0544) 111 532 532",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "Mr. Chicken",
      "address": "XMW6+6FF, Satellite Town, Jhelum, Punjab",
      "contact": "0346 2442536",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "Citi Fried Chicken",
      "address": "XMR5+J92, Circular Rd, Satellite Town, Satellite Town Jhelum, Jhelum, Punjab",
      "contact": "0333 4192930",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "Hajveri Chat Palace",
      "address": "WPHM+JH7, Toya Mohallah Jhelum, Punjab 49600",
      "contact": "(0544) 720403",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "McDonald’s",
      "address": "WP4J+FQC، Jhelum River, Near Tulip Hotel, Main G. T. Road, Sarai Alamgir, District، Gujrat, Jhelum, Gujrat, Punjab 49600",
      "contact": "0300 8566816",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "BURGER SAUCE",
      "address": "Paradise Rd, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "0333 5550905",
      "image": "https://source.unsplash.com/800x600/?burger"
    },
    {
      "name": "The Mama’s Food",
      "address": "M.M # 1, Old G T Rd, near Boots Pharmacy, Jhelum, 49600",
      "contact": "0325 5611411",
      "image": "https://source.unsplash.com/800x600/?burger"
    }
  ]
  
  

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#B8C6D9" }}>
        <div className="container md:p-20">
          <div className="bg-white rounded overflow-hidden shadow-lg p-10">
            <div class="font-bold text-2xl text-center text-stone-600">
              Fast Food
            </div>
            <div class="container mt-10 grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
              {fastFood.map((item) => {
                return (
                  <div class="relative z-0 max-w-auto bg-stone-100 hover:shadow-lg rounded-lg overflow-hidden">
                    <div
                      class="bg-cover bg-center bg-opacity-75 h-64"
                      style={{
                        backgroundImage:
                        `url('${item.image}')`
                      }}
                    ></div>
                    <div class="absolute bottom-0 inset-x-0 flex items-center justify-center">
                      <div class="p-6 bg-white rounded-t-lg bg-opacity-90 w-11/12">
                        <h3 class="text-2xl font-semibold text-gray-800">
                            {item.name}
                        </h3>
                        <p class="text-gray-600 mt-2">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            color="#8596A6"
                            className="mr-2"
                          />
                         {item.address}
                        </p>
                        <p class="text-gray-600 mt-2">
                          <FontAwesomeIcon
                            icon={faPhone}
                            color="#8596A6"
                            className="mr-2"
                          />
                          {item.contact}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default FastFood;
