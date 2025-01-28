import React, { useState } from 'react';

const App = () => {
  // range
  const [range, setRange] = useState({ start: 1, end: 100 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const generateOutput = () => {
    let index = '';
    const output = [];
    for (let i = range.start; i <= range.end; i++) {
      index = '' + i + ' => ';

      if (i % 3 === 0 && i % 5 === 0) {
        output.push(index + 'RobotICT');
      } else if (i % 3 === 0) {
        output.push(index + 'Robot');
      } else if (i % 5 === 0) {
        output.push(index + 'ICT');
      } else {
        output.push(index + i);
      }
    }
    return output;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Meteor Test App For Robot ICT</h1>
      <div>
        <label>
          Start:
          <input
            type="number"
            name="start"
            value={range.start}
            onChange={handleChange}
          />
        </label>
        <label>
          End:
          <input
            type="number"
            name="end"
            value={range.end}
            onChange={handleChange}
          />
        </label>
      </div>
      <ul>
        {generateOutput().map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;