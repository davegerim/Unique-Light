import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import { MdEmail, MdPhone } from "react-icons/md";
function ContactTab() {
  return (
    <div className="">
      <ul class="text-gray-600 dark:text-gray-400 ">
        <li class="mb-4">
          <span className="inline-flex mr-2 ">
            <MdEmail className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <span className="">dawitmezgebu22@gmail.com</span>
        </li>
        <li class="mb-4">
          <span className="inline-flex mr-2">
            <MdPhone className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <span>+251 943 18 45 06</span>
        </li>
        <li class="mb-4">
          <span className="inline-flex mr-2">
            <IoLocation className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <span
            href="https://whatsapp.com/channel/0029Va7WSm3DTkJve0dsGw2K"
            target=" _blank"
          >
            Addis Abeba, Eth
          </span>
        </li>
        <li class="mb-4">
          <div>
            <span className="inline-flex mr-2">
              <FaTelegram className="text-yellow-600 hover:text-yellow-700 " />
            </span>
            <a href="https://t.me/uniquelightshop" target=" _blank">
              Telegram
            </a>
          </div>
        </li>

        <li class="mb-4">
          <div>
            <span className="inline-flex mr-2">
              <FaFacebook className="text-yellow-600 hover:text-yellow-700 " />
            </span>
            <a href="https://www.facebook.com/uniquelightshop" target=" _blank">
              Facebook
            </a>
          </div>
        </li>
        <li class="mb-4">
          <span className="inline-flex mr-2">
            <FaInstagram className="text-yellow-600 hover:text-yellow-700 " />
          </span>
          <a href="https://www.instagram.com/uniquelightshop" target=" _blank">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactTab;
