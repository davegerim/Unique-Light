import { Button, Center, Title } from "@mantine/core";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import ProfessionSection from "./ProfessionSection";
import Nav from "../Basic/Nav";
import Skills from "./Skills";
// import Testimonial from "./Testimonial";
import { useNavigate } from "react-router-dom";
import Clients from "./Clients";
import Experiences from "../Experiance/Experiences";

function About() {
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
            About Us
          </Button>
        </Center>
        <Center className="mt-4">
          <Title class="lg:text-5xl font-bold">About Us</Title>
        </Center>
      </div>
      <div className="mt-28">
        <ProfessionSection />
      </div>
      <div className="mt-28">
        <Experiences />
      </div>

      <div className="mt-32">
        <Clients />
      </div>
    </div>
  );
}

export default About;
