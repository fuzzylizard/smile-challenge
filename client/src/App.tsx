import './App.css'
import RewardsList from "./components/RewardsList.tsx";

function App() {
    return (
        <>
            <h1>Smile Challenge</h1>
            <h3>Your Points</h3>
            <h2>120456</h2>
            <ul>
                <li>Ways to earn</li>
                <li>Ways to redeem</li>
                <li>Your Activity</li>
            </ul>

            <RewardsList/>
        </>
    )
}

export default App
