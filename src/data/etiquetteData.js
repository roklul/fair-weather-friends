// 中西餐桌禮儀資料庫與多語系字典 (Chinese & Western Dining Etiquette Database: zh-TW, en, ja)

export const ETIQUETTE_DATA = {
  'zh-TW': {
    title: '中西餐餐桌禮儀指南',
    subtitle: '掌握文化結構差異、圓桌與長桌座次、餐位餐具語言、13 大失禮行為對照與實用檢查清單',
    brandTag: 'DINING ETIQUETTE',
    badge: '餐桌社交與飲食文化實務指南',
    introQuote: '「中餐重共享與長幼關係秩序，西餐重個人餐位與分道節奏。禮儀的核心不是僵化教條，而是尊重他人、維護衛生、舉止從容。」',
    
    // 快速錨點
    quickNav: [
      { id: 'culture-diff', label: '一、文化結構差異', icon: '⚖️' },
      { id: 'chinese-seating', label: '二、中餐座位安排', icon: '🪑' },
      { id: 'western-setting', label: '三、西餐餐位擺設', icon: '🍽️' },
      { id: 'chinese-flow', label: '四、中餐用餐流程', icon: '🥢' },
      { id: 'western-flow', label: '五、西餐用餐流程', icon: '🍴' },
      { id: 'faux-pas', label: '六、常見失禮對照', icon: '⚠️' },
      { id: 'scenarios', label: '七、三大用餐場合', icon: '🥂' },
      { id: 'copyright', label: '八、版權安全原則', icon: '🛡️' },
      { id: 'reliability', label: '九、適用限制與判斷', icon: '🧭' },
      { id: 'checklist', label: '十、實用檢查清單', icon: '✅' },
    ],

    // 版權重要原則
    copyrightNotice: {
      title: '重要版權原則與安全聲明',
      desc: '本指南嚴格遵守著作權法與數位內容規範，全站座次圖、餐位圖與流程圖均採用原創向量 SVG 與前端結構化元件繪製，絕不直接嵌入或轉載未經授權之外站圖片，遵循 CC0 / 公有領域與原創發布原則。',
      points: [
        '全站座位圖與餐具擺設圖均為前端原創繪製，杜絕侵權風險',
        '不抓取、不嵌入第三方有版權疑慮之圖片',
        '圖表與決策清單均定位為「實務社交決策輔助」，正式場合以現場主人與主辦方安排為準'
      ]
    },

    // 一、文化結構差異
    culture: {
      title: '一、中餐與西餐的文化結構差異',
      desc: '中餐與西餐看似形式迥異，其背後反映的是兩種不同的社會組織與用餐哲學。',
      chineseCard: {
        title: '中餐：共享餐桌與關係秩序',
        subtitle: '圓桌共享 · 尊卑次序 · 現場互動',
        traits: [
          '以圓桌及旋轉桌承載多人共享菜餚，菜餚置於中央。',
          '先讓長輩、主人或主賓先動筷取菜，體現長幼尊卑。',
          '使用公筷、公匙，避免個人餐具接觸公共盤皿。',
          '轉動旋轉桌前先確認無人夾菜，動作緩慢不急躁。',
          '取菜取靠近自己的一側，不翻攪菜餚，不越過他人（避免飛象過河）。',
          '骨頭、魚刺及果皮放置於骨碟，不直接吐在桌面上。'
        ]
      },
      westernCard: {
        title: '西餐：個人餐位與分道服務',
        subtitle: '個人分餐 · 由外至內 · 節奏分明',
        traits: [
          '採個人分餐制，每位賓客有獨立餐盤、刀叉與玻璃杯。',
          '菜餚依前菜、湯品、沙律、主菜、甜點等順序分道上桌。',
          '餐具由外至內按照上菜次序使用，刀刃朝向餐盤。',
          '食物切成一口大小，切一口、吃一口，避免拉扯大塊食物。',
          '餐巾展開平鋪於膝上，用餐中輕拭嘴角，離席適當放置。',
          '閉口咀嚼，吞下食物後方才開口交談，不揮舞刀叉。'
        ]
      },
      tableTitle: '中西餐 7 大禮儀面向共通核心對照表',
      aspects: [
        {
          aspect: '開始用餐',
          chinese: '等長輩、主人或主賓先動筷',
          western: '等主人示意或第一道菜送上',
          purpose: '尊重場合與同桌者，體現秩序'
        },
        {
          aspect: '取用食物',
          chinese: '使用公筷、公匙，取靠近自己的一側，避免越過他人',
          western: '以個人餐具或侍者服務方式取用，調味料請旁人傳遞',
          purpose: '維持衛生、防止污染與空間越界'
        },
        {
          aspect: '進食方式',
          chinese: '小口取食，不翻攪菜餚，骨刺吐於骨碟',
          western: '切成一口大小，切一口吃一口，不拉扯食物',
          purpose: '保持桌面整潔與進食從容姿態'
        },
        {
          aspect: '交談溝通',
          chinese: '避免口含食物說話，音量適中不喧嘩',
          western: '咀嚼時閉口，吞下食物後再交談，不揮舞餐具',
          purpose: '顧及他人觀感與用餐衛生'
        },
        {
          aspect: '餐具處理',
          chinese: '筷子不直插飯碗、不敲碗、暫停置於筷架',
          western: '用過的刀叉不放回桌面，依擺法傳達服務訊號',
          purpose: '避免文化忌諱、防止污染桌面與便利侍者服務'
        },
        {
          aspect: '中途離席',
          chinese: '先向同桌簡短示意，低調離席',
          western: '禮貌說「失陪」或「Excuse me」，餐巾放於椅面或椅背',
          purpose: '減少對現場氣氛與動線的干擾'
        },
        {
          aspect: '結束用餐',
          chinese: '餐具整齊放回指定位置，向主人致謝',
          western: '刀叉並列平行置於盤內，餐巾略摺放桌面左側',
          purpose: '向服務人員清楚表達用餐完畢訊號'
        }
      ]
    },

    // 二、中餐座位安排
    seating: {
      title: '二、中餐座位安排：圓桌與方桌實務',
      desc: '中式宴席常採圓桌以利菜餚共享，但在正式商務與家宴場合，座位依然承載明確的社交與敬意訊號。',
      roundTableLogic: [
        { role: '主位（最重要席位）', desc: '通常位於面向正門、最能綜觀全場、或背對主景/最遠離通道的位置。' },
        { role: '主陪（主人）', desc: '通常坐在主位，或主位對面/兩側，負責主持全場節奏、招呼賓客與安排上菜。' },
        { role: '主賓（第一貴賓）', desc: '依「以右為尊」原則，通常安排在主位的右手側（第一重要位置）。' },
        { role: '副主賓（次賓）', desc: '通常安排在主位的左手側，或副陪右手側。' },
        { role: '一般賓客', desc: '依長幼、職務、親疏或業務溝通需求，由內向外依序排列。' },
        { role: '靠近入口席位', desc: '在傳統中被視為較次要席位，方便進出與照應服務動線。' }
      ],
      turntableRules: [
        '轉動旋轉盤前，先以眼神或動作確認無人正在夾菜或斟茶。',
        '轉動速度要穩定緩慢，避免湯汁、高腳酒杯或餐具傾倒。',
        '切勿將自己的個人碗碟、水杯或手機放在旋轉盤上。',
        '菜餚轉至自己面前後先停下再夾，不可在轉動過程中搶夾。',
        '夾菜時請使用公筷公匙，取適量，不可翻找特定部位。',
        '若發現他人想夾菜，可主動順向協助旋轉至其面前。'
      ],
      squareTableLogic: '方桌（八仙桌）或長桌更易形成「上下座」與「尊卑對坐」。通常以面門者為上座，背門者為下座；長輩或主賓居中或上端，晚輩與隨員居下側。商務宴請時，關鍵業務溝通者應安排在主賓對面或鄰近，以利交談。',
      decisionTableTitle: '中餐座位安排 6 大實務決策表',
      decisionScenarios: [
        { scenario: '家庭聚餐', priority: '長幼倫理與照料便利', advice: '長輩坐主位或最穩定、方便取菜的位置；幼童與照護者鄰近安排。' },
        { scenario: '商務宴請', priority: '主客關係與溝通效率', advice: '主賓坐主人右側，關鍵談判/協調者坐在方便直接對話的視線範圍。' },
        { scenario: '婚宴場合', priority: '雙方家族、主桌與流程', advice: '先定主桌男女雙方長輩席次，再依親友親疏與輩分安排次桌。' },
        { scenario: '外賓宴請', priority: '文化禁忌與飲食習慣', advice: '事前確認宗教禁忌（如穆斯林清真飲食、素食），安排雙語或熟悉文化的陪同者在側。' },
        { scenario: '長者/行動不便者', priority: '出入安全與平穩動線', advice: '避免安排在狹窄通道、近門風口或轉盤外側需要頻繁起身的座位。' },
        { scenario: '大型多桌宴會', priority: '桌次尊卑與動線協調', advice: '以舞台/主景為中心，面向舞台第一排中央為主桌，其他桌依順時針或左右對稱排定尊卑。' }
      ]
    },

    // 三、西餐座位與餐桌擺設
    westernSetting: {
      title: '三、西餐座位與餐桌擺設規範',
      desc: '西餐餐位是高度秩序化的個人用餐空間。餐具的配置並非炫技，而是精準對應菜單道數，實踐「由外至內」的直覺流程。',
      rules: [
        '以主人與女主人為核心對稱排列，重要男女賓客通常安排在男女主人右側（以右為尊）。',
        '正對入口或視野最佳之席位常被視為重要位置。',
        '現代宴會更重視賓客舒適度、交談可能性與無障礙，不再僵化套用傳統性別交叉規則。'
      ],
      utensilsListTitle: '標準西餐餐具位置與功能辨識表',
      utensils: [
        { pos: '餐盤左側 最外側', name: '前菜叉 / 沙律叉 (Salad Fork)', usage: '食用冷前菜、蔬菜沙律（尺寸較小）' },
        { pos: '餐盤左側 內側', name: '主菜叉 (Dinner Fork)', usage: '食用牛排、肉類或主要熱菜（尺寸較大、齒長）' },
        { pos: '餐盤中央', name: '展示盤 / 主餐盤 (Service / Dinner Plate)', usage: '定位餐位基準，各道菜盤置於其上' },
        { pos: '餐盤右側 內側', name: '主菜刀 (Dinner Knife)', usage: '切割肉類主菜，刀刃朝向餐盤' },
        { pos: '餐盤右側 中間', name: '魚刀 / 前菜刀 (Fish / Appetizer Knife)', usage: '切斷魚肉或前菜' },
        { pos: '餐盤右側 最外側', name: '湯匙 (Soup Spoon)', usage: '舀取濃湯或清湯（匙面圓深）' },
        { pos: '餐盤正上方', name: '甜點匙與甜點叉 (Dessert Utensils)', usage: '匙柄向右、叉柄向左，甜點階段使用' },
        { pos: '左上方', name: '麵包盤與奶油刀 (Bread Plate & Butter Knife)', usage: '放置餐前麵包，奶油刀橫置盤上' },
        { pos: '右上方 (由大至小)', name: '水杯、紅酒杯、白酒杯 (Water & Wine Glasses)', usage: '餐刀上方為水杯，其右側依序為紅酒杯、白酒杯' },
        { pos: '餐盤上或左側', name: '餐巾 (Napkin)', usage: '入座後展開置於膝上' }
      ],
      orderFlowTitle: '「由外至內」使用順序實例（三道菜標準流程）',
      orderSteps: [
        { step: 'Step 1: 前菜 / 沙律', action: '使用最外側的沙律叉與前菜刀（或最外側湯匙喝湯）。' },
        { step: 'Step 2: 主菜階段', action: '使用最靠近餐盤的主菜刀與主菜叉，左手持叉右手持刀。' },
        { step: 'Step 3: 甜點階段', action: '使用餐盤上方的甜點叉或甜點匙（侍者亦可能於甜點時另行送上）。' }
      ]
    },

    // 四、中餐用餐流程與筷子禮儀
    chineseFlow: {
      title: '四、中餐用餐流程與筷子禁忌',
      desc: '中餐共享禮儀的核心是「關照他人空間」與「維護共享菜餚衛生」。',
      processTitle: '入座、開動與取菜防越界',
      processItems: [
        { label: '入座與開動', desc: '等候主人或主賓引導入座；全員到齊、主人舉杯示意或長輩動筷後再開動。' },
        { label: '避免飛象過河', desc: '夾菜只取自己面前的菜餚，不探身長臂越過他人夾菜；距離太遠時請鄰座協助轉動轉盤。' },
        { label: '嚴格使用公筷公匙', desc: '公共菜盤一律使用公用夾/匙取至自己骨碟中，絕不用個人筷子在公共菜盤中翻攪挑揀。' },
        { label: '骨碟妥善使用', desc: '骨頭、蝦殼、魚刺以筷子取下放置於骨碟，不直接吐於桌面或飯碗中。' }
      ],
      chopsticksTitle: '中餐筷子 9 大禁忌視覺指引',
      chopsticksTaboos: [
        { name: '仙人指路 (用筷指人)', desc: '用餐時手持筷子指向他人，視為極不禮貌與挑釁。' },
        { name: '當頭棒喝 (插筷於飯)', desc: '將筷子垂直插在飯碗中央，形同祭祀插香，極為忌諱。' },
        { name: '品箸留聲 (含咬筷子)', desc: '將筷子含在口中吸吮或用牙齒咬出聲響，不合衛生與雅觀。' },
        { name: '擊盞敲盅 (敲打碗盤)', desc: '用筷子敲擊碗盤，在傳統文化中形同乞丐乞食，為大忌。' },
        { name: '迷箸刨墳 (翻攪菜餚)', desc: '拿著筷子在公共盤中翻找喜歡的部位，破壞整盤菜餚整潔。' },
        { name: '淚箸遺珠 (滴灑湯汁)', desc: '夾菜時湯汁淋漓滴落在桌上或其他菜盤，應以小碟承接。' },
        { name: '執箸巡城 (猶豫不決)', desc: '手持筷子在菜盤上方游移晃動遲遲不下筷，干擾他人取菜。' },
        { name: '落地驚神 (筷子掉地)', desc: '失手將筷子掉落地面，應請服務人員更換乾淨筷子。' },
        { name: '交叉錯落 (橫跨碗盤)', desc: '暫停用餐時將筷子隨意斜跨碗上，應放於專屬筷架上。' }
      ],
      teaEtiquetteTitle: '茶禮規範與扣指謝茶禮',
      teaPoints: [
        { rule: '斟茶順序', desc: '主人先為長輩、主賓斟茶，最後才給自己倒茶（茶七分滿為敬）。' },
        { rule: '壺嘴方向', desc: '茶壺放置時，壺嘴絕不可正對著任何一位賓客，應朝向空檔處。' },
        { rule: '扣指謝禮（手指輕敲桌面）', desc: '晚輩向長輩致謝以單指輕扣，平輩以雙指（食指與中指）輕敲桌面兩下，表達謝意而無需中斷主人說話。' }
      ]
    },

    // 五、西餐用餐流程與餐具禮儀
    westernFlow: {
      title: '五、西餐用餐流程與餐具語言',
      desc: '西餐透過餐具的握持姿態與擺放角度，向服務人員傳達無聲的服務訊號。',
      napkinTitle: '餐巾使用 7 大守則',
      napkinRules: [
        '入座後待主人展開餐巾後，將餐巾對折展開平鋪於大腿膝上。',
        '餐巾僅用於用餐期間輕拭嘴角油漬，絕不可拿來擦拭餐具、眼鏡、汗水或桌面。',
        '切勿將餐巾像圍兜般塞進衣領（除非吃特定全隻龍蝦或非正式場合）。',
        '中途暫時離席時，將餐巾輕放在椅子上或椅背上，示意服務生「尚未用畢」。',
        '用餐完全結束後，將餐巾略為折疊（不必摺回原狀），放在主餐盤左側或桌面。',
        '切勿將餐巾揉成一團，也絕不可直接丟入用過的餐盤中。',
        '若餐巾不慎掉落地面，請服務生更換，切勿自行鑽到桌底撿拾。'
      ],
      signalsTitle: '刀叉擺放傳達的 3 大服務訊號',
      signals: [
        {
          name: '暫停用餐 / 尚未用畢 (Pause)',
          visual: '八字形 (A-shape) 或交叉置於盤中',
          desc: '刀刃朝內，叉齒朝下或朝上，刀叉分開置於盤內兩側，向侍者示意「仍在用餐，請勿收盤」。'
        },
        {
          name: '用餐完畢 / 可以收盤 (Finished)',
          visual: '刀叉並列平行置於盤中 (4:20 或 6:30 方向)',
          desc: '刀刃朝向自己，叉齒朝上，兩者整齊平行放在盤內中央，向侍者明確示意「本道菜已吃完，可撤盤」。'
        },
        {
          name: '等待下一道菜 (Ready for Next)',
          visual: '刀叉呈十字形交叉 (Cross)',
          desc: '部分傳統宴席將刀橫放盤中、叉直放其上呈十字，示意期待下一道上菜（現代餐廳已多簡化為並列）。'
        }
      ],
      soupTitle: '優雅喝湯 6 準則',
      soupRules: [
        '以湯匙從湯碗「由內向外」方向舀取，避免湯汁濺向自己。',
        '湯匙送至嘴邊時，以「匙邊」就口輕啜，不把整支湯匙塞入口中。',
        '喝湯時保持安靜，不吹氣降溫，不發出吸食或嘖嘖聲響。',
        '喝到最後剩餘少許時，可將湯碗向外側微傾舀取，切勿端起整個湯碗仰頭喝乾。',
        '湯匙暫停或用畢時，應置於湯盤底部的托盤上，而非長時間插在深湯碗內。'
      ],
      breadTitle: '麵包、調味與共享禮儀',
      breadRules: [
        '麵包應用手撕成一口大小，再以奶油刀沾取適量奶油塗在該小塊上，切勿拿整片麵包大口啃咬或一次塗滿整片。',
        '品嚐菜餚前不宜立即撒鹽或胡椒（代表對主廚調味的尊重）；若需調味料，鹽與胡椒應一併傳遞給對方。'
      ]
    },

    // 六、13 大常見失禮行為對照表
    fauxPas: {
      title: '六、中西餐 13 大常見失禮行為深度對照表',
      desc: '盤點在正式場合中最容易忽略的禮儀細節，並提供得體優雅的改善對策。',
      filterAll: '全部行為',
      filterStart: '開動與進食',
      filterUtensils: '餐具處理',
      filterSocial: '社交舉止',
      tableHeaders: {
        behavior: '行為樣態',
        chinese: '中餐場合問題',
        western: '西餐場合問題',
        improvement: '得體改善對策'
      },
      list: [
        {
          category: '開動與進食',
          behavior: '先於主人或長輩開動',
          chinese: '忽略長幼尊卑與主客秩序，顯得貪吃無禮',
          western: '忽略主人致詞或全桌上菜節奏，顯得急躁',
          improvement: '靜候主人舉杯示意或第一道菜全員上齊後再開動'
        },
        {
          category: '開動與進食',
          behavior: '越過他人手臂取菜 (飛象過河)',
          chinese: '妨礙鄰座用餐空間，易造成餐具碰撞或衣袖沾染',
          western: '侵犯他人個人餐位邊界，極為失禮',
          improvement: '請鄰座協助傳遞，或等旋轉桌轉至面前再取'
        },
        {
          category: '開動與進食',
          behavior: '在菜盤中翻攪挑選 (迷箸刨墳)',
          chinese: '破壞共享菜餚整潔，將唾液細菌帶入公共盤',
          western: '不符合分餐規範，自私且不衛生',
          improvement: '以公筷取靠近自己的一份，不挑肥揀瘦'
        },
        {
          category: '餐具處理',
          behavior: '筷子垂直插在飯碗中央',
          chinese: '帶有祭祀死者香爐之聯想，極度忌諱',
          western: '不適用（西餐無此餐具）',
          improvement: '暫停用餐時將筷子平放於筷架或骨碟邊緣'
        },
        {
          category: '餐具處理',
          behavior: '將用過的刀叉直接放回桌面',
          chinese: '油漬污染桌布，顯得凌亂',
          western: '極大失禮！油漬弄髒高級桌布且不便侍者服務',
          improvement: '刀叉一旦拿起使用，就只能放置於盤內，絕不沾回桌面'
        },
        {
          category: '開動與進食',
          behavior: '口含食物時開口說話',
          chinese: '食物碎屑易噴出，影響同桌食慾與觀感',
          western: '被視為粗魯不潔，破壞正式餐敘氣氛',
          improvement: '每次進食切成一口大小，吞嚥完畢後再優雅發言'
        },
        {
          category: '社交舉止',
          behavior: '大聲呼叫或拍手召喚服務員',
          chinese: '造成全場喧鬧，顯得缺乏教養',
          western: '顯得極不尊重專業侍酒師與外場人員',
          improvement: '以眼神示意、輕輕舉手或等侍者走近時輕聲告知'
        },
        {
          category: '社交舉止',
          behavior: '在餐桌上公開補妝或剔牙',
          chinese: '剔牙需以另一手遮口；補妝宜離席',
          western: '正式場合嚴禁在桌上照鏡子、補口紅或剔牙',
          improvement: '優雅說聲「失陪」，移步至洗手間整理儀容'
        },
        {
          category: '開動與進食',
          behavior: '自助餐一次拿取過多堆成小山',
          chinese: '容易造成浪費，且堆疊食物影響風味',
          western: '破壞食物美感，不符合節制優雅原則',
          improvement: '少量多次取用，每次取一至兩樣精緻品嚐'
        },
        {
          category: '社交舉止',
          behavior: '強迫同行賓客敬酒、逼酒、乾杯',
          chinese: '造成他人社交與身體沉重壓力，有失厚道',
          western: '嚴重侵犯個人界線，不符合現代餐飲文化',
          improvement: '以茶代酒或隨意小酌，尊重每個人的飲酒意願與體質'
        },
        {
          category: '開動與進食',
          behavior: '邊大聲咀嚼邊吧唧嘴 (Smacking Lips)',
          chinese: '發出刺耳咀嚼聲，嚴重破壞同桌食慾',
          western: '在西方餐桌上被視為最難以忍受的失禮行為',
          improvement: '閉口咀嚼，放慢進食節奏，保持安靜無聲'
        },
        {
          category: '社交舉止',
          behavior: '用餐時全程滑手機或講電話',
          chinese: '忽視長輩與同桌互動，氣氛冷落',
          western: '嚴重破壞正式宴會對話交流之核心意義',
          improvement: '手機調為靜音收於包內；如需接聽緊急電話，離席至外接聽'
        },
        {
          category: '餐具處理',
          behavior: '拿著刀叉在空中揮舞比畫',
          chinese: '具攻擊性且易濺出醬汁',
          western: '具危險性且動作粗魯，嚴重違反餐桌儀態',
          improvement: '說話時將刀叉平穩放在盤內，雙手自然垂放或置於桌邊'
        }
      ]
    },

    // 七、三大用餐場合
    scenarios: {
      title: '七、自助餐、正式宴會與日常家庭用餐',
      desc: '不同場合有不同的正式維度。靈活掌握場合規範，展現從容優雅。',
      buffet: {
        title: '自助餐 (Buffet) 8 大優雅準則',
        points: [
          '耐心排隊順向取餐，絕不插隊或中途逆向攔截熱門菜色。',
          '取餐時不可邊咀嚼食物邊靠近公共保溫餐盤，避免口水噴灑。',
          '每次只取適量（一至兩分），吃完再取第二輪，避免盤中菜餚混雜。',
          '已接觸過個人口部或餐具的食物，絕對不可放回公共餐台。',
          '絕不用手直接觸摸共用食物，全程使用公共夾子或公匙。',
          '進行第二輪取餐時，若是正式自助餐廳，通常應換用乾淨的新餐盤。',
          '主動禮讓並協助同行之兒童與長者避開高溫湯鍋與尖銳動線。',
          '不在取餐排隊隊伍中邊走邊試吃，保持取餐動線暢通。'
        ]
      },
      banquet: {
        title: '正式宴會 (Formal Banquet) 事前與現場守則',
        points: [
          '事前準確回覆出席狀況 (RSVP)，確認著裝要求 (Dress Code)。',
          '提前告知主辦方過敏原、宗教禁忌或特殊飲食偏好。',
          '絕不擅自攜帶未受邀之伴侶、友人或孩童入場。',
          '依照現場姓名卡 (Place Card) 或主人安排就座，不隨意調換位置。',
          '飲酒保持適量節制，絕不喧鬧划拳、勸酒或失控失態。',
          '不在餐桌上談論令人不適之疾病、政治或爭議性話題。',
          '中途離席僅需向鄰座簡短示意「失陪」，無需向全桌大聲宣告原因。',
          '宴會散席時主動向主人與服務團隊致以誠摯感謝。'
        ]
      },
      family: {
        title: '日常家庭用餐與幼兒循序引導',
        points: [
          '家庭餐桌雖輕鬆，仍應保有三項核心能力：用好餐具、不妨礙他人、愛惜食物。',
          '幼兒教學採漸進式：低齡先學坐穩、等待長輩、鋪餐巾與閉口咀嚼。',
          '隨年齡增長再循序引入刀叉持法、公筷使用與宴會禮貌。',
          '選擇合適重量與握感之兒童安全餐具，不以成人嚴苛標準打擊孩子用餐樂趣。'
        ]
      }
    },

    // 八、版權安全與教材製作
    copyrightSection: {
      title: '八、版權安全的圖像與教材製作方案',
      desc: '在數位時代製作餐飲教材或網頁，必須具備高度的著作權法治觀念。',
      pyramidTitle: '圖像素材授權安全等級金字塔',
      pyramid: [
        { level: '等級 1 (最高安全)', source: '自主繪製向量 SVG / CSS 圖表', advice: '100% 掌握完整著作權，完全杜絕侵權爭議（本站全數採用）。' },
        { level: '等級 2 (高安全)', source: '自主拍攝實景照片', advice: '需取得現場環境與出鏡人物之必要肖像授權，保存原檔。' },
        { level: '等級 3 (高安全)', source: '明確標示 CC0 / Public Domain', advice: '公有領域素材，下載時保留來源頁面與授權說明備查。' },
        { level: '等級 4 (中等安全)', source: 'Creative Commons (CC 授權)', advice: '嚴格核對是否需署名 (BY)、是否允許商用 (NC) 與是否允許改作 (ND)。' },
        { level: '等級 5 (中等安全)', source: '已購買之商用付費圖庫', advice: '保留購買訂單收據、授權證明與約定之使用受眾範圍。' },
        { level: '等級 6 (極高風險)', source: '網路搜尋 / 社群截圖 / 部落格轉貼', advice: '標註出處不等於合法取得授權！去浮水印重新裁切仍屬侵權，嚴禁使用。' }
      ],
      vectorAdvantages: [
        '幾何簡練：圓桌、方桌、刀叉杯盤用幾何線條表達最直觀清晰。',
        '高解析度：SVG 向量圖檔在手機、平板與 4K 螢幕上永遠銳利不模糊。',
        '交互性強：能輕鬆綁定點擊高亮、多語系切換與動畫反饋。'
      ]
    },

    // 九、適用限制與判斷
    reliability: {
      title: '九、資料可靠性與判斷順序',
      desc: '禮儀不是死板的教條，而是活在不同文化與情境中的體貼。',
      notes: [
        '中餐各地區在座次尊卑、敬酒習俗與茶禮細節上存在客觀地域差異。',
        '西餐在法式 Fine Dining、英式皇家、美式休閒之間亦有不同傳統。',
        '現代餐飲更重視「平等、包容、無障礙、衛生與賓客舒適度」。'
      ],
      decisionStepsTitle: '面對禮儀衝突時的 5 步最佳判斷順序',
      steps: [
        { step: '1', title: '遵從主人與主辦方安排', desc: '以現場主人、名牌指引或主廚/外場經理的明確服務說明為最高依據。' },
        { step: '2', title: '觀察同桌賓客共同做法', desc: '不確定時先觀察多數人的節奏，從容跟隨主流做法，不特立獨行。' },
        { step: '3', title: '優先考慮衛生與他人舒適', desc: '任何動作以「不弄髒食物、不阻礙動線、不發出異響」為第一考量。' },
        { step: '4', title: '考量場合正式維度與文化', desc: '在輕鬆小館不必過度拘泥皇家繁文縟節；在頂級國宴則注重儀態細節。' },
        { step: '5', title: '最後才考究刀叉角度細節', desc: '不必死記鐘面幾點幾分等絕對角度，傳達出清楚意圖即已足夠。' }
      ]
    },

    // 十、實用檢查清單
    checklist: {
      title: '十、實用互動檢查清單 (Interactive Checklist)',
      subtitle: '出門赴宴前的速查口袋清單 · 點擊打勾即時計算禮儀準備完成度',
      progressLabel: '禮儀準備度：',
      resetBtn: '重置所有項目',
      categories: [
        {
          id: 'chinese-before',
          title: '🥢 中餐入席前準備',
          items: [
            '確認主桌、桌次與自己的座次安排',
            '事前確認同桌賓客之飲食禁忌與宗教信仰',
            '了解現場是否備有公筷公匙與旋轉盤',
            '將手機調至靜音並妥善收納於口袋或包內',
            '等候主人或主賓引導，不搶先落座',
            '靜候長輩或主人舉杯動筷後再開始用餐'
          ]
        },
        {
          id: 'chinese-during',
          title: '🥢 中餐用餐進行中',
          items: [
            '絕不敲碗、不用筷子指人、不直插筷子於飯中',
            '不拿筷子在公共菜盤中翻攪挑揀',
            '夾菜只取自己面前，不越過他人手臂（避免飛象過河）',
            '轉動旋轉桌前先確認無人正在夾菜或盛湯',
            '骨頭、魚刺與果皮妥善置於骨碟，不吐於桌面',
            '不強迫他人敬酒、逼酒或起鬨乾杯',
            '口中含食物時絕不開口說話，保持細嚼慢嚥'
          ]
        },
        {
          id: 'western-before',
          title: '🍴 西餐入席前準備',
          items: [
            '確認邀請函上的著裝要求 (Dress Code) 並準時抵達',
            '觀察桌上的姓名卡 (Place Card) 或等候侍者引導就座',
            '確認麵包盤（左上）、水杯酒杯（右上）與刀叉位置',
            '待主人示意後將餐巾對折平鋪於大腿膝上',
            '記住「由外至內」按照上菜順序取用餐具'
          ]
        },
        {
          id: 'western-during',
          title: '🍴 西餐用餐進行中',
          items: [
            '左手持叉、右手持刀，食指按住刀背穩定切割',
            '食物切成一口大小，切一口吃一口，不拉扯食物',
            '用過的刀叉絕不沾放回桌面，始終置於盤內',
            '喝湯由內向外舀取，以匙邊就口，不吹氣不發聲',
            '麵包用手撕小塊再抹奶油，不整片大口咬食',
            '索取調味料時，鹽與胡椒一併傳遞給對方',
            '中途離席先禮貌說「失陪」，將餐巾置於椅面上',
            '暫停用餐時刀叉呈八字形分開放置於盤中',
            '用餐結束後刀叉並列平行放在盤內中央（4:20 方向）'
          ]
        }
      ]
    },

    // 結論五大原則
    conclusion: {
      title: '結語：現代餐桌禮儀五大核心原則',
      desc: '中餐掌握「先後、共享、公筷、不可越界」；西餐掌握「由外至內、餐巾、刀叉、逐口進食」。兩者本質皆為尊重與體貼。',
      principles: [
        { num: '01', title: '先觀察，再行動', desc: '遇不熟悉的場合，先觀察主人、侍者與同桌前輩之示範。' },
        { num: '02', title: '不越過他人，不干擾他人', desc: '維持個人與他人舒適邊界，調味與菜餚以傳遞代替越界。' },
        { num: '03', title: '使用公用餐具，維護衛生', desc: '公共盤皿一律以公筷公匙取用，骨刺入碟，保持桌面整潔。' },
        { num: '04', title: '口中有食不語，動作從容', desc: '閉口咀嚼，放慢節奏，不急躁不喧鬧，展現優雅教養。' },
        { num: '05', title: '圖表教材只用原創與合法授權', desc: '數位時代遵守著作權法，堅持自主繪製與 CC0 公有授權。' }
      ],
      backToTop: '回到頂部',
      backToHome: '返回肉品侍酒圖鑑首頁'
    }
  },

  'en': {
    title: 'Chinese & Western Dining Etiquette Guide',
    subtitle: 'Cultural differences, round & rectangular seating charts, cutlery signals, 13 common faux pas, and an interactive checklist.',
    brandTag: 'DINING ETIQUETTE',
    badge: 'Practical Social & Dining Etiquette Guide',
    introQuote: '"Chinese dining centers on sharing and relationship hierarchy; Western dining focuses on individual place settings and course pacing. True etiquette is not rigid dogmatism, but respect, hygiene, and calm demeanor."',
    
    quickNav: [
      { id: 'culture-diff', label: '1. Cultural Differences', icon: '⚖️' },
      { id: 'chinese-seating', label: '2. Chinese Seating', icon: '🪑' },
      { id: 'western-setting', label: '3. Western Place Setting', icon: '🍽️' },
      { id: 'chinese-flow', label: '4. Chinese Dining Flow', icon: '🥢' },
      { id: 'western-flow', label: '5. Western Dining Flow', icon: '🍴' },
      { id: 'faux-pas', label: '6. Common Faux Pas', icon: '⚠️' },
      { id: 'scenarios', label: '7. Dining Scenarios', icon: '🥂' },
      { id: 'copyright', label: '8. Copyright Principles', icon: '🛡️' },
      { id: 'reliability', label: '9. Rule Boundaries', icon: '🧭' },
      { id: 'checklist', label: '10. Interactive Checklist', icon: '✅' },
    ],

    copyrightNotice: {
      title: 'Important Copyright Principle & Disclaimer',
      desc: 'All seating diagrams and table setting charts in this guide are custom-drawn using original SVG and frontend components without unauthorized external images, fully adhering to CC0 and original publication standards.',
      points: [
        'Original SVG vector graphics prevent any copyright infringement risks',
        'No embedding or copying of third-party copyrighted images',
        'Designed as a social decision-making guide; always defer to the host in formal events'
      ]
    },

    culture: {
      title: '1. Cultural Differences between Chinese & Western Dining',
      desc: 'Behind the formal differences lie two distinct social philosophies: communal sharing vs. individualized pacing.',
      chineseCard: {
        title: 'Chinese Dining: Communal Table & Hierarchy',
        subtitle: 'Round Table · Seniority & Host Relations · Interaction',
        traits: [
          'Shared dishes centered on a round table with a Lazy Susan turntable.',
          'Elders, hosts, or VIPs take the first portion before others begin.',
          'Always use serving chopsticks and spoons for shared dishes.',
          'Check that no one is reaching before turning the Lazy Susan.',
          'Take food closest to you without flipping through or reaching across.',
          'Place bones and shells on the bone dish, never on the table.'
        ]
      },
      westernCard: {
        title: 'Western Dining: Individual Place Settings & Courses',
        subtitle: 'Individual Portions · Outside-In Cutlery · Course Pacing',
        traits: [
          'Individual portions with dedicated plates, cutlery, and glassware.',
          'Dishes served in sequential courses (Appetizer, Soup, Salad, Main, Dessert).',
          'Cutlery is used from outside in; blade faces the plate.',
          'Cut food into bite-sized pieces; chew and swallow before speaking.',
          'Napkin placed on lap; used gently to dab mouth.',
          'Quiet chewing, no waving of cutlery in the air.'
        ]
      },
      tableTitle: '7 Core Dimensions of Chinese vs. Western Dining',
      aspects: [
        { aspect: 'Starting the Meal', chinese: 'Wait for elders or host to start', western: 'Wait for host invitation or first course', purpose: 'Respect occasion and dining companions' },
        { aspect: 'Taking Food', chinese: 'Use serving utensils, take closest portion', western: 'Serve individually, pass seasonings', purpose: 'Maintain hygiene, prevent boundary breaches' },
        { aspect: 'Eating Style', chinese: 'Bite-sized, bone dish for scraps', western: 'Cut bite by bite, no tearing', purpose: 'Keep table clean, maintain calm poise' },
        { aspect: 'Conversation', chinese: 'No talking with mouth full', western: 'Chew with mouth closed, speak after swallowing', purpose: 'Respect companions and maintain hygiene' },
        { aspect: 'Handling Cutlery', chinese: 'Never stick chopsticks into rice, use chopstick rest', western: 'Never place used cutlery back on table, use signals', purpose: 'Prevent superstition, keep tablecloth clean' },
        { aspect: 'Excusing Oneself', chinese: 'Briefly notify companions quietly', western: 'Politely say "Excuse me", leave napkin on chair', purpose: 'Minimize disruption to dining atmosphere' },
        { aspect: 'Finishing the Meal', chinese: 'Return utensils neatly, thank host', western: 'Place knife and fork parallel in plate, fold napkin', purpose: 'Clear signal to waitstaff that course is finished' }
      ]
    },

    seating: {
      title: '2. Chinese Seating Arrangements: Round & Rectangular Tables',
      desc: 'Round tables facilitate communal sharing, but seats still convey clear social respect in formal banquets.',
      roundTableLogic: [
        { role: 'Seat of Honor (Primary Seat)', desc: 'Facing the main entrance, commanding view of the room, or farthest from traffic.' },
        { role: 'Host / Co-Host', desc: 'Host sits at the seat of honor or opposite, orchestrating the meal pace.' },
        { role: 'Primary Guest of Honor', desc: 'Sits immediately to the right of the host (right hand is position of honor).' },
        { role: 'Secondary Guest of Honor', desc: 'Sits immediately to the left of the host or right of the co-host.' },
        { role: 'General Guests', desc: 'Arranged outward according to seniority, relation, or business needs.' },
        { role: 'Near Entrance', desc: 'Considered junior or service-support positions for easy movement.' }
      ],
      turntableRules: [
        'Check visually that no one is reaching before turning the Lazy Susan.',
        'Rotate slowly and smoothly to avoid spilling drinks or hot soup.',
        'Never place personal bowls, glasses, or phones on the turntable.',
        'Stop rotating before taking food from the dish.',
        'Always use serving spoons/chopsticks; take reasonable portions.',
        'Politely assist others by rotating desired dishes toward them.'
      ],
      squareTableLogic: 'Square or long tables create clearer upper and lower head positions. Facing the door is upper; backing the door is lower. Key conversationalists should sit across or adjacent to primary guests.',
      decisionTableTitle: '6 Practical Chinese Banquet Scenarios',
      decisionScenarios: [
        { scenario: 'Family Gathering', priority: 'Seniority & care convenience', advice: 'Elders in stable, easy-access seats; children near caregivers.' },
        { scenario: 'Business Banquet', priority: 'Client relations & communication', advice: 'VIP to host’s right; key negotiators in direct sightline.' },
        { scenario: 'Wedding Reception', priority: 'Family elders & main tables', advice: 'Head table for close elders; secondary tables arranged by relation.' },
        { scenario: 'International Guests', priority: 'Dietary restrictions & culture', advice: 'Confirm Halal/dietary needs beforehand; assign bilingual host.' },
        { scenario: 'Elderly / Mobility-Impaired', priority: 'Safety & clear passageway', advice: 'Avoid narrow passages, drafty doors, or seats requiring frequent standing.' },
        { scenario: 'Large Multi-Table Banquets', priority: 'Table hierarchy & flow', advice: 'Central front table is head table; other tables arranged systematically.' }
      ]
    },

    westernSetting: {
      title: '3. Western Seating & Place Setting Layout',
      desc: 'A Western place setting is an orderly personal dining space where utensils strictly correspond to the menu courses from outside in.',
      rules: [
        'Arranged symmetrically around the host and hostess; VIP guests sit to their right.',
        'Seats facing the entrance or best view are considered prime positions.',
        'Modern events prioritize guest comfort, conversation, and accessibility over rigid historical gender rules.'
      ],
      utensilsListTitle: 'Standard Place Setting Cutlery Guide',
      utensils: [
        { pos: 'Left of plate (Outermost)', name: 'Salad / Appetizer Fork', usage: 'For salads and cold appetizers (smaller size)' },
        { pos: 'Left of plate (Inner)', name: 'Dinner Fork', usage: 'For main meat/hot dishes (larger with longer tines)' },
        { pos: 'Center', name: 'Service / Dinner Plate', usage: 'Central focal point; course plates placed on top' },
        { pos: 'Right of plate (Inner)', name: 'Dinner Knife', usage: 'For main meat course; blade faces inward' },
        { pos: 'Right of plate (Middle)', name: 'Fish / Appetizer Knife', usage: 'For slicing fish or starters' },
        { pos: 'Right of plate (Outermost)', name: 'Soup Spoon', usage: 'For clear or cream soups (deep round bowl)' },
        { pos: 'Top of plate', name: 'Dessert Spoon & Fork', usage: 'Spoon handle to right, fork to left; for dessert course' },
        { pos: 'Top-Left', name: 'Bread Plate & Butter Knife', usage: 'For bread; butter knife rests horizontally across plate' },
        { pos: 'Top-Right', name: 'Water, Red & White Wine Glasses', usage: 'Water goblet above knife, flanked by red and white wine glasses' },
        { pos: 'On or left of plate', name: 'Napkin', usage: 'Unfolded and placed across lap upon seating' }
      ],
      orderFlowTitle: 'Outside-In Usage Example (3-Course Meal)',
      orderSteps: [
        { step: 'Step 1: Appetizer / Soup', action: 'Use outermost salad fork and knife, or outermost soup spoon.' },
        { step: 'Step 2: Main Course', action: 'Use the dinner fork (left hand) and dinner knife (right hand).' },
        { step: 'Step 3: Dessert', action: 'Use the dessert fork/spoon above the plate when dessert arrives.' }
      ]
    },

    chineseFlow: {
      title: '4. Chinese Dining Procedures & Chopstick Etiquette',
      desc: 'The essence of Chinese dining is respecting communal boundaries and maintaining hygiene.',
      processTitle: 'Seating, Starting & Reaching Etiquette',
      processItems: [
        { label: 'Seating & Starting', desc: 'Wait for the host or VIP to invite everyone to sit; start eating only after elders or host raise their chopsticks.' },
        { label: 'Avoid "Flying Over"', desc: 'Only take food directly in front of you; do not reach arms across other guests.' },
        { label: 'Strictly Use Serving Utensils', desc: 'Never dig through communal dishes with personal chopsticks; use serving spoons/chopsticks.' },
        { label: 'Proper Bone Dish Use', desc: 'Use chopsticks to place bones, shells, and gristle onto the bone dish, never on the table.' }
      ],
      chopsticksTitle: '9 Major Chopstick Taboos (Visual Guide)',
      chopsticksTaboos: [
        { name: 'Pointing with Chopsticks', desc: 'Pointing at someone with chopsticks is considered aggressive and disrespectful.' },
        { name: 'Sticking Chopsticks in Rice', desc: 'Sticking chopsticks vertically resembles burning incense for the dead; strictly forbidden.' },
        { name: 'Sucking or Biting Chopsticks', desc: 'Sucking on chopstick tips or biting them noisily is unhygienic and impolite.' },
        { name: 'Tapping Bowls or Plates', desc: 'Tapping tableware mimics beggars asking for food; considered inauspicious.' },
        { name: 'Digging Through Food', desc: 'Flipping through communal dishes searching for favorite pieces ruins food presentation.' },
        { name: 'Dripping Sauce', desc: 'Dripping broth across the table; always use a small plate to catch drops.' },
        { name: 'Hesitating Above Dishes', desc: 'Hovering chopsticks indecisively over dishes obstructs others from taking food.' },
        { name: 'Dropping Chopsticks', desc: 'If chopsticks fall to the floor, politely ask the server for a clean pair.' },
        { name: 'Crossing Tableware', desc: 'Leaving chopsticks haphazardly across bowls; always place them neatly on the chopstick rest.' }
      ],
      teaEtiquetteTitle: 'Tea Pouring & Finger-Tapping Thank You Ritual',
      teaPoints: [
        { rule: 'Pouring Order', desc: 'Host serves elders and VIPs first, filling cups to 70% (seven-tenths full shows respect).' },
        { rule: 'Teapot Spout Direction', desc: 'Never point the teapot spout directly at any seated guest.' },
        { rule: 'Finger Tapping (Kowtow Gesture)', desc: 'Tap index and middle fingers lightly twice on the table to express gratitude without interrupting conversation.' }
      ]
    },

    westernFlow: {
      title: '5. Western Dining Procedures & Cutlery Signals',
      desc: 'Western dining conveys silent communication to waitstaff through the placement of knives and forks.',
      napkinTitle: '7 Rules of Napkin Etiquette',
      napkinRules: [
        'Unfold and place the napkin across your lap once the host does so.',
        'Use the napkin solely to dab your lips; never wipe cutlery, glasses, sweat, or tables.',
        'Never tuck the napkin into your collar like a bib unless eating whole lobster informally.',
        'When temporarily excusing yourself, place the napkin loosely on your chair seat.',
        'At the end of the meal, loosely fold the napkin and place it to the left of the plate.',
        'Never crumple the napkin into a tight ball or throw it into a dirty plate.',
        'If your napkin falls to the floor, ask the server for a replacement rather than diving under the table.'
      ],
      signalsTitle: '3 Essential Cutlery Service Signals',
      signals: [
        { name: 'Pause / Still Eating', visual: 'Inverted V-shape (A-shape) on plate', desc: 'Fork on left, knife on right, tips inward, signaling "I am still eating; do not clear."' },
        { name: 'Finished / Ready to Clear', visual: 'Parallel at 4:20 or 6:30 position', desc: 'Blade facing inward, tines up, placed neatly parallel in center to signal "Finished with this course."' },
        { name: 'Ready for Next Course', visual: 'Crossed (Knife horizontal, Fork vertical)', desc: 'Traditional signal indicating readiness for the subsequent course (modern restaurants often use parallel).' }
      ],
      soupTitle: '6 Rules of Elegant Soup Consumption',
      soupRules: [
        'Dip the spoon from near to far (away from you) to prevent splashing.',
        'Sip quietly from the side of the spoon; do not place the whole bowl in your mouth.',
        'Never blow on hot soup or make slurping noises.',
        'Tilt the soup bowl slightly outward (away from you) to spoon the last drops; never pick up the bowl to drink.',
        'When resting or finished, place the spoon on the underlying saucer, not standing in the bowl.'
      ],
      breadTitle: 'Bread, Butter & Seasoning Etiquette',
      breadRules: [
        'Tear bread into bite-sized pieces with your fingers; butter each piece individually right before eating.',
        'Do not add salt or pepper before tasting the dish; when passing seasonings, always pass salt and pepper together as a pair.'
      ]
    },

    fauxPas: {
      title: '6. 13 Common Dining Faux Pas: Comparative Analysis',
      desc: 'Identifying subtle mistakes at formal dining tables and providing graceful solutions.',
      filterAll: 'All Faux Pas',
      filterStart: 'Starting & Eating',
      filterUtensils: 'Handling Cutlery',
      filterSocial: 'Social Etiquette',
      tableHeaders: {
        behavior: 'Blunder / Behavior',
        chinese: 'Issue in Chinese Dining',
        western: 'Issue in Western Dining',
        improvement: 'Graceful Solution'
      },
      list: [
        { category: 'Starting & Eating', behavior: 'Starting before host or elders', chinese: 'Disrespects seniority and host hierarchy', western: 'Disrupts banquet rhythm and host speech', improvement: 'Wait for host toast or until all first courses are served.' },
        { category: 'Starting & Eating', behavior: 'Reaching across other diners ("Flying Over")', chinese: 'Invades neighbor space, risks knocking glassware', western: 'Breaches personal place setting boundary', improvement: 'Ask neighbors to pass or wait for Lazy Susan rotation.' },
        { category: 'Starting & Eating', behavior: 'Digging through communal dishes', chinese: 'Ruins communal dish cleanliness and hygiene', western: 'Violates individual serving standards', improvement: 'Take the closest piece using serving utensils.' },
        { category: 'Handling Cutlery', behavior: 'Sticking chopsticks vertically into rice', chinese: 'Evokes incense offered to ancestors/deceased', western: 'N/A (Chopsticks not used)', improvement: 'Rest chopsticks flat on the chopstick rest.' },
        { category: 'Handling Cutlery', behavior: 'Placing used cutlery back on tablecloth', chinese: 'Leaves oil stains on tablecloth', western: 'Major faux pas! Stains linen and hinders service', improvement: 'Once picked up, cutlery must only rest in the plate.' },
        { category: 'Starting & Eating', behavior: 'Talking with food in mouth', chinese: 'Risk of spitting food; ruins companion appetite', western: 'Considered extremely unrefined and impolite', improvement: 'Take bite-sized portions and swallow before speaking.' },
        { category: 'Social Etiquette', behavior: 'Loudly shouting or clapping for servers', chinese: 'Creates noisy disruption in dining hall', western: 'Disrespects professional sommelier and waitstaff', improvement: 'Make eye contact, raise hand gently, or speak quietly when server approaches.' },
        { category: 'Social Etiquette', behavior: 'Applying makeup or picking teeth at table', chinese: 'Cover mouth when toothpicking; excuse for makeup', western: 'Strictly prohibited to use mirrors or cosmetics at table', improvement: 'Say "Excuse me" and visit the restroom for grooming.' },
        { category: 'Starting & Eating', behavior: 'Piling huge heaps of food at buffet', chinese: 'Causes food waste and mixes flavors', western: 'Ruins presentation; reflects lack of restraint', improvement: 'Take 1–2 items per round in moderate portions.' },
        { category: 'Social Etiquette', behavior: 'Pressuring others to drink / chug alcohol', chinese: 'Imposes social stress and potential health risks', western: 'Breaches personal boundaries and modern culture', improvement: 'Toast with tea/water; respect everyone’s choice and tolerance.' },
        { category: 'Starting & Eating', behavior: 'Noisy chewing or lip smacking', chinese: 'Disruptive chewing sounds ruin meal enjoyment', western: 'Considered one of the worst social dining blunders', improvement: 'Chew with lips closed; slow down dining pace.' },
        { category: 'Social Etiquette', behavior: 'Constantly looking at phone or calling', chinese: 'Neglects elders and dinner conversation', western: 'Destroys the central social purpose of formal banquets', improvement: 'Keep phone on silent in bag; step outside for urgent calls.' },
        { category: 'Handling Cutlery', behavior: 'Waving knife and fork in the air', chinese: 'Appears aggressive; risks splattering sauce', western: 'Dangerous, crude, and breaches dining composure', improvement: 'Rest cutlery in plate while conversing.' }
      ]
    },

    scenarios: {
      title: '7. Buffet, Formal Banquet & Daily Family Dining',
      desc: 'Different occasions demand varying levels of formality. Adapt seamlessly with poise.',
      buffet: {
        title: 'Buffet: 8 Rules of Poise',
        points: [
          'Queue patiently in single file; never cut in or intercept popular dishes.',
          'Never chew food while leaning over communal buffet heating trays.',
          'Take moderate portions per round to keep flavors distinct.',
          'Never return food that has touched your plate or mouth to communal trays.',
          'Always use tongs and serving spoons, never bare hands.',
          'At formal buffets, use a fresh, clean plate for each subsequent round.',
          'Assist children and elderly guests away from hot soup stations and heavy traffic.',
          'Do not sample food while standing in the buffet queue.'
        ]
      },
      banquet: {
        title: 'Formal Banquet: Preparation & Floor Rules',
        points: [
          'RSVP promptly and adhere strictly to the dress code.',
          'Inform the organizer in advance of allergies or dietary needs.',
          'Never bring uninvited guests, dates, or children.',
          'Sit at your designated place card seat without swapping.',
          'Drink responsibly; avoid boisterous drinking games or pressuring others.',
          'Avoid controversial or unpleasant topics (illness, politics) at the table.',
          'Excuse yourself quietly with a simple "Excuse me" rather than announcing your reason.',
          'Thank the host and waitstaff warmly upon departure.'
        ]
      },
      family: {
        title: 'Daily Family Dining & Child Guidance',
        points: [
          'Family dining should retain three core pillars: utensil mastery, respecting shared space, and valuing food.',
          'Guide children progressively: start with sitting calmly, waiting for elders, and chewing quietly.',
          'Gradually introduce knife/fork skills, serving chopsticks, and banquet courtesy as they grow.',
          'Use child-appropriate lightweight safety cutlery; do not overwhelm young children with rigid adult rules.'
        ]
      }
    },

    copyrightSection: {
      title: '8. Copyright-Safe Imagery & Educational Design',
      desc: 'Designing digital culinary resources requires strong copyright hygiene.',
      pyramidTitle: 'Image Licensing Safety Pyramid',
      pyramid: [
        { level: 'Level 1 (Highest Safety)', source: 'Original Vector SVG / CSS Diagrams', advice: 'Full intellectual property control; zero infringement risk (Used 100% on this site).' },
        { level: 'Level 2 (High Safety)', source: 'Original On-site Photography', advice: 'Obtain venue and model releases; store raw image files.' },
        { level: 'Level 3 (High Safety)', source: 'CC0 / Public Domain Assets', advice: 'Free for commercial use; archive source link and license date.' },
        { level: 'Level 4 (Moderate Safety)', source: 'Creative Commons (CC Licensed)', advice: 'Check Attribution (BY), Non-Commercial (NC), and No-Derivatives (ND) clauses.' },
        { level: 'Level 5 (Moderate Safety)', source: 'Purchased Stock Photos', advice: 'Retain license receipts and verify allowable audience scope.' },
        { level: 'Level 6 (Extreme Risk)', source: 'Web Searches / Screenshots / Reposts', advice: 'Attribution is NOT a legal license! Cropping watermarks is copyright infringement.' }
      ],
      vectorAdvantages: [
        'Clean geometry: Lines and icons convey round/square tables and cutlery layouts with perfect clarity.',
        'High resolution: SVG vectors remain crisp on mobile, tablet, and 4K displays.',
        'Interactive: Easily binds to click-highlights, language switching, and micro-animations.'
      ]
    },

    reliability: {
      title: '9. Rule Boundaries & 5-Step Decision Hierarchy',
      desc: 'Etiquette is not a rigid legal code, but considerate empathy across cultures.',
      notes: [
        'Regional differences exist across Chinese regions regarding seating, toasting, and tea rites.',
        'Western dining varies across French fine dining, British royal protocol, and modern American casual.',
        'Modern hospitality prioritizes equality, accessibility, hygiene, and guest comfort.'
      ],
      decisionStepsTitle: '5-Step Hierarchy when Facing Etiquette Conflicts',
      steps: [
        { step: '1', title: 'Follow Host & Organizer Instructions', advice: 'Defer to the explicit guidance of the host, place card, or head maître d’.' },
        { step: '2', title: 'Observe Dining Companions', advice: 'When unsure, observe what senior guests do and calmly follow suit.' },
        { step: '3', title: 'Prioritize Hygiene & Comfort', advice: 'Every action should prevent food contamination and minimize disturbance.' },
        { step: '4', title: 'Consider Occasion Formality', advice: 'Casual bistros do not require royal protocol; formal state banquets require decorum.' },
        { step: '5', title: 'Cutlery Angles are Secondary', advice: 'You do not need to memorize exact clock angles; conveying clear intent is what matters.' }
      ]
    },

    checklist: {
      title: '10. Practical Interactive Checklist',
      subtitle: 'Pocket checklist before attending banquets · Track your readiness in real time',
      progressLabel: 'Etiquette Readiness:',
      resetBtn: 'Reset All Items',
      categories: [
        {
          id: 'chinese-before',
          title: '🥢 Chinese Banquet: Pre-Dinner',
          items: [
            'Confirm main table, table number, and assigned seat',
            'Check dietary restrictions and religious customs of companions',
            'Verify availability of serving chopsticks and Lazy Susan',
            'Set mobile phone to silent and stow in pocket or bag',
            'Wait for host invitation before taking your seat',
            'Wait for elders or host to raise chopsticks before eating'
          ]
        },
        {
          id: 'chinese-during',
          title: '🥢 Chinese Banquet: During Dinner',
          items: [
            'Never tap bowls, point with chopsticks, or stick them in rice',
            'Never dig or stir through communal dishes',
            'Only take food directly in front; never reach across others',
            'Check that no one is reaching before turning the Lazy Susan',
            'Place bones and shells in the bone dish, never on the table',
            'Do not pressure others to drink or chug alcohol',
            'Never speak with food in mouth; chew quietly'
          ]
        },
        {
          id: 'western-before',
          title: '🍴 Western Banquet: Pre-Dinner',
          items: [
            'Confirm dress code on invitation and arrive punctually',
            'Locate your place card or wait for server guidance',
            'Identify bread plate (top-left), glasses (top-right), and cutlery',
            'Unfold napkin and place across lap once host does so',
            'Remember to use cutlery from outside in'
          ]
        },
        {
          id: 'western-during',
          title: '🍴 Western Banquet: During Dinner',
          items: [
            'Hold fork in left hand, knife in right hand with index finger on spine',
            'Cut bite by bite; do not tear large pieces of food',
            'Never place used cutlery back onto the tablecloth',
            'Spoon soup from near to far; sip from edge without blowing',
            'Tear bread with hands and butter each bite individually',
            'Pass salt and pepper together as a pair when requested',
            'Excuse yourself with "Excuse me" and leave napkin on chair',
            'Rest cutlery in inverted V-shape when pausing',
            'Place knife and fork parallel in center at 4:20 position when finished'
          ]
        }
      ]
    },

    conclusion: {
      title: 'Conclusion: 5 Golden Rules of Modern Dining Poise',
      desc: 'Chinese dining emphasizes "Seniority, Sharing, Serving Utensils, No Crossing"; Western dining emphasizes "Outside-In, Napkin, Cutlery Language, Bite-by-Bite". Both share the same soul: respect and empathy.',
      principles: [
        { num: '01', title: 'Observe First, Act Second', desc: 'When in unfamiliar settings, observe host and experienced companions.' },
        { num: '02', title: 'Never Reach Across Others', desc: 'Respect personal space; pass condiments and dishes smoothly.' },
        { num: '03', title: 'Use Serving Utensils for Hygiene', desc: 'Always use serving spoons/chopsticks for communal dishes; discard bones in dishes.' },
        { num: '04', title: 'No Speaking with Food in Mouth', desc: 'Chew with lips closed; maintain a calm, unhurried dining pace.' },
        { num: '05', title: 'Use Original, Copyright-Safe Visuals', desc: 'Adhere to copyright standards in digital culinary guides.' }
      ],
      backToTop: 'Back to Top',
      backToHome: 'Return to Meat & Wine Guide'
    }
  },

  'ja': {
    title: '中華・西洋テーブルマナー完全ガイド',
    subtitle: '文化構造の違い、円卓・長机の席順、カトラリーシグナル、13の無作法比較、実践チェックリスト',
    brandTag: 'DINING ETIQUETTE',
    badge: '実用的な食事マナーと社交エチケット',
    introQuote: '「中華料理は共有と関係秩序を重んじ、西洋料理は個人の席とコースの進行を重んじます。マナーの本質は教条ではなく、他者への敬意、衛生の保持、そして落ち着いた立ち振る舞いです。」',
    
    quickNav: [
      { id: 'culture-diff', label: '一、文化構造の違い', icon: '⚖️' },
      { id: 'chinese-seating', label: '二、中華料理の席順', icon: '🪑' },
      { id: 'western-setting', label: '三、西洋料理のテーブル配置', icon: '🍽️' },
      { id: 'chinese-flow', label: '四、中華料理の作法と箸', icon: '🥢' },
      { id: 'western-flow', label: '五、西洋料理の作法とナイフ', icon: '🍴' },
      { id: 'faux-pas', label: '六、よくある無作法比較', icon: '⚠️' },
      { id: 'scenarios', label: '七、三大食事シーン', icon: '🥂' },
      { id: 'copyright', label: '八、著作権安全原則', icon: '🛡️' },
      { id: 'reliability', label: '九、適用制限と判断順', icon: '🧭' },
      { id: 'checklist', label: '十、実践チェックリスト', icon: '✅' },
    ],

    copyrightNotice: {
      title: '著作権保護と安全な教材制作に関する声明',
      desc: '本ガイドの席順図、テーブル配置図、進行図はすべてオリジナルのSVGベクター画像およびフロントエンド構造化コンポーネントで描画されており、無断転載画像は一切使用していません。',
      points: [
        'オリジナルのSVG図形により著作権侵害リスクを完全に排除',
        '外部の著作権保護画像の無断埋め込み・転載を行いません',
        '実践的な意思決定サポートツールとして位置付け、公式の場では主催者の指示に従います'
      ]
    },

    culture: {
      title: '一、中華料理と西洋料理の文化構造の違い',
      desc: '形式の違いの背景には、共有と関係秩序 vs 個人完結のコース進行という2つの異なる社会哲学があります。',
      chineseCard: {
        title: '中華料理：共有の食卓と関係の秩序',
        subtitle: '円卓での共有 · 尊卑の序列 · 現場での気配り',
        traits: [
          '円卓と回転テーブルに料理を載せ、中央から全員で取り分けます。',
          '年長者、主催者、主賓が先に取り分けるのを待ってから食事を始めます。',
          '取り箸（公箸）や公用スプーンを使用し、直箸を避けます。',
          '回転テーブルを回す前に、他の人が料理を取っていないか確認します。',
          '手前の料理を取り、料理をかき混ぜたり人の前を手で横切ったりしません。',
          '骨や殻は骨皿に置き、テーブルの上に直接吐き出しません。'
        ]
      },
      westernCard: {
        title: '西洋料理：個人の席とコース進行',
        subtitle: '個人配膳 · 外側から内側のカトラリー · リズム',
        traits: [
          '個人ごとの配膳方式で、専用の皿、カトラリー、グラスを使用します。',
          '前菜、スープ、サラダ、メイン、デザートと順番に提供されます。',
          'カトラリーは料理の順序に従って外側から内側へと使用します。',
          '一口サイズに切り分け、一口ずつ口に運びます。',
          'ナプキンは膝の上に広げ、口元を軽く拭くために使います。',
          '口を閉じて咀嚼し、飲み込んでから会話をします。'
        ]
      },
      tableTitle: '中華と西洋における7大マナー共通対照表',
      aspects: [
        { aspect: '食事の開始', chinese: '年長者や主催者が箸をつけるのを待つ', western: '主催者の合図または一皿目の到着を待つ', purpose: '場と相手への敬意と秩序の維持' },
        { aspect: '料理の取り分け', chinese: '取り箸を使い手前を取る（人の前を横切らない）', western: '個人用カトラリーや給仕で取る、調味料は回してもらう', purpose: '衛生管理とスペースの侵害防止' },
        { aspect: '食べ方', chinese: '一口ずつ取り、骨は骨皿へ', western: '一口大に切り、引っ張らない', purpose: '清潔さと落ち着いた所作の維持' },
        { aspect: '会話', chinese: '口に食べ物を入れたまま話さない', western: '口を閉じて噛み、飲み込んでから話す', purpose: '同席者への配慮と食事の衛生' },
        { aspect: 'カトラリーの扱い', chinese: '箸をご飯に立てない、箸置きを使う', western: '使用後のカトラリーをテーブルに戻さない、サインを出す', purpose: '不吉な連想の回避と給仕への合図' },
        { aspect: '中途退席', chinese: '同席者に短く声をかけて退席', western: '「失礼します」と伝え、ナプキンを椅子に置く', purpose: '場の雰囲気と動線への影響を最小化' },
        { aspect: '食事の終了', chinese: '箸を箸置きに揃えて置き、感謝を伝える', western: 'ナイフとフォークを皿に揃えて並べる', purpose: '給仕担当へ終了の明確な合図' }
      ]
    },

    seating: {
      title: '二、中華料理の席順：円卓と角机の実践',
      desc: '円卓は料理の共有に適していますが、正式な宴席では席順に明確な敬意のシグナルが込められています。',
      roundTableLogic: [
        { role: '上座 / 主位（最も重要な席）', desc: '正面入り口を向き、全体が見渡せる最も奥の位置。' },
        { role: 'ホスト / 主陪', desc: '主位、または主位の正面に座り、全体の進行とおもてなしを担います。' },
        { role: '主賓（第一の賓客）', desc: '右上位の原則に従い、主位の右隣に座ります。' },
        { role: '副主賓（第二の賓客）', desc: '主位の左隣、または副ホストの右隣に座ります。' },
        { role: '一般の招待客', desc: '年長順、役職、親疎に応じて順次配置されます。' },
        { role: '入り口付近の席', desc: '下座と見なされ、出入りや給仕のサポートに適しています。' }
      ],
      turntableRules: [
        '回転テーブルを回す前に、誰も料理を取っていないか確認します。',
        'スープやグラスが倒れないよう、ゆっくり静かに回します。',
        '個人の小皿やグラス、スマホを回転台の上に置かないでください。',
        '料理が目の前に来て止まってから取り分けます。',
        '必ず公用の取り箸・スプーンを使い、適量を取ります。',
        '他の人が取りたそうにしている場合、順方向に回して差し出します。'
      ],
      squareTableLogic: '角机や長机はより明確な上座・下座が生まれます。入り口を向く席が上座、背を向ける席が下座です。重要な商談相手はホストの視界に入る正面または隣に配置します。',
      decisionTableTitle: '中華宴席の6大シチュエーション席順決定表',
      decisionScenarios: [
        { scenario: '家族の会食', priority: '年長者への敬意とお世話のしやすさ', advice: '祖父母や年長者を最も落ち着いて料理を取りやすい席に配置します。' },
        { scenario: 'ビジネス接待', priority: '主客関係とコミュニケーション効率', advice: '主賓はホストの右隣、主要な交渉担当者は直接対話できる位置に座ります。' },
        { scenario: '結婚披露宴', priority: '両家の親族と主卓の秩序', advice: '主卓に両家の両親を配置し、関係の深さに応じて他の卓を決定します。' },
        { scenario: '外国人ゲスト', priority: '宗教的禁忌や食文化への配慮', advice: 'ハラールやベジタリアンを事前確認し、通訳やサポート役を隣に配置します。' },
        { scenario: '高齢者・車椅子の方', priority: '安全で移動しやすい動線', advice: '狭い通路や出入り口の風下、頻繁に立つ必要がある席を避けます。' },
        { scenario: '大人数の多卓宴会', priority: '卓次の序列とスムーズな動線', advice: 'ステージ正面の中央を主卓とし、他の卓を順序よく配置します。' }
      ]
    },

    westernSetting: {
      title: '三、西洋料理の席順とテーブルセッティング',
      desc: '西洋のテーブルは整然とした個人の空間です。カトラリーはメニューの順序に従い「外側から内側」へと使います。',
      rules: [
        'ホストとホステスを中心に対称に配置し、最重要ゲストはその右隣に座ります。',
        '入り口を向く席や眺望の良い席が上座とされます。',
        '現代では伝統的な男女交互の規則よりも、ゲストの快適さと会話のしやすさが重視されます。'
      ],
      utensilsListTitle: '標準テーブルセッティングとカトラリー一覧',
      utensils: [
        { pos: '皿の左側 最も外側', name: '前菜フォーク / サラダフォーク', usage: '冷製前菜やサラダ用（やや小ぶり）' },
        { pos: '皿の左側 内側', name: 'メインフォーク (ディナーフォーク)', usage: '肉料理やメイン温菜用（刃が長く大型）' },
        { pos: '中央', name: '位置皿 / サービスプレート', usage: 'セッティングの中心基準となる大皿' },
        { pos: '皿の右側 内側', name: 'メインナイフ (ディナーナイフ)', usage: 'メイン肉料理用、刃を皿側に向けて置く' },
        { pos: '皿の右側 中間', name: '魚用ナイフ / 前菜ナイフ', usage: '魚料理や前菜の切り分け用' },
        { pos: '皿の右側 最も外側', name: 'スープスプーン', usage: 'スープ用（丸く深い形状）' },
        { pos: '皿の上側', name: 'デザートスプーン＆フォーク', usage: 'デザート用、スプーンの柄は右、フォークは左' },
        { pos: '左上', name: 'パン皿＆バターナイフ', usage: 'パン用、バターナイフは皿の上に横たえる' },
        { pos: '右上', name: '水用グラス、赤・白ワイングラス', usage: 'ナイフの上に水用グラス、右に赤白ワイングラス' },
        { pos: '皿の上または左側', name: 'ナプキン', usage: '着席後に膝の上に広げて置く' }
      ],
      orderFlowTitle: '「外側から内側へ」使用順序（3コース例）',
      orderSteps: [
        { step: 'Step 1: 前菜 / スープ', action: '最も外側のサラダフォークとナイフ、または外側のスプーンを使います。' },
        { step: 'Step 2: メイン料理', action: '皿に一番近いメインフォーク（左手）とメインナイフ（右手）を使います。' },
        { step: 'Step 3: デザート', action: '皿の上にあるデザート用スプーンやフォークを使います。' }
      ]
    },

    chineseFlow: {
      title: '四、中華料理の作法と箸のタブー',
      desc: '中華の共有マナーの本質は「他者のスペースへの配慮」と「料理の衛生保持」です。',
      processTitle: '着席、乾杯、料理の取り分け',
      processItems: [
        { label: '着席と開始', desc: 'ホストの案内を待ち、全員が揃って主催者の合図や年長者が箸をつけてから食べ始めます。' },
        { label: '人の前を横切らない', desc: '目の前の料理だけを取り、人の前を手で横切って取らないでください。' },
        { label: '取り箸の徹底', desc: '大皿には必ず取り箸・公用スプーンを使い、直箸でかき混ぜません。' },
        { label: '骨皿の適切な使用', desc: '骨や殻は箸で取って骨皿に置き、テーブルやご飯茶碗の上に直接吐き出しません。' }
      ],
      chopsticksTitle: '中華箸の9大タブー（ビジュアルガイド）',
      chopsticksTaboos: [
        { name: '指差し箸', desc: '箸で人を指差す行為は極めて無作法とされます。' },
        { name: '立て箸（仏箸）', desc: 'ご飯茶碗に箸を垂直に突き刺すのは供養を連想させ厳禁です。' },
        { name: 'ねぶり箸・噛み箸', desc: '箸先を舐めたり音を立てて噛むのは不衛生です。' },
        { name: '叩き箸', desc: '器を箸で叩く行為は物乞いを連想させタブーです。' },
        { name: '探り箸', desc: '大皿の中で好みの具材を探してかき混ぜる行為です。' },
        { name: '涙箸', desc: '汁物をポタポタ垂らしながら運ぶ行為です。小皿で受けます。' },
        { name: '迷い箸', desc: '料理の上で箸をウロウロ動かして迷う行為です。' },
        { name: '落とし箸', desc: '箸を床に落とした場合は、店員に交換を頼みます。' },
        { name: '渡し箸', desc: '箸を器の上に渡して置くのではなく、箸置きを使います。' }
      ],
      teaEtiquetteTitle: 'お茶のマナーと指タップ感謝（叩指礼）',
      teaPoints: [
        { rule: 'お茶を注ぐ順序', desc: '年長者や主賓から順に注ぎ、カップの7分目を目安にします（七分茶三分情）。' },
        { rule: '急須の注ぎ口の向き', desc: '急須の注ぎ口を決して同席者に向けて置かないでください。' },
        { rule: '叩指礼（指で机を軽く叩く）', desc: '会話を中断せず感謝を示すため、人差し指と中指で机を2回軽く叩きます。' }
      ]
    },

    westernFlow: {
      title: '五、西洋料理の作法とカトラリーサイン',
      desc: '西洋料理ではカトラリーの置き方で給仕担当者に無言のサインを伝えます。',
      napkinTitle: 'ナプキンの7大ルール',
      napkinRules: [
        'ホストが広げてから、二つ折りにし折り目を手前にして膝の上に置きます。',
        '口元の汚れを軽く押さえて拭くためだけに使います（食器や眼鏡は拭かない）。',
        '首元に挟んで前掛けのようにしないでください（特別なロブスター等を除く）。',
        '中途退席時はナプキンを椅子の上に軽く置いて「食事中」を示します。',
        '食後はきれいに畳みすぎず、皿の左側のテーブルに置きます。',
        'クシャクシャに丸めたり、汚れた皿の中に投げ入れないでください。',
        '床に落とした場合は自分で拾わず、サービス係に交換を依頼します。'
      ],
      signalsTitle: 'カトラリーが伝える3大サービスサイン',
      signals: [
        { name: '食事中 / 一時休止 (Pause)', visual: '皿の上に「八の字」に開いて置く', desc: 'ナイフの刃を内側に向け、フォークとハの字に置くことで「まだ食べています」と伝えます。' },
        { name: '食事終了 / 下げてよい (Finished)', visual: 'ナイフとフォークを揃えて斜め（4時20分方向）に置く', desc: 'ナイフの刃を内側に、フォークの背を下にして揃えて並べ「食べ終わりました」と伝えます。' },
        { name: '次の料理をお待ちしています', visual: '皿の中央で十字に交差させる', desc: '伝統的なフルコースで次の料理を促すサインです。' }
      ],
      soupTitle: '優雅にスープを飲む6つの原則',
      soupRules: [
        'スプーンを手前から奥に向かって動かしてすくいます。',
        'スプーンを口に全部入れず、横から静かにすすります。',
        'フーフー息を吹きかけて冷ましたり、音を立てて飲まないでください。',
        '残り少なくなったら皿の奥側を持ち上げて傾けます（手前は持ち上げない）。',
        'スプーンは深いスープ皿に立てたままにせず、受け皿の上に置きます。'
      ],
      breadTitle: 'パンと調味料のマナー',
      breadRules: [
        'パンは手で一口大にちぎり、その都度バターを塗って食べます（丸ごとかじらない）。',
        '料理を味わう前に塩コショウをかけないでください。調味料を渡す時は塩とコショウをセットで渡します。'
      ]
    },

    fauxPas: {
      title: '六、よくある13の無作法・タブー比較表',
      desc: '正式な席でやってしまいがちな行動と、上品な改善策を比較・整理しました。',
      filterAll: 'すべての行為',
      filterStart: '食事開始と食べ方',
      filterUtensils: '食器の扱い',
      filterSocial: '社交マナー',
      tableHeaders: {
        behavior: '無作法な行為',
        chinese: '中華での問題点',
        western: '西洋での問題点',
        improvement: 'スマートな改善策'
      },
      list: [
        { category: '食事開始と食べ方', behavior: '主催者より先に食べ始める', chinese: '長幼の序列を乱し、卑しく見えます', western: '主催者の挨拶や進行を乱します', improvement: '主催者の乾杯や全員に配膳されるのを待ってから開始します。' },
        { category: '食事開始と食べ方', behavior: '人の前を手で横切って取る', chinese: '隣の人のスペースを侵害し、服を汚すリスクがあります', western: '個人のパーソナルスペースを侵害します', improvement: '隣の人に頼んで取ってもらうか、回転台を回します。' },
        { category: '食事開始と食べ方', behavior: '大皿をかき混ぜて好みの具を探す', chinese: '共有料理を汚し、不衛生です', western: '個別の取り分け規範に反します', improvement: '手前の一部分を取り箸で静かに取ります。' },
        { category: '食器の扱い', behavior: 'ご飯茶碗に箸を突き刺す', chinese: 'お供え物の線香を連想させ不吉です', western: '該当なし', improvement: '食事を休む時は箸置きの上に置きます。' },
        { category: '食器の扱い', behavior: '使用後のカトラリーをテーブルに戻す', chinese: 'テーブルクロスを油で汚します', western: '重度のマナー違反！クロスを汚します', improvement: '一度使ったカトラリーは必ず皿の中に置きます。' },
        { category: '食事開始と食べ方', behavior: '口に物を入れたまま話す', chinese: '食べかすが飛び散り食欲を削ぎます', western: '非常に下品と見なされます', improvement: '一口大で食べ、飲み込んでから落ち着いて話します。' },
        { category: '社交マナー', behavior: '大声で店員を呼ぶ・手を叩く', chinese: '会場を騒がしくし品位に欠けます', western: 'プロの給仕への敬意を欠きます', improvement: 'アイコンタクトや軽く手を挙げて合図します。' },
        { category: '社交マナー', behavior: 'テーブルで化粧直し・爪楊枝を使う', chinese: '爪楊枝は手で隠す、化粧は席を外す', western: 'テーブルでの手鏡や化粧は厳禁', improvement: '「失礼します」と伝えて化粧室で行います。' },
        { category: '食事開始と食べ方', behavior: 'ビュッフェで山盛りに取る', chinese: '無駄を生み味が混ざります', western: '美観を損ね品位を欠きます', improvement: '1回に1〜2品ずつ少量を取ります。' },
        { category: '社交マナー', behavior: '無理にお酒を勧める・一気飲み', chinese: '相手に過度な負担をかけます', western: '個人の意志を侵害します', improvement: 'お茶でお付き合いし、相手の体質を尊重します。' },
        { category: '食事開始と食べ方', behavior: 'クチャクチャ音を立てて噛む', chinese: '不快な咀嚼音で場の雰囲気を壊します', western: '最も嫌われるテーブルマナー違反の一つです', improvement: '口を閉じて静かに噛みます。' },
        { category: '社交マナー', behavior: '食事中にずっとスマホを見る', chinese: '同席者との対話を軽視します', western: '宴席の社交目的を損ないます', improvement: 'マナーモードにしてカバンにしまいます。' },
        { category: '食器の扱い', behavior: 'ナイフやフォークを振り回す', chinese: '攻撃的でソースが飛ぶ恐れがあります', western: '危険で下品な振る舞いです', improvement: '話す時は皿の上に静かに置きます。' }
      ]
    },

    scenarios: {
      title: '七、ビュッフェ・正餐・家庭の食事シーン',
      desc: 'シーンに応じた適切な振る舞いを身につけましょう。',
      buffet: {
        title: 'ビュッフェ（Buffet）8つのスマート作法',
        points: [
          '列に並んで順番に取り、横入りしません。',
          '料理を取りながら食べないでください。',
          '1回に適量を取り、何回かに分けて楽しみます。',
          '一度口をつけた料理を大皿に戻さないでください。',
          '手で直接触らず、トングを使用します。',
          '正式なビュッフェでは2巡目は新しい皿を使用します。',
          '子どもや高齢者を熱いスープから守るよう配慮します。',
          '並びながらのつまみ食いは厳禁です。'
        ]
      },
      banquet: {
        title: '正式な宴席（Formal Banquet）の心得',
        points: [
          '事前に出欠（RSVP）とドレスコードを確認します。',
          'アレルギーや食事制限を事前に伝えておきます。',
          '招待されていない同伴者を連れて行かないでください。',
          '指定された席札の場所に座り、勝手に席を替えません。',
          'お酒は節度を守り、悪酔いしないようにします。',
          '不快な話題（病気や過激な政治）は避けます。',
          '中途退席は隣の人に「失礼します」と伝えるだけにします。',
          '散会時は主催者とスタッフに感謝を伝えます。'
        ]
      },
      family: {
        title: '家庭での食事と子どものマナー教育',
        points: [
          '家庭でも「食器を正しく使う・邪魔をしない・食べ物を大切にする」の3つを守ります。',
          '幼児期はまず座ること、待つこと、口を閉じて噛むことから教えます。',
          '成長に合わせてカトラリーや取り箸の使い方を段階的に教えます。',
          '子どもに合った安全な食器を選び、厳しすぎて食事の楽しさを奪わないようにします。'
        ]
      }
    },

    copyrightSection: {
      title: '八、著作権保護と安全な教材制作',
      desc: 'デジタル時代における教材作成では著作権への深い配慮が必要です。',
      pyramidTitle: '画像素材のライセンス安全性ピラミッド',
      pyramid: [
        { level: 'レベル1 (最高安全)', source: 'オリジナルSVG / CSSベクター描画', advice: '完全な著作権を保持し、権利侵害リスクゼロ（本サイト全面採用）。' },
        { level: 'レベル2 (高安全)', source: '自社撮影の写真', advice: '場所や人物の撮影許諾を取得し原本を保管。' },
        { level: 'レベル3 (高安全)', source: '明確なCC0 / パブリックドメイン', advice: '出所と規約ページを記録して利用。' },
        { level: 'レベル4 (中安全)', source: 'Creative Commons (CCライセンス)', advice: 'クレジット表記や商用可否を厳格に確認。' },
        { level: 'レベル5 (中安全)', source: '購入済み有料ストックフォト', advice: '領収書とライセンス範囲を保存。' },
        { level: 'レベル6 (極めて危険)', source: 'ネット検索画像・SNSスクショ', advice: '出所を明記しても無断転載は違法です。厳禁。' }
      ],
      vectorAdvantages: [
        '幾何学的な明瞭さ：円卓やナイフの配置が直感的に伝わります。',
        '高解像度対応：4Kやスマホ画面でも常に鮮明に表示されます。',
        'インタラクティブ性：クリック操作や言語切り替えと完璧に連動します。'
      ]
    },

    reliability: {
      title: '九、適用限界と5つの判断基準',
      desc: 'マナーは固定された法律ではなく、状況に応じた思いやりです。',
      notes: [
        '中華料理でも地域によって席順や乾杯の風習が異なります。',
        '西洋料理でもフランス式、イギリス式、アメリカ式で異なります。',
        '現代では平等、バリアフリー、快適さが最も重視されます。'
      ],
      decisionStepsTitle: 'マナーに迷ったときの5ステップ判断順',
      steps: [
        { step: '1', title: '主催者・スタッフの指示を最優先', advice: '現場の席札や支配人の案内を第一の基準とします。' },
        { step: '2', title: '同席者の所作を観察する', advice: '迷ったら年長者や周囲の行動を落ち着いて観察します。' },
        { step: '3', title: '衛生と他人の快適さを優先', advice: '食べ物を汚さず、邪魔にならない所作を心がけます。' },
        { step: '4', title: '場の格式を考慮する', advice: 'カジュアルな店では格式張りすぎず、高級店では気品を保ちます。' },
        { step: '5', title: 'カトラリーの角度に固執しない', advice: '時計の角度などの細部より、明確な意図を伝えることが大切です。' }
      ]
    },

    checklist: {
      title: '十、実践インタラクティブチェックリスト',
      subtitle: '宴席前のスマート確認リスト · チェックして準備度をリアルタイム測定',
      progressLabel: 'マナー準備度：',
      resetBtn: 'すべての項目をリセット',
      categories: [
        {
          id: 'chinese-before',
          title: '🥢 中華料理：着席前の準備',
          items: [
            '主卓、卓番号、自分の席順を確認する',
            '同席者のアレルギーや宗教上の禁忌を確認する',
            '取り箸や回転テーブルの有無を確認する',
            'スマホをマナーモードにしてカバンにしまう',
            '主催者や主賓の着席案内を待つ',
            '年長者や主催者が箸をつけるのを待ってから始める'
          ]
        },
        {
          id: 'chinese-during',
          title: '🥢 中華料理：食事中の作法',
          items: [
            '器を叩かない、箸で人を指さない、立て箸をしない',
            '大皿の中で料理をかき混ぜて探さない',
            '手前の料理だけを取り、人の前を手で横切らない',
            '回転テーブルを回す前に人が取っていないか確認する',
            '骨や殻は骨皿に置き、テーブルに吐き出さない',
            'お酒を一気飲みさせたり強要しない',
            '口に物が入っているときは話さず静かに噛む'
          ]
        },
        {
          id: 'western-before',
          title: '🍴 西洋料理：着席前の準備',
          items: [
            'ドレスコードを確認し時間を守って到着する',
            '席札を確認するか給仕の案内を待って座る',
            'パン皿（左上）、グラス（右上）、カトラリーの位置を確認する',
            '主催者が広げてからナプキンを膝の上に広げる',
            'カトラリーを「外側から内側へ」使うことを確認する'
          ]
        },
        {
          id: 'western-during',
          title: '🍴 西洋料理：食事中の作法',
          items: [
            '左手フォーク、右手ナイフで人差し指を背に添えて切る',
            '一口大に切り、一口ずつ食べる',
            '使ったカトラリーをテーブルクロスの上に戻さない',
            'スープは手前から奥へすくい、横から静かに飲む',
            'パンは手で一口大にちぎってバターを塗る',
            '塩とコショウはセットで回す',
            '中途退席時は「失礼します」と告げナプキンを椅子に置く',
            '食事休止時はハの字にカトラリーを開いて置く',
            '食後はナイフとフォークを揃えて皿の中央に置く'
          ]
        }
      ]
    },

    conclusion: {
      title: '結び：現代テーブルマナー5大原則',
      desc: '中華は「序列・共有・取り箸・横切らない」、西洋は「外側から・ナプキン・カトラリーサイン・一口ずつ」。本質はどちらも相手への思いやりです。',
      principles: [
        { num: '01', title: 'まず観察し、それから行動する', desc: '不慣れな場では主催者や経験者の所作を落ち着いて見守ります。' },
        { num: '02', title: '人の前を横切らず、邪魔をしない', desc: 'パーソナルスペースを尊重し、調味料や料理は回してもらいます。' },
        { num: '03', title: '取り箸を使い、衛生を保つ', desc: '大皿料理は必ず取り箸を使い、骨は皿に置いて清潔を保ちます。' },
        { num: '04', title: '口に物があるときは話さず、落ち着いて振る舞う', desc: '口を閉じて咀嚼し、ゆったりとしたペースで食事を楽しみます。' },
        { num: '05', title: '図表・教材はオリジナルと正規許諾のみ使用する', desc: 'デジタル時代のエチケットとして著作権を徹底的に尊重します。' }
      ],
      backToTop: 'トップへ戻る',
      backToHome: '肉とワインの図鑑トップへ戻る'
    }
  }
};
