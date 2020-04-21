const $newScheduleBtn = document.querySelector('.new-schedule-btn');
<<<<<<< HEAD
// const $newSchedulePopUp = document.querySelector('.new-schedule-popup');

const $monthSelect = document.querySelector('.month-select');
const $option = document.createElement('option');
=======
const $newTravelBtn = document.querySelector('.new-travel-btn');
const $newInfoBtn = document.querySelector('.new-info-btn');
>>>>>>> e734d77433eef16072120924f4b8cfd352b073a7

const $monthSelects = document.querySelectorAll('.month-select');

<<<<<<< HEAD
function printMonth() {
  const month = Array.from({ length: 13 }, function (v, i) { return i; });
  month.splice(0, 1);
  console.log(month);
  month.forEach(monthItem => {
    $monthSelect.appendChild($option);
    $option.setAttribute('value', monthItem);
    $option.textContent = monthItem;
  });
}


$newScheduleBtn.addEventListener('click', printMonth);
=======
const $newTravelPopup = document.querySelector('.new-travel-popup');
const $newSchedulePopup = document.querySelector('.new-schedule-popup');
const $newInfoPopup = document.querySelector('.new-travel-popup');

// const $dateSelect = document.querySelector('.date-select');
const $hourSelects = document.querySelectorAll('.hour-select');
const $minuteSelects = document.querySelectorAll('.min-select');

function printMonthTime() {
  let month = Array.from({ length: 13 }, function (v, i) { return i; });
  month.splice(0, 1);
  month = ['MONTH', ...month];
  $monthSelects.forEach(monthSelect => {
    month.forEach((element, key) => {
      monthSelect[key] = new Option(element, key, true);
    });
  });

  let hour = Array.from({ length: 25 }, function (v, i) { return i; });
  hour.splice(0, 1);
  hour = ['HOUR', ...hour];
  $hourSelects.forEach(hourSelect => {
    hour.forEach((element, key) => {
      hourSelect[key] = new Option(element, key, true);
    });
  });

  let minute = Array.from({ length: 7 }, function (v, i) { return i * 10; });
  minute.splice(0, 1);
  minute = ['MIN', ...minute];
  $minuteSelects.forEach(minuteSelect => {
    minute.forEach((element, key) => {
      minuteSelect[key] = new Option(element, key * 10, true);
    });
  });
}

function printDate({ target }) {
  if (!target.matches('.month-select')) return;
  let date = 0;
  const monthDate = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  date = monthDate[target.value - 1];
  let date2 = Array.from({ length: date + 1 }, function (v, i) { return i; });
  date2.splice(0, 1);
  date2 = ['DATE', ...date2];
  date2.forEach((element, key) => {
    target.nextElementSibling[key] = new Option(element, key, true);
  });
}

$newTravelBtn.addEventListener('click', printMonthTime);
$newScheduleBtn.addEventListener('click', printMonthTime);
$newInfoBtn.addEventListener('click', printMonthTime);

$newTravelPopup.addEventListener('change', printDate);
$newSchedulePopup.addEventListener('change', printDate);
$newInfoPopup.addEventListener('change', printDate);
>>>>>>> e734d77433eef16072120924f4b8cfd352b073a7
