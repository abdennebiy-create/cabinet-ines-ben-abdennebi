with open('assets/food-database.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Instead of complex regex, let's just make sure the block is exactly where we want it.
# First, remove ALL instances of the water tracking logic we added by accident.
import re
content = re.sub(r'// Update water tracker.*?waterContainerEl\.innerHTML = glassesHtml;\s+}', '', content, flags=re.DOTALL)

water_code = """
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
      
      if (glasses > 8) {
        glassesHtml += `<span style="color: #0ea5e9; font-weight: bold; font-size: 0.85rem; margin-left: 0.25rem;">+${glasses - 8}</span>`;
      }
      
      waterContainerEl.innerHTML = glassesHtml;
    }
"""

# Now insert it only into renderDailyLogHUD
parts = content.split("renderDailyLogHUD() {")
if len(parts) == 2:
    parts[1] = parts[1].replace("const totals = this.getDailyTotals();", water_code + "\n    const totals = this.getDailyTotals();", 1)
    content = "renderDailyLogHUD() {".join(parts)

with open('assets/food-database.js', 'w', encoding='utf-8') as f:
    f.write(content)
