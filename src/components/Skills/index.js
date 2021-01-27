import React, { useEffect } from 'react';
import { init } from 'echarts';
import option from './option';

export default function Skills() {
  const initChart = () => {
    const chart = init(document.getElementById('chart'));
    chart.setOption(option);
  };

  useEffect(() => {
    initChart();
  }, []);

  return <div className="bg-white rounded-lg" id="chart" style={{ width: 300, height: 300 }} />;
}
