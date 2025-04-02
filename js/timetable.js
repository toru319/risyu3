document.addEventListener('DOMContentLoaded', function() {
  const loading = document.getElementById('loading');
  const content = document.getElementById('content');
  const errorElement = document.getElementById('error');
  const timetableBody = document.getElementById('timetableBody');
  const commentsContainer = document.getElementById('comments');
  const pageTitle = document.getElementById('pageTitle');
  const backBtn = document.getElementById('backBtn');
  
  // セッションストレージから選択情報を取得
  const grade = sessionStorage.getItem('selectedGrade');
  const faculty = sessionStorage.getItem('selectedFaculty');
  const department = sessionStorage.getItem('selectedDepartment');
  
  // 選択情報がない場合は選択ページにリダイレクト
  if (!grade || !faculty || !department) {
    window.location.href = 'selection.html';
    return;
  }
  
  // タイトル更新
  pageTitle.textContent = `時間割 (${faculty} ${department} ${grade}年)`;
  
  // 時間割データを読み込む関数
  const loadTimetable = () => {
    try {
      loading.style.display = 'flex';
      
      setTimeout(() => {
        try {
          const dataKey = `${faculty}-${department.replace(/\s+/g, '')}-${grade}`;
          console.log('Data Key:', dataKey); // デバッグ用
          
          if (!timetables[dataKey]) {
            throw new Error('該当するデータが見つかりません');
          }
          
          const selectedData = timetables[dataKey];
          
          renderTimetable(selectedData.timetable);
          renderComments(selectedData.comments);
          loading.style.display = 'none';
          
        } catch (error) {
          showError(error.message);
          loading.style.display = 'none';
        }
      }, 1000);
      
    } catch (error) {
      showError('データの取得に失敗しました');
      loading.style.display = 'none';
    }
  };
  
  // 時間割テーブル生成関数（修正版）
  const renderTimetable = (timetableData) => {
    timetableBody.innerHTML = '';
    
    for (let period = 1; period <= 7; period++) {
      const row = document.createElement('tr');
      
      const periodCell = document.createElement('th');
      periodCell.className = 'bg-primary text-white p-3 md:p-4 text-center border border-gray-300';
      periodCell.textContent = `${period}限`;
      row.appendChild(periodCell);
      
      for (let day = 0; day < 6; day++) {
        const cell = document.createElement('td');
        cell.className = 'border border-gray-300 hover:bg-gray-100 p-4';
        
        // 安全なデータアクセス
        const course = timetableData[period-1]?.[day] || { name: '' };
        cell.textContent = course.name;
        
        row.appendChild(cell);
      }
      
      timetableBody.appendChild(row);
    }
  };
  
  // コメント表示関数（実装例）
  const renderComments = (comments) => {
    commentsContainer.innerHTML = '';
    
    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.className = 'bg-white p-4 rounded-lg shadow';
      commentElement.innerHTML = `
        <p class="font-medium text-gray-700">${comment.author}</p>
        <p class="mt-2 text-gray-600">${comment.text}</p>
      `;
      commentsContainer.appendChild(commentElement);
    });
  };
  
  backBtn.addEventListener('click', function() {
    window.location.href = 'selection.html';
  });
  
  loadTimetable();
});
