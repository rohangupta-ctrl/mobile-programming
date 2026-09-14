$(document).ready(function () {


    

    $(".profile-card").mouseenter(function () {

        $(this).css("background-color", "lightblue");

    });


   

    $(".profile-card").mouseleave(function () {

        $(this).css("background-color", "white");

    });


   

    $("#qrBtn").click(function () {

        var details =
            "Name: Rohan Gupta\n" +
            "Address: Kathmandu, Nepal\n" +
            "Email: rg3552498@gmail.com\n" +
            "Phone: 9819225600\n" +
            "Education: BScIT Student";

        var qrURL =
            "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
            + encodeURIComponent(details);

        $("#qrImage").attr("src", qrURL);

        $("#popup").fadeIn();

    });


    

    $("#closeBtn").click(function () {

        $("#popup").fadeOut();

    });

});