import React, { useState, useContext } from "react";
import { Tabs } from "antd";
import { DetailedContext } from "../Common/common";

const { TabPane } = Tabs;

const Skill = () => {
  const { spells } = useContext(DetailedContext);
  return (
    <Tabs defaultActiveKey="0">
      {
        spells.map((item, index) => {
          return (
            <TabPane tab={
              <span>
                <img src={item.abilityIconPath} style={{ width: 64 }} />
              </span>
            }
              key={index}>
              {item.description}
          </TabPane>
          )
        })
      }
    </Tabs>
  )
}

export default Skill