
import Car from './Car';

function Garage() {
    let carinfo = { model: "Mustang", year: 1969 };

    return (
        <>
            <h1>Who live in garage ?</h1>
            <Car carinfo={carinfo} />
        </>
    );
}

export default Garage;