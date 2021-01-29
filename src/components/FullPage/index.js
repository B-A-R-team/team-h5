import React, { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Item from '../Item';
import logo from '../../assets/image/teamlogo.jpg';
import codeIcon from '../../assets/image/code.webp';
import city from '../../assets/image/city.png';
import qrcode from '../../assets/image/qrcode.png';
import coding from '../../assets/image/coding.jpg';
import Skills from '../Skills';
import './index.css';
import Projects from '../Projects';
import teamactive from '../../assets/image/teamactive.jpg';

export default function FullPage() {
  const [activeIndex, setActiveIndex] = useState(0);

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
              style={{ background: `url(${city}) bottom no-repeat #41b4e0` }}
            >
              <img
                className="w-32 rounded shadow-lg scale-in mt-6"
                src={logo}
                alt="logo"
              />
              <div className="flex flex-col items-center mb-6 font-xyb text-white">
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

              <div
                className="flex items-center mt-4 mb-8 font-ali text-normal fade-item text-white"
                style={{ '--i': 2 }}
              >
                <span>团队协作</span>
                <span className="mx-2 text-sm">|</span>
                <span>技术提升</span>
                <span className="mx-2 text-sm">|</span>
                <span>开源共享</span>
              </div>

              <div
                className="p-2 rounded flex items-center justify-center mb-14 font-xyb fade-item-l bg-black bg-opacity-50 text-white"
                style={{ '--i': 3 }}
              >
                <span className="flex items-center">
                  <img
                    className="w-20 rounded shadow"
                    src={qrcode}
                    alt="二维码"
                  />
                  <div className="ml-2">
                    <p>快来加入我们吧</p>
                  </div>
                </span>
              </div>
            </Item>
            <Item
              fullpageApi={fullpageApi}
              isActive={activeIndex === 1}
              // bgc="bg-purple-400"
              bgc="bg-white"
              title="关于我们"
              image={{
                src: teamactive,
                alt: '团队',
              }}
            >
              <div className="fade-item-d mx-4 font-light border-2 border-dashed p-4 rounded-lg border-gray-300">
                <p className="mb-4 swift-wrapper">
                  <i className="swift-item" style={{ '--i': 2 }}>
                    BAR团队，由软件学院.net方向和前端方向负责人李东琦老师于2016年创建。
                  </i>
                </p>
                <p className="mb-4 swift-wrapper">
                  <i className="swift-item" style={{ '--i': 4 }}>
                    BAR为Breaking All
                    Restriction的简写，中文译为“打破所有的限制”，这既是我们团队的名称，也是我们团队的主导思想。
                  </i>
                </p>
                <p className="swift-wrapper">
                  <i className="swift-item" style={{ '--i': 6 }}>
                    团队的主要目标是帮助同学们更好的学习，能够提供
                    给同学们更多的学习资源，让同学们学到在平时课堂上学不到的东西，也可以提高学生的动手操作能力，获得更多的实战经验，能够
                    为以后的学习，工作打下良好的基础。
                  </i>
                </p>
              </div>
            </Item>
            <Item
              fullpageApi={fullpageApi}
              isActive={activeIndex === 2}
              // bgc="bg-teal-400"
              bgc="bg-white"
              title="团队作品"
              image={{
                src: codeIcon,
                alt: '图标',
              }}
            >
              <Projects />
              {/* <div className="w-10 h-20"></div> */}
            </Item>
            <Item
              fullpageApi={fullpageApi}
              isActive={activeIndex === 3}
              image={{
                src: coding,
                alt: 'coding',
              }}
              bgc="bg-white"
              title="加入我们，你能得到什么"
              isLast
            >
              <span className="inline-block fade-item-l shadow-md rounded-lg" style={{ '--i': 1 }}>
                <Skills />
              </span>

              <div className="flex items-center justify-center font-xyb fade-item-d rounded shadow py-2 mx-8 mt-4 bg-black bg-opacity-25 text-white">
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
