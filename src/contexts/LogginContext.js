import { createContext, useState } from "react";

export const LoggedinContext = createContext();

export const LoggedinContextProvider = ({children}) => {
	const [isLoggedIn, setIsLoggedIn] = useState(true);
	const [isAdmin, setIsAdmin] = useState(true);

	return (
		<LoggedinContext.Provider value={{isLoggedIn, setIsLoggedIn, isAdmin}}>
			{children}
		</LoggedinContext.Provider>
	);
}