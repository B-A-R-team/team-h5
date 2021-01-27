const nodes = [
  { id: 0, name: 'vue', symbolSize: 40 },
  { id: 1, name: 'react', symbolSize: 40 },
  { id: 2, name: 'electron', symbolSize: 40 },
  { id: 3, name: 'nodejs', symbolSize: 40 },
  { id: 4, name: 'git', symbolSize: 40 },
  { id: 5, name: '微信小程序', symbolSize: 40 },
  { id: 6, name: 'javascript', symbolSize: 40 },
  { id: 7, name: 'h5', symbolSize: 40 },
  { id: 8, name: '.net', symbolSize: 40 },
  { id: 9, name: '技能', symbolSize: 50, x: 110, y: 120, fixed: true },
  { id: 10, name: '更多学习资料', symbolSize: 50 },
  { id: 11, name: '老师的引导', symbolSize: 50 },
  { id: 12, name: '团队知识分享', symbolSize: 50 },
  { id: 13, name: '资源', symbolSize: 50, x: 180, y: 180, fixed: true },
  { id: 14, name: '更好的学习环境', symbolSize: 50 },
  { id: 15, name: 'github', symbolSize: 40 },
  { id: 16, name: 'css', symbolSize: 40 },
  { id: 17, name: '其他', symbolSize: 40 },
];

const edges = [
  [9, 0],
  [9, 1],
  [9, 2],
  [9, 3],
  [9, 4],
  [9, 5],
  [9, 6],
  [9, 7],
  [9, 8],
  [13, 10],
  [13, 11],
  [13, 12],
  [13, 9],
  [13, 14],
  [9, 15],
  [9, 16],
  [9, 17],
];
// const C = (arr, size) => {
//   const result = []; //result

//   function _(t, a, n) {
//     //tempArr, arr, num
//     if (n === 0) {
//       result[result.length] = t;
//       return;
//     }
//     for (var i = 0, l = a.length - n; i <= l; i++) {
//       const b = t.slice();
//       b.push(a[i]);
//       _(b, a.slice(i + 1), n - 1);
//     }
//   }
//   _([], arr, size);
//   return result;
// };

// const generateEdge = (nodes) => {
//   const edge = nodes.map((item, index) => [
//     item.id,
//     nodes[index < nodes.length - 1 ? index + 1 : 0].id,
//   ]);
//   console.log(edge);
//   return edge;
// };

const formatEdgeData = (item) => ({ source: item[0], target: item[1] });
const formatEdges = (edges) => edges.map(formatEdgeData);

const option = {
  series: {
    type: 'graph',
    layout: 'force',
    force: {
      repulsion: 160,
      edgeLength: 50,
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
