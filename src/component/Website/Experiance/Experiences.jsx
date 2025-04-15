import { Badge, Center, Group, Text, Title } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { IconStack } from "@tabler/icons-react";

function Experiences() {
  const navigate = useNavigate();

  function experience() {
    navigate("/experiences");
  }
  function home() {
    navigate("/home");
  }
  const profession = [
    {
      id: 1,
      department: "Innovative Designs",
      caption:
        "We pride ourselves on staying ahead of the curve with the latest trends and technologies in lighting design. Our team of expert designers and engineers works tirelessly to create products that are not only functional but also visually stunning.",
    },
    {
      id: 2,
      department: "Sustainability",
      caption:
        "At Unique Light, we are dedicated to sustainability. Our products are designed with energy efficiency in mind, reducing environmental impact and helping you save on energy costs. We also prioritize using eco-friendly materials and manufacturing processes.",
    },
    {
      id: 3,
      department: "Quality Assurance",
      caption:
        "We are committed to providing our customers with the highest quality products. Each item undergoes rigorous testing to ensure it meets our stringent quality standards. When you choose Unique Light, you can trust that you are investing in durable and reliable lighting solutions.",
    },
    {
      id: 4,
      department: "Exceptional Customer Service",
      caption:
        "Our knowledgeable and friendly customer service team is always here to assist you. Whether you need help selecting the right product or require support with installation, we are dedicated to ensuring your complete satisfaction.",
    },
  ];
  return (
    <div>
      <div>
        <Center className="mt-4">
          <Title class="lg:text-5xl font-bold">Why Choose Us?</Title>
        </Center>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
            {profession.map((filds) => {
              return (
                <div class="flex flex-col  mx-auto max-w-lg text-center hover:shadow-xl   text-gray-900 hover:text-white bg-white hover:bg-tahiti-950 rounded-lg border border-gray-100 shadow xl:p-2">
                  <div class="p-6">
                    <Group justify="space-between" mt="md" mb="xl">
                      <Text class="font-bold">{filds.department} </Text>
                      <Badge color="#f8c200">
                        <IconStack />
                      </Badge>
                    </Group>

                    <Text class="mb-3 font-normal  ">{filds.caption}</Text>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
