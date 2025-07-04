const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// 📅 Fecha del evento: 13 de julio 2025, 6:30 PM hora de México
const targetDate = new Date("2025-07-13T18:30:00-06:00");

function updateCountdown() {
  const now = new Date();
  let difference = targetDate - now;

  if (difference <= 0) {
    document.getElementById("countdown").style.display = "none";
    messageElement.textContent = "🎉 ¡Ya llegó el día!";
    clearInterval(interval);
    return;
  }

  // Total en segundos
  const totalSeconds = Math.floor(difference / 1000);

  // Cálculo exacto
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);

  // Cálculo aproximado de meses (1 mes = 30.44 días promedio)
  const months = Math.floor(totalDays / 30.44);
  const days = Math.floor(totalDays % 30.44);

  // Mostrar valores
  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
  console.log("esta entreanadk");
}

// ⏰ Ejecutar cada segundo
const interval = setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecutar de inmediato también