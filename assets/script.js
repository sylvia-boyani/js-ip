function greeting(){
    headerText.innerHTML = "Hello "+ userName.value +", welcome to comp quiz"
}

function greeting(){
    document.querySelector(#headerText)
}

var userName = document.querySelector("#userName");
var headerText = document.querySelector("#headerText")

function check() {
    var b=0;
    var qn1=document.quiz.qn1.value;
    var qn2=document.quiz.qn2.value;
    var qn3=document.quiz.qn3.value;
    var qn4=document.quiz.qn4.value;
    var qn5=document.quiz.qn5.value;

    var results=document.getElementById('results')
    var quiz=document.getElementById("quiz")

    if (qn1=="variables") {b++}
    if (qn2=="hypertext markup language") {b++}
    if (qn3=="capitalizing the first letter of the second or third word") {b++}
    if (qn4=="1") {b++}
    if (qn5=="objects") {b++}

    quiz.style.display="none"
    //results.textContent=`${b}`;//

    if(b<=3){
        results.textContent=`Your score is ${b}. It is not good, do more research`
    } else{
        results.textContent=`You've scored 5/5. Excellent! Keep it up!`
    }
}