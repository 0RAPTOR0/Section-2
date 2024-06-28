'use client'
import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const router = useRouter();

    const [ currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [loggedIn, setLoggedIn] = useState(currentUser !==null);

    const logout = () => {
        localStorage.removeItem("user");
        // remove cookies
        document.cookie = "token; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setCurrentUser(null);
        setLoggedIn(false);
        router.push("/login");
    }

    return <AppContext.Provider value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
        logout
    }}>
        {childeren}
    </AppContext.Provider>

}

const useAppContext = () => useContext(AppContext);
export default useAppContext;