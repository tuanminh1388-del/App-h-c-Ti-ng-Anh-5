import { Unit } from '../types';

export const unitsData: Unit[] = [
  {
    id: 1,
    title: 'Family and Friends',
    vocabulary: [
      { word: 'clever', ipa: '/ˈklɛvər/', meaning: 'Thông minh' },
      { word: 'crazy about', ipa: '/ˈkreɪzi əˈbaʊt/', meaning: 'Phát cuồng về' },
      { word: 'different', ipa: '/ˈdɪfərənt/', meaning: 'Khác biệt' },
      { word: 'funny', ipa: '/ˈfʌni/', meaning: 'Vui vẻ' },
      { word: 'loud', ipa: '/laʊd/', meaning: 'Ồn ào' },
      { word: 'quiet', ipa: '/ˈkwaɪət/', meaning: 'Trầm tính' },
      { word: 'same', ipa: '/seɪm/', meaning: 'Giống nhau' },
      { word: 'come out of', ipa: '/kʌm aʊt ʌv/', meaning: 'Đi ra từ' },
      { word: 'keep warm', ipa: '/kip wɔrm/', meaning: 'Giữ ấm' },
      { word: 'leave', ipa: '/liv/', meaning: 'Rời đi' },
      { word: 'parents', ipa: '/ˈpɛrənts/', meaning: 'Bố mẹ' },
      { word: 'penguin', ipa: '/ˈpɛŋɡwən/', meaning: 'Chim cánh cụt' },
      { word: 'carefully', ipa: '/ˈkɛrfəli/', meaning: 'Một cách cẩn thận' },
      { word: 'happily', ipa: '/ˈhæpəli/', meaning: 'Một cách vui vẻ' },
      { word: 'loudly', ipa: '/ˈlaʊdli/', meaning: 'Lớn tiếng' },
      { word: 'quickly', ipa: '/ˈkwɪkli/', meaning: 'Nhanh' },
      { word: 'slowly', ipa: '/ˈsloʊli/', meaning: 'Chậm' },
      { word: 'well', ipa: '/wɛl/', meaning: 'Tốt, giỏi' },
      { word: 'curly', ipa: '/ˈkɜrli/', meaning: 'Xoăn (tóc)' },
      { word: 'dark', ipa: '/dɑrk/', meaning: 'Tối tăm' },
      { word: 'fair', ipa: '/fɛr/', meaning: 'Vàng hoe (tóc)' },
      { word: 'long', ipa: '/lɔŋ/', meaning: 'Dài (tóc)' },
      { word: 'short', ipa: '/ʃɔrt/', meaning: 'Ngắn (tóc)' },
      { word: 'straight', ipa: '/streɪt/', meaning: 'Thẳng (tóc)' },
    ],
    grammar: {
      title: 'Describing People & Adverbs',
      description: 'Miêu tả tính cách và cách thức thực hiện hành động.',
      formula: 'S + be + Adj / S + V + Adv',
      examples: [
        'Both Becky and Emma are crazy about technology.',
        'Minh and Lan are funny, but they are clever.',
        'Penguins can swim very well.',
        'They take care of their eggs carefully.'
      ]
    },
    exercises: [
      {
        id: 'u1-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'vlecre', correct: 'clever' }
      },
      {
        id: 'u1-ex2',
        type: 'fill-in-blanks',
        title: 'Vocabulary in Context',
        instruction: 'Điền từ thích hợp vào chỗ trống.',
        data: { sentence: 'My brother is very ___, he always makes me laugh.', answer: 'funny' }
      },
      {
        id: 'u1-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['are', 'Becky', 'Emma', 'and', 'clever'], correct: 'Becky and Emma are clever' }
      },
      {
        id: 'u1-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'They take care of their eggs carefully.', underlined: 'carefully', answer: 'How do they take care of their eggs?' }
      }
    ]
  },
  {
    id: 2,
    title: 'My Favorite Things',
    vocabulary: [
      { word: 'computer', ipa: '/kəmˈpjutər/', meaning: 'Máy tính' },
      { word: 'piece', ipa: '/pis/', meaning: 'Mảnh, miếng' },
      { word: 'puzzle', ipa: '/ˈpʌzəl/', meaning: 'Trò chơi ghép hình' },
      { word: 'photo', ipa: '/ˈfoʊˌtoʊ/', meaning: 'Bức ảnh' },
      { word: 'typewriter', ipa: '/ˈtaɪp raɪtər/', meaning: 'Máy đánh chữ' },
      { word: 'country', ipa: '/ˈkʌntri/', meaning: 'Quốc gia' },
      { word: 'globe', ipa: '/ɡloʊb/', meaning: 'Quả địa cầu' },
      { word: 'map', ipa: '/mæp/', meaning: 'Bản đồ' },
      { word: 'moving', ipa: '/ˈmuvɪŋ/', meaning: 'Di chuyển' },
      { word: 'scare', ipa: '/skɛr/', meaning: 'Đáng sợ' },
      { word: 'spider', ipa: '/ˈspaɪdər/', meaning: 'Con nhện' },
      { word: 'above', ipa: '/əˈbʌv/', meaning: 'Bên trên' },
      { word: 'below', ipa: '/bɪˈloʊ/', meaning: 'Bên dưới' },
      { word: 'in the middle of', ipa: '/ɪn ðə ˈmɪdəl ʌv/', meaning: 'Ở giữa' },
      { word: 'inside', ipa: '/ɪnˈsaɪd/', meaning: 'Bên trong' },
      { word: 'outside', ipa: '/ˈaʊtˈsaɪd/', meaning: 'Bên ngoài' },
      { word: 'puppet', ipa: '/ˈpʌpət/', meaning: 'Con rối' },
      { word: 'violin', ipa: '/vaɪəˈlɪn/', meaning: 'Đàn vi ô lông' },
    ],
    grammar: {
      title: 'Past Simple with Be & Prepositions',
      description: 'Hỏi về sở thích trong quá khứ và vị trí vật thể.',
      formula: 'When you were... what was...? / S + be + Preposition + O',
      examples: [
        'When you were seven years old, what was your favorite thing?',
        'It was my kite.',
        'A green ball is above the cupboard.',
        'Computers are exciting and fun.'
      ]
    },
    exercises: [
      {
        id: 'u2-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'pueppt', correct: 'puppet' }
      },
      {
        id: 'u2-ex2',
        type: 'fill-in-blanks',
        title: 'Prepositions',
        instruction: 'Điền giới từ thích hợp vào chỗ trống.',
        data: { sentence: 'The map is ___ the wall.', answer: 'on' }
      },
      {
        id: 'u2-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['was', 'What', 'favorite', 'your', 'thing'], correct: 'What was your favorite thing' }
      },
      {
        id: 'u2-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'The green ball is above the cupboard.', underlined: 'above the cupboard', answer: 'Where is the green ball?' }
      }
    ]
  },
  {
    id: 3,
    title: 'School Life',
    vocabulary: [
      { word: 'exercise', ipa: '/ˈɛksərˌsaɪz/', meaning: 'Tập thể dục' },
      { word: 'fitness centre', ipa: '/ˈfɪtnəs ˈsɛntər/', meaning: 'Phòng tập thể dục' },
      { word: 'practise', ipa: '/ˈpræk.tɪs/', meaning: 'Luyện tập' },
      { word: 'problem', ipa: '/ˈprɑbləm/', meaning: 'Vấn đề' },
      { word: 'solution', ipa: '/səˈluʃən/', meaning: 'Giải pháp' },
      { word: 'do homework', ipa: '/dʊ ˈhoʊmˌwɜrk/', meaning: 'Làm bài tập về nhà' },
      { word: 'go to science clubs', ipa: '/ɡoʊ tə ˈsaɪəns klʌbz/', meaning: 'Đến câu lạc bộ khoa học' },
      { word: 'have fun', ipa: '/həv fʌn/', meaning: 'Chúc vui vẻ' },
      { word: 'play a musical instrument', ipa: '/pleɪ ə ˈmjuzɪkəl/', meaning: 'Chơi nhạc cụ' },
      { word: 'walk to school', ipa: '/wɔk tə skul/', meaning: 'Đi bộ đến trường' },
      { word: 'wear a uniform', ipa: '/wɛr ə ˈjunəfɔrm/', meaning: 'Mặc đồng phục' },
      { word: 'do arts and crafts', ipa: '/dʊ ɑrts ənd kræfts/', meaning: 'Làm đồ thủ công' },
      { word: 'take care of plants', ipa: '/teɪk kɛr əv plænts/', meaning: 'Chăm sóc thực vật' },
      { word: 'always', ipa: '/ˈɔlˌweɪz/', meaning: 'Luôn luôn' },
      { word: 'never', ipa: '/ˈnɛvər/', meaning: 'Chưa bao giờ' },
      { word: 'often', ipa: '/ˈɔfən/', meaning: 'Thường thường' },
      { word: 'sometimes', ipa: '/səmˈtaɪmz/', meaning: 'Thỉnh thoảng' },
      { word: 'usually', ipa: '/ˈjuʒəwəli/', meaning: 'Thường xuyên' },
    ],
    grammar: {
      title: 'Present Simple & Frequency',
      description: 'Nói về lịch trình và mức độ thường xuyên.',
      formula: 'S + V(s/es) / S + Adverb of Frequency + V',
      examples: [
        'He studies maths every weekday.',
        'When does she start her lessons at school?',
        'I often walk to school, but I sometimes ride my bike.',
        'He always reads books.'
      ]
    },
    exercises: [
      {
        id: 'u3-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'unifmro', correct: 'uniform' }
      },
      {
        id: 'u3-ex2',
        type: 'fill-in-blanks',
        title: 'Frequency',
        instruction: 'Điền trạng từ chỉ tần suất thích hợp.',
        data: { sentence: 'I ___ walk to school, but today I go by bus.', answer: 'usually' }
      },
      {
        id: 'u3-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['often', 'He', 'books', 'reads'], correct: 'He often reads books' }
      },
      {
        id: 'u3-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'He studies maths every weekday.', underlined: 'every weekday', answer: 'When does he study maths?' }
      }
    ]
  },
  {
    id: 4,
    title: 'Free Time',
    vocabulary: [
      { word: 'collect stamps', ipa: '/kəˈlɛkt stæmps/', meaning: 'Sưu tập tem' },
      { word: 'go ice-skating', ipa: '/ɡoʊ ˈaɪsˌskeɪtɪŋ/', meaning: 'Chơi trượt băng' },
      { word: 'make a paper bird', ipa: '/meɪk ə ˈpeɪpər bɜrd/', meaning: 'Gấp chim giấy' },
      { word: 'play the piano', ipa: '/pleɪ ðə piˈænoʊ/', meaning: 'Chơi đàn piano' },
      { word: 'read comic books', ipa: '/rid ˈkɑmɪk bʊks/', meaning: 'Đọc truyện tranh' },
      { word: 'watch movies', ipa: '/wɑʧ ˈmuviz/', meaning: 'Xem phim' },
      { word: 'be good at', ipa: '/bi ɡʊd æt/', meaning: 'Giỏi, tốt' },
      { word: 'enjoy', ipa: '/ɛnˈʤɔɪ/', meaning: 'Thích, thưởng thức' },
      { word: 'like', ipa: '/laɪk/', meaning: 'Thích' },
      { word: 'amusement park', ipa: '/əmˈjuzmənt pɑrk/', meaning: 'Công viên giải trí' },
      { word: 'bookshop', ipa: '/ˈbʊkˌʃɑp/', meaning: 'Hiệu sách' },
      { word: 'cinema', ipa: '/ˈsɪnəmə/', meaning: 'Rạp chiếu phim' },
      { word: 'restaurant', ipa: '/ˈrɛstəˌrɑnt/', meaning: 'Nhà hàng' },
      { word: 'sports center', ipa: '/spɔrts ˈsɛntər/', meaning: 'Trung tâm thể thao' },
      { word: 'eat a big meal', ipa: '/i:t ə bɪɡ mil/', meaning: 'Ăn bữa ăn lớn' },
      { word: 'go bowling', ipa: '/ɡoʊ ˈboʊlɪŋ/', meaning: 'Chơi bowling' },
      { word: 'ride the roller coaster', ipa: '/raɪd ði ˈroʊlər/', meaning: 'Chơi tàu lượn siêu tốc' },
      { word: 'wood', ipa: '/wʊd/', meaning: 'Gỗ' },
    ],
    grammar: {
      title: 'Abilities & Permission',
      description: 'Nói về khả năng và xin phép.',
      formula: 'S + be + good at + V-ing / Can + S + V + O?',
      examples: [
        'What is she good at?',
        'She is good at playing football.',
        'Can I go to the bookshop now?',
        'Yes, you can. / No, you can\'t.'
      ]
    },
    exercises: [
      {
        id: 'u4-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'pinao', correct: 'piano' }
      },
      {
        id: 'u4-ex2',
        type: 'fill-in-blanks',
        title: 'Abilities',
        instruction: 'Điền từ thích hợp vào chỗ trống.',
        data: { sentence: 'She is good ___ playing the piano.', answer: 'at' }
      },
      {
        id: 'u4-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['Can', 'I', 'to', 'go', 'the', 'cinema'], correct: 'Can I go to the cinema' }
      },
      {
        id: 'u4-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'She is good at playing football.', underlined: 'playing football', answer: 'What is she good at?' }
      }
    ]
  },
  {
    id: 5,
    title: 'Celebrations',
    vocabulary: [
      { word: 'bonfire', ipa: '/ˈbɑnˌfaɪər/', meaning: 'Lửa trại' },
      { word: 'celebration', ipa: '/ˌsɛləˈbreɪʃən/', meaning: 'Lễ kỉ niệm' },
      { word: 'colourful', ipa: '/colourful/', meaning: 'Nhiều màu sắc' },
      { word: 'festival', ipa: '/ˈfɛstəvəl/', meaning: 'Lễ hội' },
      { word: 'powder', ipa: '/ˈpaʊdər/', meaning: 'Bột' },
      { word: 'throw', ipa: '/θroʊ/', meaning: 'Ném' },
      { word: 'lantern', ipa: '/ˈlæntərn/', meaning: 'Đèn lồng' },
      { word: 'lion dance', ipa: '/ˈlaɪən dæns/', meaning: 'Múa lân' },
      { word: 'lunar month', ipa: '/ˈlunər mʌnθ/', meaning: 'Tháng âm lịch' },
      { word: 'Mid-Autumn Festival', ipa: '/mɪd-ˈɔtəm/', meaning: 'Tết trung thu' },
      { word: 'mooncake', ipa: '/mooncake/', meaning: 'Bánh trung thu' },
      { word: 'parade', ipa: '/pəˈreɪd/', meaning: 'Diễu hành' },
      { word: 'last month', ipa: '/læst mʌnθ/', meaning: 'Tháng trước' },
      { word: 'last year', ipa: '/læst jɪr/', meaning: 'Năm trước' },
      { word: 'memory', ipa: '/ˈmɛməri/', meaning: 'Kỉ niệm' },
    ],
    grammar: {
      title: 'Imperatives & Past Events',
      description: 'Yêu cầu lịch sự và kể về sự kiện đã qua.',
      formula: 'Please + V / Don\'t + V / S + V-ed',
      examples: [
        'Please pass me the book.',
        'Don\'t forget your promise.',
        'There is a book on the table.',
        'I went to a birthday party last weekend.'
      ]
    },
    exercises: [
      {
        id: 'u5-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'pdaera', correct: 'parade' }
      },
      {
        id: 'u5-ex2',
        type: 'fill-in-blanks',
        title: 'Past Events',
        instruction: 'Điền dạng đúng của động từ trong ngoặc.',
        data: { sentence: 'I ___ (go) to a festival last month.', answer: 'went' }
      },
      {
        id: 'u5-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['Please', 'me', 'pass', 'the', 'lantern'], correct: 'Please pass me the lantern' }
      },
      {
        id: 'u5-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'I went to a birthday party last weekend.', underlined: 'last weekend', answer: 'When did you go to a birthday party?' }
      }
    ]
  },
  {
    id: 6,
    title: 'Food',
    vocabulary: [
      { word: 'bread', ipa: '/brɛd/', meaning: 'Bánh mì' },
      { word: 'butter', ipa: '/ˈbʌtər/', meaning: 'Bơ' },
      { word: 'chocolate', ipa: '/ˈʧɔklət/', meaning: 'Sô cô la' },
      { word: 'cupcake', ipa: '/ˈkʌpˌkeɪk/', meaning: 'Bánh nướng nhỏ' },
      { word: 'salad', ipa: '/ˈsæləd/', meaning: 'Rau củ trộn' },
      { word: 'spaghetti', ipa: '/spəˈɡɛti/', meaning: 'Mì ý' },
      { word: 'crispy', ipa: '/ˈkrɪspi/', meaning: 'Giòn' },
      { word: 'delicious', ipa: '/dɪˈlɪʃəs/', meaning: 'Rất ngon' },
      { word: 'salty', ipa: '/ˈsɔlti/', meaning: 'Vị mặn' },
      { word: 'sour', ipa: '/ˈsaʊər/', meaning: 'Chua' },
      { word: 'spicy', ipa: '/ˈspaɪsi/', meaning: 'Vị cay' },
      { word: 'sweet', ipa: '/swit/', meaning: 'Vị ngọt' },
      { word: 'tasty', ipa: '/ˈteɪsti/', meaning: 'Ngon miệng' },
      { word: 'bowl', ipa: '/boʊl/', meaning: 'Bát' },
      { word: 'cereal', ipa: '/ˈsɪriəl/', meaning: 'Ngũ cốc' },
      { word: 'meatball', ipa: '/ˈmitˌbɔl/', meaning: 'Thịt viên' },
      { word: 'piece', ipa: '/pis/', meaning: 'Miếng' },
      { word: 'plate', ipa: '/pleɪt/', meaning: 'Đĩa' },
      { word: 'slice', ipa: '/slaɪs/', meaning: 'Lát' },
      { word: 'broccoli', ipa: '/ˈbrɑkəli/', meaning: 'Bông cải xanh' },
      { word: 'cucumber', ipa: '/ˈkjukəmbər/', meaning: 'Dưa chuột' },
      { word: 'hamburger', ipa: '/ˈhæmbərɡə/', meaning: 'Bánh mì kẹp' },
    ],
    grammar: {
      title: 'Quantifiers',
      description: 'Cách dùng Much, Many, A lot of, A few, A little.',
      formula: 'How many + Countable / How much + Uncountable',
      examples: [
        'We have a lot of bread, but we don\'t have much butter.',
        'How many cupcakes has Tom got?',
        'A few (một vài) + danh từ đếm được số nhiều.',
        'A little (một ít) + danh từ không đếm được.'
      ]
    },
    exercises: [
      {
        id: 'u6-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'spagtheti', correct: 'spaghetti' }
      },
      {
        id: 'u6-ex2',
        type: 'fill-in-blanks',
        title: 'Quantifiers',
        instruction: 'Điền Much hoặc Many vào chỗ trống.',
        data: { sentence: 'How ___ cupcakes has Tom got?', answer: 'many' }
      },
      {
        id: 'u6-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['don\'t', 'We', 'have', 'much', 'butter'], correct: 'We don\'t have much butter' }
      },
      {
        id: 'u6-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'We have a lot of bread.', underlined: 'a lot of bread', answer: 'How much bread do you have?' }
      }
    ]
  },
  {
    id: 7,
    title: 'Sports',
    vocabulary: [
      { word: 'athlete', ipa: '/ˈæθliːt/', meaning: 'Vận động viên' },
      { word: 'champion', ipa: '/ˈtʃæmpiən/', meaning: 'Nhà vô địch' },
      { word: 'competition', ipa: '/ˌkɒmpəˈtɪʃn/', meaning: 'Cuộc thi' },
      { word: 'fan', ipa: '/fæn/', meaning: 'Người hâm mộ' },
      { word: 'medal', ipa: '/ˈmedl/', meaning: 'Huy chương' },
      { word: 'race', ipa: '/reɪs/', meaning: 'Cuộc đua' },
      { word: 'score', ipa: '/skɔːr/', meaning: 'Ghi điểm' },
      { word: 'stadium', ipa: '/ˈsteɪdiəm/', meaning: 'Sân vận động' },
      { word: 'team', ipa: '/tiːm/', meaning: 'Đội' },
      { word: 'win', ipa: '/wɪn/', meaning: 'Thắng' },
      { word: 'lose', ipa: '/luːz/', meaning: 'Thua' },
      { word: 'practice', ipa: '/ˈpræktɪs/', meaning: 'Luyện tập' },
      { word: 'trophy', ipa: '/ˈtroʊfi/', meaning: 'Cúp' },
      { word: 'whistle', ipa: '/ˈwɪsl/', meaning: 'Cái còi' },
    ],
    grammar: {
      title: 'Past Simple (Regular & Irregular)',
      description: 'Kể về các sự kiện thể thao đã diễn ra trong quá khứ.',
      formula: 'S + V-ed / V2 (Irregular)',
      examples: [
        'He won a gold medal in the competition yesterday.',
        'They played football at the stadium last Sunday.',
        'Did you watch the race on TV?',
        'The champion practiced very hard for the match.'
      ]
    },
    exercises: [
      {
        id: 'u7-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'staduim', correct: 'stadium' }
      },
      {
        id: 'u7-ex2',
        type: 'fill-in-blanks',
        title: 'Past Simple',
        instruction: 'Điền dạng đúng của động từ trong ngoặc.',
        data: { sentence: 'He ___ (win) a gold medal yesterday.', answer: 'won' }
      },
      {
        id: 'u7-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['played', 'They', 'football', 'last', 'Sunday'], correct: 'They played football last Sunday' }
      },
      {
        id: 'u7-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'The champion practiced very hard for the match.', underlined: 'very hard', answer: 'How did the champion practice for the match?' }
      }
    ]
  },
  {
    id: 8,
    title: 'People and Places',
    vocabulary: [
      { word: 'bridge', ipa: '/brɪdʒ/', meaning: 'Cây cầu' },
      { word: 'building', ipa: '/ˈbɪldɪŋ/', meaning: 'Tòa nhà' },
      { word: 'city', ipa: '/ˈsɪti/', meaning: 'Thành phố' },
      { word: 'country', ipa: '/ˈkʌntri/', meaning: 'Quốc gia' },
      { word: 'famous', ipa: '/ˈfeɪməs/', meaning: 'Nổi tiếng' },
      { word: 'mountain', ipa: '/ˈmaʊntən/', meaning: 'Núi' },
      { word: 'river', ipa: '/ˈrɪvər/', meaning: 'Con sông' },
      { word: 'skyscraper', ipa: '/ˈskaɪskreɪpər/', meaning: 'Tòa nhà chọc trời' },
      { word: 'tower', ipa: '/ˈtaʊər/', meaning: 'Tòa tháp' },
      { word: 'town', ipa: '/taʊn/', meaning: 'Thị trấn' },
      { word: 'crowded', ipa: '/ˈkraʊdɪd/', meaning: 'Đông đúc' },
      { word: 'modern', ipa: '/ˈmɒdn/', meaning: 'Hiện đại' },
      { word: 'tourist', ipa: '/ˈtʊərɪst/', meaning: 'Khách du lịch' },
      { word: 'palace', ipa: '/ˈpæləs/', meaning: 'Cung điện' },
    ],
    grammar: {
      title: 'Comparatives & Superlatives',
      description: 'So sánh các địa điểm, thành phố và con người.',
      formula: 'Short Adj: Adj-er than / The Adj-est. Long Adj: More Adj than / The most Adj.',
      examples: [
        'This skyscraper is taller than that building.',
        'New York is one of the most famous cities in the world.',
        'Which river is the longest in your country?',
        'The palace is more beautiful than the museum.'
      ]
    },
    exercises: [
      {
        id: 'u8-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'skycsraper', correct: 'skyscraper' }
      },
      {
        id: 'u8-ex2',
        type: 'fill-in-blanks',
        title: 'Comparatives',
        instruction: 'Điền dạng so sánh hơn của từ trong ngoặc.',
        data: { sentence: 'This building is ___ (tall) than that one.', answer: 'taller' }
      },
      {
        id: 'u8-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['is', 'New York', 'famous', 'city', 'a'], correct: 'New York is a famous city' }
      },
      {
        id: 'u8-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'The palace is more beautiful than the museum.', underlined: 'more beautiful', answer: 'Which building is more beautiful?' }
      }
    ]
  },
  {
    id: 9,
    title: 'Holidays and Travel',
    vocabulary: [
      { word: 'adventure', ipa: '/ədˈventʃər/', meaning: 'Cuộc phiêu lưu' },
      { word: 'beach', ipa: '/biːtʃ/', meaning: 'Bãi biển' },
      { word: 'camera', ipa: '/ˈkæmrə/', meaning: 'Máy ảnh' },
      { word: 'hotel', ipa: '/hoʊˈtel/', meaning: 'Khách sạn' },
      { word: 'island', ipa: '/ˈaɪlənd/', meaning: 'Hòn đảo' },
      { word: 'luggage', ipa: '/ˈlʌɡɪdʒ/', meaning: 'Hành lý' },
      { word: 'passport', ipa: '/ˈpɑːspɔːrt/', meaning: 'Hộ chiếu' },
      { word: 'sightseeing', ipa: '/ˈsaɪtsiːɪŋ/', meaning: 'Tham quan' },
      { word: 'souvenir', ipa: '/ˌsuːvəˈnɪr/', meaning: 'Quà lưu niệm' },
      { word: 'suitcase', ipa: '/ˈsuːtkeɪs/', meaning: 'Va li' },
      { word: 'journey', ipa: '/ˈdʒɜːrni/', meaning: 'Hành trình' },
      { word: 'passenger', ipa: '/ˈpæsɪndʒər/', meaning: 'Hành khách' },
      { word: 'ticket', ipa: '/ˈtɪkɪt/', meaning: 'Vé' },
      { word: 'flight', ipa: '/flaɪt/', meaning: 'Chuyến bay' },
    ],
    grammar: {
      title: 'Future with Going to',
      description: 'Nói về các kế hoạch và dự định du lịch trong tương lai.',
      formula: 'S + am/is/are + going to + V-inf',
      examples: [
        'I am going to visit Da Lat with my family this summer.',
        'Are they going to travel by plane or by train?',
        'We are going to buy some souvenirs at the beach.',
        'She is going to take a lot of photos with her new camera.'
      ]
    },
    exercises: [
      {
        id: 'u9-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'passprot', correct: 'passport' }
      },
      {
        id: 'u9-ex2',
        type: 'fill-in-blanks',
        title: 'Future Plans',
        instruction: 'Điền dạng đúng của Be Going To.',
        data: { sentence: 'I ___ (visit) Da Lat this summer.', answer: 'am going to visit' }
      },
      {
        id: 'u9-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['going', 'Are', 'they', 'to', 'travel', 'by', 'plane'], correct: 'Are they going to travel by plane' }
      },
      {
        id: 'u9-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'We are going to buy some souvenirs at the beach.', underlined: 'at the beach', answer: 'Where are you going to buy some souvenirs?' }
      }
    ]
  },
  {
    id: 10,
    title: 'Performing Arts',
    vocabulary: [
      { word: 'actress', ipa: '/ˈæktrəs/', meaning: 'Nữ diễn viên' },
      { word: 'audience', ipa: '/ˈɔːdiəns/', meaning: 'Khán giả' },
      { word: 'concert', ipa: '/ˈkɒnsərt/', meaning: 'Buổi hòa nhạc' },
      { word: 'costume', ipa: '/ˈkɒstjuːm/', meaning: 'Trang phục biểu diễn' },
      { word: 'instrument', ipa: '/ˈɪnstrəmənt/', meaning: 'Nhạc cụ' },
      { word: 'musician', ipa: '/mjuˈzɪʃn/', meaning: 'Nhạc sĩ' },
      { word: 'performance', ipa: '/pəˈfɔːrməns/', meaning: 'Buổi biểu diễn' },
      { word: 'play', ipa: '/pleɪ/', meaning: 'Vở kịch' },
      { word: 'stage', ipa: '/steɪdʒ/', meaning: 'Sân khấu' },
      { word: 'theater', ipa: '/ˈθɪətər/', meaning: 'Nhà hát' },
      { word: 'actor', ipa: '/ˈæktər/', meaning: 'Nam diễn viên' },
      { word: 'applause', ipa: '/əˈplɔːz/', meaning: 'Tiếng vỗ tay' },
      { word: 'script', ipa: '/skrɪpt/', meaning: 'Kịch bản' },
      { word: 'opera', ipa: '/ˈɒprə/', meaning: 'Nhạc kịch' },
    ],
    grammar: {
      title: 'Present Perfect (Ever/Never)',
      description: 'Nói về những trải nghiệm nghệ thuật đã từng hoặc chưa từng làm.',
      formula: 'S + have/has + V3/ed',
      examples: [
        'Have you ever seen a famous play at the theater?',
        'I have never played a musical instrument on stage.',
        'She has performed in many concerts this year.',
        'The audience has just given a big applause.'
      ]
    },
    exercises: [
      {
        id: 'u10-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'muiscian', correct: 'musician' }
      },
      {
        id: 'u10-ex2',
        type: 'fill-in-blanks',
        title: 'Present Perfect',
        instruction: 'Điền Have hoặc Has vào chỗ trống.',
        data: { sentence: '___ you ever seen a play?', answer: 'Have' }
      },
      {
        id: 'u10-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['never', 'I', 'played', 'have', 'the', 'violin'], correct: 'I have never played the violin' }
      },
      {
        id: 'u10-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'She has performed in many concerts this year.', underlined: 'many concerts', answer: 'How many concerts has she performed in this year?' }
      }
    ]
  },
  {
    id: 11,
    title: 'Animals',
    vocabulary: [
      { word: 'creature', ipa: '/ˈkriːtʃər/', meaning: 'Sinh vật' },
      { word: 'endangered', ipa: '/ɪnˈdeɪndʒərd/', meaning: 'Bị đe dọa tuyệt chủng' },
      { word: 'extinct', ipa: '/ɪkˈstɪŋkt/', meaning: 'Tuyệt chủng' },
      { word: 'habitat', ipa: '/ˈhæbɪtæt/', meaning: 'Môi trường sống' },
      { word: 'mammal', ipa: '/ˈmæml/', meaning: 'Động vật có vú' },
      { word: 'protect', ipa: '/prəˈtekt/', meaning: 'Bảo vệ' },
      { word: 'rare', ipa: '/rer/', meaning: 'Hiếm' },
      { word: 'reptile', ipa: '/ˈreptaɪl/', meaning: 'Loài bò sát' },
      { word: 'species', ipa: '/ˈspiːʃiːz/', meaning: 'Loài' },
      { word: 'wildlife', ipa: '/ˈwaɪldlaɪf/', meaning: 'Động vật hoang dã' },
      { word: 'jungle', ipa: '/ˈdʒʌŋɡl/', meaning: 'Rừng nhiệt đới' },
      { word: 'desert', ipa: '/ˈdezərt/', meaning: 'Sa mạc' },
      { word: 'ocean', ipa: '/ˈoʊʃn/', meaning: 'Đại dương' },
      { word: 'wild', ipa: '/waɪld/', meaning: 'Hoang dã' },
    ],
    grammar: {
      title: 'Modals of Possibility (May/Might)',
      description: 'Nói về những khả năng có thể xảy ra với các loài động vật.',
      formula: 'S + may/might + V-inf',
      examples: [
        'Some rare species may become extinct if we don\'t protect them.',
        'It might rain in the jungle this afternoon.',
        'We must protect the natural habitat of wild creatures.',
        'Scientists might discover new species in the ocean.'
      ]
    },
    exercises: [
      {
        id: 'u11-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'creature', correct: 'creature' }
      },
      {
        id: 'u11-ex2',
        type: 'fill-in-blanks',
        title: 'Possibility',
        instruction: 'Điền May hoặc Might vào chỗ trống.',
        data: { sentence: 'Some animals ___ become extinct.', answer: 'may' }
      },
      {
        id: 'u11-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['must', 'We', 'protect', 'wild', 'creatures'], correct: 'We must protect wild creatures' }
      },
      {
        id: 'u11-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'It might rain in the jungle this afternoon.', underlined: 'in the jungle', answer: 'Where might it rain this afternoon?' }
      }
    ]
  },
  {
    id: 12,
    title: 'Weather and Nature',
    vocabulary: [
      { word: 'climate', ipa: '/ˈklaɪmət/', meaning: 'Khí hậu' },
      { word: 'environment', ipa: '/ɪnˈvaɪrənmənt/', meaning: 'Môi trường' },
      { word: 'forecast', ipa: '/ˈfɔːrkæst/', meaning: 'Dự báo' },
      { word: 'nature', ipa: '/ˈneɪtʃər/', meaning: 'Tự nhiên' },
      { word: 'pollution', ipa: '/pəˈluːʃn/', meaning: 'Ô nhiễm' },
      { word: 'rainbow', ipa: '/ˈreɪnboʊ/', meaning: 'Cầu vồng' },
      { word: 'recycle', ipa: '/ˌriːˈsaɪkl/', meaning: 'Tái chế' },
      { word: 'temperature', ipa: '/ˈtemprətʃər/', meaning: 'Nhiệt độ' },
      { word: 'thunderstorm', ipa: '/ˈθʌndərstɔːrm/', meaning: 'Bão có sấm sét' },
      { word: 'weather', ipa: '/ˈweðər/', meaning: 'Thời tiết' },
      { word: 'flood', ipa: '/flʌd/', meaning: 'Lũ lụt' },
      { word: 'drought', ipa: '/draʊt/', meaning: 'Hạn hán' },
      { word: 'energy', ipa: '/ˈenərdʒi/', meaning: 'Năng lượng' },
      { word: 'storm', ipa: '/stɔːrm/', meaning: 'Cơn bão' },
    ],
    grammar: {
      title: 'Zero & First Conditional',
      description: 'Nói về sự thật hiển nhiên và các điều kiện có thể xảy ra trong tương lai.',
      formula: 'Zero: If + S + V(s/es), S + V(s/es). First: If + S + V(s/es), S + will + V-inf.',
      examples: [
        'If it rains, the grass gets wet.',
        'If the weather is nice tomorrow, we will go for a walk in nature.',
        'What will you do if there is a big thunderstorm?',
        'If we recycle more, we will help the environment.'
      ]
    },
    exercises: [
      {
        id: 'u12-ex1',
        type: 'unscramble-word',
        title: 'Spelling Bee',
        instruction: 'Sắp xếp các chữ cái thành từ đúng.',
        data: { scrambled: 'rainobw', correct: 'rainbow' }
      },
      {
        id: 'u12-ex2',
        type: 'fill-in-blanks',
        title: 'Conditionals',
        instruction: 'Điền dạng đúng của động từ trong ngoặc.',
        data: { sentence: 'If it ___ (rain), the grass gets wet.', answer: 'rains' }
      },
      {
        id: 'u12-ex3',
        type: 'unscramble-sentence',
        title: 'Sentence Builder',
        instruction: 'Sắp xếp các từ thành câu hoàn chỉnh.',
        data: { words: ['will', 'If', 'we', 'recycle', 'help', 'we', 'the', 'environment'], correct: 'If we recycle we will help the environment' }
      },
      {
        id: 'u12-ex4',
        type: 'question-formation',
        title: 'Ask a Question',
        instruction: 'Đặt câu hỏi cho phần gạch chân.',
        data: { sentence: 'If the weather is nice tomorrow, we will go for a walk.', underlined: 'go for a walk', answer: 'What will you do if the weather is nice tomorrow?' }
      }
    ]
  }
];
