import { useEffect, useState } from "react"
import { addUser } from "../Store/features/slices/usersSlice"
import { useAppSelector } from "../Store/store"
import { useAppDispatch } from "../Store/store"

export const SignupLoginCard = () => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const users = useAppSelector((state) => state.users);

    const dispatch = useAppDispatch()

    const handleNewUser = () => {
        dispatch(addUser({username: userName, password: password }))
        console.log(users)
    }

    useEffect(() => {
        console.log(`This is the ${userName}`)
    }, [userName])

    useEffect(() => {
        console.log(`This is the ${password}`)
    }, [password])

    return (
        <div className="signinLoginCard">
            <form>
                <h2>Login</h2>
                <input  
                    name="username"
                    type="text"
                    value={userName}
                    placeholder="Username"
                    onChange={(e) => setUserName(e.target.value)}
                />
                <input 
                    name="password"
                    type="text"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleNewUser}>Submit</button>
            </form>
        </div>
    )
}