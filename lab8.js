function showDate(){
    let out = document.getElementById('current-date');/*Поиск элемента для вывода*/
    let today = new Date(); /*Определяем текующую дату*/
    out.innerHTML='Дата и время для локали России: '+today.toLocaleString('ru-RU')+"<br />"+
    'Дата и время для локали Канады: '+today.toLocaleString('en-CA')+"<br />"+
    'Дата и время для локали Греции: '+today.toLocaleString('el-EL')+"<br />"+
    'Дата и время для локали Испании: '+today.toLocaleString('es-ES')+"<br />"+
    'Дата и время для локали Франции: '+today.toLocaleString('fr-FR')+"<br />"+
    'Дата и время для локали Италии: '+today.toLocaleString('it-IT');/*Запись даты в тег*/
}
function showDaysCount(){
    let today = new Date(); /*Определяем текующую дату*/
    let inputDate = document.querySelector('input[type=date]');/*Поиск тега с датой*/
    let birthday = new Date(inputDate.value);/*Берем значение*/
    let daysCount = (today-birthday)/1000/60/60/24; /*Высчитываем дни*/
    daysCount = Math.floor(daysCount);/*Округляем*/
    document.getElementById('days').innerHTML='Количество дней с даты рождения: ' + daysCount
}

{
    function showTime()
    let today = new Date();
    let currentTime = today/toLocaleString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

function cleanAll(){
    document.getElementById('days').innerHTML='';
    let inputDate = document.querySelector('input[type=date]');
    inputDate.value='';
}