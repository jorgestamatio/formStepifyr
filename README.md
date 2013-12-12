# formStepifyr

A simple jQuery plugin to convert a long html form into a series of steps.

### Usage

Include formStepifyr.js

If you wish to add CSS trasitions you can include animate.css [https://github.com/daneden/animate.css] or you can declare your own animations.


#### HTML

    <form id="myForm" action="">

        <fieldset>
          <legend>First Step</legend>

            <-- input fields -->

        </fieldset>

        <fieldset>
          <legend>Second Step</legend>

            <-- input fields -->

        </fieldset>

        <fieldset>
          <legend>Third Step</legend>

            <-- input fields -->

            <input type="submit" id="formSubmit">

        </fieldset>

    </form> 

####  Javascript

Call it on any form element like this:

    $('#myForm').formStepifyr();


For more options

    $('#myForm').formStepifyr({
      submitButton: 'formSubmit',  // lets you specify the id of the submit. useful if you are using other than a input[type="submit"] 
      animationPrev: 'fadeInLeft', // adds this class to the prev element on show in case you want to use a CSS animation. 
      animationNext: 'fadeInRight', // adds this class to the next element on show in case you want to use a CSS animation. 
      stepCounter: false,  // show how many steps are there. (default: false).
      btnClassPrev: "",  // optional classes for the prev button (btn btn-default).
      btnClassNext: "" // optional classes for the prev button (btn btn-success).
    });
