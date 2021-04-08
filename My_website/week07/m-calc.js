//JavaScript File
// Morgage Calculator - Created for Week 07 assignment
const calculate = (ev)=>{
    ev.preventDefault();

    //Get the input node values:
    let a = apr.value;
    let t = term.value;
    let amnt = amount.value;


    
    // Doing the Math:
    t *= 12;
    a /= 1200;
    amnt *= (a * ((1 + a) ** t)) / (((1 + a) ** t) - 1);
    let payment = amnt.toFixed(2);

    if (a == null || isNaN(a) || a == " "){
        document.getElementById('payment').innerHTML = "APR input is required";
        document.getElementById('apr_error').innerHTML = "APR must be 0% - 25%";
        document.getElementById('apr_error').style.textShadow = '0px 0px 10px red';
        document.getElementById('apr').style.boxShadow = '0px 0px 10px red inset';
        document.getElementById("apr").focus();
    } else if (t == null || isNaN(t) || t == " "){
        document.getElementById('payment').innerHTML = "Lone Term input is required";
        document.getElementById('term_error').innerHTML = "Enter an number that is 0 - 40";
        document.getElementById('term_error').style.textShadow = '0px 0px 10px red';
        document.getElementById('term').style.boxShadow = '0px 0px 10px red inset';
        document.getElementById("term").focus();
    } else if (amnt == null || isNaN(amnt) || amnt == " "){
        document.getElementById('payment').innerHTML = "Enter a Lone Amount";
        document.getElementById('amount_error').innerHTML = "Enter Your Lone Amount";
        document.getElementById('amount_error').style.textShadow = '0px 0px 10px red';
        document.getElementById('amount').style.boxShadow = '0px 0px 10px red inset';
        document.getElementById("amount").focus();
    } else if (payment == null || isNaN(payment) || payment == " "){
        document.getElementById('payment').innerHTML = "Calculation Error, recheck your numbers, no letters allowed";
        document.getElementById('payment').style.textShadow = '0px 0px 10px red';
    } else {
        //\B looks for a word boundary, ? says what to look for, \d looks for 3 digits in a row:
        payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('payment').innerHTML = `Monthly Payment = $${payment}`
        document.getElementById('payment').style.textShadow = 'none';
    }   
}

const clear = (ev)=>{// When mouse clicks on 'clear' button:
    ev.preventDefault();
    //clear apr 
    document.getElementById("apr").value = null;
    const apr_er = document.getElementById("apr_error");
    while (apr_er.hasChildNodes()) {
        apr_er.removeChild(apr_er.firstChild);
    }
    //clear term
    document.getElementById("term").value = null;
    const term_er = document.getElementById("term_error");
    while (term_er.hasChildNodes()) {
        term_er.removeChild(term_er.firstChild);
        //document.getElementById('apr').inputField.value = " ";
    }
    //clear amount
    document.getElementById("amount").value = null;
    const amount_er = document.getElementById("amount_error");
    while (amount_er.hasChildNodes()) {
        amount_er.removeChild(amount_er.firstChild);
    }
    // clear payment
    const pay_cl = document.getElementById("payment");
    while (pay_cl.hasChildNodes()) {
        pay_cl.removeChild(pay_cl.firstChild);
    }
    //inputField.value = " ";
    //document.forms[0].reset();
    document.getElementById("apr").focus(); // put cursor inside apr input Field
};




const update = (ev)=>{ // When Key-Release event happens, execute this code:
    ev.preventDefault();// don't refresh if button is pressed

    //Get the node values:
    let a = apr.value;
    let t = term.value;
    let amnt = amount.value;

    // APR input validation:
    if (a < 0.00 || a > 25.00){
        document.getElementById('apr').style.boxShadow = '0px 0px 10px red inset';
        document.getElementById('apr_error').innerHTML = "You entered: " + a + "%, APR must be 0% - 25%";
        document.getElementById('apr_error').style.textShadow = '0px 0px 10px red';
        document.getElementById("apr").value = null;
        document.getElementById("apr").focus();
    } else if (a.includes(".")){ // Decimal input validation, only 2 decimal places allowed:
        var numb = a.split(".")[1];
        a = (a.indexOf(".") >= 0) ? (a.substr(0, a.indexOf(".")) + a.substr(a.indexOf("."), 3)) : a;
        if(numb!=null && numb.length>2){
            document.getElementById('apr').style.boxShadow = '0px 0px 10px red inset';
            document.getElementById('apr_error').innerHTML = a + "% - Only 2 decimal places allowed";
            document.getElementById('apr_error').style.textShadow = '0px 0px 10px red';
            //document.getElementById("apr").value = null;
        } else {
            document.getElementById('apr_error').innerHTML = a + "%";
            document.getElementById('apr').style.boxShadow = 'none';
            document.getElementById('apr_error').style.textShadow = 'none';
        }
    } else {
        document.getElementById('apr_error').innerHTML = a + "%";
        document.getElementById('apr').style.boxShadow = 'none';
        document.getElementById('apr_error').style.textShadow = 'none';
    }
    
    // Term input validation
    if (t < 0 || t > 40){
        document.getElementById('term').style.boxShadow = '0px 0px 10px red inset';
        document.getElementById('term_error').innerHTML = "You Entered: " + t + ", enter an input that is 0 - 40";
        document.getElementById('term_error').style.textShadow = '0px 0px 10px red';
        document.getElementById("term").value = null;
        document.getElementById("term").focus();
    } else {
        document.getElementById('term_error').innerHTML = t + " years";
        document.getElementById('term').style.boxShadow = 'none';
        document.getElementById('term_error').style.textShadow = 'none';
        //t = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 0)) : t;
    }
    
    // ammount input validation, for decimal input only, no set max value:
    amnt = amnt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Place ',' at each thousanth place
    if (amnt.includes(".")){ // Decimal input validation, only 2 decimal places allowed:
        var numb = amnt.split(".")[1];
        amnt = (amnt.indexOf(".") >= 0) ? (amnt.substr(0, amnt.indexOf(".")) + amnt.substr(amnt.indexOf("."), 3)) : amnt;
        if(numb!=null && numb.length>2){
            document.getElementById('amount').style.boxShadow = '0px 0px 10px red inset';
            document.getElementById('amount_error').innerHTML = `$${amnt} - Only 2 decimal places allowed`
            document.getElementById('amount_error').style.textShadow = '0px 0px 10px red';
            //document.getElementById("amount").value = null;
        } else {
            document.getElementById('amount_error').innerHTML = `$${amnt}`
            document.getElementById('amount').style.boxShadow = 'none';
            document.getElementById('amount_error').style.textShadow = 'none';
        }
    } else {
        document.getElementById('amount_error').innerHTML = `$${amnt}`
        document.getElementById('amount').style.boxShadow = 'none';
        document.getElementById('amount_error').style.textShadow = 'none';
    }
    //document.getElementById('amount_error').innerHTML = "Amount Entered: $" + amnt;
}

document.addEventListener('DOMContentLoaded', ()=>{ //Listen for events after page loads:
    
    document.getElementById('calculate').addEventListener('click', calculate);// Listen for mouse click
    document.getElementById('clear').addEventListener('click', clear);// Listen for mouse click
    document.getElementById('apr').addEventListener('keyup', update);// Listen for key release
    document.getElementById('term').addEventListener('keyup', update);// Listen for key release
    document.getElementById('amount').addEventListener('keyup', update);// Listen for key release
});