document.addEventListener('DOMContentLoaded', function() {
    const gradeSelect = document.getElementById('grade');
    const facultySelect = document.getElementById('faculty');
    const departmentSelect = document.getElementById('department');
    const errorElement = document.getElementById('error');
    const backBtn = document.getElementById('backBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // 学部データをセレクトボックスに追加
    faculties.forEach(faculty => {
      const option = document.createElement('option');
      option.value = faculty.name;
      option.textContent = faculty.name;
      facultySelect.appendChild(option);
    });
    
    // 学部が変更されたときに学科を更新
    facultySelect.addEventListener('change', function() {
      // 学科選択をリセット
      departmentSelect.innerHTML = '<option value="">選択してください</option>';
      departmentSelect.disabled = true;
      
      const selectedFaculty = this.value;
      if (selectedFaculty) {
        // 選択された学部の学科を取得
        const faculty = faculties.find(f => f.name === selectedFaculty);
        if (faculty && faculty.departments.length > 0) {
          // 学科を追加
          faculty.departments.forEach(dept => {
            const option = document.createElement('option');
            option.value = dept.name;
            option.textContent = dept.name;
            departmentSelect.appendChild(option);
          });
          
          departmentSelect.disabled = false;
        }
      }
    });
    
    // フォーム送信処理
    submitBtn.addEventListener('click', function() {
      // 入力検証とページ遷移の処理
      const grade = gradeSelect.value;
      const faculty = facultySelect.value;
      const department = departmentSelect.value;
      
      if (!grade || !faculty || !department) {
        errorElement.textContent = 'すべての項目を選択してください';
        errorElement.classList.remove('hidden');
        return;
      }
      
      // 選択情報を保存してページ遷移
      sessionStorage.setItem('selectedGrade', grade);
      sessionStorage.setItem('selectedFaculty', faculty);
      sessionStorage.setItem('selectedDepartment', department);
      
      window.location.href = 'timetable.html';
    });
    
    // 戻るボタン
    backBtn.addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  });
  