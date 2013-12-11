# formStepifyr

## A simple jQuery plugin to convert a long html form into a series of steps.

### Usage

Include formStepifyr.js

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

    $('#myForm').formStepifyr({submitButton: 'formSubmit'});


For more options

    $('#myForm').formStepifyr({
      submitButton: 'formSubmit', 
      animationPrev: 'fadeInLeft',
      animationNext: 'fadeInRight'
    });
