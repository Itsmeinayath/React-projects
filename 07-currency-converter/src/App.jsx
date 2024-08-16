import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';

function App() {

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr"); // Default to INR
  const [convertedAmount, setConvertedAmount] = useState(1);

  const CurrencyInfo = useCurrencyInfo(from);
  const options = Object.keys(CurrencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * CurrencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-gray-500"
    >
    <div className="w-full max-w-md mx-auto bg-slate-900 rounded-lg shadow-lg p-6">
        <h1 className="text-center text-3xl font-semibold text-orange-600 mb-6">Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(currency)}
              selectedCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
              inputClass="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative w-full h-12 mb-4 flex justify-center items-center">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-full px-3 py-2 shadow-md hover:bg-blue-600 transition duration-200 ease-in-out"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mb-6">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisable
              inputClass="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
