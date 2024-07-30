import React, { useState, useEffect } from 'react';
import Widget from './widgets/Widget';
import TrackVisuals from '../TrackVisuals/TrackVisuals';
import { fetchData } from '../../services/api';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState({
        coolant: '',
        tire: '',
        brake: '',
        fuelLevel: '',
        fuelFlowRate: '',
        throttlePosition: '',
        rpm: '',
        airFuelRatio: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="dashboard">
            <div className="widgets-container">
                <Widget title="Coolant" value={data.coolant} />
                <Widget title="Tire" value={data.tire} />
                <Widget title="Brake" value={data.brake} />
                <Widget title="Current Fuel Level" value={data.fuelLevel} />
                <Widget title="Current Fuel Flow Rate" value={data.fuelFlowRate} />
                <Widget title="Throttle Position" value={data.throttlePosition} />
                <Widget title="RPM" value={data.rpm} />
                <Widget title="Air-Fuel Ratio" value={data.airFuelRatio} />
            </div>
            <TrackVisuals />
        </div>
    );
};

export default Dashboard;
