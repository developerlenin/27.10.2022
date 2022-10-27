import React from 'react'

const header = () => {
  return (
      
    <div className='section-one'>
    <ul>
       <li>
          <FontAwesomeIcon icon={faUser}/>
          <span>Lenin C S</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faUserFriends}/>
          <span>Friend</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faUserGroup}/>
          <span>Groups</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faMarsStrokeRight}/>
          <span>Marketplace</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faTv}/>
          <span>Watch</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faClock}/>
          <span>Reminder</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faSave}/>
          <span>Save</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faPager}/>
          <span>Pages</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faVideo}/>
          <span>Reels</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faCalendar}/>
          <span>Function</span>
       </li>
       <li>
          <FontAwesomeIcon icon={faUserGroup}/>
          <span>More</span>
       </li>
    </ul>
 </div>
  )
}

export default header