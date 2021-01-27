import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Item from '../Item';
import logo from '../../assets/image/teamlogo.jpg';
import qrcode from '../../assets/image/qrcode.png';
import Skills from '../Skills';
import './index.css';
import Projects from '../Projects';
import { Chrono } from 'react-chrono';
import D from '../../assets/image/dongge.png';

export default function FullPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {},
    {
      title: '14级',
      cardTitle: '队长',
      cardSubtitle: '马治华',
    },
    {
      title: '16级',
      cardTitle: '队长',
      cardSubtitle: '李瑞森',
    },
    {
      title: '17级',
      cardTitle: '队长',
      cardSubtitle: '安鸿飞',
    },
    {
      title: '18级',
      cardTitle: '队长',
      cardSubtitle: '徐梦宇',
    },
  ];

  return (
    <ReactFullpage
      scrollingSpeed={600}
      afterLoad={(_o, d) => setActiveIndex(d.index)}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <Item
              fullpageApi={fullpageApi}
              bgc="bg-blue-400"
              isBetween
              isActive={activeIndex === 0}
            >
              <div className="flex flex-col items-center mb-6 font-xyb">
                <p className="text-6xl">
                  <span className="swift-wrapper" style={{ '--i': 0 }}>
                    <i className="swift-item" style={{ '--i': 0 }}>
                      BAR
                    </i>
                  </span>
                  <span className="swift-wrapper" style={{ '--i': 1 }}>
                    <i className="swift-item" style={{ '--i': 1 }}>
                      团队
                    </i>
                  </span>
                </p>
                <p className="text-6xl swift-wrapper" style={{ '--i': 2 }}>
                  <i className="swift-item" style={{ '--i': 3 }}>
                    纳新
                  </i>
                </p>
              </div>
              <img
                className="w-32 rounded shadow-lg fade-item"
                style={{ '--i': 1 }}
                src={logo}
                alt="logo"
              />
              <div
                className="flex flex-col items-center mt-4 mb-8 font-ali text-xl fade-item"
                style={{ '--i': 2 }}
              >
                <p>BREAKING</p>
                <p>ALL</p>
                <p>RESTRICTION</p>
              </div>
              <img
                className="w-24 rounded shadow-lg mb-12 fade-item"
                style={{ '--i': 3 }}
                src={qrcode}
                alt="二维码"
              />
            </Item>
            <Item
              fullpageApi={fullpageApi}
              isActive={activeIndex === 1}
              bgc="bg-purple-400"
              title="发展历程"
            >
              <div
                className="fade-item-d"
                style={{
                  width: '100%',
                  height: '85%',
                }}
              >
                <Chrono
                  items={items}
                  hideControls
                  slideShow
                  mode="VERTICAL_ALTERNATING"
                >
                  <div>
                    <span className="text-black font-bold">
                      指导老师 - 李东琦
                    </span>
                    <img
                      style={{ width: 110, height: 80 }}
                      src={D}
                      alt="李东琦"
                    />
                  </div>
                </Chrono>
              </div>
            </Item>
            <Item
              fullpageApi={fullpageApi}
              isActive={activeIndex === 2}
              bgc="bg-teal-400"
              title="团队作品"
            >
              <Projects />
              <div className="w-10 h-20"></div>
            </Item>
            <Item
              fullpageApi={fullpageApi}
              isActive={activeIndex === 3}
              bgc="bg-pink-400"
              title={
                <>
                  加入我们
                  <br />
                  你可以得到什么
                </>
              }
              isLast
            >
              <span className="fade-item-l">
                <Skills />
              </span>

              <div className="w-full flex items-center justify-center mt-14 font-xyb fade-item-d">
                <span className="flex items-center">
                  <img
                    className="w-20 rounded shadow"
                    src={qrcode}
                    alt="二维码"
                  />
                  <div className="ml-5">
                    <p>扫描二维码</p>
                    <p>即刻加入纳新群</p>
                  </div>
                </span>
              </div>
            </Item>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}
