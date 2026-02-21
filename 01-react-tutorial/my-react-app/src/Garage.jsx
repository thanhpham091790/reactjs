
import Car from './Car';

function Garage() {
    let years = [2017, 2027];
    let carinfo = { name: 'Toyota', model: 'Camry' };
    return (
        <>
            <h1>Who live in garage ?</h1>
            <Car years={years} carinfo={carinfo} />
        </>
    );
}

export default Garage;