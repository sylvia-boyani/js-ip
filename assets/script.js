function check() {
    var b=0;
    var qn1=document.quiz.qn1.value;
    var qn2=document.quiz.qn2.value;
    var qn3=document.quiz.qn3.value;
    var qn4=document.quiz.qn4.value;
    var qn5=document.quiz.qn5.value;
    if (qn1=="variables") {b++}
    if (qn2=="hypertext markup language") {b++}
    if (qn3=="capitalizing the first letter of the second or third word") {b++}
    if (qn4=="1") {b++}
    if (qn5=="objects") {b++}

    document.write(b)
}