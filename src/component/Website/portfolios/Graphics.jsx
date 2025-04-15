import { Center, Pagination } from "@mantine/core";
import React from "react";

function GraphicsProject() {
  const profession = [
    {
      id: 1,
      department: "/portfolio/10.jpg",
    },
    {
      id: 2,
      department: "/portfolio/02.jpg",
    },
    {
      id: 3,
      department: "/portfolio/18.jpg",
    },
    {
      id: 4,
      department: "/portfolio/11.jpg",
    },
    {
      id: 5,
      department: "/portfolio/22.jpg",
    },

    {
      id: 7,
      department: "/portfolio/005.jpg",
    },
    {
      id: 8,
      department: "/portfolio/20.jpg",
    },
    {
      id: 9,
      department: "/portfolio/2.jpg",
    },
    {
      id: 10,
      department: "/portfolio/18w.jpg",
    },
    {
      id: 11,
      department: "/portfolio/givaway 2.jpg",
    },
    {
      id: 12,
      department: "/portfolio/ghf.jpg",
    },
    {
      id: 13,
      department: "/portfolio/jhg.jpg",
    },
    {
      id: 14,
      department: "/portfolio/1s.png",
    },
    {
      id: 15,
      department: "/portfolio/afro.jpg",
    },
    {
      id: 16,
      department: "/portfolio/Untitled-17.png",
    },
    {
      id: 17,
      department: "/portfolio/3s.jpg",
    },
  ];
  return (
    <div>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0 mb-10">
          {profession.map((filds) => {
            return (
              <div class="flex flex-col  mx-auto max-w-lg text-center hover:bg-yellow-700  text-gray-900 hover:text-white bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-1 dark:bg-gray-800 dark:text-white">
                <div class="">
                  <img
                    src={filds.department}
                    alt="aby"
                    className="w-fit h-fit rounded-lg  "
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Center>
          <Pagination color="rgba(191, 113, 11, 1)" total={10} />
        </Center>
      </div>
    </div>
  );
}

export default GraphicsProject;
