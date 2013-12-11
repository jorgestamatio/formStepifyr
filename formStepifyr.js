/* Based on the formToWizard plugin by jankoatwarpspeed.com , modified to work better with CSS animations and Twitter Bootstrap*/

(function($) {
    $.fn.formStepifyr = function(options) {
        options = $.extend({  
            submitButton: "",
            animationNext: "fadeInRight",
            animationPrev: "fadeInLeft"
        }, options); 
        
        var element = this;

        var steps = $(element).find("fieldset");
        var count = steps.size();
        var submmitButtonName = "#" + options.submitButton;
        $(submmitButtonName).hide();

        // 2
        $(element).before("<ul id='steps' class='pagination'></ul>");

        steps.each(function(i) {
            $(this).wrap("<div id='step" + i + "' class='animated'></div>");
            $(this).append("<p id='step" + i + "commands'></p>");

            // 2
            var name = $(this).find("legend").html();
            // $("#steps").append("<li id='stepDesc" + i + "'>Step " + (i + 1) + "<span>" + name + "</span></li>");
            $("#steps").append("<li id='stepDesc" + i + "' class='disabled'><span>" + (i + 1) + "</span></li>");

            if (i == 0) {
                createNextButton(i);
                selectStep(i);
            }
            else if (i == count - 1) {
                $("#step" + i).hide();
                createPrevButton(i);
            }
            else {
                $("#step" + i).hide();
                createPrevButton(i);
                createNextButton(i);
            }
        });

        function createPrevButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Prev' class='prev btn btn-default'>< Back</a>");

            $("#" + stepName + "Prev").bind("click", function(e) {
                e.preventDefault();
                //$("#" + stepName).removeClass("fadeInRight").removeClass("fadeInLeft");
                $("#" + stepName).removeClass(options.animationPrev).removeClass(options.animationNext);
                $("#" + stepName).hide();
                $("#step" + (i - 1)).show();
                $("#step" + (i - 1)).addClass(options.animationPrev);
                $(submmitButtonName).hide();
                selectStep(i - 1);
            });
        }

        function createNextButton(i) {
            var stepName = "step" + i;
            $("#" + stepName + "commands").append("<a href='#' id='" + stepName + "Next' class='next btn btn-default pull-right'>Next ></a>");

            $("#" + stepName + "Next").bind("click", function(e) {
                e.preventDefault();
                $("#" + stepName).removeClass(options.animationPrev).removeClass(options.animationNext);
                $("#" + stepName).hide();
                $("#step" + (i + 1)).show();
                $("#step" + (i + 1)).addClass(options.animationNext);
                if (i + 2 == count)
                    $(submmitButtonName).show();
                selectStep(i + 1);
            });
        }

        function selectStep(i) {
            $("#steps li").removeClass("active");
            $("#stepDesc" + i).addClass("active");
        }

    }
})(jQuery); 
