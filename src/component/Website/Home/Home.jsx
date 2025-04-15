import React from "react";
import { Button, Center, Image, Modal, Text, Title } from "@mantine/core";
import { IconArrowAutofitRight } from "@tabler/icons-react";
import Nav from "../Basic/Nav";
import {
  FaBehance,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import HireMe from "../Hire me/HireMe";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import "animate.css";
function Home() {
  const [opened, { open, close }] = useDisclosure(false);
  const navigate = useNavigate();

  function about() {
    navigate("/about");
  }

  return (
    <div className="">
      <div className=" flex justify-between h-screen ">
        <div className="bg-gray-50 w-full ">
          <Center>
            <img src="./portfolio/logo1.png" />
          </Center>

          <Center className=" space-x-4">
            <Button
              onClick={about}
              color="#0d4049"
              rightSection={<IconArrowAutofitRight size={14} />}
            >
              More About Me
            </Button>
            <Button
              color="#f8c200"
              className="text-black p-2 px-4 rounded-sm hover:shadow-none"
              rightSection={<IconArrowAutofitRight size={14} />}
              onClick={open}
            >
              Hire Me
            </Button>
            <Modal opened={opened} onClose={close} title="Hiring Process">
              <HireMe />
            </Modal>
          </Center>
        </div>
        <div className="bg-tahiti-950 w-full hidden sm:block ">
          <div className="w-[76%]  h-fit ">
            <Image
              src="./portfolio/png.png"
              alt="cover"
              className="animate__animated animate__fadeInTopRight"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
