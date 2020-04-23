let airlines = [];
let lodgings = [];

//DOM
const $airlineTicket = document.querySelector('.airline-ticket');
const $airlineSchedule = document.querySelector('.airline-schedule');
const $airlineScheduleDetail = document.querySelector('.airline-schedule-detail');
const $airlineScheduleList = document.querySelector('.airline-schedule');
const $lodgingScheduleList = document.querySelector('.lodging-schedule');
const $allBtn = document.querySelector('.airline');
const $airlinePopupBg = document.querySelector('.airlineBg');
const $hotelPopup = document.querySelector('.new-info-popup2');
const $airlinePopup = document.querySelector('.new-info-popup');
const $airlineAddBtn = document.querySelector('.airlineAddBtn');
const $airlinePopupRemove = document.querySelector('.airlineRemoveBtn');
const $airlineMonthSelect = document.querySelector('#airline-month-select');
const $allMoreBtn = document.querySelector('.detail-btn-wrapper');
const $hotelBtn = document.querySelector('.hotel-btn');
const $airlineBtn = document.querySelector('.airline-btn');
const $hotelPopupRemove = document.querySelector('.hotelRemoveBtn');
const $hotelAddBtn = document.querySelector('.hotelAddBtn ');
const $hotelPopupBg = document.querySelector('.hotelBg');
const $departureSec = document.querySelector('.departure-section');
const $arrivalSec = document.querySelector('.arrival-section');

const $depMonthSelect = document.querySelector('#airline-month-select');
const $depDaySelcet = document.querySelector('#airline-day-select');
const $inputAirline = document.querySelector('.input-airlines');
const $depHourSelect = document.querySelector('#airline-hour-select');
const $depMinSelect = document.querySelector('#airline-min-select');
const $inputDepAirport = document.querySelector('.dep-airlines');
const $depArrMinSelect = document.querySelector('#dep-airline-min-select');
const $depArrHourSelect = document.querySelector('#dep-airline-hour-select');
const $inputDepArrAirport = document.querySelector('.arr-airlines');
const $travelInfoList = document.querySelector('.start-airline');
const $selectWrappers = document.querySelectorAll('.select-wrapper');

//RENDER
const renderAirlineInfo = () => {
  let html = '';

  airlines = airlines.forEach(({ travelId, type, id, date, airplaneName, depatureTime, departureAirport, arrivalTime, arrivalAirport }) => {
    html += `<li id=${travelId}-${id} class="airline-schedule-detail clearfix">
    <div class="airline-info1 airline-departure">
      <em>${type === 'departure' ? '출발' : '도착'}</em>
    </div>
    <div class="airline-info2 departure-info-date">
      <span class="date">${date}</span>
      <span class="airlines">${airplaneName}</span>
    </div>
    <div class="airline-departure departure-airline-time">
      <span class="time">${depatureTime}</span>
      <span class="airport">${departureAirport}</span>
    </div>
    <div class="airline-arrival departure-arrival-time">
      <span class="time">${arrivalTime}</span>
      <span class="airport">${arrivalAirport}</span>
    </div>
  </li>`;
  });

  $airlineSchedule.innerHTML = html;
};

export const getAirlineData = async () => {
  const { data } = await axios.get('/airlines');
  airlines = data;

  renderAirlineInfo();
};

const resetAirlinePopup = () => {
  const selects = [...$selectWrappers].map(select => select.firstElementChild);
  selects.forEach(child => (child.firstElementChild.selected = 'selected'));

  $inputAirline.value = '';
  $inputDepAirport.value = '';
  $inputDepArrAirport.value = '';
};

const closeAirlinePopup = () => {
  $airlinePopup.style.display = 'none';
  $airlinePopupBg.style.display = 'none';
  resetAirlinePopup();
};

//post
const addAirlieneInfo = async () => {
  const startMonth = `${$depMonthSelect.value}/${$depDaySelcet.value}`;
  const inputAirName = $travelInfoList.querySelector('.active').firstElementChild.textContent;
  const departureTime = `${$depHourSelect}:${$depMinSelect}`;
  const departureAirport = $travelInfoList.querySelector('.active').firstElementChild.textContent;
  const arrivalTime = `${$depArrHourSelect}:${$depArrMinSelect}`;
  const arrivalAirport = $travelInfoList.querySelector('.active').firstElementChild.textContent;

  const { data } = await axios.post('/airlines', { travelId, type, id, date, airplaneName, depatureTime, departureAirport, arrivalTime, arrivalAirport });
  airlines = [data, ...airlines];

  closeAirlinePopup();
  renderAirlineInfo(airlines);
  resetAirlinePopup();
};

const renderLodgingInfo = () => {
  let html = '';

  lodgings = lodgings.forEach(({ lodgingNumber, hotelName, hotelPlace, hotelsite }) => {
    html += `<div class="hotel-reservation1 lodging-name">
            <h3>${lodgingNumber}</h3>
            <span class="hotel-name">${hotelName}</span>
            <span class="hotel-place">${hotelPlace}</span>
            <span class="hotel-site">${hotelsite}</span>
          </div>`;
  });
  $lodgingScheduleList.innerHTML = html;
};

export const getLodgingData = async () => {
  const { data } = await axios.get('/lodgings');
  lodgings = data;

  renderLodgingInfo();
};

//EVENT HANDLER

//MODAL OPEN
$allBtn.addEventListener('mouseenter', e => {
  $allMoreBtn.style.display = 'block';
});
$allMoreBtn.addEventListener('mouseenter', e => {
  $allMoreBtn.style.display = 'block';
});

$allBtn.addEventListener('mouseleave', e => {
  $allMoreBtn.style.display = 'none';
  $allMoreBtn.style.display = 'none';
});

//HOTEL정보 입력 MODAL
$hotelBtn.onclick = () => {
  $hotelPopup.style.display = 'block';
  $hotelPopupBg.style.display = 'block';
};

const hotelClosePopup = () => {
  $hotelPopup.style.display = 'none';
  $hotelPopupBg.style.display = 'none';
};

$hotelPopupBg.onclick = () => {
  hotelClosePopup();
};

$hotelPopupRemove.onclick = () => {
  $hotelPopup.style.display = 'none';
  $hotelPopupBg.style.display = 'none';
};

//비행기 정보 입력 MODAL
$airlineBtn.onclick = () => {
  $airlinePopup.style.display = 'block';
  $airlinePopupBg.style.display = 'block';
};

$airlinePopupRemove.onclick = () => {
  $airlinePopup.style.display = 'none';
  $airlinePopupBg.style.display = 'none';
};

const airClosePopup = () => {
  $airlinePopupBg.style.display = 'none';
  $airlinePopup.style.display = 'none';
};

$airlinePopupBg.onclick = () => {
  airClosePopup();
};

//TODO: 등록 버튼 팅김 처리
// $airlineAddBtn.onclick = e => {
//   console.log(e.target);
//   if ($airlineMonthSelect === 'MONTH') return;
//   $airlineBg.style.display = 'none';
//   $airlinePopup.style.display = 'none';
// };
