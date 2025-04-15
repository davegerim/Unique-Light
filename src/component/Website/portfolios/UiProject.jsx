import { Anchor, Button, Center, Pagination } from "@mantine/core";
import React from "react";

function UiProject() {
  const profession = [
    {
      id: 1,
      department: "/product/post 1.jpg",
    },
    {
      id: 2,
      department: "/product/post 2.jpg",
    },
    {
      id: 3,
      department: "/product/post 3.jpg",
    },
    {
      id: 4,
      department: "/product/post 4.jpg",
    },
    {
      id: 5,
      department: "/product/post 5.jpg",
    },
    {
      id: 6,
      department: "/product/post 6.jpg",
    },
    {
      id: 7,
      department: "/product/post 7.jpg",
    },
    {
      id: 8,
      department: "/product/post 8.jpg",
    },
    {
      id: 9,
      department: "/product/post 9.jpg",
    },
    {
      id: 10,
      department: "/product/post 10.jpg",
    },
    {
      id: 11,
      department: "/product/post 11.jpg",
    },
    {
      id: 12,
      department: "/product/post 12.jpg",
    },
    {
      id: 13,
      department: "/product/logo 2.jpg",
    },
  ];
  return (
    <div>
      <div class="py-8 px-2 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="space-y-8 lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-10 lg:space-y-0 mb-10">
          {profession.map((filds) => {
            return (
              <div class="flex flex-col  mx-auto max-w-lg text-center hover:bg-yellow-700  text-gray-900 hover:text-white bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-1 dark:bg-gray-800 dark:text-white">
                <div class="">
                  <img
                    src={filds.department}
                    alt="aby"
                    className="w-fit h-fit rounded-lg"
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Center>
          <Button color="rgba(209, 141, 6, 1)">
            <a href="https://t.me/uniquelightshop" target="_blank">
              See more
            </a>
          </Button>
          {/* <Pagination color="rgba(191, 113, 11, 1)" total={10} /> */}
        </Center>
      </div>
    </div>
  );
}

export default UiProject;
