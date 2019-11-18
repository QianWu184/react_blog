import React, { useState } from "react";
import {Popover, Avatar, Divider } from "antd";
import '../public/style/components/author.css';

const Author = () => {
  const [author, setAuthor] = useState({
    name: "WQ",
    place: '成都',
    markwords: `成长是一个变得不再<br/>随心所欲的过程`,
    imgUrl: "../img/author2.jpg",
    count: [{ type: "qq", number: '532140450' }, { type: "wechat", number: "wq532140450" }, {type:"github", number: 'https://github.com/QianWu184' }]
  });
  //<Popover content={content} title="Title">
  return (
    <div className="author">
      <div>
        <Avatar size={100}  src={author.imgUrl}></Avatar>
      </div>
      <div className="author-introduction">
        <div className="author-msg">
          {author.name}-{author.place}
          <div className="author-markwords" dangerouslySetInnerHTML={{__html: author.markwords}}>
          </div>
        </div>
        <Divider>社交账号</Divider>
        {
          author.count.map((item, index) => <Popover content={item.number} key={index}><Avatar size={28} key={index} icon={item.type} className="countItem"></Avatar></Popover>)
        }
      </div>
    </div>
  );
};

export default Author;
