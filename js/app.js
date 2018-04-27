const studentList = document.querySelectorAll('.student-item');
const pageLimit = 10;

// Hide all but 10 students in list on page load. Each page will only show 10 students.
const showPage = (number, list) => {
  for (let i = 0; i < list.length; i++) {
    if (i >= (number * pageLimit) - 10 && i <= (number * pageLimit) - 1 ) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

showPage(1, studentList);

// Calculate number of pages to show based off the total number of students in list
const totalPages = Math.floor(studentList.length/pageLimit);

// Add pagination to bottom of the page based off number of pages to show
const pagination = pageLinks => {
  const paginationHTML = document.querySelector('.pagination').innerHTML;
  paginationHTML += "<ul>";
  paginationHTML += "<li><a class="active" href="#">1</a></li>";
  paginationHTML += "<li><a href="#">2</a></li>";
  paginationHTML += "<li><a href="#">3</a></li>";
  paginationHTML += "<li><a href="#">4</a></li>";
  paginationHTML += "</ul>";
}

pagination(totalPages);

// <ul>
//           <li>
//             <a class="active" href="#">1</a>
//           </li>
//            <li>
//             <a href="#">2</a>
//           </li>
//            <li>
//             <a href="#">3</a>
//           </li>
//            <li>
//             <a href="#">4</a>
//           </li>
//            <li>
//             <a href="#">5</a>
//           </li>
//         </ul>
//       </div>