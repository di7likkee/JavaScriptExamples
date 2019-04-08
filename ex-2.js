listen('click', function (e){
    setTimeout(function(){
        ajax('https://api.example.com/endpoint', function (text){
            if (text == "hello") {
                doSomething();
            }
            else if (text == "world") {
                doSomethingElse();
            }
        });
    }, 500);
});