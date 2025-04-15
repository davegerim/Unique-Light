import { Tabs } from "@mantine/core";
import React from "react";
import UiProject from "./UiProject";
import GraphicsProject from "./Graphics";

function Projects() {
  return (
    <div>
      <Tabs
        color="rgba(191, 113, 11, 1)"
        defaultValue="UI Design"
        orientation="horizontal"
        className=" "
      >
        <Tabs.List className="space-x-4 lg:ml-20">
          <Tabs.Tab value="UI Design">UI Design</Tabs.Tab>
          <Tabs.Tab value="Graphics Design">Graphics Design</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="UI Design">
          <UiProject />
        </Tabs.Panel>
        <Tabs.Panel value="Graphics Design">
          <GraphicsProject />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Projects;
