import { useState, useEffect } from "react"
import { auth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [IsPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext()
    
    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            // signup
            const response = await auth.createUserWithEmailAndPassword(email, password)

            if(!response) {
                throw new Error("Could not complete signup")
            }

            // add display name to user
            await response.user.updateProfile({ displayName: displayName })

            // dispatch login action
            dispatch({type: "LOGIN", payload: response.user})

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
            
        } catch(err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
      
        }
    }
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { error, IsPending, signup }
}