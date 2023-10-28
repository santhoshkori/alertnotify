import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdInfo, MdWarning} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const notificationlist = [
  {
    icon: <AiFillCheckCircle className="iconsty" />,
    heading: 'Success',
    description: 'You can access all the  files in the folder',
  },
  {
    icon: <RiErrorWarningFill className="iconsty" />,
    heading: 'Error',
    description:
      'Sorry, you are not authorized to have access to delete the file',
  },
  {
    icon: <MdWarning className="iconsty" />,
    heading: 'Warning',
    description: 'Viewers of this file can see comments and suggestions',
  },
  {
    icon: <MdInfo className="iconsty" />,
    heading: 'Info',
    description: 'Anyone on the internet can view these files',
  },
]

const AlertNotifications = () => (
  <div className="maincontainer">
    <h1>Alert Notifications</h1>
    {notificationlist.map(eachnotify => (
      <Notification key={eachnotify.heading}>{eachnotify}</Notification>
    ))}
  </div>
)

export default AlertNotifications
