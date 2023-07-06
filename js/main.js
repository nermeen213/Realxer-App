


function randomText() {
     var author = ['--Oscar Wilde','--Frank Zappa','--Mark Twain','--Oscar Wilde','--Stephen Chbosky'];
    var quotes = [`"So many books, so little time."`,`"Be the change that you wish to see in the world."`,`"If you tell the truth, you don't have to remember anything."`,`“I am so clever that sometimes I don't understand a single word of what I am saying.”`,`“We accept the love we think we deserve.”`];


    var num = Math.floor(Math.random()*author.length);
    document.getElementById("demo").innerHTML=author[num];
    document.getElementById("demo1").innerHTML=quotes[num];
    

}
