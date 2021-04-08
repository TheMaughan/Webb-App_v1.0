//JavaScript File
// Morgage Calculator - Created for Week 07 assignment
const submit = (ev)=>{
  ev.preventDefault();
  //Get the input node values:
  let fn, ln, add, pho, card, date;
  fn = first_name.value;
  ln = last_name.value;
  add = address.value;
  pho = phone.value;
  card = credit_card.value;
  date = exp_date.value;
  
  //valid form?
  //var marketForm = false;
    

  if (fn.trim() == ''){
    document.getElementById('validate').innerHTML = "Missing First Name";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('first_name').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("first_name").focus();
  } else if (ln.trim() == ''){
    document.getElementById('validate').innerHTML = "Missing Last Name";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('last_name').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("last_name").focus();
  } else if (add.trim() == ''){
    document.getElementById('validate').innerHTML = "Shipping Address is Required";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('address').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("address").focus();
  } else if (pho.trim() == ''){
    document.getElementById('validate').innerHTML = "Phone Number is Required";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('phone').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("phone").focus();
  } else if (card.trim() == ''){
    document.getElementById('validate').innerHTML = "Credit Card Payment is Required";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('credit_card').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("credit_card").focus();
  } else if (date.trim() == ''){
    document.getElementById('validate').innerHTML = "Card Experation Date is Missing";
    document.getElementById('validate').style.textShadow = '0px 0px 10px red';
    document.getElementById('exp_date').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById("exp_date").focus();
  } else {
    //Submit and validation affirmation display:
    document.getElementById('validate').innerHTML = "Thanks for your purchase " + fn + "!";
    //clear text validation shadow:
    document.getElementById('validate').style.textShadow = 'none';
    //clear input box shadows:
    document.getElementById('first_name').style.boxShadow = 'none';
    document.getElementById('last_name').style.boxShadow = 'none';
    document.getElementById('address').style.boxShadow = 'none';
    document.getElementById('phone').style.boxShadow = 'none';
    document.getElementById('credit_card').style.boxShadow = 'none';
    document.getElementById('exp_date').style.boxShadow = 'none';

    document.getElementById('total').innerHTML = 'Payment Submitted!';

    //marketForm = true;
  }
}

