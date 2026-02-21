
import Car from './Car';

function Garage() {
    let carinfo = { model: "Camry", year: 2017 };

    return (
        <>
            <h1>Who live in garage ?</h1>
            <Car carinfo={carinfo}>Toyota</Car>
        </>
    );
}

export default Garage;