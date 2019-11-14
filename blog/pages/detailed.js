import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { withRouter} from 'next/router'
import { Row, Col } from 'antd'
import Author from '../components/Author';
import Advart from '../components/Advart';
import Skill from '../components/Skill';
import Footer from '../components/Footer';
import DetailCard from '../components/DetailCard'
import axios from 'axios';
import { DetailedContext } from '../Common/common'

const Detailed = (data) => {

  return (
    <div>
      <Head>
        <title>Detailed</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={16}>
          <DetailedContext.Provider value={data}>
            <DetailCard></DetailCard>
            <Skill></Skill>
          </DetailedContext.Provider>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author></Author>
          <Advart></Advart>
        </Col>
      </Row>
      <Footer></Footer>
    </div>
  )
}
Detailed.getInitialProps = async (router) => {
  console.log(`已经收到的id是${router.query.heroId},但是我想临时随机用一个id`)
  const id = 1 + Math.floor(Math.random()*(146))
  const promise =new Promise((resolve)=>{
    axios(`https://game.gtimg.cn/images/lol/act/img/js/hero/${id}.js`).then(
              (res)=>{
                  console.log('远程数据结果：',res)
                  resolve(res.data)
              }
          )
  })
  return await promise
}
export default withRouter(Detailed)
