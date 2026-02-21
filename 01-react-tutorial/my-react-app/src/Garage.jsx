
import Car from './Car';

function Garage() {
    let carinfo = ['Toyota', 'Rav4', '80k', 'Black'];

    return (
        <>
            <h1>Who live in garage ?</h1>
            <Car carinfo={carinfo} />
        </>
    );
}

export default Garage;