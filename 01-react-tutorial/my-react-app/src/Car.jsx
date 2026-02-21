function Car(props) {
    console.log(props);
    return (
        <>
            <h2>In {props.years[0]} and {props.years[1]}, I bought a {props.carinfo.name} {props.carinfo.model} car.</h2>
        </>
    );
}

export default Car;