const clear = (ev)=>{// When mouse clicks on 'clear' button:
  ev.preventDefault();
  //reset all user input using jquery:
  $('#market_payment')[0].reset();
  $(':input').val('');
  $('#item').removeClass('');
  $('input[type=checkbox]').prop('checked',false);
  //clear validate notifications
  const valid = document.getElementById("validate");
  while (valid.hasChildNodes()) {
    document.getElementById('validate').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  const vPhone = document.getElementById("vPhone");
  while (vPhone.hasChildNodes()) {
    document.getElementById('vPhone').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  const phone_output = document.getElementById("phone_output");
  while (phone_output.hasChildNodes()) {
    document.getElementById('phone_output').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  const v_card = document.getElementById("vCard");
  while (v_card.hasChildNodes()) {
    document.getElementById('vCard').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  const v2card = document.getElementById("v2Card");
  while (v2card.hasChildNodes()) {
    document.getElementById('v2Card').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  const vDate = document.getElementById("vDate");
  while (vDate.hasChildNodes()) {
    document.getElementById('vDate').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }
  const total = document.getElementById("total");
  while (total.hasChildNodes()) {
    document.getElementById('total').innerHTML = "";
    //valid.removeChild(valid.firstChild);
  }

  document.getElementById('validate').style.textShadow = 'none';
  //clear input box shadows:
  document.getElementById('first_name').style.boxShadow = 'none';
  document.getElementById('last_name').style.boxShadow = 'none';
  document.getElementById('address').style.boxShadow = 'none';
  document.getElementById('phone').style.boxShadow = 'none';
  document.getElementById('credit_card').style.boxShadow = 'none';
  document.getElementById('exp_date').style.boxShadow = 'none';
  /*
    while (.hasChildNodes()) {
        .removeChild(.firstChild);
        //document.getElementById('first_name').inputField.value = " ";
    }*/
    //input.value = null;
    //document.forms[0].reset();
  document.getElementById("first_name").focus(); // put cursor inside first_name input Field
};

// add selection to Total:
function addTotal(){

  let inputs = document.getElementById('market_items').getElementsByTagName('input');
  let addItems = 0;

  for (var i = 0, num = inputs.length; i < num; i++) {
    if (inputs[i].checked){
      addItems += parseFloat(inputs[i].getAttribute('name'));
    }
  }
  document.getElementById('total').innerHTML = '$'+ addItems.toFixed(2); 
}

// Validate Phone input:
const validatePhone = ()=>{
  let phone_in = document.getElementById('phone').value;

  const pho = /(\d{3})(-)(\d{3}-\d{4})/y; //This Regex used to Reorganize the string groups.
  const patt = /^\d{3}-\d{3}-\d{4}$/y; //This Regex used to check the current pattern
  const sub = `1 ($1) $3`; // Set Pointers groups and inserts:
  const output = phone_in.replace(pho, sub) // Rewrite the string with set pointers and inserts:

  //Validate Phone Input:
  if(patt.test(phone_in)){
    document.getElementById('vPhone').style.textShadow = '0px 0px 10px green';
    document.getElementById('vPhone').innerHTML = "Phone Number Accepted";
    document.getElementById('phone_output').style.textShadow = '0px 0px 10px green';
    document.getElementById('phone_output').innerHTML = output; // Output the reorganized string:
  } else {
    document.getElementById('vPhone').style.textShadow = '0px 0px 10px red';
    document.getElementById('vPhone').innerHTML = "Enter a Valid 10 diget Phone Numbe";
    document.getElementById('phone_output').style.textShadow = '0px 0px 10px yellow';
    document.getElementById('phone_output').innerHTML = "NOTE: Phone number input will auto format"
    document.getElementById('phone').focus();
  }
  
}
// Auto Format Phone input:
function phoneHyphen(element) { // Add Hyphen to string
  let ele = document.getElementById(element.id);
    ele = ele.value.split('-').join(''); // Remove dash (-) if string doesn't match pattern.

    const patt = /(\d{3})(\d{3})(\d{4})/y; // Group the 10 diget number:
    const subst = `$1-$2-$3`; // Set pointer groups
    const result = ele.replace(patt, subst); // rewirite the user input with dashes
    document.getElementById(element.id).value = result; // display the new string
}

// Credit Card Validation:
const ValidateInput = (ev)=>{

  //I'm gonna do this part later... Credit Cards are complex!
  //const visaRegEx = /^(?:[4]{1})([0-9]{3})([0-9]{4})([0-9]{4})([0-9]{4})((?:[0-9]{3})?)$/y;
  //const visaDash = `4$1-$2-$3-$4`
  //const mastercardRegEx = /^(?:[5])([1-5])([0-9]{2})([0-9]{4})([0-9]{4})([0-9]{4})$/y;
  //const masterDash = `5$1$2-$3-$4-$5`
  //const amexpRegEx = /^([3])([47])(\d{2})(\d{6})(\d{5})$/y;// 4, 6, 5 grouping
  //const ameDash = `$1$2$3-$4-$5`;
  //const discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
  //const discDash = ``;

  let ccNum = document.getElementById('credit_card').value;

  const testing = /^\d{4}-\d{4}-\d{4}-\d{4}$/; // Auto hyphen works, the other cards are to complex...
  
  var isValid = false;

  var v_select = document.getElementById('visa').checked;
  var m_select = document.getElementById('master').checked;
  var d_select = document.getElementById('discover').checked;
  var a_select = document.getElementById('americaExpress').checked;
  // var t_select = document.getElementById('test').checked;
  if (v_select){
    document.getElementById('vCard').style.textShadow = '0px 0px 10px green';
    document.getElementById('vCard').innerHTML = "Visa Card";
    if (testing.test(ccNum)) {
      isValid = true;
    }
  } else if (m_select) {
    document.getElementById('vCard').style.textShadow = '0px 0px 10px green';
    document.getElementById('vCard').innerHTML = "Master Card";
    if(testing.test(ccNum)) {
      isValid = true;
    }
  } else if(d_select) {
    document.getElementById('vCard').style.textShadow = '0px 0px 10px green';
    document.getElementById('vCard').innerHTML = "Discover Card";
    if (testing.test(ccNum)) {
      isValid = true;
    }
  } else if(a_select) {
    document.getElementById('vCard').style.textShadow = '0px 0px 10px green';
    document.getElementById('vCard').innerHTML = "American Express Card";
    if (testing.test(ccNum)){
      isValid = true;
    } 
  } else if (v_select == false || m_select == false || d_select == false || a_select == false){
      isValid = false
      document.getElementById('vCard').innerHTML = "Select Your Credit Card Carrier";
      document.getElementById('vCard').style.textShadow = '0px 0px 10px red';
  } else {
      document.getElementById('vCard').innerHTML = "";
      document.getElementById('vCard').style.textShadow = 'none';
  }
  
  if(isValid) {
    document.getElementById('v2Card').innerHTML = "Card Number is valid";
    document.getElementById('v2Card').style.textShadow = '0px 0px 10px green';
  } else {
    document.getElementById('v2Card').innerHTML = "Card Number is invalid";
    document.getElementById('v2Card').style.textShadow = '0px 0px 10px red';
    document.getElementById('credit_card').focus();
  }

}
//For Credit Card, Live update on input... to bad I couldn't get this to work for the phone number.
function addHyphen(element) { // auto add Hyphen for Credit Card
  let ele = document.getElementById(element.id);
    ele = ele.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

    let finalVal = ele.match(/.{1,4}/g).join('-');
    document.getElementById(element.id).value = finalVal;
}
// Validate & auto format exp_date:
function addForSlash(element) { // Add forward slash to date:
  let elem = document.getElementById(element.id);
    ele = elem.value.split('/').join('');    // Remove dash (-) if mistakenly entered.

  const patt = /(\d{2})(\d{4})/y;
  const subst = `$1/$2`;
  const result = ele.replace(patt, subst);
  document.getElementById(element.id).value = result;

  strArray = elem.value.split('/');
  if (strArray[1] < 2021 && strArray[0] < 04){
    document.getElementById('exp_date').style.boxShadow = '0px 0px 5px red inset';
    document.getElementById('vDate').style.textShadow = '0px 0px 10px red';
    document.getElementById('vDate').innerHTML = "The card is expired";
    document.getElementById('exp_date').focus;
  } else if (strArray[0] < 0 || strArray[0] > 13){
    document.getElementById('exp_date').style.boxShadow = '0px 0px 5px red inset';
    document.getElementById('vDate').style.textShadow = '0px 0px 10px red';
    document.getElementById('vDate').innerHTML = "Invalid Month";
    document.getElementById('exp_date').focus;
  } else if (strArray[0] > 0 && strArray[0] < 13 && strArray[1] >= 2021){
    document.getElementById('exp_date').style.boxShadow = '0px 0px 10px green inset';
    document.getElementById('vDate').style.textShadow = '0px 0px 10px green';
    document.getElementById('vDate').innerHTML = "Expiration Date is Valid";
    document.getElementById('exp_date').focus;
  } else {
    document.getElementById('exp_date').style.boxShadow = '0px 0px 10px red inset';
    document.getElementById('vDate').style.textShadow = '0px 0px 10px red';
    document.getElementById('vDate').innerHTML = "Invalid Expiration Date";
  }

    //document.getElementById('vDate').innerHTML = strArray[0];
}

// I'm using at least 3 event listeners: 'DOMContentLoaded' = Listen for Load, 
                                        //'click' = Listen for mouse Click,
                                        //'keyup' = listen for Change after key release.
document.addEventListener('DOMContentLoaded', ()=>{ //Listen for the following events after page loads:
  // Form button
  document.getElementById('submit').addEventListener('click', submit);// Listen for mouse click button
  document.getElementById('clear').addEventListener('click', clear);// Listen for mouse click button
  // Credit Card radio:
  document.getElementById('visa').addEventListener('click', ValidateInput);// Radio Button 'click'
  document.getElementById('master').addEventListener('click', ValidateInput);// Radio Button 'click'
  document.getElementById('discover').addEventListener('click', ValidateInput);// Radio Button 'click'
  document.getElementById('americaExpress').addEventListener('click', ValidateInput);// Radio Button 'click'
  // Input onkeyup:
  document.getElementById('credit_card').addEventListener('keyup', ValidateInput);// update when the user releases a key
  document.getElementById('phone').addEventListener('keyup', validatePhone);// update when the user releases a key
});