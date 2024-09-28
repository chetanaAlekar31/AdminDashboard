
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const EmailVerification = () => {
    const [message, setMessage] = useState('');
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const token = query.get('token');

        const verifyEmail = async () => {
            try {
                const res = await fetch(`/api/verify-email?token=${token}`);
                const data = await res.json();
                if (res.status === 200) {
                    setMessage(data.message);
                } else {
                    setMessage(data.message || "Email verification failed");
                }
            } catch (err) {
                console.log("Verification error:", err);
                setMessage("Email verification failed");
            }
        };

        if (token) {
            verifyEmail();
        } else {
            setMessage("Invalid verification link");
        }
    }, [location.search]);

    return (
        <div className="email-verification">
            <h2>{message}</h2>
        </div>
    );
};

export default EmailVerification;
