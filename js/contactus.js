//contactus.js

$(function() {
    $('#submit').on('click', function() {
        $("#contactForm").validate({
            onsubmit: true
        });
        var name = $('name');
        var email = $('email');
    });
});
