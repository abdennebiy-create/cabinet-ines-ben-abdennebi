import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    js = f.read()

# Fix openAddModal
pattern1 = re.compile(r'  openAddModal\(foodId\) \{.*?const isQuizComplete.*?\n\s*\}', re.DOTALL)
new1 = '''  openAddModal(foodId) {
    const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete && this.state.entries.length >= 6) {
      this.showSoftLock('limit');
      return;
    }'''

js = pattern1.sub(new1, js)

# Fix changeCalorieGoal
pattern2 = re.compile(r'  changeCalorieGoal\(\) \{.*?const isQuizComplete.*?\n\s*\}', re.DOTALL)
new2 = '''  changeCalorieGoal() {
    const isQuizComplete = window.AIEngine && window.AIEngine.state && window.AIEngine.state.isComplete;
    if (!isQuizComplete) {
      this.showSoftLock('goal');
      return;
    }'''

js = pattern2.sub(new2, js)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(js)
