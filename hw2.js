function calculate(){
        
    var hwAvg = parseInt(document.getElementById("hwAvg").value);
    var midExam = parseInt(document.getElementById("midExam").value);
    var finalExam = parseInt(document.getElementById("finalExam").value);
    var partScore = parseInt(document.getElementById("partScore").value);      
      
    finalGrade = parseInt(0.5 * hwAvg + 0.2 * midExam + 0.2 * finalExam + 0.1 * partScore);

    var msg = "";
    var letterGrade ="";

    switch(true) {
    case (finalGrade >= 90):
        letterGrade = "A";
        break;
    case (finalGrade >=80 && finalGrade <89):
        letterGrade = "B";
        break;
    case (finalGrade >=70 && finalGrade <79):
        letterGrade = "C";
        break;
    case (finalGrade >=60 && finalGrade <69):
        letterGrade = "D";
        msg = "Student must retake the course";
        break;
    case (finalGrade <60):
        letterGrade = "F";
        msg = "Student must retake the course";
        break;
      };

    document.getElementById('result').innerHTML = "The Final Grade of the student is " + finalGrade + ". " + msg

  }