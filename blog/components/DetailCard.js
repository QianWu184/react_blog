import React, { useContext } from "react";
import { Progress } from "antd";
import { DetailedContext } from "../Common/common";

import "../public/style/components/detailcard.css";

const DetailCard = () => {
  const data = useContext(DetailedContext);
  return (
    <div className="detail-card">
      <img src={data.skins[0].mainImg} alt=""></img>
      <div className="detail-card-left">
        <h1>{data.hero.name}</h1>
        <p>{data.hero.title}</p>
        <ul className="strong-list">
          <li>
            <span>物理攻击：</span>
            <Progress
              percent={((data.hero.attack * 1) / 10) * 100}
              className="strong-line"
              strokeColor="#FF4500"
              showInfo={false}
            />
          </li>
          <li>
            <span>魔法攻击：</span>
            <Progress
              percent={((data.hero.magic * 1) / 10) * 100}
              className="strong-line"
              showInfo={false}
            />
          </li>
          <li>
            <span>防御能力：</span>
            <Progress
              percent={((data.hero.difficulty * 1) / 10) * 100}
              strokeColor="#FF8C00"
              className="strong-line"
              showInfo={false}
            />
          </li>
          <li>
            <span>上手难度：</span>
            <Progress
              percent={((data.hero.defense * 1) / 10) * 100}
              className="strong-line"
              strokeColor="#006400"
              showInfo={false}
            />
          </li>
        </ul>
      </div>
      <div className="detail-card-bottom">
      
      </div>
    </div>
  );
};
export default DetailCard;
