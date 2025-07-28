import './App.css'
import RewardsList from "./components/RewardsList.tsx";
import MathProblem from "./components/MathProblem.tsx";
import RewardPoints from "./components/RewardPoints.tsx";

function App() {
    return (
        <div className="bg-neutral-800 mx-auto max-w-xl text-center p-10 outline-1 rounded-lg m-5 text-gray-50">
            <h1 className="text-6xl m-5">Smile Challenge</h1>

            <RewardPoints />
            <RewardsList />
            <MathProblem />
        </div>
    )
}

export default App
