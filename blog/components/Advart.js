import React, { useState } from 'react';
import '../public/style/components/advart.css'

const Advart = () => {
  const [cardlist, setCardlist] = useState([{
    id: 1,
    url: '../img/card1.jpg'
  },{
    id: 2,
    url: '../img/card2.jpg'
  },{
    id: 3,
    url: '../img/card3.jpg'
  },])
  return (
    <div className="advart">
      {
        cardlist.map(item => <img key={item.id} src={item.url} alt="" />)
      }
    </div>
  )
}

export default Advart