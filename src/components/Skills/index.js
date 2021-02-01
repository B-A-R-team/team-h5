import { ReactComponent as Six } from '../../assets/image/six.svg';
import './index.css';

export default function Skills() {
  const skills = [
    { id: 0, name: 'vue', bgc: '#fc8181', bc: '#e53e3e' },
    { id: 1, name: 'react', bgc: '#f6ad55', bc: '#dd6b20' },
    { id: 2, name: 'electron', bgc: '#f687b3', bc: '#d53f8c' },
    { id: 3, name: 'nodejs', bgc: '#68d391', bc: '#38a169' },
    { id: 4, name: 'git', bgc: '#4fd1c5', bc: '#319795' },
    { id: 5, name: '微信小程序', bgc: '#63b3ed', bc: '#3182ce' },
    { id: 6, name: 'javascript', bgc: '#7f9cf5', bc: '#5a67d8' },
    { id: 7, name: 'h5', bgc: '#b794f4', bc: '#805ad5' },
    { id: 8, name: '.net', bgc: '#f687b3', bc: '#d53f8c' },
    { id: 9, name: 'github', bgc: '#68d391', bc: '#38a169' },
    { id: 10, name: 'css', bgc: '#fc8181', bc: '#e53e3e' },
  ];

  let col = 0;
  let layer = 0;
  return (
    <div className="six-wrapper">
      {skills.map((item, index) => {
        let left = 72 * col++;

        if (layer % 2 === 0) {
          if (left > 200) {
            layer++;
            col = 1;
            left = 0;
          }
        }

        if (layer % 2 !== 0) {
          left = left - 36;
          if (left > 250) {
            layer++;
            col = 0;
            left = 0;
          }
        }

        return (
          <div
            className="six px-4 fade-in"
            key={index}
            style={{ top: layer * 67, left, '--i': index }}
          >
            <Six fill={item.bgc ?? '#fc8181'} stroke={item.bc ?? '#e53e3e'} />
            <div className="item text-lg text-white">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
}
