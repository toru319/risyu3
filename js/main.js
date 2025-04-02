document.addEventListener('DOMContentLoaded', function() {
    const findByFacultyBtn = document.getElementById('findByFaculty');
    const findEasyCoursesBtn = document.getElementById('findEasyCourses');
    
    findByFacultyBtn.addEventListener('click', function() {
      window.location.href = 'selection.html';
    });
    
    findEasyCoursesBtn.addEventListener('click', function() {
      window.location.href = 'easy-courses.html';
    });
  });
  