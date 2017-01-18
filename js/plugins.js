/*global $,console*/

// scrollspy only
$('body').scrollspy({ target: '.navbar' });
// window ready
$(window).ready(function () {
    "use strict";
    var scrollup = $("#scrollup");
    //scroll function
    $(window).scroll(function () {
        //show&hide up button
        if ($(this).scrollTop() >= 500) {
            scrollup.show();
        } else {
            scrollup.hide();
        }
        //show&hide navbar with scroll
        if ($(this).scrollTop() > 0) {
            $(".container-fluid").addClass("navbar-fixed-top");
            $(".navbar").css({"height": "50px"});
            $(".container-fluid").css({
                "background-color": "rgba(255,255,255,1)",
                "box-shadow": "0 5px 10px rgba(0,0,0,0.5)",
                "padding-right": "30px",
                "height": "50px"
            });
            $(".navbar-brand > img").css({"height": "45px"});
            $(".navbar-header button").css({"margin-top": "8px"});
            $(".nav > li > a").css({
                "color": "#000",
                "line-height": "50px",
                "padding-top": "0px",
                "padding-bottom": "0px"
            });
            $(".navbar-toggle .icon-bar").css({"background-color": "#000"});
        } else {
            $(".container-fluid").removeClass("navbar-fixed-top");
            $(".navbar").css({"height": "100px"});
            $(".container-fluid").css({
                "background-color": "transparent",
                "box-shadow": "none",
                "padding-right": "15px",
                "height": "100px"
            });
            $(".navbar-brand > img").css({"height": "80px"});
            $(".navbar-header button").css({"margin-top": "30px"});
            $(".nav > li > a").css({
                "color": "#fff",
                "line-height": "70px",
                "padding-top": "10px",
                "padding-bottom": "10px"
            });
            $(".navbar-toggle .icon-bar").css({"background-color": "#fff"});
        }
    });
    //up button effect
    scrollup.click(function () {
        $("html,body").animate({ scrollTop : 0 }, 800);
    });
});

//send apply page
var apply = function () {
    "use strict";
    var body = "Cover letter: " + $("#applytext").val() + "<br>Link To C.V.: " + $("#applymail").val(),
        subject = "APPLY FORM from loca";
    $('#apply').modal('hide');
    window.sending(body, subject);
};
//send price list
var price = function () {
    "use strict";
    var body = "Name: " + $("#pricename").val() + "<br>E-mail: " + $("#pricemail").val() + "<br>Company name: " + $("#pricecompany").val() + "<br>Job title: " + $("#pricejob").val() + "<br>Message: " + $("#pricetext").val(),
        subject = "PRICE LIST FORM from loca";
    $('#price').modal('hide');
    window.sending(body, subject);
};
//send opinion page
var opinion = function () {
    "use strict";
    var body = "Email: " + $("#opinionmail").val() + "<br>Title: " + $("#opiniontitle").val() + "<br>Description: " + $("#opiniontext").val(),
        subject = "OPINION FORM from loca";
    $('#opinion').modal('hide');
    window.sending(body, subject);
};
//send sales page
var sales = function () {
    "use strict";
    var body = "Email: " + $("#salesmail").val() + "<br>Service: " + $("#salesservice").val() + "<br>Description: " + $("#salestext").val(),
        subject = "SALES FORM from loca";
    $('#sales').modal('hide');
    window.sending(body, subject);
};

//sending to mail
var sending = function (body, subject) {
    "use strict";
    var data = JSON.stringify({
        "Body": body,
        "Subject": subject,
        "TO": "ahmedammarsalah@gmail.com"
    }),
        xhr = new XMLHttpRequest();
    
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            if (this.readyState === 4 && this.responseText) {
                $(".success").fadeIn().delay(3000).fadeOut();
            } else {
                $(".fail").fadeIn().delay(3000).fadeOut();
            }
        }
    });

    xhr.open("POST", "http://yakensolution.cloudapp.net/SendEmail/Api/SendMail/SendMail");
    xhr.setRequestHeader("content-type", "application/json");

    xhr.send(data);
};