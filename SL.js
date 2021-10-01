$(document).ready(function(){
    $('.ham').click(function(){
        $('.ham span').toggleClass('active')
        $('.linkm').toggleClass('active')
        $('.linkm ul').toggleClass('active')
        $('#close').toggleClass('active')
    })
})