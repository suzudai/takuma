import { Article, ArticleType } from './types';

export const HERO_ARTICLE_ID = 'melon-history-01';

export const ARTICLES: Article[] = [
  {
    id: 'melon-history-01',
    title: '王様の果実：メロン4000年の旅路',
    subtitle: '古代エジプトから日本の高級贈答品へ。なぜ人はこの果実に魅了され続けるのか。',
    type: ArticleType.FEATURE,
    author: 'MelonPicks 編集部',
    publishedAt: '2024.05.20',
    readTime: '8 min',
    imageUrl: 'https://picsum.photos/seed/melon_cover/800/600',
    heroImage: 'https://picsum.photos/seed/melon_hero/1200/800',
    summary: 'メロンの歴史は古く、紀元前2000年頃には栽培が始まっていたとされています。原産地とされるアフリカから世界へ広がり、品種改良を経て、現在の「果実の王様」の地位を築き上げました。',
    pickCount: 1240,
    blocks: [
      {
        type: 'heading',
        content: '砂漠が生んだ奇跡の果実'
      },
      {
        type: 'text',
        content: 'メロンの起源は、暑く乾燥したアフリカ大陸にあると言われています。野生種は現在の甘く芳醇なメロンとは異なり、苦味が強く、主に種子を食用としたり、水分の補給源として利用されていたと考えられています。古代エジプトの壁画にも、メロンらしき果物が描かれており、ファラオたちもこの瑞々しい果実を口にしていたかもしれません。'
      },
      {
        type: 'quote',
        content: '「メロンは太陽の恵みそのものである。その甘さは、過酷な大地が育んだ生命の結晶だ。」'
      },
      {
        type: 'text',
        content: 'その後、メロンはシルクロードを渡り、東西へと広がっていきます。東へ向かった品種は「ウリ」としてアジアに定着し、西へ向かった品種はヨーロッパで甘いデザート用の果実として改良が進められました。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/desert_melon/1000/600',
        content: '',
        caption: '原産地に近い環境で育つ野生種のイメージ'
      },
      {
        type: 'heading',
        content: 'ヨーロッパ貴族のステータスシンボル'
      },
      {
        type: 'text',
        content: '中世ヨーロッパでは、甘いメロンは非常に貴重であり、王侯貴族の宴に欠かせない贅沢品でした。特にルネサンス期のイタリアでは、教皇領で栽培されたカンタループレイ種が絶賛され、美食家たちを唸らせました。当時は冷蔵技術がなかったため、完熟したメロンを新鮮な状態で味わうことは、極上の権力の象徴でもあったのです。'
      }
    ],
    comments: [
      {
        id: 'c1',
        author: '佐藤 健太',
        role: '農業コンサルタント',
        avatar: 'https://picsum.photos/seed/user1/100/100',
        content: '原産地がアフリカというのは意外と知られていません。日本のマスクメロンの繊細さとは対極にある、生命力あふれる起源の話は非常に興味深いです。',
        likes: 84
      },
      {
        id: 'c2',
        author: 'Elena Rossi',
        role: 'フードヒストリアン',
        avatar: 'https://picsum.photos/seed/user2/100/100',
        content: 'ルネサンス期の文献を読むと、メロンがいかに特別な扱いを受けていたかがわかります。現代の私たちがスーパーで気軽に買えるのは、農業技術の進歩のおかげですね。',
        likes: 56
      }
    ]
  },
  {
    id: 'melon-biz-01',
    title: '「1玉3万円」を生む日本のブランド戦略',
    subtitle: 'クラウンメロンに見る、農産物のラグジュアリー・ブランディング',
    type: ArticleType.BUSINESS,
    author: '経済部 鈴木',
    publishedAt: '2024.05.21',
    readTime: '6 min',
    imageUrl: 'https://picsum.photos/seed/crown_melon/800/600',
    heroImage: 'https://picsum.photos/seed/luxury_fruit/1200/800',
    summary: '日本の高級メロンは、世界でも類を見ない独自の進化を遂げました。「一木一果」の栽培法と徹底した品質管理が、圧倒的なブランド価値を生み出しています。',
    pickCount: 890,
    blocks: [
      {
        type: 'text',
        content: '日本の贈答用メロン、特に静岡県のクラウンメロンに代表されるマスクメロンは、世界で最も高価な果物の一つとして知られています。なぜ、これほどの高値がつくのでしょうか。その秘密は「一木一果（いちぼくいっか）」という栽培方法にあります。'
      },
      {
        type: 'quote',
        content: 'すべての養分をたった一つの果実に集中させる。それは農業というより、芸術に近い営みだ。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/greenhouse/1000/600',
        content: '',
        caption: '徹底管理された温室での栽培風景'
      },
      {
        type: 'heading',
        content: 'T字のアンテナが示す品質の証'
      },
      {
        type: 'text',
        content: '高級メロンの特徴であるT字型のツル。これは単なる飾りではありません。果実が完全に熟すまで木から離さず、栄養を送り続けたことの証明です。また、表面の美しい網目（ネット）模様は、果実が成長する過程で内部の圧力によって表皮がひび割れ、それが修復されてできる傷跡です。この網目を均一に美しく出すためには、水や温度のミリ単位の管理が求められます。'
      }
    ],
    comments: [
      {
        id: 'c3',
        author: '山田 太郎',
        role: '百貨店バイヤー',
        avatar: 'https://picsum.photos/seed/user3/100/100',
        content: '海外の富裕層からも日本のメロンは「Edible Jewelry（食べる宝石）」として注目されています。この品質管理システムは日本が誇るべき知的財産です。',
        likes: 120
      }
    ]
  },
  {
    id: 'melon-culture-01',
    title: '夕張メロンと炭鉱の記憶',
    subtitle: '北海道の厳しい大地が生んだ、赤肉メロンの奇跡',
    type: ArticleType.HISTORY,
    author: '地域創生ラボ',
    publishedAt: '2024.05.19',
    readTime: '5 min',
    imageUrl: 'https://picsum.photos/seed/yubari/800/600',
    heroImage: 'https://picsum.photos/seed/hokkaido_farm/1200/800',
    summary: 'かつて炭鉱の街として栄えた夕張。エネルギー革命による閉山という危機を救ったのは、鮮やかなオレンジ色の果肉を持つメロンでした。',
    pickCount: 543,
    blocks: [
      {
        type: 'text',
        content: '北海道夕張市。かつて「黒いダイヤ」石炭で栄えたこの街は、昭和30年代後半からエネルギー革命の波に飲まれ、存続の危機に瀕していました。そんな中、農家たちが起死回生の策として挑んだのが、新品種のメロン栽培でした。'
      },
      {
        type: 'heading',
        content: '「スパイシー・カンタロープ」との出会い'
      },
      {
        type: 'text',
        content: '当時の日本では、メロンといえば緑色の果肉が一般的でした。しかし、夕張の農家たちは、香り高く甘みの強い赤肉種「スパイシー・カンタロープ」などを交配し、寒冷地でも育つ独自の品種「夕張キング」を生み出しました。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/orange_melon/1000/600',
        content: '',
        caption: '芳醇な香りを放つ赤肉メロン'
      }
    ],
    comments: []
  },
  {
    id: 'melon-global-01',
    title: '世界の不思議なメロンたち',
    subtitle: '角のあるメロン？蛇のようなメロン？世界は広い。',
    type: ArticleType.DATA,
    author: 'ワールドハンター',
    publishedAt: '2024.05.18',
    readTime: '4 min',
    imageUrl: 'https://picsum.photos/seed/strange_melon/800/600',
    heroImage: 'https://picsum.photos/seed/world_melon/1200/800',
    summary: '日本人が知る「メロン」はほんの一部に過ぎません。世界中には、見たこともないような形状や味を持つ、ユニークなウリ科の植物たちが存在します。',
    pickCount: 320,
    blocks: [
      {
        type: 'heading',
        content: '悪魔の実？ 角を持つキワノ'
      },
      {
        type: 'text',
        content: 'アフリカ原産の「キワノ」は、そのトゲトゲした見た目から「ツノニガウリ」とも呼ばれます。鮮やかなオレンジ色の皮と、対照的な緑色のゼリー状の果肉は衝撃的です。味はライムとバナナを混ぜたような爽やかさがあります。'
      },
      {
        type: 'image',
        src: 'https://picsum.photos/seed/kiwano/1000/600',
        content: '',
        caption: 'SF映画に出てきそうなキワノの断面'
      },
      {
        type: 'text',
        content: '他にも、蛇のように細長い「ヘビウリ」や、爆発して種を飛ばす「テッポウウリ」など、ウリ科の植物は多様性に富んでいます。私たちが普段食べているメロンも、この愉快な家族の一員なのです。'
      }
    ],
    comments: []
  },
  {
    id: 'melon-comprehensive-history',
    title: 'メロンのひみつ：4000年の旅',
    subtitle: 'アフリカから日本へ。あまいメロンはどうやって生まれたのかな？',
    type: ArticleType.HISTORY,
    author: 'メロン博士',
    publishedAt: '2024.06.01',
    readTime: '5ふん',
    imageUrl: '/images/melon_history_thumb.png',
    heroImage: '/images/melon_history_hero.png',
    summary: 'メロンのご先祖さまはどこから来たの？ 昔のメロンは甘くなかったってホント？ 日本の「マスクメロン」が誕生するまでの、長い長い物語だよ。',
    pickCount: 156,
    blocks: [
      {
        type: 'heading',
        content: 'メロンのふるさとはどこ？'
      },
      {
        type: 'text',
        content: '長いあいだ、メロンはアフリカで生まれたと思われていました。でも、さいしんの研究で、実はインドやオーストラリアの野生（やせい）のメロンが、今のメロンのご先祖さまに近いことがわかったんだ。アジアとアフリカのいろんな場所で、別々に育てられ始めたみたいだよ。'
      },
      {
        type: 'image',
        src: '/images/wild_melon.png',
        content: '',
        caption: '野生のメロンはとっても小さいんだ'
      },
      {
        type: 'heading',
        content: '甘くなったのはなぜ？'
      },
      {
        type: 'text',
        content: 'むかしむかしのメロンは、今みたいに甘くなくて、キュウリみたいな野菜だったんだよ。でも、砂漠（さばく）のオアシスみたいな暑くて乾燥（かんそう）した場所で育てているうちに、だんだん甘くなっていったんだ。これを「甘味革命（かんみかくめい）」って呼ぶよ。'
      },
      {
        type: 'heading',
        content: '日本の「マクワウリ」と「マスクメロン」'
      },
      {
        type: 'text',
        content: '日本でも、大昔から「ウリ」が食べられていたよ。江戸時代（えどじだい）には、将軍さまも大好きな「マクワウリ」という黄色くてサクサクしたメロンが大人気だったんだ。そして明治時代（めいじじだい）になると、ガラスの温室（おんしつ）で育てる特別な「マスクメロン」が登場したよ。1本の木に1つだけ実をならせて、栄養（えいよう）をぜんぶ集中させるから、とっても甘くておいしいんだよ。'
      }
    ],
    comments: [
      {
        id: 'h1',
        author: 'れきし好きの子',
        role: '小学生',
        avatar: 'https://picsum.photos/seed/student/100/100',
        content: 'マクワウリって食べてみたいな！サクサクしてるの？',
        likes: 12
      }
    ]
  }
];
