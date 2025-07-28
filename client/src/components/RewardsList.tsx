import {useEffect, useState} from "react";

interface Reward {
    id: number;
    name: string;
    cost: string;
    image: string;
}

function RewardsList() {
    const [rewards, setRewards] = useState([]);

    async function fetchRewards() {
        try {
            const response = await fetch("http://127.0.0.1:3000/rewards.json");
            if (response.ok) {
                const json: [] = await response.json();
                setRewards(json);
            } else {
                throw response;
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchRewards();
    }, []);

    return (
        <div>
            <h3>Loyalty Rewards</h3>
            <p>Please select the reward you would like to </p>
            <div className="reward-list">
                {rewards.map((reward: Reward) => (
                    <div key={reward.id}>
                        Image: {reward.image}
                        Name: {reward.name}, Cost: {reward.cost}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RewardsList;
