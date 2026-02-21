function Car(props) {
    let { carinfo, children } = props;
    let { model, ...rest } = carinfo;
    return (
        <>
            <h1>Hello my name is Thanh Pham. I drive a {children} {model} car, and it has made since {rest.year}.</h1>
        </>
    );
}

export default Car;