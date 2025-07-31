import {useState} from "react";

function MathProblem() {
    const [solution, setSolution] = useState("")

    function handleSubmitMathProblem() {
        console.log("Submit...");
        
    }

    return (
        <div>
            <p>For 100 Reward Points, Solve The Following</p>
            5 + 5 =
            <input
                type="text"
                value={solution}
                onChange={(e) => {
                    setSolution(e.target.value)
                }}
                className="border-1 p-2 rounded-lg m-2 w-32 border-neutral-600"/>
            <button onClick={handleSubmitMathProblem}>Submit</button>
        </div>
    );
}

export default MathProblem;
