// Hide all but 10 students in list on page load
const studentList = document.getElementsByClassName('student-item');

function showPage(number) {
  $(studentList).hide();
  for(let i = 0; i < studentList.length; i++) {
    if(studentList[i] <= number){
      $(studentList[i]).show();
    }
  }
}
showPage(10);