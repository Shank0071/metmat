import { useEffect, useState } from "react"
import { auth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogin = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [IsPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null)
        setIsPending(true)

        // sign the user out
        try {
            const response = await auth.signInWithEmailAndPassword(email, password)

            // dispatch logot action
            dispatch({ type: "LOGIN", payload: response.user })

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
          
        } catch(err) {
            if (!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
         
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])
    return { login, error, IsPending }

}