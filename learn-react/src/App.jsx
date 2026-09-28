export default function Form({ status = "submitting" }) {
  if (status === "success") {
    return <h1>Thank you!</h1>;
  }

  return (
    <form>
      <h1>City quiz</h1>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <p>
        <textarea disabled={status === "submitting"}></textarea>
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
      </p>
      {status === "submitting" && <p>Loading...</p>}
    </form>
  );
}
