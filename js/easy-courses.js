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
        name: "教養データサイエンス",
        faculty: "共通教養",
        evaluation: "授業毎の演習（100%）",
        difficulty: 1,
        comment: "オンデマンドあり。問題の答えが出回っている",
        recommended: true
      },
      {
        name: "科学技術論（青木）",
        faculty: "共通教養",
        evaluation: "最終回14回目の授業に実施（100%）",
        difficulty: 2,
        comment: "火曜2限。初回講義等で考査のレポート題を言ってくれる。レポートの題を言ってくれるからそれさえできればOK！題もそこまで難しくない内容",
        recommended: true
      },
      {
        name: "科学の世界（佐藤）",
        faculty: "共通教養",
        evaluation: "定期試験（100%）",
        difficulty: 2,
        comment: "月曜4限。基本的にはパワーポイントを利用したスライド映写をしながら講師が講義します。",
        recommended: true
      },
      {
        name: "世界の中の日本（新垣）",
        faculty: "共通教養",
        evaluation: "小課題（30%）中間報告（30%）期末報告（40％）",
        difficulty: 2,
        comment: "木曜1限",
        recommended: true
      },
      {
        name: "神奈川大学の歴史（斎藤）",
        faculty: "共通教養",
        evaluation: "小テストおよびレポート40％、記述式試験60％",
        difficulty: 2,
        comment: "火曜1限",
        recommended: true
      },
      {
        name: "初級中国語Ia(山村)",
        faculty: "共通教養外国語",
        evaluation: "",
        difficulty: 2,
        comment: "",
        recommended: true
      },
      {
        name: "経済学(小松)",
        faculty: "共通教養",
        evaluation: "",
        difficulty: 2,
        comment: "",
        recommended: true
      },
        {
        name: "文化人類学(荒木)",
        faculty: "共通教養",
        evaluation: "授業中のコメントシートの内容50％、課題レポート50％",
        difficulty: 2,
        comment: "月曜4限、時間外",
        recommended: true
        },
        {
        name: "心理学(立川)",
        faculty: "共通教養",
        evaluation: "リアペ50％、授業内試験50％",
        difficulty: 2,
        comment: "水5（オンタイム0型）",
        recommended: true
        },
        {
        name: "日本語学(菊地)",
        faculty: "共通教養",
        evaluation: "",
        difficulty: 2,
        comment: "",
        recommended: true
        },
        {
        name: "ボランティア論(斎藤)",
        faculty: "共通教養",
        evaluation: "グループ作業提出物（２０％）、中間発表・成果発表（４０％）、学生間の相互評価（２０％）個人ワーク提出物（２０％）",
        difficulty: 2,
        comment: "月曜2限",
        recommended: true
        },
        {
        name: "民俗学（角南）",
        faculty: "共通教養",
        evaluation: "期末レポート55％、小テスト(リアクションペーパー))45％",
        difficulty: 2,
        comment: "火曜1限",
        recommended: true
        },
        {
        name: "民俗学（内藤）",
        faculty: "共通教養",
        evaluation: "リアクションペーパー20％、授業内での質疑応答10％、期末レポート70％",
        difficulty: 2,
        comment: "木曜2限、金曜5限",
        recommended: true
        },
        {
        name: "民俗学（周）",
        faculty: "共通教養",
        evaluation: "期末レポート100％",
        difficulty: 2,
        comment: "金曜1限",
        recommended: true
        },
        {
            name: "民俗学（丸山）",
            faculty: "共通教養",
            evaluation: "2期と3期の終了時に実施するレポート（各2000字程度）",
            difficulty: 2,
            comment: "時間外オンデマンド0型",
            recommended: true
        },
        {
            name: "民俗学（山本）",
            faculty: "共通教養",
            evaluation: "レポート１回（40％）、授業内小テスト３回（各20％）、その他受講態度等",
            difficulty: 2,
            comment: "火曜5限",
            recommended: true
        },
        {
        name: "ジェンダー論（小口）",
        faculty: "共通教養",
        evaluation: "（木3）平常点30％（リアクションペーパー等）、確認テスト70%（オンデマンド）平常点60％（各回ごとの確認の小テスト）、確認テスト40%（最終回に行う全体の内容に関するテスト）",
        difficulty: 2,
        comment: "木3、時間外オンデマンド0型",
        recommended: true
        },
        {
        name: "法学（奥野）",
        faculty: "共通教養",
        evaluation: "第11回で実施する臨時試験（レポート　期間は1週間）",
        difficulty: 2,
        comment: "オンデマンド0型",
        recommended: true
        },
        {
        name: "政治学（山田）",
        faculty: "共通教養",
        evaluation: "期末試験に70％、授業課題に30％",
        difficulty: 2,
        comment: "火曜2限、金曜2限。最終講義でテストの問題がレジュメのどこから出るか教えてくれる、暗記得意な人向け",
        recommended: true
        },
        {
        name: "物理科学（真庭）",
        faculty: "共通教養",
        evaluation: "",
        difficulty: 2,
        comment: "",
        recommended: true
        },
        {
        name: "健康科学とスポーツ",
        faculty: "共通教養",
        evaluation: "",
        difficulty: 2,
        comment: "",
        recommended: true
        },
        {
        name: "公衆衛生（天笠）",
        faculty: "共通教養",
        evaluation: "各回の講義後課題70%、最終レポート課題30%",
        difficulty: 2,
        comment: "時間外オンデマンド0型",
        recommended: true
        },
        {
        name: "環境と社会",
        faculty: "共通教養",
        evaluation: "",
        difficulty: 2,
        comment: "",
        recommended: true
        },
        {
        name: "キャリアデザイン",
        faculty: "共通教養",
        evaluation: "",
        difficulty: 2,
        comment: "",
        recommended: true
        },
        {
        name: "生命科学（針原）",
        faculty: "共通教養",
        evaluation: "",
        difficulty: 2,
        comment: "",
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
  