
$(document).ready(function(){
    $("form").submit(enterDay);



    function enterDay(event) {
        //prevent form from flashing and resetting
        event.preventDefault();



        var weekday = $("input[name=weekday]:checked").val();


        $("p").text(output);







        switch (weekday) {
            case "Monday":
                $("#output").text("Monday office hours: 9:00 AM until 11:00 AM");
                break;
            case "Tuesday":
                $("#output").text("Tuesday office hours: 9:00 AM until 11:00 AM");
                break;
            case "Wednesday":
                $("#output").text("Wednesday office hours: 1:00 PM until 3:00 PM");
                break;
            case "Thursday":
                $("#output").text("Thursday office hours: 1:00 PM until 3:00 PM");
                break;
            case "Friday":
                $("#output").text("Friday office hours: 11:00 AM until 3:00 PM");
                break;
            case "Saturday":
                $("#output").text("Have a great weekend! Office hours are Monday thru Friday.");
                break;
            case "Sunday":
                $("#output").text("Have a great weekend! Office hours are Monday thru Friday.");
                break;
            default:
                $("#output").text("Enjoy the weekend see you next week.");

        }
    }
    });







