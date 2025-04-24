import React from 'react';

const Form1 = ({ sourceData }) => {
  return (
    <form>
      {sourceData.map((field, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <label htmlFor={field.name}>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}:</label><br />
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={`Enter your ${field.name}`}
            required
          />
        </div>
      ))}
      <button type="submit">Login</button>
    </form>
  );
};

export default Form1;
