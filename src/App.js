import './App.css';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import DatePicker from 'react-datepicker';
import "react-big-calendar/lib/css/react-big-calendar.css"
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from 'react'

function App() {
  const locales = {
    'en-US': enUS,
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = [{
    title: "Holiday",
    allDay: true,
    start: new Date(2019, 1, 0),
    end: new Date(2019, 1, 0)
  },
  {
    title: "Republic Day",
    start: new Date(2019, 0, 26),
    end: new Date(2019, 0, 27)
  },
  {
    title: "Guru Ravidas's Birthday",
    start: new Date(2019, 1, 19),
    end: new Date(2019, 1, 20)
  },
  {
    title: "Shivaji Jayanti",
    start: new Date(2019, 1, 19),
    end: new Date(2019, 1, 20)
  },
  {
    title: "Swami Dayananda Saraswati Jayanti",
    start: new Date(2019, 2, 1),
    end: new Date(2019, 2, 2)
  },
  {
    title: "Mahavir Jayanti",
    start: new Date(2019, 3, 17),
    end: new Date(2019, 3, 18)
  },
  {
    title: "Good Friday",
    start: new Date(2019, 3, 19),
    end: new Date(2019, 3, 20)
  },
  {
    title: " Ramazan/Idu’l Fitr",
    start: new Date(2019, 4, 5),
    end: new Date(2019, 4, 6)
  },
  {
    title: " Buddha Purnima",
    start: new Date(2019, 5, 18),
    end: new Date(2019, 5, 19)
  },
  {
    title: " Id-ul-Zuha/Bakr-Eid",
    start: new Date(2019, 7, 12),
    end: new Date(2019, 7, 13)
  },
  {
    title: " Independence Day",
    start: new Date(2019, 7, 15),
    end: new Date(2019, 7, 16)
  },
  {
    title: " Muharram",
    start: new Date(2019, 8, 10),
    end: new Date(2019, 8, 11)
  },
  {
    title: " Mahatma Gandhi's Birthday",
    start: new Date(2019, 9, 2),
    end: new Date(2019, 9, 3)
  },
  {
    title: "Dussehra",
    start: new Date(2019, 9, 8),
    end: new Date(2019, 9, 9)
  },
  {
    title: "Diwali (Deepavali)",
    start: new Date(2019, 9, 28),
    end: new Date(2019, 9, 29)
  },
  ]

  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvent, setAllEvent] = useState(events);

  console.log("allEvent", allEvent)
  function handleAddEvent() {
    setAllEvent([...allEvent, newEvent])
  }

//   const [dates,setDates] = useState()
//   console.log()
//   function onClickDate(e) {
//     setDates(e.date);
// };

  return (
    <div className="App">
      <h1 style={{ color:'white' }}>Calendar</h1>
      <div style={{ display: 'flex', justifyContent: "center"}}>
        <div className='input'>
          <input
            type="text"
            placeholder='Add Title'
            style={{ marginRight: "10px"}}
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          />
          <div
            style={{marginRight:"10px"}}>
            <DatePicker
              placeholderText='Start Date'
              selected={newEvent.start}
              onChange={(start) => setNewEvent({ ...newEvent, start })}
            />
          </div>
          <div  style={{ marginRight:"10px" }}>
          <DatePicker
            placeholderText='End Date'
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
          />
          </div>
          <div>
            <button onClick={handleAddEvent} >Save</button></div>
        </div>
      </div>
     
        <Calendar
          defaultDate={'02-01-2019'}
          localizer={localizer}
          events={allEvent}
          startAccessor="start"
          endAccessor="end"
          style={{height:500,padding:'10px', background:'white'}}
          className="calendar"
        />
      
      </div>
  );
}

export default App;
