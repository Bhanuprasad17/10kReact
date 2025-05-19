import React, { useState, useEffect, useRef } from 'react';

const UndoDelete = () => {
  const [names, setNames] = useState(['Bhanu', 'Ravi', 'Neha']);
  const [deletedName, setDeletedName] = useState(null);
  const timerRef = useRef(null); // To store the timer ID

  const handleDelete = (index) => {
    const nameToDelete = names[index];
    setDeletedName({ name: nameToDelete, index });

    const updatedNames = [...names];
    updatedNames.splice(index, 1);
    setNames(updatedNames);

    // Clear existing timer if any
    if (timerRef.current) clearTimeout(timerRef.current);

    // Set a new 3-second timer to remove Undo
    timerRef.current = setTimeout(() => {
      setDeletedName(null);
    }, 3000);
  };

  const handleUndo = () => {
    if (deletedName) {
      const updatedNames = [...names];
      updatedNames.splice(deletedName.index, 0, deletedName.name);
      setNames(updatedNames);
      setDeletedName(null);

      // Clear the timer
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  };

  // Optional: Clear timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Name List</h2>
      {names.map((name, index) => (
        <div key={index} style={{ marginBottom: '8px' }}>
          {name}
          <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
            Delete
          </button>
        </div>
      ))}

      {deletedName && (
        <div style={{ marginTop: '20px' }}>
          <span>Deleted: {deletedName.name}</span>
          <button onClick={handleUndo} style={{ marginLeft: '10px' }}>
            Undo
          </button>
        </div>
      )}
    </div>
  );
};

export default UndoDelete;
