$(document).ready(function(){
    $('img').click(function(){
        var src1 = $(this).attr("src");
        $(this).attr("src", $(this).attr("altImageSrc"));
        $(this).attr("altImageSrc", src1);
    });
});