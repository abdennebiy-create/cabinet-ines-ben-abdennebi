const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add CDNs in <head>
const headTags = `
  <!-- React & Recharts for IMC Visualization -->
  <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
  <script src="https://unpkg.com/recharts/umd/Recharts.min.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>`;
html = html.replace('</head>', headTags);

// 2. Add Babel script before </body>
const babelScript = `
  <script type="text/babel">
    const { PieChart, Pie, Cell, ResponsiveContainer } = window.Recharts;

    const IMCGauge = ({ imc }) => {
      const RADIAN = Math.PI / 180;
      const data = [
        { name: 'Maigreur', value: 8.5, color: '#3498db' },
        { name: 'Normal', value: 6.5, color: '#2ecc71' },
        { name: 'Surpoids', value: 5, color: '#f1c40f' },
        { name: 'Obésité', value: 10, color: '#e74c3c' }
      ];
      const cx = 130;
      const cy = 110;
      const iR = 60;
      const oR = 100;

      const clampedImc = Math.max(10, Math.min(40, imc));
      const percentage = (clampedImc - 10) / 30;
      const angle = 180 - (percentage * 180);

      const length = (iR + oR) / 2;
      const sin = Math.sin(-RADIAN * angle);
      const cos = Math.cos(-RADIAN * angle);
      const r = 5;
      const x0 = cx;
      const y0 = cy;
      const xba = x0 + r * sin;
      const yba = y0 - r * cos;
      const xbb = x0 - r * sin;
      const ybb = y0 + r * cos;
      const xp = x0 + length * cos;
      const yp = y0 + length * sin;

      const needle = [
        <circle cx={x0} cy={y0} r={r} fill="#4A7C59" stroke="none" key="circle"/>,
        <path d={\`M\${xba} \${yba}L\${xbb} \${ybb} L\${xp} \${yp} L\${xba} \${yba}\`} stroke="none" fill="#4A7C59" key="path"/>
      ];

      return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
          <div style={{ width: 260, height: 120 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data}
                  cx={cx}
                  cy={cy}
                  innerRadius={iR}
                  outerRadius={oR}
                  stroke="none"
                  isAnimationActive={true}
                >
                  {data.map((entry, index) => (
                    <Cell key={\`cell-\${index}\`} fill={entry.color} />
                  ))}
                </Pie>
                {needle}
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div style={{ marginTop: -10, fontWeight: 'bold', color: '#4A7C59', fontSize: '15px' }}>
            IMC : {imc}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '220px', fontSize: '10px', color: '#666', marginTop: '5px' }}>
            <span style={{color: '#3498db'}}>Maigreur</span>
            <span style={{color: '#2ecc71'}}>Normal</span>
            <span style={{color: '#f1c40f'}}>Surpoids</span>
            <span style={{color: '#e74c3c'}}>Obésité</span>
          </div>
        </div>
      );
    };

    window.renderIMCGauge = (containerId, imcValue) => {
      const container = document.getElementById(containerId);
      if (container) {
        const root = ReactDOM.createRoot(container);
        root.render(<IMCGauge imc={parseFloat(imcValue)} />);
      }
    };
  </script>
</body>`;
html = html.replace('</body>', babelScript);

// 3. Update the sendAiChatMessage block
const replaceBlock = `
          const modelDiv = document.createElement('div');
          modelDiv.className = "message bot-message";
          let formattedReply = data.reply.replace(/\\n/g, '<br>').replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
          modelDiv.innerHTML = formattedReply;
          messagesContainer.appendChild(modelDiv);
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
`;

const withIMCLogic = `
          const modelDiv = document.createElement('div');
          modelDiv.className = "message bot-message";
          let formattedReply = data.reply.replace(/\\n/g, '<br>').replace(/\\*\\*(.*?)\\*\\*/g, '<strong>$1</strong>');
          
          const imcMatch = formattedReply.match(/\\[IMC_RESULT:\\s*([0-9.,]+)\\]/i);
          let imcValue = null;
          if (imcMatch) {
             imcValue = imcMatch[1].replace(',', '.');
             formattedReply = formattedReply.replace(imcMatch[0], '');
          }
          
          modelDiv.innerHTML = formattedReply;
          messagesContainer.appendChild(modelDiv);
          
          if (imcValue) {
             const chartContainer = document.createElement('div');
             const chartId = 'imc-chart-' + Date.now();
             chartContainer.id = chartId;
             chartContainer.style.marginTop = '10px';
             modelDiv.appendChild(chartContainer);
             if (window.renderIMCGauge) {
                window.renderIMCGauge(chartId, imcValue);
             }
          }
          
          messagesContainer.scrollTop = messagesContainer.scrollHeight;
`;
html = html.replace(replaceBlock, withIMCLogic);

fs.writeFileSync('index.html', html);
