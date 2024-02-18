import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="footer bg-paperPrimary dark:bg-textPrimary p-10 ">
      <div className="flex justify-around mb-16 gap-10 w-[80%] m-auto max-sm:flex-col max-sm:w-full">
        <div className="flex flex-col w-1/4 max-sm:w-full">
          <h1 className="text-left font-bold mb-5 text-textPrimary dark:text-primary dark:text-paperPrimary">
            Vedaant Dental Care
          </h1>
          <p className="text-textSecondary dark:text-paperPrimary mb-4">
            We take care of your smile, so you can laugh confi DENT ly.
          </p>
          <p className="text-textSecondary dark:text-paperPrimary">
            Take charge of your business continuity with innovative IT solutions
          </p>
          <div className="flex text-textPrimary dark:text-primary gap-4 mt-4">
            <a href="https://www.instagram.com/vedant_dental_care/" target="_blank">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/vedantdental" target="_blank">
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col w-1/4 max-sm:w-full">
          <h1 className="text-left font-bold mb-5 text-textPrimary dark:text-primary">Explore</h1>
          <ul className="text-textSecondary dark:text-paperPrimary">
            <li className="mb-4">About</li>
            <li className="mb-4">Contact</li>
            <li className="mb-4">Treatments & Pricing</li>
            {/* <li className="mb-4">Refund Policy</li> */}
            <li className="mb-4">Call Us</li>
          </ul>
        </div>

        <div className="flex flex-col w-1/4 max-sm:w-full">
          <h1 className="text-left font-bold mb-5 text-textPrimary dark:text-primary">Legal</h1>
          <ul className="text-textSecondary dark:text-paperPrimary">
            {/* <li className="mb-4">Join Us</li> */}
            <li className="mb-4">Blog</li>
            <li className="mb-4">Privacy & Policy</li>
            <li className="mb-4">Terms & Conditions</li>
            <li className="mb-4">Careers</li>
            <li className="mb-4">Contact</li>
          </ul>
        </div>
        <div className="flex flex-col w-1/4 max-sm:w-full">
          <h1 className="text-left font-bold mb-5 text-textPrimary dark:text-primary">
            Have a Questions?
          </h1>
          <ul className="text-textSecondary dark:text-paperPrimary">
            <li className="mb-4 flex gap-2 items-start">
              <FaLocationDot className="text-2xl" />
              101,Silver Star Mall, Tower Road, Valsad-396001.
            </li>
            <li className="mb-4 flex gap-2 items-center">
              <FaPhone />
              <Link href="tel:+919178358598">+91-9178358598</Link>
            </li>
            <li className="mb-4 flex gap-2 items-center">
              <MdMail className="text-lg" />
              <Link href="mailto:vedaant.dentalcare@gmail.com">vedaant.dentalcare@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-textSecondary dark:text-paperPrimary max-sm:text-sm">
        Copyright ©2024 All rights reserved | VedaantDentalCare
      </div>
    </div>
  );
}
