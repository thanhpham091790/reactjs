function Car(props) {
    let { carinfo } = props;
    let [brand, model, mile, color] = carinfo;
    return (
        <>
            <h1>Hello my name is Thanh Pham. I drive a {color} {brand} {model}, and it's {mile} miles.</h1>
        </>
    );
}

export default Car;