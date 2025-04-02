// easy-courses.js

document.addEventListener('DOMContentLoaded', function() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    const errorElement = document.getElementById('error');
    const courseList = document.getElementById('courseList');
    const backBtn = document.getElementById('backBtn');
  
    // サンプルデータ（実際には外部JSONやAPIから取得）
    const coursesData = [
      {
        name: "国際関係論",
        faculty: "国際日本学部",
        grade: 2,
        evaluation: "レポート（60%）+ 小テスト（40%）",
        difficulty: 2,
        comment: "週1回の講義でテスト範囲が明確。過去問が共有されやすい",
        recommended: true
      },
      {
        name: "情報社会論",
        faculty: "情報学部",
        grade: 1,
        evaluation: "期末試験（100%）",
        difficulty: 1,
        comment: "持ち込み可の試験で基本的な用語を覚えるだけでOK",
        recommended: true
      },
      // その他のデータサンプル...
    ];
  
    // 初期化処理
    const init = () => {
      try {
        loading.style.display = 'flex';
        
        // 模擬データ読み込み（実際はAPI呼び出し）
        setTimeout(() => {
          renderCourses(coursesData);
          loading.style.display = 'none';
        }, 800);
        
      } catch (error) {
        showError('データの読み込みに失敗しました');
      }
    };
  
    // コース表示関数
    const renderCourses = (courses) => {
      courseList.innerHTML = '';
      
      if (!courses || courses.length === 0) {
        showError('表示できる授業がありません');
        return;
      }
  
      courses.forEach(course => {
        const courseCard = createCourseCard(course);
        courseList.appendChild(courseCard);
      });
    };
  
    // コースカード生成関数
    const createCourseCard = (course) => {
      const card = document.createElement('div');
      card.className = 'bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow';
      
      card.innerHTML = `
        <div class="flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-primary">${course.name}</h3>
            ${course.recommended ? 
              '<span class="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">おすすめ</span>' : 
              ''}
          </div>
          
          <div class="flex flex-wrap gap-2 text-sm">
            <div class="bg-gray-100 px-3 py-1 rounded-full">${course.faculty}</div>
            <div class="bg-gray-100 px-3 py-1 rounded-full">${course.grade}年次</div>
            <div class="bg-blue-100 px-3 py-1 rounded-full">難易度: ${'★'.repeat(course.difficulty)}</div>
          </div>
          
          <div class="mt-3">
            <p class="font-medium text-gray-700">評価方法:</p>
            <p class="text-gray-600">${course.evaluation}</p>
          </div>
          
          ${course.comment ? `
            <div class="mt-3 bg-yellow-50 p-4 rounded-lg">
              <p class="text-sm text-yellow-800">${course.comment}</p>
            </div>
          ` : ''}
        </div>
      `;
      
      return card;
    };
  
    // エラー表示関数
    const showError = (message) => {
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
      loading.style.display = 'none';
    };
  
    // 戻るボタンの処理
    backBtn.addEventListener('click', () => {
      window.location.href = 'index.html';
    });
  
    // 初期化実行
    init();
  });
  