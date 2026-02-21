function Football() {

    function shoot(x) {
        alert(x);
    }

    return (
        <>
            <button type="button" onClick={() => shoot('Goal!')}>Take the shoot</button>
        </>
    );
}

export default Football;