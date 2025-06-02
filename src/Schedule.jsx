import React, { useState } from 'react';

const Hour = ({hr}) => {
  const [hourValue, setHourValue] = useState(hr || 0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setHourValue(value);
  };
  return <input
        style={{width:"40px"}}
        type="number"
        id="open"
        name="open"
        value={hourValue}
        onChange={handleChange}
        required
      />
};

const Schedule = ({start, end}) => {

 if (!start || !end) {
    return <></>;
  }

  const days = [];
  let cur = start;
  let i = 0;
  while (cur <= end && i < 150) {
    let dateString = cur.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    });
    console.log(dateString)
    days.push({date: dateString, start:11, end:8});

    let tomorrow = new Date(cur.getTime() + 24 * 60 * 60 * 1000);
    cur = tomorrow;
    i += 1;
  }

  return <div>
    {days.map((day,i) => {
      return <div>{day.date}: <Hour hr={day.start}></Hour>-<Hour hr={day.end}></Hour></div>
    })}
  </div>;
};

export default Schedule;
