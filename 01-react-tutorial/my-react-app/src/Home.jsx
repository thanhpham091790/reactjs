import { useState, useEffect } from "react";

const Home = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    console.log(data);

    return (
        <>
            {data && data.map(item => <p key={item.id}>{item.title}</p>)}
        </>
    );
}

export default Home;