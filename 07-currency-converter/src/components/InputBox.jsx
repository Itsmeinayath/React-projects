import React,{useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency ="inr",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {

    // useId() is a custom hook that generates a unique id for the input element.
    const amountInputId = useId();

    return (
        <div className={`bg-slate-300 p-3 rounded-lg text-sm flex  ${className}`}>
            <div className="w-1/2">
            
                <label htmlFor={amountInputId} className="text-black/400 mb-2 inline-block">
                    {label}
                </label>
                <input
                // useId() is a custom hook that generates a unique id for the input element.
                id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/400 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-400 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}

                >

                    {currencyOptions.map((Currency) => (
                        // Remember to add key prop to the option element.Because React uses the key prop to identify which items have changed, are added, or are removed.
                        <option key={Currency} value={Currency}>
                            {Currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
