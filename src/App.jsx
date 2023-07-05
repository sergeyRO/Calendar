import './App.css'
import '../css/main.css'

const Calendar = (props) => {
  const month = [
    "Января","Февраля","Марта","Апреля",
    "Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"];
  const month_i = [
    "Январь","Февраль","Март","Апрель",
    "Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];
  const week = ["Вс","Пн","Вт","Ср","Чт","Пт","Сб"]; 
  const week_full = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"]; 
  const flag = ["ui-datepicker-other-month","ui-datepicker-today","",""]
  const tt = (props) => {
    let arr = []; 
  // день для определения недели и самого первого дня для календаря
  let day_week = new Date(now_day.getFullYear(),now_day.getMonth(),1);
  if (day_week.getDay() != 1)
  {    
    //Определяем с какого дня начинать строить массив для календаря 
    while(day_week.getDay() != 1)
    {        
      day_week.setDate(day_week.getDate() - 1);
    }     
  }
   // день на начало месяца
  let day_start = day_week;
  var temp = {}; 
  while(day_start.getMonth() != now_day.getMonth())
  {
    temp['day'] = day_start.getDate();
    temp['month'] = day_start.getMonth();
    temp['year'] = day_start.getFullYear();
    temp['day_week'] = day_start.getDay();
    temp['flag'] = 0;
    arr.push(temp);
    day_start.setDate(day_start.getDate() + 1);
    temp = {}
  }
  while(day_start.getMonth() == now_day.getMonth())
  {
    temp['day'] = day_start.getDate();
    temp['month'] = day_start.getMonth();
    temp['year'] = day_start.getFullYear();
    temp['day_week'] = day_start.getDay();
    if((day_start.getFullYear() == now_day.getFullYear()) && 
    (day_start.getMonth() == now_day.getMonth()) && (day_start.getDate() == now_day.getDate()))
    {
      temp['flag'] = 1;
    }
    else{temp['flag'] = 3;} 
    arr.push(temp);
    day_start.setDate(day_start.getDate() + 1);
    temp = {}
  }
  if (day_start.getDay() != 1)
  {    
    //Определяем на каком дне закончить строить массив для календаря 
    while(day_start.getDay() != 1)
    {    
      temp['day'] = day_start.getDate();
      temp['month'] = day_start.getMonth();
      temp['year'] = day_start.getFullYear();
      temp['day_week'] = day_start.getDay();
      temp['flag'] = 0;
      arr.push(temp);
      day_start.setDate(day_start.getDate() + 1);
      temp = {}    
    }     
  }

  let NewArr = [];
  const chunk=7;
  for (let i = 0; i < arr.length; i += chunk) {
    NewArr.push(arr.slice(i, i + chunk));
  }
  return NewArr;
  }
  const mix = tt();
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{week_full[now_day.getDay()]}</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{now_day.getDate()}</div>
      <div className="ui-datepicker-material-month">{month[now_day.getMonth()]}</div>
      <div className="ui-datepicker-material-year">{now_day.getFullYear()}</div>
    </div>
    </div>
    <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{month_i[now_day.getMonth()]}</span>&nbsp;
      <span className="ui-datepicker-year">{now_day.getFullYear()}</span>
    </div>
    </div>
    <table className="ui-datepicker-calendar">
    <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end" />
      <col className="ui-datepicker-week-end" />
    </colgroup>
  <thead>
    <tr>
      <th scope="col" title="Понедельник">Пн</th>
      <th scope="col" title="Вторник">Вт</th>
      <th scope="col" title="Среда">Ср</th>
      <th scope="col" title="Четверг">Чт</th>
      <th scope="col" title="Пятница">Пт</th>
      <th scope="col" title="Суббота">Сб</th>
      <th scope="col" title="Воскресенье">Вс</th>
    </tr>
  </thead>
  <tbody>
      {
    mix.map((w,index) =>(
      <tr key={index}>
        <td className={flag[w[0].flag]}>{w[0].day}</td>
        <td className={flag[w[1].flag]}>{w[1].day}</td>
        <td className={flag[w[2].flag]}>{w[2].day}</td>
        <td className={flag[w[3].flag]}>{w[3].day}</td>
        <td className={flag[w[4].flag]}>{w[4].day}</td>
        <td className={flag[w[5].flag]}>{w[5].day}</td>
        <td className={flag[w[6].flag]}>{w[6].day}</td>
      </tr>
  ))}
  </tbody></table>
    </div>
  );
}

const now_day = new Date();

function App() {
  return ( 
    <> 
  <Calendar date={now_day} />
  </> 
);
}

export default App
