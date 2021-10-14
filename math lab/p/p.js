// var workshop={
//     teacher : "Amjad",
//     ask(question) {
//         console.log(this.teacher,question)
//     }
// }
// workshop.ask("kaise ho")


// function ask (question ){
//     console.log(this.teacher,question);
// }
// function otherClass(){
//     var myContext={
//         teacher: "Suzy"
//     };
//     ask.call(myContext,"Why?")
// }
// otherClass()

class Workshop {
    constructor (teacher){
        this.teacher = teacher;

    }
    ask(question){
        console.log(this.teacher, question)
    }
}
var deepJs = new Workshop("Bidi");
var reactJs = new Workshop("kadi");

deepJs.ask("jamra kya");

reactJs.ask("practice chalan do");
