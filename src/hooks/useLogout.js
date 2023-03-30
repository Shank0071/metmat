import { useEffect, useState } from "react"
import { auth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useLogout = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [IsPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null)
        setIsPending(true)

        // sign the user out
        try {
            await auth.signOut()

            // dispatch logot action
            dispatch({ type: "LOGOUT" })

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
    return { logout, error, IsPending }

}