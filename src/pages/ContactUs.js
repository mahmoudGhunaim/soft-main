import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../style/ContactUs.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CardCustomer } from "../components/CardCustomer";
import RECAPTCHA from "react-google-recaptcha";

function ContactForm() {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });
  const [capVal, setCapVal] = useState(null);
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your logic here to handle the form submission, e.g., send data to a server.
    console.log(formData);
  };

  return (
    <>
      <NavBar />
      <div class="container ">
        <img
          className="circle-sec !left-[unset] !right-[-350px]"
          id="circle1"
          src="/Frame 1000003358.svg"
        />
      </div>
      <div className="md:px-[70px]  mx-auto mt-10">
        <div className="relative  bg-[#130C0C] ">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="relative px-4 pb-10 pt-10 sm:pt-10 lg:static  lg:py-20">
              <div className=" mx-auto lg:mx-0 lg:max-w-lg flex flex-col justify-between gap-20">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    Do you have an idea in mind? We'd love to hear from you.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    We’re happy to talk about your project details. Share your
                    thoughts with us, or hit us up to simply learn About the
                    services we have to offer
                  </p>
                </div>
                <div className="happy-clients w-100">
                  <h2>Meet our happy clients</h2>
                  <div className="slider-sec slider-contact">
                    <Swiper
                      breakpointsInverse={true}
                      breakpoints={{
                        640: {
                          slidesPerView: 2,
                          spaceBetween: 4,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 5,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1030: {
                          slidesPerView: 2.1,
                          spaceBetween: 10,
                        },
                      }}
                      modules={[
                        Navigation,
                        Pagination,
                        Scrollbar,
                        A11y,
                        Autoplay,
                      ]}
                      spaceBetween={0}
                      autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      pagination={{ clickable: true }}
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide>
                        <CardCustomer
                          SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                          Title="Sally Baalbaki"
                          SubProfile="CEO, Decoration one"
                          imageSrc="/coding.gif"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <CardCustomer
                          SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                          Title="Sally Baalbaki"
                          SubProfile="CEO, Decoration one"
                          imageSrc="/coding.gif"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <CardCustomer
                          SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                          Title="Sally Baalbaki"
                          SubProfile="CEO, Decoration one"
                          imageSrc="/coding.gif"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <CardCustomer
                          SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                          Title="Sally Baalbaki"
                          SubProfile="CEO, Decoration one"
                          imageSrc="/coding.gif"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <CardCustomer
                          SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                          Title="Sally Baalbaki"
                          SubProfile="CEO, Decoration one"
                          imageSrc="/coding.gif"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <CardCustomer
                          SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
                          Title="Sally Baalbaki"
                          SubProfile="CEO, Decoration one"
                          imageSrc="/coding.gif"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <form
              action="#"
              method="POST"
              className="px-4 pb-10 pt-10 sm:pt-10 lg:static  lg:py-20"
            >
              <div className="mx-auto  lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      for="name"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Name"
                        className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      for="phone-number"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Phone number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Phone number"
                        className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      for="email"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="emailaddress@email.com"
                        className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      for="message"
                      className="block text-sm font-semibold leading-6 text-white"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Massage"
                        rows="4"
                        className="block w-full rounded-md border border-white bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex justify-start">
                  {/* <Link
                    to="/ContactUs/"
                    className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-medium text-main bg-white  hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
                  ></Link> */}
                  <button
                    type="submit"
                    className="no-underline inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-main  hover:opacity-85 border-0 rounded-full  focus:ring-10 w-auto"
                  >
                    Get free consultation
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactForm;

// <div className="md:px-[70px] mx-auto">
//   <div className="contact-sec bg-[#130C0C] p-3 rounded-lg ">
//     <div className="w-100 flex">
//       <div className="contact-title">
//         <div>
//           <h1>Do you have an idea in mind? We'd love to hear from you.</h1>
//           <p>
//             We’re happy to talk about your project details. Share your thoughts
//             with us, or hit us up to simply learn about the services we have to
//             offer.
//           </p>
//         </div>
// <div className="happy-clients">
//   <h2>Meet our happy clients</h2>
//   <div className="slider-sec slider-contact">
//     <Swiper
//       breakpointsInverse={true}
//       breakpoints={{
//         640: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 1,
//           spaceBetween: 40,
//         },
//         1024: {
//           slidesPerView: 1,
//           spaceBetween: 50,
//         },
//         1030: {
//           slidesPerView: 2,
//           spaceBetween: 50,
//         },
//       }}
//       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//       spaceBetween={0}
//       autoplay={{
//         delay: 4500,
//         disableOnInteraction: false,
//       }}
//       loop={true}
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log("slide change")}
//     >
//       <SwiperSlide>
//         <CardCustomer
//           SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
//           Title="Sally Baalbaki"
//           SubProfile="CEO, Decoration one"
//           imageSrc="/coding.gif"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <CardCustomer
//           SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
//           Title="Sally Baalbaki"
//           SubProfile="CEO, Decoration one"
//           imageSrc="/coding.gif"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <CardCustomer
//           SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
//           Title="Sally Baalbaki"
//           SubProfile="CEO, Decoration one"
//           imageSrc="/coding.gif"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <CardCustomer
//           SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
//           Title="Sally Baalbaki"
//           SubProfile="CEO, Decoration one"
//           imageSrc="/coding.gif"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <CardCustomer
//           SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
//           Title="Sally Baalbaki"
//           SubProfile="CEO, Decoration one"
//           imageSrc="/coding.gif"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <CardCustomer
//           SubHeading="Have worked with Softylus for almost two years. They're a kind group of people who do exceptional design and development work at a fair price. Highly recommended :)"
//           Title="Sally Baalbaki"
//           SubProfile="CEO, Decoration one"
//           imageSrc="/coding.gif"
//         />
//       </SwiperSlide>
//     </Swiper>
//   </div>
// </div>
//       </div>
//       <div className="contact-form">
//         <form onSubmit={handleSubmit}>
//           <div className="label-sec">
//             <label htmlFor="name">Name:</label>
//             <input
// type="text"
// id="name"
// name="name"
// value={formData.name}
// onChange={handleInputChange}
// required
// placeholder="Name"
//             />
//           </div>
//           <div className="label-sec">
//             <label htmlFor="phone">Phone Number:</label>
//             <input
//   type="tel"
//   id="phone"
//   name="phone"
//   value={formData.phone}
//   onChange={handleInputChange}
//   required
//   placeholder="Phone number"
// />
//           </div>

//           <div className="label-sec">
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               placeholder="emailaddress@email.com"
//             />
//           </div>
//           <div className="label-sec">
//             <label htmlFor="message">Message:</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//               placeholder="Massage"
//             />
//           </div>
//           <RECAPTCHA
//             sitekey="6Lczn1EoAAAAANkOd0qmjLegXvq1pa9zJND4LTCv"
//             onChange={(val) => {
//               setCapVal(val);
//             }}
//           />
//           <input type="hidden" name="_gotcha" style={{ display: "none" }} />

//           <button type="submit" className="btn-sec">
//             Send Email
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>;
