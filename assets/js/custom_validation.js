// Register Form validation starts
$(document).ready(function () {
    $("#register_form").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            first_name: {required: true},
            user_type: {required: true},
            email_id: {required: true,email: true},
            mobile_number: {required: true},
            password: {required: true, minlength: 6, maxlength: 10}
        },
        messages: {

            first_name: {required: "Name is Required"},
            user_type: {required: "User Type is Required"},
            email_id: {required: "Email ID is Required"},
            mobile_number: {required: "Phone Number is Required"},
            password: {required: "Password is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// Register Form validation ends

// Login Form validation starts

$(document).ready(function () {
    $("#login_form").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            email_id: {required: true},
            password: {required: true}
        },
        messages: {
            email_id: {required: "Email ID is Required"},
            password: {required: "Password is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// Login Form validation ends

// Forget Password Form validation starts

$(document).ready(function () {
    $("#forget_form").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            email_id: {required: true}
        },
        messages: {
            email_id: {required: "Email ID is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// Forget Password Form validation ends

// Listing Form -1 validation starts
$(document).ready(function () {
    $("#listing_form_1").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            listing_name: {required: true},
            listing_address: {required: true},
            event_image: {required: true},
            event_address: {required: true},
            event_start_date: {required: true},
            event_time: {required: true},
            event_description: {required: true},
            event_email: {required: true,email: true},
            event_mobile: {required: true}
        },
        messages: {

            listing_name: {required: "Listing Name is Required"},
            event_contact_name: {required: "Contact Person Name is Required"},
            event_image: {required: "Event Image is Required"},
            listing_address: {required: "Listing Address is Required"},
            event_start_date: {required: "Event Date is Required"},
            event_time: {required: "Event Time is Required"},
            event_description: {required: "Event Description is Required"},
            event_email: {required: "Event Email ID is Required"},
            event_mobile: {required: "Phone Number is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// Listing Form -1 validation ends

// Event Form validation starts
$(document).ready(function () {
    $("#event_form").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            event_name: {required: true},
            event_contact_name: {required: true},
            event_image: {required: true},
            event_address: {required: true},
            event_start_date: {required: true},
            event_time: {required: true},
            event_description: {required: true},
            event_email: {required: true,email: true},
            event_mobile: {required: true}
        },
        messages: {

            event_name: {required: "Event Name is Required"},
            event_contact_name: {required: "Contact Person Name is Required"},
            event_image: {required: "Event Image is Required"},
            event_address: {required: "Event Address is Required"},
            event_start_date: {required: "Event Date is Required"},
            event_time: {required: "Event Time is Required"},
            event_description: {required: "Event Description is Required"},
            event_email: {required: "Event Email ID is Required"},
            event_mobile: {required: "Phone Number is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// Event Form validation ends

// Event Edit Form validation starts
$(document).ready(function () {
    $("#event_edit_form").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            event_name: {required: true},
            event_contact_name: {required: true},
            event_address: {required: true},
            event_start_date: {required: true},
            event_time: {required: true},
            event_description: {required: true},
            event_email: {required: true,email: true},
            event_mobile: {required: true}
        },
        messages: {

            event_name: {required: "Event Name is Required"},
            event_contact_name: {required: "Contact Person Name is Required"},
            event_address: {required: "Event Address is Required"},
            event_start_date: {required: "Event Date is Required"},
            event_time: {required: "Event Time is Required"},
            event_description: {required: "Event Description is Required"},
            event_email: {required: "Event Email ID is Required"},
            event_mobile: {required: "Phone Number is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// Event Edit Form validation ends

// Blog Form validation starts
$(document).ready(function () {
    $("#blog_form").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            blog_name: {required: true},
            blog_image: {required: true},
            blog_description: {required: true}
        },
        messages: {

            blog_name: {required: "Blog Name is Required"},
            blog_image: {required: "Blog Image is Required"},
            blog_description: {required: "Blog Description is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// Blog Form validation ends

// Blog Edit Form validation starts
$(document).ready(function () {
    $("#blog_edit_form").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            blog_name: {required: true},
            blog_description: {required: true}
        },
        messages: {

            blog_name: {required: "Blog Name is Required"},
            blog_description: {required: "Blog Description is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// Blog Edit Form validation ends


<!--All Listing page Enquiry Form Ajax Call And Validation starts-->

$("#all_enquiry_submit").click(function() {

    $("#all_enquiry_form").validate({
        rules: {
            enquiry_name: {required: true},
            enquiry_email: {required: true, email: true},
            enquiry_mobile: {required: true}

        },
        messages: {

            enquiry_name: {required: "Name is Required"},
            enquiry_email: {required: "Email ID is Required"},
            enquiry_mobile: {required: "Mobile Number is Required"}
        },

        submitHandler: function (form) { // for demo
            //form.submit();
            $.ajax({
                type: "POST",
                data: $("#all_enquiry_form").serialize(),
                url: "enquiry_submit.php",
                cache: true,
                success: function (html) {
                    alert(html);
                    if (html == 1) {
                        $("#enq_success").show();
                        $("#all_enquiry_form")[0].reset();
                    } else {
                        if (html == 3) {
                            $("#enq_same").show();
                            $("#all_enquiry_form")[0].reset();
                        }else {
                            $("#enq_fail").show();
                            $("#all_enquiry_form")[0].reset();
                        }
                    }

                }

            })
        }
    });
});
<!--All Listing page Enquiry Form Ajax Call And Validation ends-->


<!--Review Form Ajax Call And Validation starts-->

$("#review_submit").click(function() {
    $("#review_form").validate({
        rules: {
            rating: {required: true},
            review_name: {required: true},
            review_email: {required: true, email: true},
            review_mobile: {required: true},
            review_message: {required: true}

        },
        messages: {
            rating: {required: "Rating is Required"},
            review_name: {required: "Name is Required"},
            review_email: {required: "Email ID is Required"},
            review_mobile: {required: "Mobile Number is Required"},
            review_message: {required: "Write Some review"}
        },

        submitHandler: function (form) { // for demo
            //form.submit();
            $.ajax({
                type: "POST",
                data: $("#review_form").serialize(),
                url: "review_submit.php",
                cache: true,
                success: function (html) {
                    //  alert(html);
                    if (html == 1) {
                        $("#review_success").show();
                        $("#review_form")[0].reset();
                    } else {
                        $("#review_fail").show();
                        $("#review_form")[0].reset();
                    }

                }

            })
        }
    });
});
<!--Review Form Ajax Call And Validation ends-->

 <!--Pop Up Enquiry Form Detail Page Ajax Call And Validation starts-->
$("#popup_enquiry_submit").click(function() {
    $("#popup_enquiry_form").validate({
        rules: {
            enquiry_name: {required: true},
            enquiry_email: {required: true, email: true},
            enquiry_mobile: {required: true}

        },
        messages: {

            enquiry_name: {required: "Name is Required"},
            enquiry_email: {required: "Email ID is Required"},
            enquiry_mobile: {required: "Mobile Number is Required"}
        },

        submitHandler: function (form) { // for demo
            //form.submit();
            $.ajax({
                type: "POST",
                data: $("#popup_enquiry_form").serialize(),
                url: "enquiry_submit.php",
                cache: true,
                success: function (html) {
                    // alert(html);
                    if (html == 1) {
                        $("#pop_enq_success").show();
                        $("#popup_enquiry_form")[0].reset();
                    } else {
                        if (html == 3) {
                            $("#pop_enq_same").show();
                            $("#popup_enquiry_form")[0].reset();
                        }else {
                            $("#pop_enq_fail").show();
                            $("#popup_enquiry_form")[0].reset();
                        }
                    }

                }

            })
        }
    });
});
<!--Pop Up Enquiry Form Detail Page Ajax Call And Validation ends-->

<!-- Enquiry Form Detail Page Ajax Call And Validation starts-->
$("#detail_enquiry_submit").click(function() {
    $("#detail_enquiry_form").validate({
        rules: {
            enquiry_name: {required: true},
            enquiry_email: {required: true, email: true},
            enquiry_mobile: {required: true}

        },
        messages: {

            enquiry_name: {required: "Name is Required"},
            enquiry_email: {required: "Email ID is Required"},
            enquiry_mobile: {required: "Mobile Number is Required"}
        },

        submitHandler: function (form) { // for demo
            //form.submit();
            $.ajax({
                type: "POST",
                data: $("#detail_enquiry_form").serialize(),
                url: "enquiry_submit.php",
                cache: true,
                success: function (html) {
                    // alert(html);
                    if (html == 1) {
                        $("#detail_enq_success").show();
                        $("#detail_enquiry_form")[0].reset();
                    } else {
                        if (html == 3) {
                            $("#detail_enq_same").show();
                            $("#detail_enquiry_form")[0].reset();
                        }else {
                            $("#detail_enq_fail").show();
                            $("#detail_enquiry_form")[0].reset();
                        }
                    }

                }

            })
        }
    });
});
<!--Enquiry Form Detail Page Ajax Call And Validation ends-->


<!-- Profile page Enquiry Form Ajax Call And Validation starts-->
$(document).ready(function () {
    $("#profile_enquiry_form").validate({
        rules: {
            enquiry_name: {required: true},
            enquiry_email: {required: true, email: true},
            enquiry_mobile: {required: true}

        },
        messages: {

            enquiry_name: {required: "Name is Required"},
            enquiry_email: {required: "Email ID is Required"},
            enquiry_mobile: {required: "Mobile Number is Required"}
        },

        submitHandler: function (form) { // for demo
            //form.submit();
            $.ajax({
                type: "POST",
                data: $("#profile_enquiry_form").serialize(),
                url: "enquiry_submit.php",
                cache: true,
                success: function (html) {
                    // alert(html);
                    if (html == 1) {
                        $("#profile_enq_success").show();
                        $("#profile_enquiry_form")[0].reset();
                    } else {
                        if (html == 3) {
                            $("#profile_enq_same").show();
                            $("#profile_enquiry_form")[0].reset();
                        }else {
                            $("#profile_enq_fail").show();
                            $("#profile_enquiry_form")[0].reset();
                        }
                    }

                }

            })
        }
    });
});
<!--Profile page Enquiry Form Ajax Call And Validation ends-->

// User Ad Request Form validation starts
$(document).ready(function () {
    $("#create_ads_form").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        rules: {
            all_ads_price_id: {required: true},
            ad_start_date: {required: true},
            ad_end_date: {required: true},
            ad_enquiry_photo: {required: true},
            ad_link: {required: true}
        },
        messages: {

            all_ads_price_id: {required: "Ad Position is Required"},
            ad_start_date: {required: "Start Date is Required"},
            ad_end_date: {required: "End Date is Required"},
            ad_enquiry_photo: {required: "Ad is Required"},
            ad_link: {required: "Ad Link is Required"}
        },

        submitHandler: function (form) { // for demo
            form.submit();
        }
    });
});

// User Ad Request Form validation ends


<!-- Event Enquiry Form Event Detail Page Ajax Call And Validation starts-->
$(document).ready(function () {
    $("#event_detail_enquiry_form").validate({
        rules: {
            enquiry_name: {required: true},
            enquiry_email: {required: true, email: true},
            enquiry_mobile: {required: true}

        },
        messages: {

            enquiry_name: {required: "Name is Required"},
            enquiry_email: {required: "Email ID is Required"},
            enquiry_mobile: {required: "Mobile Number is Required"}
        },

        submitHandler: function (form) { // for demo
            //form.submit();
            $.ajax({
                type: "POST",
                data: $("#event_detail_enquiry_form").serialize(),
                url: "enquiry_submit.php",
                cache: true,
                success: function (html) {
                    // alert(html);
                    if (html == 1) {
                        $("#event_detail_enq_success").show();
                        $("#event_detail_enquiry_form")[0].reset();
                    } else {
                        if (html == 3) {
                            $("#event_detail_enq_same").show();
                            $("#event_detail_enquiry_form")[0].reset();
                        }else {
                            $("#event_detail_enq_fail").show();
                            $("#event_detail_enquiry_form")[0].reset();
                        }
                    }

                }

            })
        }
    });
});
<!-- Event Enquiry Form Event Detail Page Ajax Call And Validation ends-->


<!-- Blog Enquiry Form Blog Detail Page Ajax Call And Validation starts-->
$(document).ready(function () {
    $("#blog_detail_enquiry_form").validate({
        rules: {
            enquiry_name: {required: true},
            enquiry_email: {required: true, email: true},
            enquiry_mobile: {required: true}

        },
        messages: {

            enquiry_name: {required: "Name is Required"},
            enquiry_email: {required: "Email ID is Required"},
            enquiry_mobile: {required: "Mobile Number is Required"}
        },

        submitHandler: function (form) { // for demo
            //form.submit();
            $.ajax({
                type: "POST",
                data: $("#blog_detail_enquiry_form").serialize(),
                url: "enquiry_submit.php",
                cache: true,
                success: function (html) {
                    // alert(html);
                    if (html == 1) {
                        $("#blog_detail_enq_success").show();
                        $("#blog_detail_enquiry_form")[0].reset();
                    }
                     else {
                        if (html == 3) {
                            $("#blog_detail_enq_same").show();
                            $("#blog_detail_enquiry_form")[0].reset();
                        }else{
                            $("#blog_detail_enq_fail").show();
                            $("#blog_detail_enquiry_form")[0].reset();
                        }

                    }

                }

            })
        }
    });
});
<!-- Event Enquiry Form Event Detail Page Ajax Call And Validation ends-->