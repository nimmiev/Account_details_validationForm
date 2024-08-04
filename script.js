$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 50
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 14,
                digits: true
            },
            age: {
                required: true,
                number: true,
                min: 18,
                max: 120
            },
            gender: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            address: {
                maxlength: 50
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 3 characters long",
                maxlength: "Your name must not exceed 50 characters"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                minlength: "Your phone number must be at least 10 characters long",
                maxlength: "Your phone number must not exceed 14 characters",
                digits: "Please enter a valid phone number"
            },
            age: {
                required: "Please enter your age",
                number: "Please enter a valid age",
                min: "Age must be at least 18",
                max: "Age must not exceed 120"
            },
            gender: {
                required: "Please enter your gender",
                minlength: "Gender must be at least 4 characters long",
                maxlength: "Gender must not exceed 15 characters"
            },
            address: {
                maxlength: "Address must not exceed 50 characters"
            },
            submitHandler: function (form) {
                form.submit();
            }

        }
    });
});