import React from 'react';
import barUI from '../../assets/image/bar-ui.png';
import ehotel from '../../assets/image/ehotel.png';
import exam from '../../assets/image/examsys.png';
import police from '../../assets/image/police.png';
import print from '../../assets/image/print.png';
import signin from '../../assets/image/signin.png';
import './index.css';

const projectList = [
  {
    img: ehotel,
    label: '电竞酒店管理平台',
  },
  {
    img: signin,
    label: '校园卡打卡软件',
  },
  {
    img: exam,
    label: '某警察学校考试系统',
  },
  {
    img: police,
    label: '某警察学校仓库管理系统',
  },
  {
    img: print,
    label: 'BEST打印机',
  },
  {
    img: barUI,
    label: 'BAR-UI组件库',
  },
];

export default function Projects() {
  return (
    <div className="vh-70 flex flex-col flex-wrap text-xs items-center px-2">
      {projectList.map((item, index) => (
        <div
          className="w-46 mb-3 rounded-sm shadow-md bg-white text-black text-center project-item"
          key={index}
          style={{ '--i': index }}
        >
          <img className="w-full rounded-sm" src={item.img} alt={item.label} />
          <p className="inline-block mt-1">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
