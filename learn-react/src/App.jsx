export default function Form({ status = "success" }) {
  if (status === "success") {
    return <h1>Thank you!</h1>;
  }
}
