import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_babel = r'''              <Bar dataKey="consome" name="Consommé" radius={[4, 4, 0, 0]} />'''
new_babel = r'''              <Bar dataKey="consome" name="Consommé" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>'''

content = content.replace(old_babel, new_babel)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
