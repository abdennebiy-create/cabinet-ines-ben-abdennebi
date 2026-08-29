import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_end = r'''</body>
</html>'''

new_end = r'''  <script type="text/babel">
    const { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ReferenceLine, Cell, ResponsiveContainer, Tooltip } = window.Recharts;
    
    const MetabolicProgressChart = ({ totals, goals }) => {
      const data = [
        { name: 'Énergie', consome: totals.calories, cible: goals.kcal, fill: '#10b981' },
        { name: 'Prot.', consome: totals.proteins, cible: goals.prot, fill: '#c0392b' },
        { name: 'Gluc.', consome: totals.carbs, cible: goals.carb, fill: '#d35400' },
        { name: 'Lip.', consome: totals.fats, cible: goals.fat, fill: '#27ae60' }
      ];

      return (
        <div style={{ width: '100%', height: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: -20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{fill: '#7a5c64', fontSize: 12}} axisLine={false} tickLine={false} />
              <YAxis tick={{fill: '#7a5c64', fontSize: 12}} axisLine={false} tickLine={false} />
              <Tooltip 
                cursor={{fill: 'rgba(232, 198, 200, 0.2)'}}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
              />
              <Legend wrapperStyle={{ fontSize: '0.8rem', color: '#7a5c64' }} />
              <Bar dataKey="consome" name="Consommé" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
              <Bar dataKey="cible" name="Cible" fill="#e5e7eb" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    };

    window.updateMetabolicChart = (totals, goals) => {
      const container = document.getElementById('metabolicChartRoot');
      if (container) {
        container.style.display = 'block';
        if (!container._reactRoot) {
            container._reactRoot = ReactDOM.createRoot(container);
        }
        container._reactRoot.render(<MetabolicProgressChart totals={totals} goals={goals} />);
      }
    };
  </script>
</body>
</html>'''

content = content.replace(old_end, new_end)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
