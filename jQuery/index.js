/***** Example of jQuery *****/

/* Selecting Elements using jQuery */
$("h1");        //document.querySelector('h1');
$("button");    //document.querySelectorAll('button');

/* Manipulating styles using jQuery */
$('h1').css('color', 'green');
console.log($('h1').css('font-size'));
$('h1').addClass('big-title margin-50');
console.log($('h1').hasClass('margin-50'));

/* Manipulating text using jQuery */
$("h1").text("Bye");
$("button").text("Don't click Me!");
$("button").html("<em>Hey</em>")

/* Manipulating attributes using jQuery */
console.log($("img").attr("src"));
$("a").attr("href", "https://www.yahoo.com");
console.log($("h1").attr("class"));

/* Adding event listener using jQuery */
$("h1").click(() => {
    $('h1').css('color', 'purple');
});

$("button").click(() => {
    $('h1').css('color', 'orange');
});

$("input").keydown((e) => {
    $("h1").text(e.key);
});

$("input").on("mouseover", () => {
    $('h1').css('color', 'grey');
});

/* Adding and removing elements on the fly */
$("h1").before("<button>before</button>");
$("h1").after("<button>after</button>");
$("h1").prepend("<button>prepend</button>");
$("h1").append("<button>append</button>");

/* Animations using jQuery */
$("button").on("click", () => {
    // $("h1").toggle();
    // $("h1").fadeToggle();
    // $("h1").slideToggle();
    // $("h1").animate({opacity: 0.5}); // add css values
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

