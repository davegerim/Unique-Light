import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { Menu, rem } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaListUl } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function Nav() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  function about() {
    navigate("/about");
  }
  function home() {
    navigate("/home");
  }
  function service() {
    navigate("/whatwedo");
  }

  function project() {
    navigate("/gallery");
  }
  function blog() {
    navigate("/blog");
  }
  function contactus() {
    navigate("/contact");
  }
  return (
    <div className="  flex justify-between">
      <div className="">
        <img src="./portfolio/logo1.png" className="h-32 " />
      </div>
      <div>
        <Menu
          shadow="md"
          width={200}
          transitionProps={{ transition: "rotate-left", duration: 500 }}
        >
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              aria-label="Toggle navigation"
            />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item
              onClick={home}
              leftSection={
                <IconHome style={{ width: rem(14), height: rem(14) }} />
              }
            >
              Home
            </Menu.Item>
            <Menu.Item
              onClick={about}
              leftSection={
                <CgProfile style={{ width: rem(14), height: rem(14) }} />
              }
            >
              About
            </Menu.Item>
            <Menu.Item
              leftSection={
                <FaListUl style={{ width: rem(14), height: rem(14) }} />
              }
              onClick={service}
            >
              Services
            </Menu.Item>

            <Menu.Item
              leftSection={
                <MdInsertPhoto style={{ width: rem(14), height: rem(14) }} />
              }
              onClick={project}
            >
              Gallery
            </Menu.Item>

            {/* <Menu.Item
              leftSection={
                <IconArrowsLeftRight
                  style={{ width: rem(14), height: rem(14) }}
                />
              }
              onClick={blog}
            >
              Blog
            </Menu.Item> */}
            <Menu.Item
              leftSection={
                <RiContactsFill style={{ width: rem(14), height: rem(14) }} />
              }
              onClick={contactus}
            >
              Contact
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;
