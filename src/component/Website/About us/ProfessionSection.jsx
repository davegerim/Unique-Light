import { Button, Image, Modal, Table, Text, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload, IconEye } from "@tabler/icons-react";
import React from "react";

function ProfessionSection() {
  const [opened, { open, close }] = useDisclosure(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = imageName || "image"; // You can specify a default name if no name is provided
    link.click();
  };

  const imageUrl = "./david cv.jpg";
  const imageName = "Dawit Cv";
  const elements = [
    {
      name: "Dawit Mezgebu",
      email: "dawitmezgebu22@gmail.com",
      phone: "+251 943 18 45 06",
    },
  ];
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.email}</Table.Td>

      <Table.Td>{element.phone}</Table.Td>
      <Table.Td>
        <Button
          class="bg-yellow-700 text-white p-2 px-4 rounded-sm hover:shadow-lg mt-8"
          onClick={open}
          rightSection={<IconEye size={14} />}
        >
          Preview My Cv
        </Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <div className="flex justify-between space-x-8 px-8 ">
        <div className="">
          <Text class="mt-8 text-center">
            At Unique Light, we illuminate your world with unparalleled
            brilliance. We are a leading provider of innovative lighting
            solutions, committed to enhancing the way you experience light in
            both residential and commercial spaces. Our mission is to bring
            cutting-edge technology and sustainable practices together to create
            lighting that is not only beautiful but also efficient and
            eco-friendly.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default ProfessionSection;
