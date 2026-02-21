
import Car from './Car';

function Garage() {
    let carinfo = {
        brand: 'Toyota',
        color: 'Silver',
        mile: '70K',
        model: 'Camry'
    };

    return (
        <>
            <h1>Who live in garage ?</h1>
            <Car carinfo={carinfo} />
        </>
    );
}

export default Garage;