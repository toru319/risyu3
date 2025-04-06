document.addEventListener('DOMContentLoaded', function() {
  const loading = document.getElementById('loading');
  const content = document.getElementById('content');
  const errorElement = document.getElementById('error');
  const timetableBody = document.getElementById('timetableBody');
  const commentsContainer = document.getElementById('comments');
  const pageTitle = document.getElementById('pageTitle');
  const backBtn = document.getElementById('backBtn');
  
  // エラー表示関数
  const showError = (message) => {
    errorElement.textContent = message;
    errorElement.classList.remove('hidden');
    loading.style.display = 'none';
  };

  // セッションストレージから選択情報を取得
  const grade = sessionStorage.getItem('selectedGrade')?.trim();
  const faculty = sessionStorage.getItem('selectedFaculty')?.trim();
  const department = sessionStorage.getItem('selectedDepartment')?.trim();
  
  // 選択情報がない場合は選択ページにリダイレクト
  if (!grade || !faculty || !department) {
    window.location.href = 'selection.html';
    return;
  }
  
  // タイトル更新
  pageTitle.textContent = `時間割 (${faculty} ${department} ${grade}年)`;
  
  // 時間割データを読み込む関数
  const loadTimetable = () => {
    loading.style.display = 'flex';
    
    setTimeout(() => {
      try {
        const dataKey = `${faculty}-${department.replace(/\s+/g, '')}-${grade}`.trim();
        console.log('検索キー:', dataKey);
        console.log('存在するキー:', Object.keys(timetables));
        
        if (!timetables[dataKey]) {
          throw new Error(`データが見つかりません: ${dataKey}`);
        }
        
        renderTimetable(timetables[dataKey].timetable);
        renderComments(timetables[dataKey].comments);
        loading.style.display = 'none';
        
      } catch (error) {
        showError(error.message);
      }
    }, 1000);
  };
  
  // 時間割テーブル生成関数
  const renderTimetable = (timetableData) => {
    timetableBody.innerHTML = '';
    
    for (let period = 1; period <= 7; period++) {
      const row = document.createElement('tr');
      
      // 時限セル
      const periodCell = document.createElement('th');
      periodCell.className = 'bg-primary text-white p-3 md:p-4 text-center border border-gray-300';
      periodCell.textContent = `${period}限`;
      row.appendChild(periodCell);
      
      // 各曜日のセル生成
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
  
  // コメント表示関数
  const renderComments = (comments) => {
    commentsContainer.innerHTML = '';
    
    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.className = 'bg-white p-4 rounded-lg shadow mb-4';
      commentElement.innerHTML = `
        <p class="font-semibold text-primary">${comment.author}</p>
        <p class="mt-2 text-gray-600">${comment.text}</p>
      `;
      commentsContainer.appendChild(commentElement);
    });
  };
  
  // 戻るボタンの処理
  backBtn.addEventListener('click', function() {
    window.location.href = 'selection.html';
  });
  
  // 初期処理
  loadTimetable();
});
