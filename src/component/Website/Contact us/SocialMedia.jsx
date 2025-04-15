import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="">
      <ul class="text-gray-600 dark:text-gray-400 ">
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

export default SocialMedia;
