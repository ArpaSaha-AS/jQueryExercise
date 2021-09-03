//Answer To The Question Number:1
$("p").last().addClass("selected");
//Answer To The Question Number:2
$("div").addClass(function(index, currentClass) {
    var addedClass;

    if (currentClass === "red") {
        addedClass = "green";
        $("p").text("There is one green div");
    }

    return addedClass;
});
//Answer To The Question Number:3

$("div").click(function() {
    var color = $(this).css("background-color");
    $("#result").html("That div is <span style='color:" +
        color + ";'>" + color + "</span>.");
});
//Answer To The Question Number:4
$("#box1,#box2,#box3,#box4").click(function() {
    var html = ["The clicked div has the following styles:"];

    var styleProps = $(this).css([
        "width", "height", "color", "background-color"
    ]);
    $.each(styleProps, function(prop, value) {
        html.push(prop + ": " + value);
    });

    $("#resultfour").html(html.join("<br>"));
});
//Answer To The Question Number:5
$("#city").on("mouseover", function() {
    $(this).css("color", "red");
});
//Answer To The Question Number:6
$("#box").one("click", function() {
    $(this).css("width", "+=200");
});
//Answer To The Question Number:7
var words = $("p1").first().text().split(/\s+/);
var text = words.join("</span> <span>");
$("p1").first().html("<span>" + text + "</span>");
$("span").on("click", function() {
    $(this).css("background-color", "yellow");
});
//Answer To The Question Number:8
$("p2")
    .on("mouseenter", function() {
        $(this).css({
            "background-color": "yellow",
            "font-weight": "bolder"
        });
    })
    .on("mouseleave", function() {
        var styles = {
            backgroundColor: "#ddd",
            fontWeight: ""
        };
        $(this).css(styles);
    });
//Answer To The Question Number:9
$("#nine").on("click", function() {
    $(this).css({
        width: function(index, value) {
            return parseFloat(value) * 1.2;
        },
        height: function(index, value) {
            return parseFloat(value) * 1.2;
        }
    });
});
//Answer To The Question Number:10
$("#start").click(function() {
    var myDiv = $("#ten");
    myDiv.show("slow");
    myDiv.animate({
        left: "+=200"
    }, 5000);

    myDiv.queue(function() {
        var that = $(this);
        that.addClass("newcolor");
        that.dequeue();
    });

    myDiv.animate({
        left: "-=200"
    }, 1500);
    myDiv.queue(function() {
        var that = $(this);
        that.removeClass("newcolor");
        that.dequeue();
    });
    myDiv.slideUp();
});

$("#stop").click(function() {
    var myDiv = $("#ten");
    myDiv.clearQueue();
    myDiv.stop();
});
//Answer To The Question Number:11
$("#eleven").data("test", { first: 16, last: "pizza!" });
$("#ele").first().text($("#eleven").data("test").first);
$("#ele").last().text($("#eleven").data("test").last);
//Answer To The Question Number:12
$("button").click(function() {
    var value;

    switch ($("button").index(this)) {
        case 0:
            value = $("#tew").data("blah");
            break;
        case 1:
            $("#tew").data("blah", "hello");
            value = "Stored!";
            break;
        case 2:
            $("#tew").data("blah", 86);
            value = "Stored!";
            break;
        case 3:
            $("#tew").removeData("blah");
            value = "Removed!";
            break;
    }

    $("span").text("" + value);
});
//Answer To The Question Number:13
$("#thirt").click(function() {
    $("#thir")
        .animate({ left: "+=200px" }, 2000)
        .animate({ top: "0px" }, 600)
        .queue(function() {
            $(this).toggleClass("#thir").dequeue();
        })
        .animate({ left: "10px", top: "30px" }, 700);
});
//Answer To The Question Number:14
var $p = jQuery("#fort"),
    p = $p[0];
$p.append(jQuery.hasData(p) + " "); // false

$.data(p, "testing", 123);
$p.append(jQuery.hasData(p) + " "); // true

$.removeData(p, "testing");
$p.append(jQuery.hasData(p) + " "); // false

$p.on("click", function() {});
$p.append(jQuery.hasData(p) + " "); // true

$p.off("click");
$p.append(jQuery.hasData(p) + " "); // false
//Answer To The Question Number:15
$("#show").click(function() {
    var n = jQuery.queue($(".fifth")[0], "fx");
    $("#sp").text("Queue length is: " + n.length);
});

function runIt() {
    $(".fifth")
        .show("slow")
        .animate({
            left: "+=200"
        }, 2000)
        .slideToggle(1000)
        .slideToggle("fast")
        .animate({
            left: "-=200"
        }, 1500)
        .hide("slow")
        .show(1200)
        .slideUp("normal", runIt);
}

