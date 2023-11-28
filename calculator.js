let displayValue= ""; //store the current value

//function to appead(Attach) a value ti the display
function appendToDisplay(value){
    displayValue +=value;
    document.getElementById('display').value = displayValue;
}

//function to clear the display 
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

//Fuction to calculate and display the results
function calculateResult() {
    try{ 
        //Use eval() to evaluate  in the displayValue
        const result = eval(displayValue);

       //Update displayValue with the result
       displayValue = result;
       document.getElementById('display').value = result;
     } catch (error) {
        // Handle errors , such as dividing by zero
        displayValue = 'Error';
        document.getElementById('display').value = 'Error';
     }


}