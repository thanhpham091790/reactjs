function Car() {

    const cars = ['Ford', 'BMW', 'Audi'];

    return (
        <>
            <h1>My Cars:</h1>
            <ul>
                {cars.map((car, index) => <li key={index}>I'm a {car}</li>)}
            </ul>
        </>
    );
}

export default Car;