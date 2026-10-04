export default function FeedbackForm({ status = "typing" }) {
  return (
    <>
      <h1>Thanks for feedback!</h1>
      <p>How was your stay at The Prancing Pony?</p>
      <p>
        <textarea></textarea>
        <br />
        <button>Send</button>
      </p>
      <p>Sending...</p>
    </>
  );
}
