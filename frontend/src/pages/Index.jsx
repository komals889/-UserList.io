import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { adminUserDataAction, deleteDataAction, findPostDataAction, getAllUserAction, logOutAction, postDataAction, updateDataAction } from '../action/user-action'
export default function Index({ history }) {
  const [userName,setuserName]=useState("")
  const [email,setemail]=useState("")
  const [password, setpassword] = useState("")
  const [updateUsername,setUpdateUsername]=useState("")
  const [updateEmail,setUpdateEmail]=useState("")
  const [updatePassword, setUpdatePassword] = useState("")
  const [updatepic, setUpdatepic] = useState("")
  const [updateId ,setupdateId]=useState("")
  const [selectfile, setselctedfile] = useState()
  const [preview, setpreview] = useState("")
  const [toggle,settoggle]= useState(false)
  const dispatch = useDispatch()
  const { userloginRedux } = useSelector(state => state.userLogin)
  const { userredux } = useSelector(state => state.userData)
  const {findPostData,isloading} = useSelector(state=> state.findpostdata)
  const { adminData } = useSelector(state => state.allUsers)
  let deleteId;
  const handlePostData = async(e) => {
    e.preventDefault()
    const fd = new FormData()
    fd.append("avatar", selectfile);
    fd.append("userId", userloginRedux.info._id);
    fd.append("userName", userName);
    fd.append("email", email);
    fd.append("password", password);
    fd.append("userInfo",userloginRedux.info)
    await dispatch(postDataAction(fd))
    setpreview("")
    await settoggle(pre=> !pre)  
    e.target.reset()
  }
  const handlePic = (e) => {
    setselctedfile(e.target.files[0])
    const url = URL.createObjectURL(e.target.files[0])
    setpreview(url)
  }
  const handleGetUpdateData = (id) => {
    setupdateId(id)
    let res = findPostData.filter(item => item._id == id)
    setUpdateUsername(res[0].userName)
    setUpdateEmail(res[0].email)
    setUpdatePassword(res[0].password)
    setUpdatepic(res[0].pic)
    console.log(res[0].pic);
  }
  const handleGetUpdateData1 = (id) => {
    setupdateId(id)
    let res = userredux.filter(item => item._id == id)
    setUpdateUsername(res[0].userName)
    setUpdateEmail(res[0].email)
    setUpdatePassword(res[0].password)
    setUpdatepic(res[0].pic)
  }
  const handleupdateData = async (e) => {
    e.preventDefault()
    const fd = new FormData()
    fd.append("avatar", selectfile);
    fd.append("userName", updateUsername);
    fd.append("email", updateEmail);
    fd.append("password", updatePassword);
    await dispatch(updateDataAction(updateId, fd))
    setpreview("")
    settoggle(pre=> !pre) 
    e.target.reset()
 }
useEffect(() => {
    if(userloginRedux){
      dispatch(findPostDataAction(userloginRedux.info._id))
      if (userloginRedux.info.isAdmin === true) {
        dispatch(adminUserDataAction())
        dispatch(getAllUserAction())
       }  
    } else {
      history.push("/login")
    }
  },[toggle])
  return (
    <div>
      <br />
        {
        userloginRedux?.info.isAdmin === true
          ? <div className='container'>
            <div className="row">
              <div className="card text-center">
                <div className="card-body">
                  <div className="card-header">
                  <button className='btn btn-warning' onClick={e => {
               dispatch(logOutAction())
              history.push("/login")
              }}>LogOut</button>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 mt-3">
                <h4 className='text-danger alert alert-info text-center'>Register User</h4>
                  {
                    adminData.map((user,index) => (
                      <div className="card mt-4" key={user._id}>
                        <div className="card-header">
                           <h5>User {index+1} </h5>
                        </div>
                      <div className="card-body">
                        <h6>Name : <strong>{user.name}</strong> </h6>
                        <h6>Email : <strong>{user.email}</strong> </h6>
                      </div>
                      </div>
                    ))
                   }
              </div>
              <div className="col-sm-8 mt-3">
                <div className="row">
              <h4 className='text-danger alert alert-info text-center'> Added Data </h4>
                  {
                    userredux?.map((item,index) =>(
                      <div className="col-sm-6" key={item._id}>
                        <div className="card mt-2">
                          <div className="card-header">
                            <span>Added User :<strong>{index+1}</strong></span>
                          </div>
                          <div className="card-body " style={{objectFit:"contain"}}>
                          <img src={"http://localhost:5000/" + item.pic} alt="" className='img-fluid'/>
                            <p> UserName : <strong>{item.userName}</strong> </p>
                            <p> Email : <strong>{item.email}</strong></p>
                            <p> Password : <strong>{item.password}</strong></p>
                            <button className='btn btn-outline-danger ' data-bs-target="#delete" data-bs-toggle="modal" onClick={(e) =>  {
                                deleteId =item._id
                            }}><i class="bi bi-trash-fill"></i></button>
                            <button className='btn btn-outline-success  float-end' data-bs-target="#update" data-bs-toggle="modal" onClick={(e) => {
                            handleGetUpdateData1(item._id)
                         }}><i class="bi bi-pencil-square"></i></button>
                          </div>
                       </div>
                       </div>
                    ))
                   }
                 </div>
              </div>
             </div>
          </div>
          :<div className="row">
          <div className="col-sm-8 offset-sm-2">
              <div className="card">
                  <div className="card-body">
                      <div className="card-header d-flex justify-content-between">
                        <button className='btn btn-danger' data-bs-target="#upload" data-bs-toggle="modal">Create User</button>
                        <button className='btn btn-warning' onClick={e => {
                          dispatch(logOutAction())
                          history.push("/login")
                          }}>LogOut</button>
                          <Link className='btn btn-info' to="/profile">Profile</Link>
                          <Link className='btn btn-info' to="/">Home</Link>
                      </div>        
              </div>
              <div className="card-header">
              <div className="row">
            {
              isloading
                ? <div className='spinner spinner-border text-black '></div>
                : findPostData.length > 0
              ?findPostData.map((item) => (
                <div className="col-sm-4" key={item._id}>
                  <br />
                  <div className='card'>
                    <div className="card-body">
                      <img src={"http://localhost:5000/" + item.pic} alt="" height="150px" width="100%" className='img-fluid' />
                      <p>User Name : <strong>{item.userName}</strong> </p>
                      <p>Email : <strong>{item.email}</strong> </p>
                      <p>Password : <strong>{item.password}</strong> </p>
                      <button className='btn btn-outline-danger' data-bs-target="#delete" data-bs-toggle="modal" onClick={(e) => {
                         deleteId=item._id
                      }}><i class="bi bi-trash-fill"></i></button>
                      <button className='btn btn-outline-success ms-3' data-bs-target="#update" data-bs-toggle="modal" onClick={(e) => {
                        handleGetUpdateData(item._id)
                      }}><i class="bi bi-pencil-square"></i></button>
                  </div>
                </div>
                </div>
              ))
                  :<h1 className='text-center'>NO Data found</h1>                
            }
          </div>
        </div>
      </div>
    </div>  
        </div> 
}
        
      <div className="modal fade " id="upload" >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              Create User
              <button type="button " class="close btn btn-danger" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="" onSubmit={handlePostData}>
              <label htmlFor="">User Name</label><br />
              <input type="text" placeholder='enter userName'  onChange={e=> setuserName(e.target.value)} className='form-control' required/><br />
              <label htmlFor="">Email</label><br />
             <input type="email" name="" id="" cols="20" rows="05" onChange={e=> setemail(e.target.value)} className='form-control' required placeholder='Enter Email'></input> <br />
              <label htmlFor="">Password</label> <br />
                <input type="password" placeholder='Enter Password' onChange={e => setpassword(e.target.value)} className='form-control' required /><br />
                <input type="file" className='form-control' accept='image/jpg, image/png' required onChange={handlePic} /> <br />
                {
                  preview ?<div className='text-center'>
                    <img src={preview} height="200px" className='pb-3' alt="add img" /></div>
                    :""
                 }
               <button className='btn btn-info' data-bs-dismiss="modal" >Create User</button>
               <button className='btn btn-warning ms-2' type='button' data-bs-dismiss="modal">Cancel</button>
              </form>
            </div>    
          </div>
        </div>
      </div>
      
      <div className="modal fade" id="delete" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
               <h5> Are You Sure </h5>
            </div>
            <div className="modal-body">
              <button className='btn btn-danger w-25' data-bs-dismiss="modal" onClick={async(e) => {
                await dispatch(deleteDataAction(deleteId))
                await settoggle(pre=> !pre) 
               }} >Yes</button>
               <button className='btn btn-info ms-2 w-25' data-bs-dismiss="modal">No</button>
            </div>
             
          </div>
        </div>
      </div>

      <div className="modal fade" id="update" >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                Update User
            </div>
            <div className="modal-body">
            <form onSubmit={handleupdateData}> 
              <label htmlFor="">User Name</label><br />
              <input type="text" placeholder='enter user name' value={updateUsername}  required  onChange={(e)=>{
                setUpdateUsername(e.target.value)
              }}  className='form-control'/><br />
              <label htmlFor="">Email</label><br />
             <input type="text" name="" id="" cols="20" rows="05" required value={updateEmail} onChange={(e)=>{
               setUpdateEmail(e.target.value)
             }} className='form-control' placeholder='Enter Email'></input> <br />
              <label htmlFor="">Password</label> <br />
              <input type="password" placeholder='Enter password' required  value={updatePassword} onChange={(e)=>{
                setUpdatePassword(e.target.value)
                }} className='form-control' /><br />
                 <input type="file" className='form-control' accept='image/jpg,image/png'   onChange={handlePic} /> <br />
                {
                  preview ?<div className='text-center'>
                    <img src={preview} height="200px" className='pb-3' alt="add img" /></div>
                    : <div className='text-center'>
                    <img src={"http://localhost:5000/"+ updatepic }  className="pb-3" height="200px"  alt="" />
                     </div>
                 }
               <button className='btn btn-info' data-bs-dismiss="modal">update</button>
               <button className='btn btn-warning ms-2' type='button' data-bs-dismiss="modal">Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
