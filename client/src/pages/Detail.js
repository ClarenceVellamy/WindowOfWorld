import React from 'react'

import SideProfile from '../parts/SideProfile'
import DetailBook from '../components/DetailBook'


function Detail() {
  return (
    <div className='left'>
        <SideProfile page='detail' />
        <div className='content'>
            <DetailBook/>
        </div>
    </div>
  )
}

export default Detail