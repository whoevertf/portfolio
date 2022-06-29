$.getJSON("https://dog.ceo/api/breeds/image/random", function (data) {
    var dog = data.message;
    $('.dog').attr('src', dog)
})
$.getJSON("https://api.ipify.org/?format=json", function(data) {
    var ip = data.ip
    $('.ip').append(ip)
    // can replace the text using .html//
    
});