import React, { useState, useEffect } from 'react';
import './FeedItem.css'

function FeedItem(props) {

  let datestring = getEasternTimeString(props.item.created_at, 1)
  return (
    <div className={'feedItemContainer colored-' + props.colored}>
      <p className='feedItemNote'>"{props.item.note}"</p>
      <p className='feedItemDate'>{datestring}</p>
    </div>
  )

}

function getEasternTimeString(date, mode) {
  const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let estOffset = -300
  let dateUTC = new Date(date)
  let dateEST = new Date(dateUTC.getTime() + estOffset*60*1000)

  let weekday = weekdayNames[dateEST.getUTCDay()]
  let month = monthNames[dateEST.getUTCMonth()]
  let day = dateEST.getUTCDate()

  let hour = dateEST.getUTCHours()
  let ampm = (hour >= 12) ? "PM" : "AM"
  if (hour > 12) { hour -= 12 }
  let minutes = dateEST.getUTCMinutes()

  if (mode == 1) {
    return weekday + ', ' + month + ' ' + day + ' at ' + hour + ':' + minutes + ' ' + ampm
  } else if (mode == 2) {
    return (dateEST.getUTCMonth() + 1) + '/' + day + ' at ' + hour + ':' + minutes + ' ' + ampm
  }

}

export default FeedItem