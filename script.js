




//target each detail on click
$("summary").click(function(){
    $("open-summary").toggleClass("active");
    $("open-img").toggleClass("active");
    $(this).find("img").toggleClass("active");
    $(this).toggleClass("active");
});



