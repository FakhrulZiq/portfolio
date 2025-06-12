function calculateDuration() {
  const startDate = new Date("2024-02-01"); // February 1, 2024
  const currentDate = new Date();

  // Calculate full years difference
  let years = currentDate.getFullYear() - startDate.getFullYear();

  // Calculate months difference
  let months = currentDate.getMonth() - startDate.getMonth();

  // If current month is before start month, adjust years and months
  if (months < 0) {
    years--;
    months += 12;
  }

  // If current day is before start day, count it as incomplete month
  if (currentDate.getDate() < startDate.getDate()) {
    months--;
    // If months goes negative after this adjustment
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  // Include the starting month (February) by adding 1 to months
  months += 1;

  // If months reaches 12, convert to year
  if (months >= 12) {
    years += Math.floor(months / 12);
    months = months % 12;
  }

  // Format the duration string
  let durationStr = `${years} yr`;
  if (months > 0) {
    durationStr += ` ${months} mos`;
  }

  // Update the display
  document.getElementById(
    "duration-display"
  ).textContent = `Feb 2024 - Present · ${durationStr}`;
}

// Run on page load
window.addEventListener("DOMContentLoaded", calculateDuration);
