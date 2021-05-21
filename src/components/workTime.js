import { MDBCol, MDBContainer, MDBIcon, MDBListGroup, MDBListGroupItem, MDBRow } from 'mdbreact'
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

      <>
         <MDBCol md="2">
            <MDBIcon far icon="clock" size="2x" className="cyan-text pr-3" />
         </MDBCol>
         <MDBCol md="10">
            {/* <MDBListGroup> */}
               {wt.length > 0 ? wt.map((item, i) => {
                  return (
                     <MDBRow key={i}>
                        <p>{item.week_day}:&nbsp;&nbsp;&nbsp;{item.time.from} - {item.time.to}</p>
                     </MDBRow>
                  )
               }) :
                  null
               }
            {/* </MDBListGroup> */}
         </MDBCol>
      </>
   )
}

export default WorkTime
