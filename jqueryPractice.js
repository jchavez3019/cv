$("h1").addClass("big-title");
$("h1").text("bye");

$("button").html("<em>Hey</em>");
$("button").text("bye");

$("a").attr("href", "https://www.google.com");

$("h1").click(function() {
    $("h1").css("color", "purple")
});

$("button").click(function() {
    // $("h1").toggle();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$("h1").on("mouseover", function() {
    $("h1").css("color","green");
});

$("h1").on("mouseleave", function() {
    $("h1").css("color","yellow");
});

$("h1").before("<button>BeforeButton</button>");
$("h1").after("<button>AfterButton</button>");
$("h1").prepend("<button>PrependButton</button>");
$("h1").append("<button>AppendButton</button>");
