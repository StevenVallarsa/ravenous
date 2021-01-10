import React from 'react'
import './BusinessList.css'

import Business from '../Business/Business'

function BusinessList(props) {
  console.log(props.businesses)
  return (
    <div className="BusinessList">
      {props.businesses.map((business, index) => {
        console.log(business, index);
        return <Business key={business.id} business={business} />
      })}
    </div>
  )
}

export default BusinessList 