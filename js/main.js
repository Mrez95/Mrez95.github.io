
            var previousId = "";
            /* <![CDATA[ */
            var tie = {};
            var wordGap = 11;
            /* ]]> */
            $(document).ready(function() {
                getTime();
                var vid = document.getElementById("signature");
                vid.display
                vid.onloadedmetadata = function() {
                    $("#signature").css('visibility', 'visible');
                };
                typerColor = 'rgba(241,194,214,0.6)'; // sends to typer.js

                var tempHeight = $(window).height() - $('.container').height();
                setTimeout(function() {
                    $('[data-typer-targets]').typer();
                    $.typer.options.typerInterval = 3000;
                }, 2000);

                position_h_center("scroll_down");
                if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    $(".filter").hide();
                    $("#about_wrapper img#pajo").show(); //TODO!
                } else {
                    if ($(window).width() > 998) {
                        setTimeout(function() {
                            setInterval('animate_scroll_button()', 3000);
                        }, 0) // time before 1st trigger, might want delay if animations
                    }
                    ;
                }
                $('input').keyup(function() {
                    if ($(this).val().length == $(this).attr("maxlength")) {
                        $(this).next().focus();
                    }
                });
                $("#submit")
                        .on("click", function() {
                            $.notify.addStyle('postage', {
                                html: "<div>&#10527;<span data-notify-text/>&#10528;</div>",
                                classes: {
                                    base: {
                                        "white-space": "nowrap",
                                        "background-color": "rgba(255,255,255,0.9)",
                                        "padding": "35px",
                                        "margin-right": "10px"
                                    },
                                    postage: {
                                        "color": "black",
                                        "background-color": "white",
                                    }
                                }
                            });
                            $(".navbar-collapse").delay(500).
                                    queue(function() {
                                        $(this).notify("Let's keep in touch!", {
                                            style: 'postage',
                                            elementPosition: 'bottom centre',
                                            showDuration: 450,
                                            hideDuration: 200,
                                            autoHideDelay: 2400,
                                            arrowShow: false,
                                            showAnimation: 'slideDown',
                                            hideAnimation: 'slideUp',
                                            className: 'success',
                                            gap: 0
                                        });
                                        $(this).dequeue();
                                    });

                        })
                $(".fa-github")
                        .on("mouseenter", function() {
                            $("#custom-stamp").attr("src", "images/stamps/github.png");
                            $(this).css({
                                color: "rgba(182,156,255,0.5)",
                                transition: "color ease 0.4s"
                            })

                        })

                $(".fa-facebook-square")
                        .on("mouseenter", function() {
                            $("#custom-stamp").attr("src", "images/stamps/facebook.png");
                            $(this).css({
                                color: "rgba(89,119,204,0.5)",
                                transition: "color ease 0.4s"
                            });
                        })

                $(".fa-linkedin-square")
                        .on("mouseenter", function() {
                            $("#custom-stamp").attr("src", "images/stamps/linkedin.png");
                            $(this).css({
                                color: "rgba(0,168,255,0.5)",
                                transition: "color ease 0.4s"})
                        })

                $(".fa-envelope-square")
                        .on("mouseenter", function() {
                            $("#custom-stamp").attr("src", "images/stamps/email.png");
                            $(this).css({
                                color: "rgba(127,224,80,0.5)",
                                transition: "color ease 0.4s"
                            })
                        })
                $(".fa-envelope-square")
                        .on("mouseenter", function() {
                            $("#custom-stamp").attr("src", "images/stamps/email.png");
                            $(this).css({
                                color: "rgba(127,224,80,0.5)",
                                transition: "color ease 0.4s"
                            })
                        })
                $("#submit")
                        .on("mouseenter", function() {
                            $("#custom-stamp").attr("src", "images/stamps/choice.png");
                        })
                $("#client")
                        .on("focus", function() {
                            $(this).attr("placeholder", "Your Name");
                        })
                        .on("focusout", function() {
                            $(this).attr("placeholder", "");
                        })
                $("#return")
                        .on("focus", function() {
                            $(this).attr("placeholder", "Your Email");
                        })
                        .on("focusout", function() {
                            $(this).attr("placeholder", "");
                        })
                $("#message-con-0")
                        .on("focus", function() {
                            $(this).attr("placeholder", "Let's Chat!");
                        })
                        .on("focusout", function() {
                            $(this).attr("placeholder", "");
                        })
                $(".fa").on("mouseleave", function() {
                    $(this).css({
                        color: "rgba(255,255,255,0.4)",
                        transition: "color ease 0.5s"
                    })
                });

            });

            function getTime() {
                var d = new Date()
                var time = d.getHours()
                var greeting;
                if (time > 4 && time < 12)
                {
                    greeting = "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good morning!</h2>";
                }
                else if (time > 12 && time < 18)
                {
                    greeting = "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good afternoon!</h2>";
                }
                else
                {
                    greeting = "<br><br><br><h2 style='color:black;font-size:43px;margin-top:5px'>Good evening!</h2>";
                }
                $("#about-photo").after(greeting);
            }

            function position_h_center(el) {
                var _width = $("#" + el).parent().outerWidth();
                var _el_width = $("#" + el).width();
                $("#" + el).css("left", ((_width - _el_width) / 2) + "px");
            }
            function animate_scroll_button() {
                $("#scroll_down").animate({
                    bottom: "30px"
                }, 1000, function() {
                    $("#scroll_down").animate({
                        bottom: "7px"
                    }, {
                        duration: 2000,
                        easing: "easeOutBounce"
                    });
                });
            }

            function hide_menu() {
                if ($("#navbar").hasClass("display_nav")) {
                    $("#navbar").removeClass("display_nav");
                    $("#navbar").addClass("hidden_nav");
                    $("#navbar").css({opacity: '0'});
                }
            }

            function show_menu() {
                if ($("#navbar").hasClass("hidden_nav")) {
                    $("#navbar").removeClass("hidden_nav");
                    $('#navbar')
                            .delay(140) // NOTE: fixes safari nav dropdown bug
                            .queue(function() {
                                $(this).css({opacity: '1'});
                                $("#navbar").addClass("display_nav");
                                $(this).dequeue();
                            });
                }
            }

            $(function() { // page scrolling
                $('a[href*=#]:not([href=#])').click(function() {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top
                            }, 1000);
                            return false;
                        }
                    }
                });
            });

            $(window).resize(function() {
                position_h_center("scroll_down");
                var _width = $(".name-container").parent().outerWidth();
                var _el_width = $(".name-container").width();
                $(".name-container").css("left", ((_width - _el_width) / 2) + "px");
                updateVisual();
            });

            function updateVisual() {
                $("#message-con-0").attr("maxlength", Math.round($("#message-con-0").width() / wordGap));
                $("#message-con-1").attr("maxlength", Math.round($("#message-con-1").width() / wordGap));
                $("#message-con-2").attr("maxlength", Math.round($("#message-con-2").width() / wordGap));
                $("#message-con-3").attr("maxlength", Math.round($("#message-con-3").width() / wordGap));
                $("#message-con-4").attr("maxlength", Math.round($("#message-con-4").width() / wordGap));
                $("#footer").css("height", window.innerHeight - $("#navbar").height());
                $("#icon-wrapper").css("width", $("#about-me").width());
                $(".logo").css("margin-bottom", "-30px");
                $("#nameTag").css("font-size", "69px");
                $("#typer").css("font-size", "22px");
                $(".demo-3").css("margin-top", "none");
                $(".box").css("margin", "2px");
                if (window.innerHeight > 800) {
                    $("#personal-bio").css('font-size', '18px');
                    $(".name-container").css({
                        width: '566px',
                        height: '457px',
                        top: window.innerHeight * 0.21
                    });
                    $("p.letter-writing").css({
                        fontSize: '20px',
                        marginTop: '25%',
                    });
					$(".image").css('height','90%');
                }
                else {
                    $("#personal-bio").css('font-size', '16px');
                    $(".name-container").css({
                        width: '566px',
                        height: '457px',
                        top: window.innerHeight * 0.11
                    });
                    $("p.letter-writing").css({
                        fontSize: '15px',
                        marginTop: '12%',
                    });
                    $(".image").css('height','120%');
                }

            }

            $('nav a').on('click', function() {

                var scrollAnchor = $(this).attr('data-scroll'),
                        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;

                $('body,html').animate({
                    scrollTop: scrollPoint
                }, 500);

                return false;

            })

            $(window).scroll(function() {
                var currentId = $("li.current").attr('id');
                if ($(this).scrollTop() + 85 >= $('div[data-anchor="home"]').offset().top && $(this).scrollTop() < $('div[data-anchor="portfolio"]').offset().top - 85) {
                    hide_menu()
                    if (!$('nav a#home').hasClass('active')) {
                        $('nav a#about').removeClass('active');
                        $('nav a#portfolio').removeClass('active');
                        $('nav a#contact').removeClass('active');
                    }
                    if (!$('nav li#home').hasClass('current')) {
                        $('nav li#about').removeClass('current');
                        $('nav li#portfolio').removeClass('current');
                        $('nav li#contact').removeClass('current');
                        $('nav li#home').addClass('current');
                    }
                }
                if ($(this).scrollTop() + 85 >= $('div[data-anchor="portfolio"]').offset().top && $(this).scrollTop() < $('div[data-anchor="about"]').offset().top) {
                    show_menu();
                    if (!$('nav a#about').hasClass('active')) {
                        $('nav a#home').removeClass('active');
                        $('nav a#portfolio').removeClass('active');
                        $('nav a#contact').removeClass('active');
                        $('nav a#about').addClass('active');
                    }
                    if (!$('nav li#about').hasClass('current')) {
                        $('nav li#home').removeClass('current');
                        $('nav li#portfolio').removeClass('current');
                        $('nav li#contact').removeClass('current');
                        $('nav li#about').addClass('current');
                    }
                }
                if ($(this).scrollTop() + 100 >= $('div[data-anchor="about"]').offset().top && $(this).scrollTop() < $('div[data-anchor="contact"]').offset().top ) {
               
                    if (!$('nav a#portfolio').hasClass('active')) {
                        $('nav a#home').removeClass('active');
                        $('nav a#about').removeClass('active');
                        $('nav a#contact').removeClass('active');
                        $('nav a#portfolio').addClass('active');
                    }
                    if (!$('nav li#portfolio').hasClass('current')) {
                        $('nav li#home').removeClass('current');
                        $('nav li#about').removeClass('current');
                        $('nav li#contact').removeClass('current');
                        $('nav li#portfolio').addClass('current');
                    }
                }
                if ($(this).scrollTop() + 60 >= $('div[data-anchor="contact"]').offset().top) {
                    if (!$('nav a#contact').hasClass('active')) {
                        $('nav a#home').removeClass('active');
                        $('nav a#about').removeClass('active');
                        $('nav a#portfolio').removeClass('active');
                        $('nav a#contact').addClass('active');
                    }
                    if (!$('nav li#contact').hasClass('current')) {
                        $('nav li#home').removeClass('current');
                        $('nav li#about').removeClass('current');
                        $('nav li#portfolio').removeClass('current');
                        $('nav li#contact').addClass('current');
                    }
                }

                $("nav a.active").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                    setTimeout(function() {
                        if ($("li.current a").hasClass("active")) {
                            $("li.current a").removeClass('active');
                        }
                    }, 800)
                }); 
                previousId = currentId;
                var sT = $(this).scrollTop();
                var page = $(".filter").height();
                $("#default-nav").css("opacity", (0.8 - (sT / page))).show();
            });

            $(window).load(function() {
                updateVisual();
                $('html, body').css({
                    'overflow': 'visible', //TODO: change back to visible
                    'height': 'auto',
                })
                $('#container')
                        .delay(5400)
                        .queue(function() {
                            $(this).fadeOut(1000, function() {
                                $('html, body').css({
                                    'overflow': 'visible',
                                    'height': 'auto',
                                })
                                $('#loading').fadeOut(600);
                            });
                            ;
                            $(this).dequeue();
                        });
                if ($(window).width() > 768) {
                    $('.name-container').css(
                            {
                                position: 'absolute',
                                left: ($(window).width() - $('.name-container').outerWidth()) / 2,
                                top: ($(window).height() - $('.name-container').outerHeight()) / 2,
                                opacity: 1
                            });
                }
                else {
                    $('.name-container').css(
                            {
                                position: 'relative',
                                top: 0,
                                left: 0
                            });
                }

                // call resize` to center elements
                $(window).resize();
            });

