import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [benificiaryId, setBenificiaryId] = useState(null);

    return (
        <UserContext.Provider value={{ benificiaryId, setBenificiaryId }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
