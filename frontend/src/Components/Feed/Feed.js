import React, { useState, useEffect } from 'react';
import FeedItem from './../FeedItem/FeedItem.js'
import './Feed.css'

function Feed(props) {
  let items = props.items;

  return (
    <div className='feedContainer'>
      <div className='feedHeader'>COF-FEED</div>
      {items.map((item, i) => 
        <FeedItem item={item} colored={i%2 == 0} />
      )}
    </div>
  )
}

export default Feed;