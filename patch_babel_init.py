import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_code = r'''        container._reactRoot.render(<MetabolicProgressChart totals={totals} goals={goals} />);
      }
    };
  </script>
</body>'''

new_code = r'''        container._reactRoot.render(<MetabolicProgressChart totals={totals} goals={goals} />);
      }
    };
    
    // Assure that the chart renders on initial load after Babel compilation
    if (window.DailyFoodLog && typeof window.DailyFoodLog.syncMetabolicGoalsCard === 'function') {
        window.DailyFoodLog.syncMetabolicGoalsCard();
    }
  </script>
</body>'''

content = content.replace(old_code, new_code)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
