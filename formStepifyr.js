/* 
// Based on the formToWizard plugin by jankoatwarpspeed.com (kudos to him!). 
// modified to work better with CSS animations and Twitter Bootstrap
// Also added support for multiple instances of the plugin.
*/

(function($) {
    $.fn.formStepifyr = function(options) {
        options = $.extend({
            stepCounter: false,  
            submitButton: "",
            animationNext: "",
            animationPrev: "",
            btnClassPrev: "",
            btnClassNext: ""
        }, options); 
        
        var element = this;
        var elementId = $(element).attr("id");

        var steps = $(element).find("fieldset");
        var count = steps.size();

        if(options.submitButton != ""){
          var submitBtn = "#" + options.submitButton;
          console.log('using name');
        }else{
          var submitBtn = $(element).find("input[type='submit']");
          console.log('using input');
        }

        $(submitBtn).hide();

        if(options.stepCounter){
          $(element).before("<ul id='steps"+ elementId +"' class='pagination'></ul>");
        } 
        

        steps.each(function(i) {
            $(this).wrap("<div id='step" + elementId + i + "' class='step animated'></div>");
            $(this).append("<p id='step" + elementId + i + "commands'></p>");

            
            if(options.stepCounter){
              var name = $(this).find("legend").html();
              $("#steps" + elementId).append("<li id='stepDesc"+ elementId + i + "' class='disabled'><span>" + (i + 1) + "</span></li>");
            }


            if (i == 0) {
                createNextButton(i);
                selectStep(i);
            }
            else if (i == count - 1) {
                $("#step" + elementId + i).hide();
                createPrevButton(i);
            }
            else {
                $("#step" + elementId + i).hide();
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + elementId + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='prev " + options.btnClassPrev + "'>< Back</a>");

            $("#" + stepName + "Prev").bind("click", function(e) {

                e.preventDefault();
                $("#" + stepName).hide();
                $("#step" + elementId + (i - 1)).show();

                if(options.animationPrev != ''){
                   $("#" + stepName).removeClass(options.animationPrev).removeClass(options.animationNext);
                   $("#step" + elementId + (i - 1)).addClass(options.animationPrev);
                }

                $(submitBtn).hide();

                if(options.stepCounter){
                  selectStep(i - 1);
                }
            });


        }

        function createNextButton(i) {
          var stepName = "step" + elementId + i;
          $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='next " + options.btnClassNext + "'>Next ></a>");

          $("#" + stepName + "Next").bind("click", function(e) {
              e.preventDefault();
              var noError = true;

                $("#" + stepName).find('.form-control').each(function(){
                  if($( this ).val() == ''){
                    $( this ).parent(".form-group").addClass('has-error');
                    noError = false;
                  }
                });


                $("#" + stepName).find(".form-control").on('change blur',function(){
                  if($( this ).parent(".form-group").addClass('has-error')){
                    if($(this).val != ''){
                      $( this ).parent(".form-group").removeClass('has-error');
                    }
                  }
                });

                if(noError == true){
                  $("#" + stepName).hide();
                  $("#step" + elementId + (i + 1)).show();

                  if(options.animationPrev != '' && options.animationNext != ''){
                    $("#" + stepName).removeClass(options.animationPrev).removeClass(options.animationNext);
                    $("#step" + elementId + (i + 1)).addClass(options.animationNext);
                  }

                  if (i + 2 == count){
                    $(submitBtn).show();
                  }

                  if(options.stepCounter){
                    selectStep(i + 1);
                  }
                }
              

          });
        }

        function selectStep(i) {
          $("#steps"+ elementId+" li").removeClass("active");
          $("#stepDesc"+ elementId + i).addClass("active");
        }

    }
})(jQuery); 
