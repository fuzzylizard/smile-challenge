import './App.css'
import RewardsList from "./components/RewardsList.tsx";
import MathProblem from "./components/MathProblem.tsx";
import RewardPoints from "./components/RewardPoints.tsx";
import {useEffect, useState} from "react";

interface Points {
    points: number;
}

function App() {
    const [points, setPoints] = useState(0);

    useEffect(() => {
        async function fetchPoints() {
            try {
                const response = await fetch("http://127.0.0.1:3000/points");
                if (response.ok) {
                    const json : Points = await response.json();
                    setPoints(json.points)
                } else {
                    throw response
                }
            } catch(error) {
                console.error(error);
            }
        }
        fetchPoints();
    }, [])

    return (
        <div className="bg-neutral-900 mx-auto max-w-280 text-center p-10 rounded-lg m-5 text-gray-50 border-1 border-neutral-950 ">
            <h1 className="text-6xl m-5">Smile Challenge</h1>

            <RewardPoints points={points} />
            <RewardsList />
            <MathProblem />
        </div>
    )
}

export default App
