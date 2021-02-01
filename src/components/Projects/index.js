import React from 'react';
import './index.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/scrollbar/scrollbar.min.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const projectList = [
  {
    img: 'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/ehotel.png',
    label: '电竞酒店管理平台',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/examsys.png',
    label: '某警察学校考试系统',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/police.png',
    label: '某警察学校仓库管理系统',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/print.png',
    label: 'BEST打印机',
  },
  {
    img: 'https://cdn.jsdelivr.net/gh/Tuzilow/blog-image/img/bar-ui.png',
    label: 'BAR-UI组件库',
  },
];

export default function Projects() {
  return (
    <Swiper pagination={{ clickable: true }} autoplay={{ delay: 1500 }} loop>
      {projectList.map((item, index) => (
        <SwiperSlide
          className="rounded-sm shadow-md border bg-white text-black text-center"
          key={index}
        >
          <img
            style={{ height: 190 }}
            className=" rounded-sm"
            src={item.img}
            alt={item.label}
          />
          <p className="inline-block mt-1 mb-8">{item.label}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
