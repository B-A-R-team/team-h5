const nodes = [
  { id: 0, name: '就业', symbolSize: 80 },
  { id: 1, name: '编码基本功', symbolSize: 100 },
  { id: 2, name: '项目实战', symbolSize: 100 },
  { id: 3, name: '知识分享', symbolSize: 100 },
  { id: 4, name: '学习氛围', symbolSize: 100 },
  { id: 5, name: '路线指引', symbolSize: 100 },
];

const edges = [
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [0, 5],
];

const formatEdgeData = (item) => ({ source: item[0], target: item[1] });
const formatEdges = (edges) => edges.map(formatEdgeData);

const option = {
  series: {
    type: 'graph',
    layout: 'force',
    force: {
      repulsion: 300,
      edgeLength: 100,
    },
    label: { show: true },
    data: nodes,
    edges: formatEdges(edges),
    itemStyle: {
      normal: {
        // 定制显示（按顺序）
        color: function (params) {
          var colorList = [
            '#C33531',
            '#EFE42A',
            '#64BD3D',
            '#EE9201',
            '#29AAE3',
            '#B74AE5',
            '#0AAF9F',
            '#E89589',
            '#16A085',
            '#fbb6ce',
            '#feb2b2',
            '#9ae6b4',
            '#b2f5ea',
            '#bee3f8',
            '#f56565',
            '#faf089',
            '#b2f5ea',
            '#c6f6d5',
          ];
          return colorList[params.dataIndex];
        },
      },
    },
  },
};

export default option;
