const url='https://v6.exchangerate-api.com/v6/048c506166f17b6eb7b821a4/latest/USD'
const from_dropdown=document.getElementById('from_dropdown')
const to_dropdown=document.getElementById('to_dropdown')
const input_currency=document.getElementById('input_currency')
const btn=document.getElementById('convert')
const output=document.getElementById('output')

// create dropdown for both form and to 
function both(dropdown){
    currencies.forEach((currency)=>{
        const option=document.createElement('option')
        option.value=currency
        option.text=currency
        dropdown.add(option)
    })
}
both(from_dropdown)
both(to_dropdown)

from_dropdown.value='INR'
to_dropdown.value='USD'

let converCurrency = ()=>{
    const amt =input_currency.value
    const fromcurrency=from_dropdown.value;
    const tocurrency=to_dropdown.value;
   
    if(amt.length != 0){
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let fromExchangeRate=data.conversion_rates[fromcurrency] //convert from into doller
            let toExchangeRate=data.conversion_rates[tocurrency]//convert to into doller

            let convertedAmt=(amt/fromExchangeRate)*toExchangeRate
            console.log(convertedAmt)

            output.innerText=(`${amt} ${fromcurrency} = ${convertedAmt.toPrecision(3)} ${tocurrency}`)
          
        })
    }
    else{
        alert("Please Fill In Amount!")
    }
}

btn.addEventListener('click',converCurrency)
