import React, { useEffect, useState } from 'react';
import AdminPage from './home';

const AdminPanel = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const token = sessionStorage.getItem("TOKEN")

    useEffect(() => {
        
        if(token === "123456"){
            setAuthenticated(true);
        }
        else{
            const password = prompt("Please enter your name:");
            if (password === "123456") {
                setAuthenticated(true);
                sessionStorage.setItem("TOKEN", "123456")
            } else {
                window.location.href = "/";
            }
        }
        
    }, [token]); 

    return (
        <>
            {authenticated ? <AdminPage/> : "hide"}
        </>
    );
}

export default AdminPanel;
