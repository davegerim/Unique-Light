import React from "react";
import Nav from "../Basic/Nav";
import { Button, Center, Title } from "@mantine/core";
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Box from "./Box";

function Contact() {
  const navigate = useNavigate();

  function contactus() {
    navigate("/contact");
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
            onClick={contactus}
          >
            Contact
          </Button>
        </Center>
        <Center className="mt-4">
          <Title class="lg:text-5xl font-bold">Contact Us</Title>
        </Center>
      </div>
      <div className="mt-24">
        <Box />
      </div>
    </div>
  );
}

export default Contact;
