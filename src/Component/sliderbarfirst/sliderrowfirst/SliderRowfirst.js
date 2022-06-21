import React from 'react'
import "./sliderrowfirst.css"

const SliderRowfirst = (props) => {
    let{ Icon,title ,selected}=props
  return (
    <div className={`sliderrow_first ${  selected &&"selected"}`}  >
      <Icon className="sliderrow_icon_first" />
        <p className='sliderrow_title_first'>{title}</p>
    </div>
  )
}

export default SliderRowfirst