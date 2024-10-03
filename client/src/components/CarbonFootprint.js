import React, { useState } from 'react';
import '../css/CarbonFootprint.css';

const CarbonFootprint = () => {
    const [bodyType, setBodyType] = useState('');
    const [gender, setGender] = useState('');
    const [heatingEnergySource, setHeatingEnergySource] = useState('');
    const [showerFrequency, setShowerFrequency] = useState('');
    const [diet, setDiet] = useState('');
    const [transport, setTransport] = useState('');
    const [bagelType, setBagelType] = useState('');
    const [socialActivity, setSocialActivity] = useState('');
    const [monthlyGrocery, setMonthlyGrocery] = useState('');
    const [travelFrequency, setTravelFrequency] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [monthlyDistance, setMonthlyDistance] = useState('');
    const [wasteBagSize, setWasteBagSize] = useState('');
    const [pcTvUsage, setPcTvUsage] = useState('');
    const [newClothesMonthly, setNewClothesMonthly] = useState('');
    const [internetUsageDaily, setInternetUsageDaily] = useState('');
    const [energyEfficiency, setEnergyEfficiency] = useState('');
    const [recycling, setRecycling] = useState('');
    const [cookingMaterials, setCookingMaterials] = useState('');

    const submitData = () => {
        const data = {
            bodyType,
            gender,
            heatingEnergySource,
            showerFrequency,
            diet,
            transport,
            bagelType,
            socialActivity,
            monthlyGrocery,
            travelFrequency,
            vehicleType,
            monthlyDistance,
            wasteBagSize,
            pcTvUsage,
            newClothesMonthly,
            internetUsageDaily,
            energyEfficiency,
            recycling,
            cookingMaterials
        };
        // Call the API with the data
        console.log(data);
    };

    return (
        <div className='calculator-box'>
            <h1>Carbon Footprint Calculator</h1>
            <label>
                Body Type:
                <select value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
                    <option value="">Select</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="truck">Truck</option>
                    <option value="motorcycle">Motorcycle</option>
                </select>
            </label>
            <label>
                Gender:
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </label>
            <label>
                Heating Energy Source:
                <select value={heatingEnergySource} onChange={(e) => setHeatingEnergySource(e.target.value)}>
                    <option value="">Select</option>
                    <option value="electricity">Electricity</option>
                    <option value="gas">Gas</option>
                    <option value="wood">Wood</option>
                </select>
            </label>
            <label>
                Shower Frequency:
                <select value={showerFrequency} onChange={(e) => setShowerFrequency(e.target.value)}>
                    <option value="">Select</option>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                </select>
            </label>
            <label>
                Diet:
                <select value={diet} onChange={(e) => setDiet(e.target.value)}>
                    <option value="">Select</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="omnivore">Omnivore</option>
                </select>
            </label>
            <label>
                Transport:
                <select value={transport} onChange={(e) => setTransport(e.target.value)}>
                    <option value="">Select</option>
                    <option value="car">Car</option>
                    <option value="bike">Bike</option>
                    <option value="public">Public Transport</option>
                </select>
            </label>
            <label>
                Waste Bag Size:
                <select value={wasteBagSize} onChange={(e) => setWasteBagSize(e.target.value)}>
                    <option value="">Select</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>
            </label>
            <label>
                PC/TV Usage:
                <select value={pcTvUsage} onChange={(e) => setPcTvUsage(e.target.value)}>
                    <option value="">Select</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <label>
                New Clothes Monthly:
                <select value={newClothesMonthly} onChange={(e) => setNewClothesMonthly(e.target.value)}>
                    <option value="">Select</option>
                    <option value="none">None</option>
                    <option value="few">Few</option>
                    <option value="many">Many</option>
                </select>
            </label>
            <label>
                Internet Usage Daily:
                <select value={internetUsageDaily} onChange={(e) => setInternetUsageDaily(e.target.value)}>
                    <option value="">Select</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <label>
                Energy Efficiency:
                <select value={energyEfficiency} onChange={(e) => setEnergyEfficiency(e.target.value)}>
                    <option value="">Select</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <label>
                Recycling:
                <select value={recycling} onChange={(e) => setRecycling(e.target.value)}>
                    <option value="">Select</option>
                    <option value="none">None</option>
                    <option value="some">Some</option>
                    <option value="all">All</option>
                </select>
            </label>
            <label>
                Cooking Materials:
                <select value={cookingMaterials} onChange={(e) => setCookingMaterials(e.target.value)}>
                    <option value="">Select</option>
                    <option value="electric">Electric</option>
                    <option value="gas">Gas</option>
                    <option value="wood">Wood</option>
                </select>
            </label>
            <button onClick={submitData}>Submit</button>
        </div>
    );
};

export default CarbonFootprint;
