import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import './Sidebar.css';

function Sidebar() {

    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleLogout = () => {
        // Clear user data (if any), for example, localStorage
        localStorage.removeItem('userToken'); // Adjust based on your auth mechanism

        // Navigate to login page
        navigate('/');
    };

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h3 className="text_none">Admin Dashboard</h3>
                </Link>
            </div>

            <div className="links">
                <ul>
                    <p className="spann">Main</p>
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Dashboard
                        </li>
                    </Link>

                    <p className="spann">Lists</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> User
                        </li>
                    </Link>
                    <li>
                        <BarChartIcon className="icon" /> SubAdmin
                    </li>

                    <p className="spann">Settings</p>
                    <li>
                        <AccountCircleIcon className="icon" /> Profile
                    </li>
                    <li>
                        <SettingsRoundedIcon className="icon" /> Settings
                    </li>
                    <li onClick={handleLogout} style={{ cursor: 'pointer' }}>
                        <LogoutIcon className="icon" /> Log Out
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
