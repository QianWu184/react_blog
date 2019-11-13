import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Author from '../components/Author';
import Advart from '../components/Advart';
import { Row, Col, List, Icon, Avatar } from "antd";
import "../public/style/pages/index.css";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Home = () => {
  const [mylist, setMylist] = useState([
    {
      title: "涤魂圣枪-赛娜",
      imgUrl: `../img/hero.png`,
      description: `我故乡的岛上有一种说法。“狂风为了说话，盗走人的呼吸。”你想让我描述我带着罩帽、背着圣物火炮，刚到这座艾欧尼亚村庄时迎来的黑雾？`,
      context: `赛娜的光明哨兵之路是从黑暗开始的。一切要从黑雾说起……

      赛娜在很小的时候就首次遭遇了黑雾。当远处的蚀魂夜造成的船只残骸飘到她故乡的海滩，残骸中的黑雾便在生命的接触下觉醒。她和她的村庄在随后的灵魂风暴中幸存了下来，全靠当时身在附近的一位哨兵……然而在袭击过后，黑雾就不知为何始终追随着赛娜。
      
      她受到了诅咒，黑雾留下的印记让那恐怖之物无休无止地追赶她，黑暗就像将死的飞蛾扑向生命之火一样向她靠近。她永远都不知道下一次袭击是什么时候——最可怕的是等待袭击的时候，她无时无刻不在担心每个角落的阴影。
        `
    },
    {
      title: "涤魂圣枪-赛娜",
      imgUrl: `../img/hero2.png`,
      description: `我故乡的岛上有一种说法。“狂风为了说话，盗走人的呼吸。”你想让我描述我带着罩帽、背着圣物火炮，刚到这座艾欧尼亚村庄时迎来的黑雾？`,
      context: `赛娜的光明哨兵之路是从黑暗开始的。一切要从黑雾说起……

      赛娜在很小的时候就首次遭遇了黑雾。当远处的蚀魂夜造成的船只残骸飘到她故乡的海滩，残骸中的黑雾便在生命的接触下觉醒。她和她的村庄在随后的灵魂风暴中幸存了下来，全靠当时身在附近的一位哨兵……然而在袭击过后，黑雾就不知为何始终追随着赛娜。
      
      她受到了诅咒，黑雾留下的印记让那恐怖之物无休无止地追赶她，黑暗就像将死的飞蛾扑向生命之火一样向她靠近。她永远都不知道下一次袭击是什么时候——最可怕的是等待袭击的时候，她无时无刻不在担心每个角落的阴影。
        `
    },
    {
      title: "圣枪游侠-赛娜",
      imgUrl: `../img/hero.png`,
      description: `我故乡的岛上有一种说法。“狂风为了说话，盗走人的呼吸。”你想让我描述我带着罩帽、背着圣物火炮，刚到这座艾欧尼亚村庄时迎来的黑雾？`,
      context: `赛娜的光明哨兵之路是从黑暗开始的。一切要从黑雾说起……

      赛娜在很小的时候就首次遭遇了黑雾。当远处的蚀魂夜造成的船只残骸飘到她故乡的海滩，残骸中的黑雾便在生命的接触下觉醒。她和她的村庄在随后的灵魂风暴中幸存了下来，全靠当时身在附近的一位哨兵……然而在袭击过后，黑雾就不知为何始终追随着赛娜。
      
      她受到了诅咒，黑雾留下的印记让那恐怖之物无休无止地追赶她，黑暗就像将死的飞蛾扑向生命之火一样向她靠近。她永远都不知道下一次袭击是什么时候——最可怕的是等待袭击的时候，她无时无刻不在担心每个角落的阴影。
        `
    },
    {
      title: "涤魂圣枪-赛娜",
      imgUrl: `../img/hero2.png`,
      description: `我故乡的岛上有一种说法。“狂风为了说话，盗走人的呼吸。”你想让我描述我带着罩帽、背着圣物火炮，刚到这座艾欧尼亚村庄时迎来的黑雾？`,
      context: `赛娜的光明哨兵之路是从黑暗开始的。一切要从黑雾说起……

      赛娜在很小的时候就首次遭遇了黑雾。当远处的蚀魂夜造成的船只残骸飘到她故乡的海滩，残骸中的黑雾便在生命的接触下觉醒。她和她的村庄在随后的灵魂风暴中幸存了下来，全靠当时身在附近的一位哨兵……然而在袭击过后，黑雾就不知为何始终追随着赛娜。
      
      她受到了诅咒，黑雾留下的印记让那恐怖之物无休无止地追赶她，黑暗就像将死的飞蛾扑向生命之火一样向她靠近。她永远都不知道下一次袭击是什么时候——最可怕的是等待袭击的时候，她无时无刻不在担心每个角落的阴影。
        `,
    }
  ]);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={16}>
          <List
            header={<div className="list-news">新英雄登场</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item
                actions={[
                  <IconText
                    type="star-o"
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    type="like-o"
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    type="message"
                    text="2"
                    key="list-vertical-message"
                  />
                ]}
                extra={
                  <img
                    height={300}
                    alt="logo"
                    src={item.imgUrl}
                  />
                }
              >
                <List.Item.Meta
                  avatar={
                    <Avatar src="../img/user.jpg" />
                  }
                  title={
                    <a className="list-title" href="/">
                      {item.title}
                    </a>
                  }
                  description={item.description}
                />
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advart></Advart>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
