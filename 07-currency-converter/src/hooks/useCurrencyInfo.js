import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    
    useEffect(() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
            .then(response => response.json())
            .then((response) => {
                setData(response.rates);
                console.log(response.rates);  // Log the updated data
                console.table(response.rates); // Log the updated data in a table format
            })
            .catch(error => console.error("Error fetching the data:", error));
    }, [currency]);

    console.log(data);  // This might not show the updated data immediately
    return data;
}

export default useCurrencyInfo;
     
    //  The  useCurrencyInfo  hook fetches the currency exchange rates from the API and stores the data in the  data  state variable. The  data  state variable is returned from the hook. 
    //  The  useEffect  hook is used to fetch the data from the API whenever the  currency  prop changes. The  currency  prop is passed to the  useCurrencyInfo  hook from the  CurrencyConverter  component. 
    //  The  console.log(data)  statement outside the  useEffect  hook might not show the updated data immediately because the  data  state variable is updated asynchronously. 
    //  To log the updated data, you can use the  console.log  statement inside the  then  block of the  fetch  function. You can also use  console.table  to log the data in a table format. 
    //  In the  CurrencyConverter  component, you can use the  useCurrencyInfo  hook to fetch the currency exchange rates and display them in the component.