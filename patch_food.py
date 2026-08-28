import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add waterGlasses to state
content = re.sub(
    r"dailyCalorieGoal: 2000,",
    r"dailyCalorieGoal: 2000,\n    waterGlasses: 0,",
    content
)

# Add addWater and removeWater functions
water_funcs = """
  addWater() {
    if (this.state.waterGlasses < 15) {
      this.state.waterGlasses++;
      this.saveState();
      this.renderHUD();
    }
  },
  
  removeWater() {
    if (this.state.waterGlasses > 0) {
      this.state.waterGlasses--;
      this.saveState();
      this.renderHUD();
    }
  },
"""
content = re.sub(
    r"(// ==========================================\n  // RENDER FOOD DATABASE CARDS)",
    water_funcs + r"\n  \1",
    content
)

# Render water tracker in HUDShell
water_html = """
        <!-- Water Hydration Tracker -->
        <div style="background: rgba(224, 242, 254, 0.5); border: 1px solid rgba(186, 230, 253, 0.8); border-radius: 16px; padding: 1.25rem; margin-bottom: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-droplet" style="color: #0284c7; font-size: 1.2rem;"></i>
              <span style="font-weight: 700; color: #0369a1; font-size: 0.95rem;">Hydratation (Verres d'eau)</span>
            </div>
            <span style="font-weight: 800; color: #0284c7; font-size: 1.1rem;"><span id="waterGlassCount">0</span> / 8</span>
          </div>
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
            <button onclick="DailyFoodLog.removeWater()" style="background: white; border: 1px solid #bae6fd; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0369a1; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.05);"><i class="fa-solid fa-minus"></i></button>
            <div id="waterGlassesContainer" style="display: flex; gap: 0.35rem; flex-wrap: wrap; flex: 1; justify-content: center; min-height: 24px;"></div>
            <button onclick="DailyFoodLog.addWater()" style="background: #0ea5e9; border: none; border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; color: white; font-weight: bold; box-shadow: 0 4px 10px rgba(14, 165, 233, 0.3);"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
"""

content = re.sub(
    r"(<!-- Meals Accordion Lists -->)",
    water_html + r"\n        \1",
    content
)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
