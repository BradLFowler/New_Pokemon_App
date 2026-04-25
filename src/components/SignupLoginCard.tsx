import { useEffect, useState } from "react"
import { addUser } from "../features/usersSlice"
import { useAppSelector, useAppDispatch } from '../app/storeHooks'

export const SignupLoginCard = () => {

    const [usersName, setUsersName] = useState('')
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
        id: 1,
        date: new Date().toLocaleDateString(),
        name: usersName,
        email: usersEmail,
        password: password,
        hasAccount: false
        },
    ]

    useEffect(() => {
        console.log(`This is the ${usersName}`)
    }, [usersName])

    useEffect(() => {
        console.log(`This is the ${usersEmail}`)
    }, [usersEmail])

    useEffect(() => {
        console.log(`This is the ${password}`)
    }, [password])

    return (
        <div className="signinLoginCard">
            <form onSubmit={handleNewUser}>
                <h2>Login</h2>
                <input  
                    name="usersname"
                    type="text"
                    value={usersName}
                    placeholder="Username"
                    onChange={(e) => setUsersName(e.target.value)}
                />
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}