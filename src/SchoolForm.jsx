import React, { useState } from 'react';
import Schedule from "./Schedule";

const HoursForm= () => {
    return <>
        <label htmlFor="open">Open:</label>
        <input
        style={{width:"40px"}}
          type="number"
          id="open"
          name="open"
          //value={formData.memorialDay}
          //onChange={handleChange}
          required
        />
            <label htmlFor="close">Close:</label>
            <input
              style={{width:"40px"}}
              type="number"
              id="close"
              name="close"
              //value={formData.memorialDay}
              //onChange={handleChange}
              required
            />
    </>
}

const SchoolDatesForm = () => {
  const [formData, setFormData] = useState({
    startOfSchool: '',
    endOfSchool: '',
    memorialDay: '',
    laborDay: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target + value);
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can send the formData to a server here
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <div>
        <label htmlFor="memorialDay">Memorial Day:</label>
        <input
          type="date"
          id="memorialDay"
          name="memorialDay"
          value={formData.memorialDay}
          onChange={handleChange}
          required
        />
            {/* <HoursForm></HoursForm> */}
      </div>

      {/* <div>
        <label htmlFor="endOfSchool">End of School:</label>
        <input
          type="date"
          id="endOfSchool"
          name="endOfSchool"
          value={formData.endOfSchool}
          onChange={handleChange}
          required
        />
                    <HoursForm></HoursForm>
      </div>

      
      <div>
        <label htmlFor="startOfSchool">Start of School:</label>
        <input
          type="date"
          id="startOfSchool"
          name="startOfSchool"
          value={formData.startOfSchool}
          onChange={handleChange}
          required
          
        />
                    <HoursForm></HoursForm>
      </div> */}

      <div>
        <label htmlFor="laborDay">Labor Day:</label>
        <input
          type="date"
          id="laborDay"
          name="laborDay"
          value={formData.laborDay}
          onChange={handleChange}
          required
        />
                    {/* <HoursForm></HoursForm> */}
      </div>

      <Schedule start={new Date(formData.memorialDay)} end={new Date(formData.laborDay)}></Schedule>
      <button type="submit">Update</button>
    </form>
  );
};

export default SchoolDatesForm;
