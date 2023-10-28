import {GrFormClose} from 'react-icons/gr'

import './index.css'

const Notification = props => {
  console.log(props)
  const {children} = props
  const {icon, heading, description} = children
  console.log(icon)
  return (
    <div className={`${heading}`}>
      {icon}
      <div className="descriptionconttainer">
        <h1 className="headingstty">{heading}</h1>
        <p className="paracontiner">{description}</p>
      </div>
      <GrFormClose className="crossicon" />
    </div>
  )
}

export default Notification
