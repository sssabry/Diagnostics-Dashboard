import React from 'react';
import Widget from './widgets/Widget';
import TrackVisuals from '../TrackVisuals/TrackVisuals';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="widgets-container">
                <Widget title="Coolant" value="33°C" />
                <Widget title="Tire" value="35°C" />
                <Widget title="Brake" value="38°C" />
                <Widget title="Current Fuel Level" value="67%" />
                <Widget title="Current Fuel Flow Rate" value="2.46 L/H" />
                <Widget title="Throttle Position" value="56%" />
                <Widget title="RPM" value="750" />
                <Widget title="Air-Fuel Ratio" value="14:1" />
                {/* Add more widgets as needed */}
            </div>
            <TrackVisuals />
        </div>
    );
};

export default Dashboard;
