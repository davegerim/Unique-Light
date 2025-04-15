import React from "react";
import "../blog/slide.style.css";
import { Center, Title } from "@mantine/core";

function Clients() {
  const profession = [
    {
      id: 1,
      imgurl: "/portfolio/a118.png",
      department: "Africa 118 inc",
      caption: "2020 - 2022",
    },
    {
      id: 2,
      imgurl: "/portfolio/moenco.jpg",
      department: "Moenco",
      caption: "2020 - 2022",
    },
    {
      id: 3,
      imgurl: "/portfolio/18.jpg",
      department: "Maki Interior Design",
      caption: "2020 - 2022",
    },
    {
      id: 4,
      imgurl: "/portfolio/18.jpg",
      department: "Babylo",
      caption: "2020 - 2022",
    },
    {
      id: 5,
      imgurl: "/portfolio/18.jpg",
      department: "Dof Digital Agency",
      caption: "2022 - 2022",
    },
    {
      id: 6,
      imgurl: "/portfolio/18.jpg",
      department: "Pack Addis",
      caption: "2020 - 2022",
    },
    {
      id: 6,
      imgurl: "/portfolio/18.jpg",
      department: "Herani Tech",
      caption: "2022 - now",
    },
  ];
  return (
    <div>
      <Center className="mt-4 flex flex-col">
        <Title class="lg:text-4xl text-yellow-600 font-bold">Our Client</Title>
      </Center>
      <section class="carousel">
        <div class="carousel__container">
          {profession.map((filds) => {
            return (
              <div class="carousel-item">
                <Title class="carousel-item__img lg:text-4xl text-center flex bg-tahiti-950 items-center text-yellow-600 font-bold">
                  {filds.department}
                </Title>
                <div class="carousel-item__details">
                  <div class="controls">
                    <span class="fas fa-play-circle"></span>
                    <span class="fas fa-plus-circle"></span>
                  </div>
                  <h5 class="carousel-item__details--title lg:text-2xl">
                    {filds.department}
                  </h5>
                  <h6 class="carousel-item__details--subtitle">
                    {filds.caption}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Clients;
