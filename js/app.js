const studentList = document.querySelectorAll('.student-item');
const pageLimit = 10;
const pageDiv = document.querySelector('.page');
// Calculate number of pages to show based off the total number of students in list
const totalPages = Math.ceil(studentList.length / pageLimit);
const pageHeader = document.querySelector('.page-header');

// Hide all but 10 students in list on page load. Each page will only show 10 students.
const showPage = (number, list) => {
  for (let i = 0; i < list.length; i++) {
    // Set the min & max range of users to display per page
    if (i >= (number * pageLimit) - 10 && i <= (number * pageLimit) - 1 ) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}
// Run showPage function to filter student list to max of 10 per page
showPage(1, studentList);

// Add pagination to bottom of the page based off number of pages to show
const pagination = studentList => {
  const paginationDiv = document.createElement('div'); // create pagination div
  paginationDiv.className = 'pagination'; // add pagination class to div
  const ul = document.createElement('ul'); 
  paginationDiv.appendChild(ul); // add ul to pagination div 
  pageDiv.appendChild(paginationDiv); // add pagination div to end of page main div
  
  // Add paginated list item based off total users per page.
  for(let i = 1; i <= totalPages; i++) {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.href = "#";
    link.text = i;
    li.appendChild(link);
    ul.appendChild(li);

    // If active page 1, add CSS class of Active
    if (i === 1) {
      link.classList.add('active');
    }

    // Add and remove Active class onClick of paginated items
    ul.addEventListener('click', e => {
      if (e.target === link) {
        showPage(e.target.texConent, studentList);
        document.querySelectorAll('.pagination a').forEach( element => element.classList.remove('active'));
        e.target.classList.add('active');
      }
    })
  }
}
// Run pagination function to make pagination items appear
pagination(studentList);

// Create search field elements in header to search through list of students
const search = list => {
  const searchDiv = document.createElement('div');
  searchDiv.className = 'student-search';
  const searchDivInput = document.createElement('input');
  searchDivInput.placeholder = "Search for students...";
  const searchButton = document.createElement('button');
  searchButton.innerHTML = "Search";
  searchDiv.appendChild(searchDivInput);
  searchDiv.appendChild(searchButton);
  pageHeader.appendChild(searchDiv);

  // Grab search input contents on click of submit and return list items that match
  searchButton.addEventListener('click', list => {
    // Set returned list as empty array
    let returnedStudents = [];
    let searchValue = searchDivInput.value.toLocaleLowerCase();
    for (let i = 0; i < studentList.length; i++) {
      studentList[i].style.display = 'none';
      let studentNames = studentList[i].querySelector('.student-details h3').innerHTML.toLowerCase();
      let studentEmail = studentList[i].querySelector('.student-details .email').innerHTML.toLowerCase();
      let namePresent = studentNames.search(searchValue);
      let emailPresent = studentEmail.search(searchValue);
      // if the name or email is present, add to the returnedStudents array
      if (namePresent != -1 || emailPresent != -1) {
        returnedStudents.push(studentList[i]);
        // Remove pagination if the list returns less than 10 students
        pagination(returnedStudents);
      }
    }
    // Alert popup if no search results returned
    if (returnedStudents <= 0) {
      alert("no students found");
    }

    // Add pagination and limit to max per page
    showPage(1, returnedStudents); 
  })
}
// Run search function to make search bar appear
search(studentList);