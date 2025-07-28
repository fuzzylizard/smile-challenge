interface RewardPointsProps {
    points: number;
}

function RewardPoints({ points }: RewardPointsProps) {
    const formattedPoints = new Intl.NumberFormat('en-US').format(points);
    return (
        <>
            <h3 className="">Your Points</h3>
            <h2 className="text-4xl font-bold m-5">{formattedPoints}</h2>
        </>
    );
}

export default RewardPoints;