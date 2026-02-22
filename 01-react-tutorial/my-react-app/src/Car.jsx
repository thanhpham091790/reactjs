function Car(props) {

    return (
        <>
            {props.brand && <h1>My car is {props.brand}!</h1>}
        </>
    );
}

export default Car;