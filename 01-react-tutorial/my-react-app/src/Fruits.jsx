function Fruits() {
    const fruits = ['Cherry', 'Apple', 'Banana'];
    return (
        <>
            <h2>My Favorite Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </>
    );
}

export default Fruits;