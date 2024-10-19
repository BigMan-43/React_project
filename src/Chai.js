// const mydate = new Date();
// console.log(mydate);
// const myhour = mydate.getHours();
// console.log(myhour);
// const mymin = mydate.getMinutes();
// console.log(mymin);
// const mysec = mydate.getSeconds();
// console.log(mysec);
// function Chai(){
//     return(
//         <div>
//         <p>
//         {mydate}
//         </p>
//         <p>
//         {mymin}
//         </p>
//         <p>
//         {mysec}
//         </p>    
//         </div>
//     )
// }

// export default Chai;


import React, { useState, useEffect } from 'react';

function Chai() {
  const [mydate, setMyDate] = useState(new Date());

  // useEffect to update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setMyDate(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const myhour = mydate.getHours();
  const mymin = mydate.getMinutes();
  const mysec = mydate.getSeconds();

  return (
    <div>
      <p>Date: {mydate.toDateString()}</p>
      <p>Time: {myhour}:{mymin}:{mysec}</p>
    </div>
  );
}

export default Chai;
