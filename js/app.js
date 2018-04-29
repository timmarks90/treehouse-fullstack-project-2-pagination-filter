const studentList = document.querySelectorAll('.student-item');
const pageLimit = 10;
const pageDiv = document.querySelector('.page');
// Calculate number of pages to show based off the total number of students in list
const totalPages = Math.floor(studentList.length / pageLimit);

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

// Add pagination to bottom of the page based off number of pages to show
const pagination = studentList => {
  const paginationDiv = document.createElement('div'); // create pagination div
  paginationDiv.className = 'pagination'; // add pagination class to div
  const ul = document.createElement('ul'); 
  paginationDiv.appendChild(ul); // add ul to pagination div 
  pageDiv.appendChild(paginationDiv); // add pagination div to end of page main div
  
  // Add paginated list item based off total users per page 
  for(let i = 1; i < totalPages; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = "#";
    link.text = i;
    li.appendChild(link);
    ul.appendChild(li);

    //If active page 1, add CSS class of Active
    if (i === 1) {
      link.classList.add('active');
    }

    // Add and remove Active class onClick of paginated items
    ul.addEventListener('click', e => {
      if (e.target === link) {
        showPage(e.target.text, studentList);
        document.querySelectorAll('.pagination a').forEach( el => el.classList.remove('active'));
        e.target.classList.add('active');
      }
    })
  }
}

pagination(studentList);