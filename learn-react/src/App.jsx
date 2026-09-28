export default function Form({ status = "empty" }) {
  if (status === "success") {
    return <h1>Thank you!</h1>;
  }

  return (
    <>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>
        <textarea></textarea>
        <br />
        <button disabled={status === "empty"}>Submit</button>
      </p>
    </>
  );
}
