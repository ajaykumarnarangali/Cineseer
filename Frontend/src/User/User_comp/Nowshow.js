import React from 'react'
import Avatar from '../../Image/Avatar.jpg'
import '../User_comp/css/Nowshow.css'
function Nowshow() {
  return (
    <div style={{display:'flex'}}>
    <div class="card">
     <div className='img_movie'>
 <img src={Avatar} alt="Avatar"  style={{display: 'flex', height: '300px',width: '240px',borderRadius:'20px 20px 0px 0px'}}/>
 </div>
 <div class="container">
   <h4><b>Movie name</b></h4>
   <button className='book'>Book Ticket</button>
 </div>
</div>
<div class="card">
     <div className='img_movie'>
 <img src={Avatar} alt="Avatar"  style={{display: 'flex', height: '300px',width: '240px',borderRadius:'20px 20px 0px 0px'}}/>
 </div>
 <div class="container">
   <h4><b>Movie name</b></h4>
   <button className='book'>Book Ticket</button>
 </div>
</div>
</div>
  )
}

export default Nowshow
