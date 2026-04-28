import { useEffect, useState } from "react"
import { addUser } from "../features/usersSlice"
import { useAppSelector, useAppDispatch } from '../app/storeHooks'
import { Link, useNavigate } from "react-router-dom"

export const SignupLoginCard = () => {

    const [password, setPassword] = useState('')
    const [usersEmail, setUsersEmail] = useState('')

    const users = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch()


     const handleNewUser = (e: React.SubmitEvent) => {
        e.preventDefault();
        dispatch(addUser(newUser))
        console.log(users.usersInfo)
    }


    const newUser = [
        {
        email: usersEmail,
        password: password
        },
    ]


    useEffect(() => {
        console.log(`This is the ${usersEmail}`)
    }, [usersEmail])

    useEffect(() => {
        console.log(`This is the ${password}`)
    }, [password])

    return (
        <div className="signinLoginCard">
            <form onSubmit={handleNewUser}>
                <h2>Sign Up</h2>
                <input 
                    name="email"
                    type="text"
                    value={usersEmail}
                    placeholder="Email"
                    onChange={(e) => setUsersEmail(e.target.value)}
                />
                <input 
                    name="password"
                    type="text"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
                <button type="button">Login</button>
            </form>
        </div>
    )
}