

let grid = document.querySelector('.report');

fetch('./scripts/data.json')
  .then(res => res.json())
  .then(data => {
    domTime(data);
  })
  .catch(error => console.log('Error:', error));

function domTime(data) {
  let template = document.querySelector('#card');
  template = template.content;

  grid.innerHTML = "";

  data.forEach(el => {
    let clone = document.importNode(template, true);

    clone.querySelector('.report__each').classList.add(el.title.toLowerCase().replace(' ', '-'));
    clone.querySelector('.report__each__img img').src = `./assets/images/icon-${el.title.toLowerCase().replace(' ','-')}.svg`;
    clone.querySelector('.heading h3').textContent = el.title;

    let daily = `${el.timeframes.daily.current}hrs`;
    let weekly = `${el.timeframes.weekly.current}hrs`;
    let monthly = `${el.timeframes.monthly.current}hrs`;

    let hrs = clone.querySelector('.body h2');

    hrs.textContent = weekly;
    hrs.setAttribute('data-daily', daily);
    hrs.setAttribute('data-weekly', weekly);
    hrs.setAttribute('data-monthly', monthly);

    let prev_daily = `Last Week - ${el.timeframes.daily.previous}hrs`;
    let prev_weekly = `Last Week - ${el.timeframes.weekly.previous}hrs`;
    let prev_monthly = `Last Week - ${el.timeframes.monthly.previous}hrs`;

    let prev_hrs = clone.querySelector('.body span');

    prev_hrs.textContent = prev_weekly;
    prev_hrs.setAttribute('data-daily', prev_daily);
    prev_hrs.setAttribute('data-weekly', prev_weekly);
    prev_hrs.setAttribute('data-monthly', prev_monthly);

    grid.appendChild(clone)
  });
}