function Button(props) {
    const { onClick, text } = props;
    console.log('Button rendered!');
    return (
        <button type="button" onClick={onClick}>{text}</button>
    );
}
export default Button;