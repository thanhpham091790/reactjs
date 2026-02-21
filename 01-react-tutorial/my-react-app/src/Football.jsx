function Football() {

    function shoot() {
        alert('Great shot!');
    }

    return (
        <>
            <button type="button" onClick={shoot}>Take the shoot</button>
        </>
    );
}

export default Football;