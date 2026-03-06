
import useFetch from "./useFetch";

const Home = () => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

    console.log(data);

    return (
        <>
            {data && data.map(item => <p key={item.id}>{item.title}</p>)}
        </>
    );
}

export default Home;