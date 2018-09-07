

    $('#bye1').hide();

$(document).ready(function () {
    $("#spinnow").click(function () {
        var loop;
        var random1;
        var pass = "Congratulations";
        var fail = "Sorry, Please Try Again";


        for (loop = 0; loop < 10; loop++) {
            random1 = Math.floor(Math.random() * 10);

            if (random1 == 0 || random1 > 3) {
                continue;
            }
            else if (random1 == 1) {
                $("#output").removeClass("one two three");
                $("#output").addClass("one");
                break;
            }
            else if (random1 == 2) {

                $("#output").removeClass("one two three");
                $("#output").addClass("two");
                break;
            }
            else if (random1 == 3) {

                $("#output").removeClass("one two three");
                $("#output").addClass("three");
                break;
            }
        };

        for (loop = 0; loop < 10; loop++) {
            random1 = Math.floor(Math.random() * 10);

            if (random1 == 0 || random1 > 3) {
                continue;
            }
            else if (random1 == 1) {
                $("#output1").removeClass("one two three");
                $("#output1").addClass("one");
                break;
            }
            else if (random1 == 2) {

                $("#output1").removeClass("one two three");
                $("#output1").addClass("two");
                break;
            }
            else if (random1 == 3) {

                $("#output1").removeClass("one two three");
                $("#output1").addClass("three");
                break;
            }
            
        };
 
        for (loop = 0; loop < 10; loop++) {
            random1 = Math.floor(Math.random() * 10);

            if (random1 == 0 || random1 > 3) {
                continue;
            }
            else if (random1 == 1) {
                $("#output2").removeClass("one two three");
                $("#output2").addClass("one");
                break;
            }
            else if (random1 == 2) {

                $("#output2").removeClass("one two three");
                $("#output2").addClass("two");
                break;
            }
            else if (random1 == 3) {

                $("#output2").removeClass("one two three");
                $("#output2").addClass("three");
                break;
            }
            
        };

        var boxcolor1 = document.getElementById("output").getAttribute("class");
        var boxcolor2 = document.getElementById("output1").getAttribute("class");
        var boxcolor3 = document.getElementById("output2").getAttribute("class");
        if (boxcolor1 == boxcolor2 && boxcolor1 == boxcolor3) {
            document.getElementById("msg").innerHTML = pass;
        }
        else {
            document.getElementById("msg").innerHTML = fail;
        }
   });
});

$(document).ready(function () {
 $("#spinnow").mouseover(function () {
         $("#spinnow").text("SPIN NOW");
            });
    $("#spinnow").mouseout(function () {
      $("#spinnow").text("spin again");
            });
});

    $("#bye").click(function () {
        $(".center").fadeOut(2000);
        $("p#bye1").fadeIn("slow");
        $("p#bye1").fadeIn(2000);
    });