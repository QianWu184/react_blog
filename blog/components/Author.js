import React, { useState } from "react";
import {Icon, Avatar, Divider } from "antd";
import '../public/style/components/author.css';

const Author = () => {
  const [author, setAuthor] = useState({
    name: "WQ",
    place: '成都',
    markwords: `成长是一个变得不再<br/>随心所欲的过程`,
    imgUrl: "../img/author2.jpg",
    count: ["qq", "wechat", "github"]
  });
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
          author.count.map((item, index) => <Avatar size={28} key={index} icon={item} className="countItem"></Avatar>)
        }
      </div>
    </div>
  );
};

export default Author;
