import React, { useState } from 'react';
import '../css/CarbonFootprint.css';

const CarbonFootprint = () => {
    const [bodyType, setBodyType] = useState('');
    const [gender, setGender] = useState('');
    const [heatingEnergySource, setHeatingEnergySource] = useState('');
    const [carbon_emission_result, setCarbonEmissionResult] = useState(0);
    const calculateBMI = (weight, height) => {
        const bmi = weight / (height * height);
        if (bmi < 18.5) return 'underweight';
        if (bmi >= 18.5 && bmi < 24.9) return 'normal';
        if (bmi >= 25 && bmi < 29.9) return 'overweight';
        return 'obese';
    };

    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    const handleCalculateBMI = () => {
        const bmiCategory = calculateBMI(weight, height);
        setBodyType(bmiCategory);
    };
    const [showerFrequency, setShowerFrequency] = useState('');
    const [diet, setDiet] = useState('');
    const [transport, setTransport] = useState('');
    const [wasteBagCount, setWasteBagCount] = useState(0);
    const [socialActivity, setSocialActivity] = useState('');
    const [monthlyGrocery, setMonthlyGrocery] = useState(0);
    const [travelFrequency, setTravelFrequency] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [monthlyDistance, setMonthlyDistance] = useState(0);
    const [wasteBagSize, setWasteBagSize] = useState('');
    const [pcTvUsage, setPcTvUsage] = useState(0);
    const [newClothesMonthly, setNewClothesMonthly] = useState(0);
    const [internetUsageDaily, setInternetUsageDaily] = useState(0);
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
            wasteBagCount,
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
        fetch("http://127.0.0.1:8000/get-data/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                setCarbonEmissionResult(data.carbon_emission_result);
            })
            .catch((error) => {
                console.error("Error:", error);
            }
        )
        // Call the API with the data
        console.log(data);
    };

    return (
        <div className='calculator-box'>
            <h1>Carbon Footprint Calculator</h1>
            <label>
                Weight (kg): 
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </label>
            <label>
                Height (m): 
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </label>
            <button onClick={handleCalculateBMI}>Calculate BMI</button>
            <label>
                Body Type: 
                <select value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
                    <option value="">Select</option>
                    <option value="underweight">Underweight</option>
                    <option value="normal">Normal</option>
                    <option value="overweight">Overweight</option>
                    <option value="obese">Obese</option>
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
                    <option value="natural gas">Gas</option>
                    <option value="wood">Wood</option>
                    <option value="coal">Coal</option>
                </select>
            </label>
            <label>
                Shower Frequency: 
                <select value={showerFrequency} onChange={(e) => setShowerFrequency(e.target.value)}>
                    <option value="">Select</option>
                    <option value="daily">Daily</option>
                    <option value="less frequently">Less frequently</option>
                    <option value="more frequently">More frequently</option>
                    <option value="twice a day">Twice a day</option>
                </select>
            </label>
            <label>
                Diet: 
                <select value={diet} onChange={(e) => setDiet(e.target.value)}>
                    <option value="">Select</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="omnivore">Omnivore</option>
                    <option value="pescatarian">Pescatarian</option>
                </select>
            </label>
            <label>
                Transport: 
                <select value={transport} onChange={(e) => setTransport(e.target.value)}>
                    <option value="">Select</option>
                    <option value="private">Private</option>
                    <option value="walk/bicycle">Walk/Bicycle</option>
                    <option value="public">Public Transport</option>
                </select>
            </label>

            <label>
                Vehicle Type:
                <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
                    <option value="">Select</option>
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="lpg">LPG</option>
                </select>
            </label>
            <label>
                Vehicles Monthly Distance:
                <input type="number" value={monthlyDistance} onChange={(e) => setMonthlyDistance(e.target.value)} />
            </label>


            <label>
                Social Activity:
                <select value={socialActivity} onChange={(e) => setSocialActivity(e.target.value)}>
                    <option value="">Select</option>
                    <option value="often">Often</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="never">Never</option>
                </select>
            </label>
            <label>
                Monthly Grocery bill :
                <input type="number" value={monthlyGrocery} onChange={(e) => setMonthlyGrocery(e.target.value)} />
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
                Air Travel Frequency:
                <select value={travelFrequency} onChange={(e) => setTravelFrequency(e.target.value)}>
                    <option value="">Select</option>
                    <option value="never">Never</option>
                    <option value="rarely">Rarely</option>
                    <option value="frequency">Frequently</option>
                    <option value="very frequently">Very Frequently</option>
                </select>
            </label>
            <label>
                Weekly Waste Bag count :
                <input type="number" value={wasteBagCount} onChange={(e) => setWasteBagCount(e.target.value)} />
            </label>


            <label>
                PC/TV Usage: 
                <input type="number" value={pcTvUsage} onChange={(e) => setPcTvUsage(e.target.value)} />
            </label>
            <label>
                New Clothes Monthly: 
                <input type="number" value={newClothesMonthly} onChange={(e) => setNewClothesMonthly(e.target.value)} />
            </label>
            <label>
                Internet Usage Daily: 
                <input type="number" value={internetUsageDaily} onChange={(e) => setInternetUsageDaily(e.target.value)} />
            hour</label>
            <label>
                Energy Efficiency: 
                <select value={energyEfficiency} onChange={(e) => setEnergyEfficiency(e.target.value)}>
                    <option value="">Select</option>
                    <option value="no">No</option>
                    <option value="sometimes">Sometimes</option>
                    <option value="yes">Yes</option>
                </select>
            </label>
            <label>
                Recycling: 
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="Metal"
                            checked={recycling.includes('Metal')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setRecycling((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Metal
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Paper"
                            checked={recycling.includes('Paper')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setRecycling((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Paper
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Plastic"
                            checked={recycling.includes('Plastic')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setRecycling((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Plastic
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Glass"
                            checked={recycling.includes('Glass')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setRecycling((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Glass
                    </label>
                </div>

            </label>
            <label>
                Cooking Materials: 
                <div>
                    <label>
                        <input
                            type="checkbox"
                            value="Stove"
                            checked={cookingMaterials.includes('Stove')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setCookingMaterials((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Stove
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Oven"
                            checked={cookingMaterials.includes('Oven')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setCookingMaterials((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Oven
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Microwave"
                            checked={cookingMaterials.includes('Microwave')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setCookingMaterials((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Microwave
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Grill"
                            checked={cookingMaterials.includes('Grill')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setCookingMaterials((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Grill
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Airfryer"
                            checked={cookingMaterials.includes('Airfryer')}
                            onChange={(e) => {
                                const value = e.target.value;
                                setCookingMaterials((prev) =>
                                    prev.includes(value)
                                        ? prev.filter((item) => item !== value)
                                        : [...prev, value]
                                );
                            }}
                        />
                        Airfryer
                    </label>
                </div>
            </label>
            <button onClick={submitData}>Submit</button>

            <div className='result-box'>
                <h2>Carbon Footprint: {carbon_emission_result}</h2>

            </div>

        </div>
    );
};

export default CarbonFootprint;
