
import Car from './Car';

function Garage() {
    let brand = 'Toyota';
    return (
        <>
            <h1>Who live in garage ?</h1>
            <Car color='salmon' name={brand} />
            <Car color='green' name='Subaru' />
        </>
    );
}

export default Garage;