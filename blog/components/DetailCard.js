import React, { useState, useContext } from "react";
import { Progress, Tag } from "antd";
import { DetailedContext } from "../Common/common";

import "../public/style/components/detailcard.css";

const tags = {
  marksman: "射手",
  mage: "法师",
  fighter: "战士",
  tank: "坦克",
  assassin: "刺客",
  support: "辅助"
}

const DetailCard = () => {
  const { hero, skins } = useContext(DetailedContext);
  const [choose, setChoose] = useState(0)
  return (
    <div className="detail-card">
      <img src={skins[choose].mainImg} alt=""></img>
      <div className="detail-card-left">
        <h1>{hero.name}</h1>
        <p>{hero.title}</p>
        <div className="tags">
          {
            hero.roles.map((item, index) => {
              if (tags[item]) {
                return (
                  <Tag key={index} color="#87d068">{tags[item]}</Tag>
                )
              }
            })
          }
        </div>
        <ul className="strong-list">
          <li>
            <span>物理攻击：</span>
            <Progress
              percent={((hero.attack * 1) / 10) * 100}
              className="strong-line"
              strokeColor="#FF4500"
              showInfo={false}
            />
          </li>
          <li>
            <span>魔法攻击：</span>
            <Progress
              percent={((hero.magic * 1) / 10) * 100}
              className="strong-line"
              showInfo={false}
            />
          </li>
          <li>
            <span>防御能力：</span>
            <Progress
              percent={((hero.difficulty * 1) / 10) * 100}
              strokeColor="#FF8C00"
              className="strong-line"
              showInfo={false}
            />
          </li>
          <li>
            <span>上手难度：</span>
            <Progress
              percent={((hero.defense * 1) / 10) * 100}
              className="strong-line"
              strokeColor="#006400"
              showInfo={false}
            />
          </li>
        </ul>
        <div className="logo">
          <img src="https://game.gtimg.cn/images/lol/v3/logo-public.png" />
        </div>
      </div>
      <div className="detail-card-bottom">
        {
          skins.map((item, index) => {
            if (item.iconImg) {
              return (
                <div className={["hero-skin", choose === index ? "active" : null].join(' ')} key={index} onClick={() => { setChoose(index) }}>
                  <img src={item.iconImg} />
                </div>
              )
            }
          })
        }
      </div>
    </div>
  );
};
export default DetailCard;
