import React from 'react'

function WorkTime({ wt }) {

   // let days = [
   //    ['пн', '1'],
   //    ['вт', '2'],
   //    ['ср', '3'],
   //    ['чт', '4'],
   //    ['пт', '5'],
   //    ['сб', '6'],
   //    ['вс', '7']
   // ]

   // let sorted = []

   // wt.map(workTime => {
   //    let found = false
   //    days = days.filter(function (val) {
   //       if (!found && val[1] === workTime) {
   //          sorted.push(val);
   //          found = true;
   //          return false
   //       } else {
   //          return true
   //       }

   //    })
   //    return sorted
   // });

   return (

      <div>
         <h6>Время работы</h6>
         <div className="container">
            {wt.length > 0 ? wt.map((item, i) => {
               return (
                  <div key={i}>
                     <p>{item.week_day}:&nbsp;&nbsp;&nbsp;{item.time.from} - {item.time.to}</p>
                  </div>
               )
            }) :
               null
            }
         </div>
      </div>
   )
}

export default WorkTime
