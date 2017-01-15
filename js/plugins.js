/*global $,console*/

// scrollspy only
$('body').scrollspy({ target: '.navbar' });
// window ready
$(window).ready(function () {
    "use strict";
    var scrollup = $("#scrollup");
    //show&hide navbar with scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            scrollup.show();
        } else {
            scrollup.hide();
        }
        if ($(this).scrollTop() > 0) {
            $(".head .navbar").addClass("navbar-fixed-top");
            $(".head .navbar img").fadeIn(1000);
            $(".head .navbar").css({
                "background-color": "rgba(255,255,255,1)",
                "box-shadow": "0 5px 10px rgba(0,0,0,0.5)"
            });
            $(".bodymain .head .nav > li > a").addClass("dark");
            $(".head").css("padding-top", "55.56px");
        } else {
            $(".head .navbar").removeClass("navbar-fixed-top container");
            $(".head .navbar img").fadeOut(1000);
            $(".head .navbar").css("background-color", "transparent");
            $(".head .navbar").css({
                "background-color": "transparent",
                "box-shadow": "none"
            });
            $(".bodymain .head .nav > li > a").removeClass("dark");
            $(".head").css("padding-top", "0px");
        }
    });
    //show&hide up button
    scrollup.click(function () {
        $("html,body").animate({ scrollTop : 0 }, 800);
    });
});
//window resize scrollify toggle and setting height manually for scrollify sections.
$(window).resize(function () {
    "use strict";
    if ($(window).width() < 1200) {
        $.scrollify.disable();
        $(".about, .services, .lang, .Industries, .download").css({"height": "auto"});
    } else {
        $.scrollify.enable();
        $(".about, .services, .lang, .Industries, .download").css({"height": $(window).height()});
    }
    
});

//window scrollify toggle and setting height manually for scrollify sections. (upon opening)
if ($(window).width() < 1200) {
    $.scrollify.disable();
    $(".about, .services, .lang, .Industries, .download").css({"height": "auto"});
} else {
    $.scrollify.enable();
    $(".about, .services, .lang, .Industries, .download").css({"height": $(window).height()});
}
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