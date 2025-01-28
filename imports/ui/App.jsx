import React, { useState } from 'react';

const App = () => {
  const [range, setRange] = useState({ start: 1, end: 100 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRange((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const generateOutput = () => {
    const output = [];
    for (let i = range.start; i <= range.end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output.push('RobotICT');
      } else if (i % 3 === 0) {
        output.push('Robot');
      } else if (i % 5 === 0) {
        output.push('ICT');
      } else {
        output.push(i);
      }
    }
    return output;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Robot ICT App</h1>
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
          <li key={index}>{index} =&gt; {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;