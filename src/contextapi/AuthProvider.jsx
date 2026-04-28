import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext =  createContext();

export default function AuthProvider({children}) {
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState([]);
    const [value, setvalue] = useState('New');

    useEffect(() => {
        fetchAllData(value);
    }, [value]);

    const fetchAllData = (query) => {
        setloading(true);
        fetchData(`search/?q=${query}`).then(({contents}) => {
            console.log(contents);
            setdata(contents);
            setloading(false);
        });
    };

    return (
    <AuthContext.Provider value={{ loading, data, value, setvalue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
