import React, { useState } from 'react';


function BelajarState() {
  // Deklarasi sebuah variabel state baru, dimana akan dinamakan "count"  const [count, setCount] = useState(0);
  const [count] = useState('ini adalah data'); 
  return (
    <div>
      <p>{count}</p>
      
    </div>
  );
}
export default BelajarState;