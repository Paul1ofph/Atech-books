import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import "./FormValidation.css"

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")

    const [errorUsername, setErrorUsername] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmpassword, setErrorConfirmPassword] = useState("")

    const [userColor, setUserColor] = useState("")
    const [emailColor, setEmailColor] = useState("")
    const [passwordColor, setPasswordColor] = useState("")
    const [confirmpasswordColor, setConfirmPasswordColor] = useState("")

    function validate(e) {
        e.preventDefault()

        if (username.length>8) {
            setErrorUsername("")
            setUserColor("green")
        }else{
            setErrorUsername("Username must be 8 letters long")
            setUserColor("red")
        }

        if (email.includes("@gmail")) {
            setErrorEmail("")
            setEmailColor("green")
        } else {
            setErrorEmail("missing @gmail")
            setEmailColor("red") 
        }

        if (password.length>8) {
            setErrorPassword("")
            setPasswordColor("green")
        } else {
            setErrorPassword("Password should be 8 letters long")
            setPasswordColor("red")
        }

        if (password != "" && password === confirmpassword) {
            setErrorConfirmPassword("")
            setConfirmPassword("green")
        }else{
            setErrorConfirmPassword("Password doesnt match")
            setConfirmPasswordColor("red")
        }
    }
  return (
    <body className='h-[100vh] flex items-center justify-center'>
        <div className='card '>

            <form className='flex flex-col justify-center items-center w-3'>
                <input className='p-3 w-80 m-1 bg-transparent border-b-2 border-black rounded-md outline-none' 
                type='text' 
                placeholder='Name' 
                style={{borderColor: userColor}}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <p className='error'>{errorUsername}</p>

                <input className='p-3 m-1 w-80 bg-transparent border-b-2 border-black rounded-md outline-none' 
                type='text' 
                placeholder='Email' 
                style={{borderColor: emailColor}}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className='error'>{errorEmail}</p>

                <input className='p-3 m-1 w-80 bg-transparent  border-b-2 border-black rounded-md outline-none' 
                type='password' 
                placeholder='Password' 
                style={{borderColor: passwordColor}}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className='error'>{errorPassword}</p>

                <input className='p-3 m-1 w-80 bg-transparent border-b-2 border-black rounded-md outline-none' 
                type='password' 
                placeholder='Confirm Password' 
                style={{borderColor: confirmpasswordColor}}
                value={confirmpassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p className='error'>{errorConfirmpassword}</p>
                <Link
                 to="/HomePage">
                <button className='submit-btn px-12 py-4 mt-5 bg-sky-800 cursor-pointer rounded-md text-white font-bold' >Submit</button>
                </Link>
            </form>
        </div>
    </body>
  )
}

export default LoginPage