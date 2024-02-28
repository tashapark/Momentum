const dDay = document.querySelector("h2#dDayEve");

function dDayEve() {
  const eve = new Date("2024-12-24");
  const today = new Date();
  const eveMinusToday = eve - today;

  const eveMinusTodayDay = String(
    Math.floor(eveMinusToday / (1000 * 60 * 60 * 24))
  ).padStart(2, "0");
  const eveMinusTodayHour = String(
    Math.floor((eveMinusToday / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const eveMinusTodayMin = String(
    Math.floor((eveMinusToday / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const eveMinusTodaySec = String(
    Math.floor((eveMinusToday / 1000) % 60)
  ).padStart(2, "0");

  dDay.innerText = `${eveMinusTodayDay}d ${eveMinusTodayHour}h ${eveMinusTodayMin}m ${eveMinusTodaySec}s`;
}

dDayEve();
setInterval(dDayEve, 1000);
