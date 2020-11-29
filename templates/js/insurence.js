//Set up an associative array
//The keys represent the size of the cake
//The values represent the cost of the cake i.e A 10" cake cost's $35
var cake_prices = new Array();
cake_prices["Motor Bike"] = 1000;
cake_prices["Three wheeler"] = 1500;
cake_prices["Car"] = 2000;
cake_prices["Van"] = 2500;
cake_prices["Lorry"] = 3500;
cake_prices["Bus"] = 7500;

//Set up an associative array 
//The keys represent the filling type
//The value represents the cost of the filling i.e. Lemon filling is $5,Dobash filling is $9
//We use this this array when the user selects a filling from the form
var filling_prices = new Array();
filling_prices["None"] = 0;
filling_prices["year1"] = 500;
filling_prices["year2"] = 1000;
filling_prices["year3"] = 1500;
filling_prices["year4"] = 2000;
filling_prices["year5"] = 2500;
filling_prices["year5more"] = 3000;
filling_prices["year10more"] = 3500;




// getCakeSizePrice() finds the price based on the size of the cake.
// Here, we need to take user's the selection from radio button selection
function getCakeSizePrice()
{
    var cakeSizePrice = 0;
    //Get a reference to the form id="insurenceform"
    var theForm = document.forms["insurenceform"];
    //Get a reference to the cake the user Chooses name=selectedCake":
    var selectedCake = theForm.elements["selectedcake"];
    //Here since there are 4 radio buttons selectedCake.length = 4
    //We loop through each radio buttons
    for (var i = 0; i < selectedCake.length; i++)
    {
        //if the radio button is checked
        if (selectedCake[i].checked)
        {
            //we set cakeSizePrice to the value of the selected radio button
            //i.e. if the user choose the 8" cake we set it to 25
            //by using the cake_prices array
            //We get the selected Items value
            //For example cake_prices["Round8".value]"
            cakeSizePrice = cake_prices[selectedCake[i].value];
            //If we get a match then we break out of this loop
            //No reason to continue if we get a match
            break;
        }
    }
    //We return the cakeSizePrice
    return cakeSizePrice;
}

//This function finds the filling price based on the 
//drop down selection
function getFillingPrice()
{
    var cakeFillingPrice = 0;
    //Get a reference to the form id="insurenceform"
    var theForm = document.forms["insurenceform"];
    //Get a reference to the select id="filling"
    var selectedFilling = theForm.elements["filling"];

    //set cakeFilling Price equal to value user chose
    //For example filling_prices["Lemon".value] would be equal to 5
    cakeFillingPrice = filling_prices[selectedFilling.value];

    //finally we return cakeFillingPrice
    return cakeFillingPrice;
}

//candlesPrice() finds the candles price based on a check box selection
function candlesPrice()
{
    var candlePrice = 0;
    //Get a reference to the form id="insurenceform"
    var theForm = document.forms["insurenceform"];
    //Get a reference to the checkbox id="includecandles"
    var includeFlood = theForm.elements["includeFlood"];

    //If they checked the box set candlePrice to 5
    if (includeFlood.checked == true)
    {
        candlePrice = 500;
    }
    //finally we return the candlePrice
    return candlePrice;
}

function insciptionPrice()
{
    //This local variable will be used to decide whether or not to charge for the inscription
    //If the user checked the box this value will be 20
    //otherwise it will remain at 0
    var inscriptionPrice = 0;
    //Get a refernce to the form id="insurenceform"
    var theForm = document.forms["insurenceform"];
    //Get a reference to the checkbox id="includeinscription"
    var includeInscription = theForm.elements["includeinscription"];
    //If they checked the box set inscriptionPrice to 20
    if (includeInscription.checked == true) {
        inscriptionPrice = 2000;
    }
    //finally we return the inscriptionPrice
    return inscriptionPrice;
}

function calculateTotal()
{
    //Here we get the total price by calling our function
    //Each function returns a number so by calling them we add the values they return together
    var cakePrice = getCakeSizePrice() + getFillingPrice() + candlesPrice() + insciptionPrice();

    //display the result
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'block';
    divobj.innerHTML = "Total Price For the Insurence cover RS." + cakePrice;
    document.getElementById('calcTotal').value = cakePrice;
}

function hideTotal()
{
    var divobj = document.getElementById('totalPrice');
    divobj.style.display = 'none';
}