# formStepifyr

## A simple jQuery plugin to convert a long html form into a series of steps.

### Usage 
Include formStepifyr.js

Call it on any form element like this:

    $('#myForm').formStepifyr({submitButton: 'formSubmit'});


For more options

    $('#myForm').formStepifyr({
      submitButton: 'formSubmit', 
      animationPrev: 'fadeInLeft',
      animationNext: 'fadeInRight'
    });
