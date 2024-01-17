import { useEffect, useState } from "react";

export default function App() {
  const [output, setOutput] = useState("");
  const [amount, setAmount] = useState(1);
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [quoteCurrency, setQuoteCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchCurrencies() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${baseCurrency}&to=${quoteCurrency}`
        );
        const data = await res.json();
        console.log(data);
        setOutput(data.rates[quoteCurrency].toFixed(2));
        setIsLoading(false);
      }
      if (baseCurrency === quoteCurrency) return setOutput(amount);
      fetchCurrencies();
    },
    [amount, baseCurrency, quoteCurrency]
  );

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        /* disabled={isLoading} */
      />
      <select
        value={baseCurrency}
        onChange={(e) => setBaseCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={quoteCurrency}
        onChange={(e) => setQuoteCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {output} {quoteCurrency}
      </p>
    </div>
  );
}
