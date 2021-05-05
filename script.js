/** Add any JavaScript you need to this file. */
const openNav = () => {
    document.getElementById('mySidenav').style.width ="15%";
  }

  const closeNav = () => {
    document.getElementById('mySidenav').style.width ="0%";
  }

  //form validation

var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var disclose = document.getElementById('op');
const form = document.getElementById('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
   
    let input = [];

    // First Name Validation

    if(fName.value === '' || fName.value == null){
        input.push("First Name is required");
    }

    var a = /^[a-z]/;

    if(fName.value.match(a)){
        input.push("FIRST NAME: First character must be capital");
    }
            var inputValue = fName.value.trim();
            var flag=false;
        inputValue = inputValue.toUpperCase();
        for (var i = 0; i < inputValue.length && flag!=true; i++) {
            // check all character are letters
            if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z" ) { 
                input.push("FIRST NAME: only alphabets are allowed");
                flag=true;
            }
        }

    // Last Name Validation

    if(lName.value === '' || lName.value == null){
      input.push("Last Name is required");
    }

    if(lName.value.match(a)){
      input.push("LAST NAME: First character must be capital");
    }

    var inputValue_ = lName.value.trim();
        inputValue_ = inputValue_.toUpperCase();
        var flag_ = false;
        for (var i = 0; i < inputValue_.length && flag_!=true; i++) {
            // check all character are letters
            if (inputValue_.charAt(i) < "A" || inputValue_.charAt(i) > "Z" ) { 
                input.push("LAST NAME: only alphabets are allowed");
                flag_=true; 
            }
        }

        
            var checked = false;
            var radio_num=document.formCss.about.length;
            for (var i = 0; i < radio_num; i++) {
                //if (document.formname.radioname[i].checked== true)
                if (document.formCss.about[i].checked) {
                checked = true;
                }
            }
            
            if(!checked){
                input.push("What is this about: Must ckeck one of the query");
            }
        

    // error messages

    if (input.length > 0) {
      e.preventDefault();
      error.innerText = input.join('\n\n');
    }

    if(input.length == 0){
      alert("Congratulations! Your information is submitted.");
    }
  })
 
// Clear the error messages
 
function  clearErrors() {
        document.querySelector('#error').innerHTML = " ";        
     } 

     var FormStuff = {
 
        init: function() {
          this.applyConditionalRequired();
          this.bindUIActions();
        },
       
        bindUIActions: function() {
          $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
        },
       
        applyConditionalRequired: function() {
         
          $(".require-if-active").each(function() {
            var el = $(this);
            if ($(el.data("require-pair")).is(":checked")) {
              el.prop("required", true);
            } else {
              el.prop("required", false);
            }
          });
         
        }
       
      };
      
      FormStuff.init();