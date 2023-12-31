import React from "react";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";

function DessertsAndBakes() {
  const dessertsAndBakes =[
    {
      "name": "Punjab Bakers, Sweets & Supermart",
      "address": "GTS Chowk, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "(0544) 621074",
      "image": "https://source.unsplash.com/800x600/?bakery"
    },
    {
      "name": "Star Baker",
      "address": "WP95+R7R, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "(0544) 620087",
      "image": "https://source.unsplash.com/800x600/?bakery"
    },
    {
      "name": "Anmol Sweets and Bakers Live pizza",
      "address": "Civil Lines, Shadab Colony, Jhelum, Punjab 49600",
      "contact": "0333 3335236",
      "image": "https://source.unsplash.com/800x600/?bakery"
    },
    {
      "name": "Saif Bakers & General Store",
      "address": "Major Akram Shaheed Rd, Chishtiyan Mohallah Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "0335 5440045",
      "image": "https://source.unsplash.com/800x600/?bakery"
    },
    {
      "name": "Gourmet Bakers & Sweets",
      "address": "XP26+5G5, Jada, Jhelum, Punjab 49600",
      "contact": "0322 2227777",
      "image": "https://source.unsplash.com/800x600/?bakery"
    },
    {
      "name": "Cakes & Bakes",
      "address": "WPGF+7P3, Kazim Kamal Road, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "0314 4054618",
      "image": "https://source.unsplash.com/800x600/?bakery"
    },
    {
      "name": "Ali Baba Fresh Sweets & Bakers",
      "address": "Civil line Road, Civil, line, Jhelum, 49600",
      "contact": "0330 1818786",
      "image": "https://source.unsplash.com/800x600/?bakery"
    },
    {
      "name": "Ajwa Bakers & Restaurant",
      "address": "G T Road, Chawani Chowk, Jhelum Cantt, Jhelum, Punjab 49600",
      "contact": "(0544) 627475",
      "image": "https://source.unsplash.com/800x600/?bakery"
    }
  ]
  
  

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#B8C6D9" }}>
        <div className="container md:p-20">
          <div className="bg-white rounded overflow-hidden shadow-lg p-10">
            <div class="font-bold text-2xl text-center text-stone-600">
            Desserts and Bakes
            </div>
            <div class="container mt-10 grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
              {dessertsAndBakes.map((item) => {
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

export default DessertsAndBakes;
