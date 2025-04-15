import { Center, Text, Title } from "@mantine/core";
import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { IoDesktopSharp } from "react-icons/io5";

function Work() {
  const profession = [
    {
      id: 1,
      department: "Residential Lighting",
      caption:
        "From modern chandeliers to elegant sconces, our residential lighting collection offers a wide range of options to suit any home decor. Each piece is designed to combine functionality with style, creating a warm and inviting atmosphere.",
    },
    {
      id: 2,
      department: "Commercial Lighting",
      caption:
        "We provide tailored lighting solutions for businesses, including office buildings, retail spaces, and hospitality venues. Our commercial lighting products are designed to improve energy efficiency, reduce operational costs, and create environments that enhance employee productivity and customer experience.",
    },
    {
      id: 3,
      department: "Smart Lighting",
      caption:
        "Embrace the future with our smart lighting systems. Controlled via smartphone or voice command, these innovative products offer unparalleled convenience, energy savings, and customization. Adjust brightness, color, and schedules to suit your needs effortlessly.",
    },
    {
      id: 4,
      department: "Outdoor Lighting",
      caption:
        "Illuminate your exterior spaces with our durable and stylish outdoor lighting solutions. Whether it's for safety, security, or aesthetics, our range of products ensures that your outdoor areas are well-lit and inviting.",
    },
  ];
  return (
    <div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0">
          {profession.map((filds) => {
            return (
              <div class="flex flex-col p-6 mx-auto max-w-lg text-center hover:bg-tahiti-950  text-gray-900 hover:text-white bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                <div class="">
                  <Center>
                    <FaLightbulb className=" font-bold text-6xl mb-8 text-yellow-500" />
                  </Center>

                  <Title class="mb-4 text-1xl font-bold tracking-tight  dark:text-white">
                    {filds.department}
                  </Title>

                  <Text class="mb-3 font-normal  dark:text-gray-400">
                    {filds.caption}
                  </Text>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
