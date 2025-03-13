import React, { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
    const [message, setMessage] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            setMessage(response.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Disaster Management System</h1>
            <p>{message}</p>
        </div>
    );
}
export default App;