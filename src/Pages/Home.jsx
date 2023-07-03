import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import logo from "../img/logo.png";
import backgroundImage from "../img/backgroundImage.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";

const Home = () => {
  const menu = [
    {
      name: "Pakistani Food",
      image: "https://source.unsplash.com/800x600/?curry",
      route: "/pakistani-food"
    },
    {
      name: "Fast Food",
      image: "https://source.unsplash.com/800x600/?fries",
      route: "/fast-food"
    },
    {
      name: "Pizza",
      image: "https://source.unsplash.com/800x600/?pizza",
      route: "/pizza"
    },
    {
      name: "Desserts and Bakes",
      image: "https://source.unsplash.com/800x600/?dessert",
      route: "/desserts-and-bakes"
    },
    {
      name: "Home Chef",
      image: "https://source.unsplash.com/800x600/?home-food",
      route: "/home-chefs"
    },
    {
      name: "Ice Cream and Shakes",
      image: "https://source.unsplash.com/800x600/?icecream",
      route: "/icecream-and-shakes"
    },
  ];

  return (
    <>
      <Navbar/>
      <div className="">
        <div
          className="bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
            `url(${backgroundImage})`,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="container pt-48 flex justify-center items-center text-center">
            <div className="">
              <div class="flex justify-center items-center mb-8">
                <img src={logo} alt="Logo" class="object-contain w-48 h-48" />
              </div>
              <h1 className="text-3xl font-bold text-white">
                Welcome to Jehlum City's Food directory
              </h1>
              <p className="text-white">
                Here you can find the addresses and contacts of city's food
                hotspots
              </p>
            </div>
          </div>
          <div className="mx-10 sm:mx-5 px-4 sm:px-6 lg:px-8 lg:mt-40 sm:mt-32 grid lg:grid-cols-3 sm:grid-cols-1 gap-10">
            {menu.map(item =>{
              return(
                <div
              class="max-w-auto my-8 bg-white rounded overflow-hidden shadow-lg"
              style={{ height: "40vh" }}
            >
              <img
                class="w-full object-cover"
                style={{ height: "20vh" }}
                src= {item.image}
                alt="image"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-stone-600 text-center">
                  {item.name}
                </div>
                <div className="text-center lg:mt-7 md:mt-4 sm:mt-2">
                <Link to={item.route}>
                  <button class="bg-stone-200 hover:bg-stone-300 text-white font-bold py-2 px-7 sm:px-5 w-full rounded-full text-gray-700">
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        color="#8596A6"
                        className="my-2"
                        size="xl"
                      />
                  </button>
                  </Link>

                </div>
              </div>
            </div>
              )
            })}
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Home;


