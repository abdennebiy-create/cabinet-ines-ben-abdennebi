import re

with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace this.renderHUD() with this.renderDailyLogHUD()
content = content.replace("this.renderHUD();", "this.renderDailyLogHUD();")

# Add water rendering logic in renderDailyLogHUD
water_render_code = """
    // Update water tracker
    const waterCountEl = document.getElementById('waterGlassCount');
    const waterContainerEl = document.getElementById('waterGlassesContainer');
    if (waterCountEl && waterContainerEl) {
      const glasses = this.state.waterGlasses || 0;
      waterCountEl.textContent = glasses;
      
      let glassesHtml = '';
      for (let i = 0; i < 8; i++) {
        if (i < glasses) {
          glassesHtml += `<i class="fa-solid fa-glass-water" style="color: #0ea5e9; font-size: 1.1rem; filter: drop-shadow(0 2px 4px rgba(14,165,233,0.3));"></i>`;
        } else {
          glassesHtml += `<i class="fa-solid fa-glass-water" style="color: rgba(186, 230, 253, 0.4); font-size: 1.1rem;"></i>`;
        }
      }
      
      // If more than 8 glasses
      if (glasses > 8) {
        glassesHtml += `<span style="color: #0ea5e9; font-weight: bold; font-size: 0.85rem; margin-left: 0.25rem;">+${glasses - 8}</span>`;
      }
      
      waterContainerEl.innerHTML = glassesHtml;
    }
"""

content = re.sub(
    r"(const totals = this\.getDailyTotals\(\);)",
    water_render_code + r"\n    \1",
    content
)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
