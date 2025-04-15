import { Button, Center, Title } from "@mantine/core";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Nav from "../Basic/Nav";
import Work from "./Work";
// import Pricing from "./Pricing";

function Whatwedo() {
  const navigate = useNavigate();

  function about() {
    navigate("/about");
  }
  function home() {
    navigate("/home");
  }

  return (
    <div>
      <div className="px-20 pt-8">
        <Nav />
      </div>
      <div>
        <Center className="mt-44 space-x-4">
          <Button
            class="bg-gray-200 text-black p-1 px-2 rounded-sm hover:shadow-none"
            rightSection={<MdArrowForwardIos size={14} />}
            onClick={home}
          >
            Home
          </Button>

          <Button
            class="bg-gray-200 text-black p-1 px-2 rounded-sm hover:shadow-none"
            rightSection={<MdArrowForwardIos size={14} />}
            onClick={about}
          >
            Service
          </Button>
        </Center>
        <Center className="mt-4">
          <Title class="lg:text-5xl font-bold">Our Product</Title>
        </Center>
      </div>
      <div>
        <Work />
      </div>
      {/* <div className="mt-32">
        <Pricing />
      </div> */}
    </div>
  );
}

export default Whatwedo;
