import React from 'react'
import "./sliderrow.css"

const SliderRow = (props) => {
  let { selected, Icon, title } = props
  return (
    <div className={`sliderrow ${selected && "selected"}`}  >
      <Icon className="sliderrow_icon" />
      <h2 className='sliderrow_title'>{title}</h2>
    </div>
  )
}

export default SliderRow