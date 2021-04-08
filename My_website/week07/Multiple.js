// Multiple Calculator - Created for testing code and learning!
const deleteItems = (ev)=>{// When mouse clicks on button_2
    ev.preventDefault();
    var x = document.getElementById("output_1");
    var y = document.getElementById("output_2");
    while (x.hasChildNodes()) {
        x.removeChild(x.firstChild);
    }
    while (y.hasChildNodes()) {
        y.removeChild(y.firstChild);
    }
    document.forms[0].reset();
    document.getElementById('textarea_1').focus()
    
};
const live_update = (ev)=>{ // When Key event happens, execute this code:
    ev.preventDefault();
    //Start of Class:
    class Multiple_Num {
        constructor(multi_num, loop_num) {
            this.multiple = multi_num;
            this.loop_num = loop_num;
      
            this.display_1 = function(){
                return "You Entered: " + this.multiple;
            }
            this.display_2 = function() {
                var text = "";
                for(var i=1; i<=this.loop_num; i++) {
                    text +=  i + " * " + this.multiple + " = " + i*this.multiple + "<br>";
                }
                return text
            }
        }
    }// End of class
    num = textarea_1.value; // set num value
    //document.getElementById("test").innerHTML = num; //Only uncomment for testting
    var c = new Multiple_Num(num, 10); //Create object and pass parameters
    document.getElementById("output_1").innerHTML = c.display_1(); //Display object 1st display
    document.getElementById("output_2").innerHTML = c.display_2(); //Display object 2nd display
}

  

document.addEventListener('DOMContentLoaded', ()=>{ //Listen for events after page loads:
    
    document.getElementById('btn_1').addEventListener('click', deleteItems);// Listen for mouse click
    document.getElementById('textarea_1').addEventListener('keyup', live_update);// Listen for key release
});
