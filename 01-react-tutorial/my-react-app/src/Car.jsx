function Car(props) {
    let { carinfo } = props;
    let { model, ...rest } = carinfo;
    return (
        <>
            <h1>Hello my name is Thanh Pham. I drive a {model} car, and it has made since {rest.year}.</h1>
        </>
    );
}

export default Car;