runIt();
//Answer To The Question Number:16
$(".myClass").css("border", "3px solid red");
//Answer To The Question Number:18
function showHeight(element, height) {
    $(".eight").text("The height for the " + element + " is " + height + "px.");
}
$("#getp").click(function() {
    showHeight("paragraph", $("p").height());
});
$("#getd").click(function() {
    showHeight("document", $(document).height());
});
$("#getw").click(function() {
    showHeight("window", $(window).height());
});
//Answer To The Question Number:19
$(".ninth").one("click", function() {
    $(this).height(30).css({
        cursor: "auto",
        backgroundColor: "green"
    });
});
//Answer To The Question Number:21
$("#clickme").click(function() {
    $("#book").animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
    }, 5000, function() {
        // Animation complete.
    });
});
//Answer To The Question Number:22
$("li").animate({
    opacity: .5,
    height: "50%"
}, {
    step: function(now, fx) {
        var data = fx.elem.id + " " + fx.prop + ": " + now;
        $("body").append("<div>" + data + "</div>");
    }
});
//Answer To The Question Number:23
$("#clickmetwo").click(function() {
    $("#book").animate({
        width: "toggle",
        height: "toggle"
    }, {
        duration: 5000,
        specialEasing: {
            width: "linear",
            height: "easeOutBounce"
        },
        complete: function() {
            $(this).after("<div>Animation complete.</div>");
        }
    });
});
//Answer To The Question Number:24
$("#go").click(function() {
    $("#block").animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500);
});
//Answer To The Question Number:25
$("#right").click(function() {
    $(".block").animate({ "left": "+=50px" }, "slow");
});

$("#left").click(function() {
    $(".block").animate({ "left": "-=50px" }, "slow");
});
//Answer To The Question Number:26
$("#go1").click(function() {
    $("#block1")
        .animate({
            width: "90%"
        }, {
            queue: false,
            duration: 3000
        })
        .animate({ fontSize: "24px" }, 1500)
        .animate({ borderRightWidth: "15px" }, 1500);
});

$("#go2").click(function() {
    $("#block2")
        .animate({ width: "90%" }, 1000)
        .animate({ fontSize: "24px" }, 1000)
        .animate({ borderLeftWidth: "15px" }, 1000);
});

$("#go3").click(function() {
    $("#go1").add("#go2").click();
});

$("#go4").click(function() {
    $("div").css({
        width: "",
        fontSize: "",
        borderWidth: ""
    });
});
//Answer To The Question Number:27
$("#go5").click(function() {
    $(".block5").first().animate({
        left: 100
    }, {
        duration: 1000,
        step: function(now, fx) {
            $(".block5").slice(1).css("left", now);
        }
    });
});
//Answer To The Question Number:28
$("#other").click(function() {
    $("#target").blur();
});
//Answer To The Question Number:29
$(".target").change(function() {
    alert("Handler for .change() called.");
});
//Answer To The Question Number:30
$("#other").click(function() {
    $(".target").change();
});
//Answer To The Question Number:31
$("#target30").keydown(function() {
    alert("Handler for .keydown() called.");
});
//Answer To The Question Number:32
$("#other32").click(function() {
    $("#target32").keydown();
});
//Answer To The Question Number:33
$("#target33").keypress(function() {
    console.log("Handler for .keypress() called.");
});
//Answer To The Question Number:34
$("#other34").click(function() {
    $("#target34").keypress();
});
//Answer To The Question Number:35
$("#target35").click(function() {
    alert("Handler for .click() called.");
});
//Answer To The Question Number:36
$("#target36").contextmenu(function() {
    alert("Handler for .contextmenu() called.");
});
//Answer To The Question Number:37
$("#target37").dblclick(function() {
    alert("Handler for .dblclick() called.");
});
//Answer To The Question Number:38
$("#target38").mousedown(function() {
    alert("Handler for .mousedown() called.");
});
//Answer To The Question Number:39
$("#target39")
    .mouseup(function() {
        $(this).append("<span style='color:#f00;'>Mouse up.</span>");
    })
    .mousedown(function() {
        $(this).append("<span style='color:#00f;'>Mouse down.</span>");
    });
//Answer To The Question Number:40
$("#outer").mouseenter(function() {
    $("#log").append("<div>Handler for .mouseenter() called.</div>");
});
//Answer To The Question Number:41
$("#target41").mousemove(function(event) {
    var msg = "Handler for .mousemove() called at ";
    msg += event.pageX + ", " + event.pageY;
    $("#log41").append("<div>" + msg + "</div>");
});
//Answer To The Question Number:42
$("#target42").mouseup(function() {
    alert("Handler for .mouseup() called.");
});
//Answer To The Question Number:43
$("#target43").toggle(function() {
    alert("First handler for .toggle() called.");
}, function() {
    alert("Second handler for .toggle() called.");
});
//Answer To The Question Number:44
$(document).ajaxComplete(function() {
    $(".log44").text("Triggered ajaxComplete handler.");
});
//Answer To The Question Number:45
var params = { width: 1680, height: 1050 };
var str = jQuery.param(params);
$("#results45").text(str);