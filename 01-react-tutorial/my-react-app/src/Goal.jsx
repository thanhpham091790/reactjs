import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Goal(props) {
    const { isGoal } = props;
    if (isGoal) {
        return <MadeGoal />;
    } else {
        return <MissedGoal />;
    }
}

export default Goal;