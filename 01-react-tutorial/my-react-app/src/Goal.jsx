import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Goal(props) {
    const { isGoal } = props;
    return (
        <>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </>
    );
}

export default Goal;