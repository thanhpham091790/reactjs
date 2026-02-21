function Football() {

    function shoot(x, y) {
        alert(y.type);
    }

    return (
        <>
            <button type="button" onClick={(event) => shoot('Goal!', event)}>Take the shoot</button>
        </>
    );
}

export default Football;