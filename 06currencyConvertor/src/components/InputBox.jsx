import React, {useId} from 'react';
//first component 

function InputBox({
    label,
    amount,
    onAmmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    
    className = "",
}) {
    const amountInputId = useId() // for creating unique id's in react 
   
// here only css and tailwindcss
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor= {amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                  
                </label>

                <input
                    id = {amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange= {(e) => onAmmountChange && onAmmountChange(Number(e.target.value))} //checking if it exists or not // more conceptual concept in this line 
                    />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    
                       {currencyOptions.map((currency) => ( <option key= {currency} value={currency}> 
                            {currency}
                        </option>))} 
                //remember the concept of keys in map (loop)
                </select>
            </div>
        </div>
    );
}

export default InputBox;