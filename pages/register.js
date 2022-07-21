import React, { useContext, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import valid from '../utils/valid'
import { DataContext } from '../store/GlobalState'


function Register() {
    const initialState = { name: '', email: '', password: '', cf_password: '' }
    const [userData, setUserData] = useState(initialState)
    const { name, email, password, cf_password } = userData


    const [state,dispatch]=useContext(DataContext)


    const handleChnageInput=(e)=>{
        const {name, value} = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        const errMsg = valid(name, email, password, cf_password)
        if(errMsg) return dispatch({type:'NOTIFY',payload:{error:errMsg}});

        dispatch({type:'NOTIFY',payload:{success:'ok'}})

      }

  return (
    <div>
        <Head>
            <title>Sign in Page</title>
        </Head>

        <form onSubmit={handleSubmit} className='mx-auto my-4' style={{maxWidth:'500px'}}>
        <div className="mb-3">
            <label htmlFor="exampleInputname" className="form-label">Full Name</label>
            <input type="text" name="name" value={name} onChange={handleChnageInput} className="form-control" id="exampleInputname" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" value={email} onChange={handleChnageInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" name="password" value={password} onChange={handleChnageInput} className="form-control" id="exampleInputPassword1"/>
        </div>

        <div className="mb-3">
            <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
            <input type="password" name="cf_password" value={cf_password} onChange={handleChnageInput} className="form-control" id="exampleInputPassword2"/>
        </div>
  
        <button type="submit" className="btn btn-dark w-100">Register</button>
        <p className="my-2">Already have an account?<Link href="/signin"><a style={{color:'crimson'}}>Login Now</a></Link></p>
    </form>
    </div>
  )
}

export default Register