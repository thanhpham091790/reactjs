export default function CategoryRow({ category }) {
    return (
        <tr className="category-row">
            <th colSpan="2">{category}</th>
        </tr>   
    );
}