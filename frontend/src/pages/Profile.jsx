import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
export default function Profile({history}) {
    const { userloginRedux } = useSelector(state => state.userLogin)
    useEffect(() => {
        if (!userloginRedux) {
              history.push("/login")
          }  
    },[])
  return (
      <div className='container'>
          <br />
           <div className="row">
        <div className="col-sm-6 offset-sm-3">
          <div className="card" >
            <div className="card-header">
              Profile
            </div> 
              <div className="card-body">
              <div className="card-header">
              <div className="list-group">
                  <div className="list-group-item">
                  Name : <span>{userloginRedux?.info.name}</span>
                  </div>
                  <div className="list-group-item">
                    Email : <span>{userloginRedux?.info.email}</span>
                  </div> 
                </div>
               </div>
              </div>
           </div>
        </div>
       </div>
    </div>
  )
}
