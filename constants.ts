import { Article, ArticleType } from './types';

export const HERO_ARTICLE_ID = 'one-person-unicorn-2025';

export const ARTICLES: Article[] = [
  {
    id: 'one-person-unicorn-2025',
    title: '社員1人で数十のAIを指揮。「個人企業化」する米国の働き方',
    subtitle: '【現地取材】サム・アルトマンが予言した「1人ユニコーン」は現実になるか。AIエージェントを雇用する新時代の起業論。',
    type: ArticleType.BUSINESS,
    companyName: 'Silicon Valley Insights',
    author: '特派員：田中 健太',
    publishedAt: '2025.12.30 08:00',
    readTime: '25 min',
    imageUrl: 'https://picsum.photos/seed/solopreneur_cover/800/600',
    heroImage: 'https://picsum.photos/seed/solopreneur_hero/1200/800',
    summary: '2025年、米国では「Solopreneur（ソロプレナー）」がAIエージェントを駆使し、企業並みの成果を上げる事例が急増しています。1万文字徹底レポート。',
    pickCount: 15420,
    blocks: [
      {
        type: 'heading',
        content: '序章：10億ドル企業を、たった一人で。'
      },
      {
        type: 'text',
        content: '「2030年までに、従業員ゼロ、創業者一人だけのユニコーン企業（時価総額10億ドル以上）が誕生するだろう」。\n\nOpenAIのCEO、サム・アルトマンが放ったこの予言は、シリコンバレーに波紋を広げ、そして静かな熱狂を生みました。数年前までなら「夢物語」と一蹴されたであろうこのビジョンが、2025年の今、急速に現実味を帯びています。\n\n本稿では、米国で爆発的に普及し始めた「AIエージェント雇用」の実態と、それによって生まれた新しい働き方「Individual Corporation（個人の法人化）」について、最新の事例とデータを交えて徹底的に分析します。'
      },
      {
        type: 'heading',
        content: '第1章：「使う」から「指揮する」へ。パラダイムシフト'
      },
      {
        type: 'text',
        content: '2023年の生成AIブーム初期、私たちはChatGPTに「質問」をしていました。しかし2025年現在、米国のトップ・ソロプレナーたちはAIに質問などしていません。彼らはAIに「業務」を割り当てています。\n\n「Marketing Agent（マーケティング担当）」\n「Code Reviewer（コードレビュー担当）」\n「Financial Analyst（財務分析担当）」\n\n彼らのSlackワークスペースには、これら数十のAIエージェントが「社員」として登録されています。人間はたった一人。しかし、その生産性はかつての30人規模のスタートアップに匹敵します。これは単なるツールではありません。「デジタル労働力」の指揮官への進化です。'
      },
      {
        type: 'quote',
        content: 'AIは私の「優秀なインターン」ではない。私の「有能な中間管理職」になったのだ。'
      },
      {
        type: 'heading',
        content: '第2章：実例・バーチャルチームの構築'
      },
      {
        type: 'text',
        content: '具体的なワークフローを見てみましょう。ニューヨーク在住のSaaS開発者、アレックス（28）の事例です。彼の会社は彼一人ですが、年商は500万ドル（約7.5億円）を超えています。\n\n1. **コンテンツ制作：** 朝、彼が「今週のトレンド記事を作成して」と指示すると、Content AgentがWebを巡回し、トピックを選定、記事を執筆し、SEO対策を施してNotionにドラフトを保存します。\n2. **SNS運用：** Social Media Agentがその記事を元にX（旧Twitter）、LinkedIn、Instagram用の投稿を作成。画像生成AI（Midjourney v7）がアイキャッチを作成し、自動で予約投稿します。\n3. **顧客対応：** サイト上のチャットボット（カスタマーサポートAgent）が24時間体制で一次対応。解決できない問題だけがアレックスのスマホに通知されます。\n4. **開発：** GitHub Copilot Workspaceが新機能のプロトタイプをコーディング。アレックスは「コードレビュー」と「アーキテクチャの意思決定」に集中します。\n\nアレックスの仕事は「作業」ではなく「承認」です。彼は一日の大半を、どのAIをどう動かすかという「戦略」と、人間同士の重要な「交渉」に費やしています。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/ai_workflow/1000/600',
        content: '',
        caption: '複数のAIエージェントが連携するワークフロー図'
      },
      {
        type: 'heading',
        content: '第3章：必要なツールセット（2025年版）'
      },
      {
        type: 'text',
        content: '「1人ユニコーン」を目指すための神器とも言えるツール群も定まってきました。\n\n- **脳（Brain）：** GPT-5 / Claude 3.5 Opus。複雑な推論と意思決定を行う。\n- **手足（Automation）：** Zapier / Make。アプリ間を接続し、自律的なワークフローを構築する。\n- **記憶（Memory）：** Pinecone / MemGPT。過去の文脈やプロジェクトデータを長期記憶し、一貫性を保つ。\n- **耳と口（Communication）：** ElevenLabs（音声合成） / Otter.ai（会議要約）。リアルタイムでの多言語交渉を可能にする。\n\nこれらをノーコードで組み合わせることで、プログラミング知識が乏しい起業家でも、高度な自動化システムを構築可能になっています。'
      },
      {
        type: 'heading',
        content: '第4章：課題と未来'
      },
      {
        type: 'text',
        content: 'もちろん、すべてが順風満帆ではありません。「ハルシネーション（嘘の生成）」のリスク管理、AIエージェント同士の無限ループバグ、そして「孤独」というメンタル面での課題も指摘されています。\n\nしかし、この流れは不可逆です。ベンチャーキャピタルも、従業員数をKPIにするのを辞め、「従業員あたりの収益（Revenue Per Employee）」を最重要視し始めました。限りなくゼロに近い人件費で、無限の拡張性を持つ「Individual Corporation」。この新しい生命体が、2026年のビジネスシーンを席巻することは間違いありません。あなたの会社は、AIを「使って」いますか？それとも「雇って」いますか？'
      }
    ],
    comments: []
  },
  {
    id: 'bio-healthcare-2025',
    title: 'バイオ・ヘルスケア：身体を「書き換える」新時代の幕開け',
    subtitle: '【海外最新技術レポート 第1弾】 疾患の観察から、直接的な維持・管理へ。',
    type: ArticleType.TECHNOLOGY,
    companyName: 'Global Biotech Watch',
    author: '科学技術編集部',
    publishedAt: '2025.12.29 18:00',
    readTime: '12 min',
    imageUrl: 'https://picsum.photos/seed/bio_cover/800/600',
    heroImage: 'https://picsum.photos/seed/bio_hero/1200/800',
    summary: '2025年、バイオテクノロジーは「観察」から「書き換え」へ。HIV予防、体内ゲノム編集、GLP-1の脳保護作用など、破壊的インパクトを持つ3つの領域を深掘りします。',
    pickCount: 4120,
    blocks: [
      {
        type: 'text',
        content: '2020年代半ば、バイオテクノロジーは「疾患の観察と緩和」のフェーズを終え、遺伝子や免疫システムを直接「書き換え、維持する」実用化フェーズへと突入しました。本稿では、海外の最新臨床データと研究ソースに基づき、特に破壊的なインパクトを持つ3つの領域を深掘りします。'
      },
      {
        type: 'heading',
        content: '1. エイズ終息への「魔法の弾丸」'
      },
      {
        type: 'text',
        content: '2024年後半から2025年にかけて、製薬大手ギリアド・サイエンシズ（Gilead Sciences）が発表した臨床試験「PURPOSE 1」および「PURPOSE 2」の結果は、医学界に衝撃を与えました。年2回の注射で済む長時間作用型カプシド阻害剤「レナカパビル（Lenacapavir）」を投与されたグループにおいて、HIV感染率が0%（100%の予防効果）という驚異的な数字が叩き出されたのです。'
      },
      {
        type: 'quote',
        content: 'WHOはこれを「HIVパンデミック終息に向けた歴史的転換点」と評価しています。'
      },
      {
        type: 'text',
        content: '従来の経口薬（毎日服用が必要なPrEP）では、飲み忘れによる効果減退が課題でしたが、半年に1度の注射はこの障壁を物理的に排除しました。現在、南アフリカやウガンダなどの感染ハイリスク地域への迅速な供給体制が議論されており、2026年には世界規模での「予防の標準」となることが予測されています。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/medical_research/1000/600',
        content: '',
        caption: '研究室での分析イメージ'
      },
      {
        type: 'heading',
        content: '2. メスを使わない手術：体内ゲノム編集'
      },
      {
        type: 'text',
        content: 'これまで、クリスパー（CRISPR-Cas9）による治療は、一度体外に細胞を取り出して編集する「Ex vivo」が主流でした。しかし、2025年現在は、脂質ナノ粒子（LNP）や特殊なウイルスベクターを用いて、注射一本で体内の標的臓器に直接ゲノム編集キットを届ける「In vivo（体内）」治療が成熟期を迎えています。'
      },
      {
        type: 'text',
        content: 'Intellia Therapeuticsは、遺伝性トランスサイレチンアミロイドーシス（ATTR）に対し、世界で初めて体内で直接遺伝子をノックアウトする治験を進め、良好な長期データを維持しています。また、Beam TherapeuticsはDNAを切り取らずに1文字だけ書き換える「ベース編集」を実用化しています。'
      },
      {
        type: 'heading',
        content: '3. GLP-1受容体作動薬の「適応拡大」'
      },
      {
        type: 'text',
        content: '日本でも「痩せ薬」として知られるGLP-1製剤（セマグルチイド等）ですが、海外の最新研究ではその「抗炎症作用」と「神経保護作用」に注目が集まっています。2025年末に発表されたノボ・ノルディスク社の「EVOKE試験」では、早期アルツハイマー病患者の脳内の炎症マーカーや神経変性指標の有意な減少が確認されました。'
      },
      {
        type: 'quote',
        content: '「発症後の治療」から「40代〜50代からの認知症予防」へ。GLP-1の新たな可能性。'
      },
      {
        type: 'text',
        content: 'さらに、オピオイドやアルコール、ギャンブル依存症に対しても、脳の報酬系に作用して「渇望」を抑える効果が示唆されており、臨床試験が加速しています。'
      },
      {
        type: 'heading',
        content: '出典・リファレンス'
      },
      {
        type: 'text',
        content: '- WHO News (2024/2025): Lenacapavir Phase 3 Results\n- Nature Biotechnology: Review on Lipid Nanoparticle (LNP)\n- Dementia Platform UK (DPUK): Analyzing EVOKE trials'
      }
    ],
    comments: []
  },
  {
    id: 'agentic-ai-shock',
    title: '「指示」から「代行」へ。全米で進むAIエージェントの社会実装',
    subtitle: '2025年、チャットボットの時代は終わった。自律型AIがビジネスをどう変えるか。',
    type: ArticleType.FEATURE,
    companyName: 'AI Research Institute',
    author: 'Tech Trends 編集部',
    publishedAt: '2025.12.29 10:00',
    readTime: '8 min',
    imageUrl: 'https://picsum.photos/seed/agentic_ai_cover/800/600',
    heroImage: 'https://picsum.photos/seed/agentic_ai_hero/1200/800',
    summary: '2025年、AIは質問に答える存在から、業務を完遂する「同僚」へと進化しました。AppleやMicrosoftのOSレベルでの統合により、私たちの仕事は劇的に変化しようとしています。',
    pickCount: 2450,
    blocks: [
      {
        type: 'heading',
        content: 'チャットボットの終焉、エージェントの台頭'
      },
      {
        type: 'text',
        content: '2025年、アメリカのビジネスシーンは「チャットボット」の時代を終え、「エージェンティックAI（自律型AIエージェント）」の時代へと突入しました。これまでのAIは人間の質問に答えるだけでしたが、最新のAIエージェントは「今月の売上報告書を作成し、関連部署に送付して」といった抽象的な指示だけで、複数のアプリを跨いで作業を完遂します。'
      },
      {
        type: 'quote',
        content: '「もはやAIはツールではない。自律的に思考し、行動するパートナーだ。」'
      },
      {
        type: 'text',
        content: '技術的なブレイクスルーは「自律的計画立案」にあります。AIは指示に対してタスクを細分化し、ブラウザ操作やAPI実行を自ら判断して実行します。AppleやMicrosoftがOSにAIエージェントを深く組み込んだことで、ユーザーの意図を汲み取った「サイレント・アシスト」が実現されています。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/ai_interface/1000/600',
        content: '',
        caption: 'OSに統合されたAIエージェントのイメージ'
      }
    ],
    comments: [
      {
        id: 'c1',
        author: 'Michael Chen',
        role: 'AI Engineer',
        avatar: 'https://picsum.photos/seed/user_ai/100/100',
        content: 'OSレベルでの統合が鍵でしたね。アプリ間の壁がなくなったことで、真の自動化が始まりました。',
        likes: 154
      }
    ]
  },
  {
    id: 'agentic-workstyle',
    title: '社員1人で数十のAIを指揮。「個人企業化」する米国の働き方',
    subtitle: '人間の役割は「作業」から「意思決定」へ。組織のあり方が変わる。',
    type: ArticleType.BUSINESS,
    companyName: 'Future Work Lab',
    author: 'シリコンバレー支局',
    publishedAt: '2025.12.28 14:30',
    readTime: '6 min',
    imageUrl: 'https://picsum.photos/seed/workstyle/800/600',
    heroImage: 'https://picsum.photos/seed/office_futuristic/1200/800',
    summary: 'エージェンティックAIの普及により、1人の社員が数十のAIエージェントを指揮する「個人企業化」が進んでいます。単なる効率化を超えた、組織構造の変革に迫ります。',
    pickCount: 1890,
    blocks: [
      {
        type: 'heading',
        content: '「監督者」としての人間'
      },
      {
        type: 'text',
        content: 'AIエージェントの社会実装は、単なる業務効率化を超え、人間の役割を「作業」から「意思決定と監督」へとシフトさせています。米国の大手テック企業では、1人の社員がマーケティング、経理、開発など、それぞれの専門特化した数十のAIエージェントを指揮する「個人企業化」が進んでいます。'
      },
      {
        type: 'quote',
        content: '1人の社員が、かつての1部署分の生産性を生み出す時代。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/manager/1000/600',
        content: '',
        caption: '複数のAIエージェントをモニタリングするダッシュボード'
      },
      {
        type: 'text',
        content: 'この変化は、マネジメントの定義も変えつつあります。部下を管理するスキルよりも、AIエージェントチームを編成し、適切なゴールを設定する「AIディレクション能力」が、次世代のリーダーに求められる最大の資質となっています。'
      }
    ],
    comments: [
      {
        id: 'c2',
        author: 'Sarah Johnson',
        role: 'HR Director',
        avatar: 'https://picsum.photos/seed/user_hr/100/100',
        content: '採用基準も変わりました。「何ができるか」より「AIをどう使いこなせるか」が最重要です。',
        likes: 89
      }
    ]
  },
  {
    id: 'physical-ai-revolution',
    title: '画面から飛び出す知能。NVIDIAとAmazonが牽引する「物理AI」革命',
    subtitle: 'デジタルツインとロボティクスの融合がもたらす産業変革',
    type: ArticleType.TECHNOLOGY,
    companyName: 'Robotics Daily',
    author: '科学技術部',
    publishedAt: '2025.12.28 11:00',
    readTime: '7 min',
    imageUrl: 'https://picsum.photos/seed/physical_ai/800/600',
    heroImage: 'https://picsum.photos/seed/robot_factory/1200/800',
    summary: 'AIが物理的な身体を持つ「フィジカルAI」。Amazonの物流センターやBMWの工場で始まっている、現実世界（フィジカル）の革命的変化をレポートします。',
    pickCount: 2100,
    blocks: [
      {
        type: 'heading',
        content: 'デジタル脳が物理世界を動かす',
      },
      {
        type: 'text',
        content: 'AIが物理的な「身体」を持つことで、現実世界の複雑な課題を解決する「フィジカルAI（Physical AI）」が本格普及しています。2025年後半、Amazonの物流センターでは100万台以上のロボットがAIによって高度に連携し、BMWの工場では車が自ら運転して出荷ラインを移動する光景が当たり前となりました。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/warehouse_robots/1000/600',
        content: '',
        caption: 'AI制御で自律移動する物流ロボット群'
      },
      {
        type: 'heading',
        content: '高忠実度シミュレーションによる加速',
      },
      {
        type: 'text',
        content: 'この進化を支えているのが、NVIDIAなどが提供する高忠実度シミュレーション技術です。現実そっくりの仮想空間（デジタルツイン）で、AIロボットが物理法則を含めた数十年分の経験をわずか数時間で学習。シミュレーションで獲得したスキルを、そのまま現実のロボットに転送することで、開発スピードが劇的に向上しました。'
      }
    ],
    comments: []
  },
  {
    id: 'humanoid-evolution',
    title: '汎用人型ロボットの進化と現場への導入',
    subtitle: '家事から建設現場まで、労働力不足の救世主となるか',
    type: ArticleType.TECHNOLOGY,
    companyName: 'Next Gen Robotics',
    author: '特派員J',
    publishedAt: '2025.12.27 16:45',
    readTime: '5 min',
    imageUrl: 'https://picsum.photos/seed/humanoid/800/600',
    heroImage: 'https://picsum.photos/seed/construction_robot/1200/800',
    summary: 'LLMと視覚・触覚が統合された人型ロボットが、ついに実用段階へ。言葉を理解し、器用に作業をこなす彼らは、私たちの生活をどう変えるのでしょうか。',
    pickCount: 1450,
    blocks: [
      {
        type: 'heading',
        content: 'マルチモーダルAIが宿る身体'
      },
      {
        type: 'text',
        content: '汎用人型ロボットの進化が止まりません。言語モデル（LLM）と視覚・触覚が統合され、人間の指示を聞きながら、その場の状況に合わせて柔軟に家事や建設現場での複雑な作業をこなす能力を獲得しました。'
      },
      {
        type: 'quote',
        content: '「これ取って」と言えば、それが何かを認識し、適切な力加減で掴む。当たり前が、機械にできるようになった。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/robot_cooking/1000/600',
        content: '',
        caption: 'キッチンで調理補助を行う人型ロボットのプロトタイプ'
      },
      {
        type: 'text',
        content: '深刻な労働力不足に悩む製造・物流業界の救世主となるだけでなく、危険な環境下での保守作業や災害救助など、AIが「現場」を支えるインフラとしての地位を確立しつつあります。'
      }
    ],
    comments: [
      {
        id: 'c3',
        author: 'Tomoko Tanaka',
        role: '介護福祉士',
        avatar: 'https://picsum.photos/seed/user_care/100/100',
        content: '介護の現場でも期待しています。力仕事だけでも手伝ってもらえれば、職員の負担が全然違います。',
        likes: 210
      }
    ]
  },
  {
    id: 'clean-energy-smr',
    title: 'AIの爆発的成長を支える「SMR」とジェネシス・ミッション',
    subtitle: 'データセンターの隣に「原発」をつくる。米国が描くエネルギー戦略。',
    type: ArticleType.BUSINESS,
    companyName: 'Green Energy Watch',
    author: 'エネルギー担当デスク',
    publishedAt: '2025.12.27 09:00',
    readTime: '10 min',
    imageUrl: 'https://picsum.photos/seed/smr_plant/800/600',
    heroImage: 'https://picsum.photos/seed/energy_grid/1200/800',
    summary: 'AIの演算能力向上は、膨大な電力消費という課題も突きつけました。その解決策として注目される「SMR（小型モジュール炉）」の可能性に迫ります。',
    pickCount: 3300,
    blocks: [
      {
        type: 'heading',
        content: 'AI × 原子力の新たな共生',
      },
      {
        type: 'text',
        content: 'AIの演算能力が飛躍する一方で、膨大な電力消費が課題となっています。これに対し米国では、2025年12月に発表された「ジェネシス・ミッション」に象徴される、AIと次世代エネルギーの強力な融合が進んでいます。特に注目されているのが、AI専用データセンターに隣接して設置される「SMR（小型モジュール炉）」です。'
      },
      {
        type: 'heading',
        content: '自己完結型インフラの構築',
      },
      {
        type: 'text',
        content: '従来の原発より安全で小型なSMRをデータセンターの隣に配置し、24時間365日の安定供給を実現するオンデマンド・クリーン電力構想。さらに、NVIDIAと米国エネルギー省（DOE）の提携により、AI自体がリアクターの設計や運用を最適化する試みも始まっています。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/nuclear_tech/1000/600',
        content: '',
        caption: '次世代SMRのコンセプトモデル'
      },
      {
        type: 'text',
        content: 'AIが自らを動かすためのエネルギーを、自らの知能を使って効率化・創出する「自己完結型インフラ」の構築。これは2030年の脱炭素目標達成に向けた、アメリカの国家戦略の核となっています。'
      }
    ],
    comments: [
      {
        id: 'c4',
        author: 'David Kim',
        role: 'Environmental Analyst',
        avatar: 'https://picsum.photos/seed/user_env/100/100',
        content: '電力消費問題への現実的な回答ですね。安全性さえ担保されれば、AIの持続可能な発展に不可欠なピースになります。',
        likes: 340
      }
    ]
  }
];
