import React, { useState, useEffect } from 'react';
import './SizePicker.css'

function SizePicker({dataSize, setDataSize, sizes}) {

  return (
    <div className='sizePickerContainer'>
        <div className='sizeList'>
          <p className={'sizeListItem ' + (dataSize == sizes.BIG ? 'active' : '')} onClick={() => setDataSize(sizes.BIG)}>Big</p>
          <p className={'sizeListItem ' + (dataSize == sizes.LARGE ? 'active' : '')} onClick={() => setDataSize(sizes.LARGE)}>Large</p>
          <p className={'sizeListItem ' + (dataSize == sizes.HUGE ? 'active' : '')} onClick={() => setDataSize(sizes.HUGE)}>Huge</p>
        </div>
    </div>
  )
}

export default SizePicker;