import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  // const [output, setOutput] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(function () {
    async function fetchCurrencies() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=EUR&to=USD`
      );
      const data = await res.json();
      console.log(data);
    }
    fetchCurrencies();
  }, [amount]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>output</p>
    </div>
  );
}
