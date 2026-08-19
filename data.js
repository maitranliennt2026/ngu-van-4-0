// ==========================================
// KHO DỮ LIỆU NGỮ VĂN 4.0 - THCS (LỚP 6, 7, 8, 9)
// Sách Kết nối tri thức và các bộ sách mới
// ==========================================

const NGU_VAN_DATA = {
  // Danh sách bài học và tác phẩm chia theo khối lớp THCS
  lessons: {
    9: [
      {
        id: "dong-chi",
        title: "Đồng chí",
        author: "Chính Hữu",
        type: "Thơ",
        year: "1948",
        summary: "Bài thơ ca ngợi tình đồng chí, đồng đội gắn bó keo sơn, thắm thiết giữa những người lính cách marque trong những năm đầu cuộc kháng chiến chống Pháp.",
        coreValues: {
          content: "Khắc họa vẻ đẹp giản dị, chân thực của tình đồng chí, đồng đội gắn liền với tinh thần yêu nước và ý chí chiến đấu kiên cường.",
          art: "Thể thơ tự do linh hoạt; hình ảnh thơ bình dị, cô đọng, giàu sức gợi cảm; chi tiết chọn lọc mang tính biểu tượng cao."
        },
        mindmap: {
          root: "Đồng chí (Chính Hữu)",
          children: [
            {
              name: "Cơ sở hình thành tình đồng chí",
              children: [
                { name: "Cùng chung cảnh ngộ nghèo khó, xuất thân từ nông dân ('Nước mặn đồng chua, đất cày lên sỏi đá')" },
                { name: "Cùng chung lý tưởng chiến đấu vì Tổ quốc ('Súng bên súng, đầu sát bên đầu')" }
              ]
            },
            {
              name: "Biểu hiện của tình đồng chí",
              children: [
                { name: "Sẻ chia gian lao, thiếu thốn nơi chiến trường ('Áo anh rách vai, quần tôi có vài mảnh')" },
                { name: "Thấu hiểu tâm tư, nỗi lòng của nhau ('Thương nhau tay nắm bàn chân')" },
                { name: "Sự gắn kết trong đêm canh gác ('Đêm rét chung chăn thành đôi tri kỷ')" }
              ]
            },
            {
              name: "Biểu tượng khép lại bài thơ",
              children: [
                { name: "Hình ảnh 'Đầu súng trăng treo': Sự kết hợp giữa hiện thực (súng) và lãng mạn (trăng)" },
                { name: "Biểu tượng cho người lính, cho chất thơ của cuộc đời người chiến sĩ" }
              ]
            }
          ]
        }
      },
      {
        id: "bep-lua",
        title: "Bếp lửa",
        author: "Bế Văn Kỳ",
        type: "Thơ",
        year: "1963",
        summary: "Qua hình ảnh bếp lửa, bài thơ gợi lại những kỷ niệm đầy xúc động về tình bà cháu và lòng kính yêu, biết ơn sâu sắc của người cháu đối với người bà.",
        coreValues: {
          content: "Thể hiện tình cảm gia đình thiêng liêng, lòng biết ơn và đạo lý 'uống nước nhớ nguồn' đối với thế hệ đi trước.",
          art: "Kết hợp nhuần nhuyễn giữa miêu tả, biểu cảm, tự sự và bình luận; hình ảnh 'bếp lửa' mang ý nghĩa biểu tượng xuyên suốt."
        },
        mindmap: {
          root: "Bếp lửa (Bế Văn Kỳ)",
          children: [
            {
              name: "Hình ảnh bếp lửa khởi nguồn",
              children: [
                { name: "Khơi ngọn lửa của tình bà cháu, của sự sống và niềm tin bền bỉ" }
              ]
            },
            {
              name: "Kỷ niệm tuổi thơ bên bà",
              children: [
                { name: "Năm tháng đói kém, nhọc nhằn nhưng ấm áp tình thương" },
                { name: "Tiếng chim tu hú kêu gợi nhắc không gian quê hương thanh bình" },
                { name: "Bà tần tảo sớm hôm, nhóm lửa nuôi cháu lớn khôn" }
              ]
            },
            {
              name: "Suy ngẫm về hình ảnh người bà",
              children: [
                { name: "Bà không chỉ nhóm lửa mà còn 'nhóm' cả niềm tin, yêu thương cho con cháu" }
              ]
            }
          ]
        }
      }
    ],
    8: [
      {
        id: "lao-hac",
        title: "Lão Hạc",
        author: "Nam Cao",
        type: "Truyện ngắn",
        year: "1943",
        summary: "Tác phẩm phản ánh số phận đau thương của người nông dân nghèo trong xã hội cũ, đồng thời ngợi ca vẻ đẹp tâm hồn trong sạch, lòng tự trọng cao cả và tình cha con sâu sắc.",
        coreValues: {
          content: "Tố cáo xã hội tàn nhẫn đẩy người nông dân vào đường cùng; ngợi ca nhân phẩm cao quý, lòng tự trọng và tình yêu thương con của Lão Hạc.",
          art: "Nghệ thuật miêu tả tâm lý nhân vật sắc sảo; cốt truyện bất ngờ, giàu kịch tính; ngôi kể chân thực từ nhân vật 'ông giáo'."
        },
        mindmap: {
          root: "Lão Hạc (Nam Cao)",
          children: [
            {
              name: "Hoàn cảnh và bi kịch",
              children: [
                { name: "Nghèo khổ, vợ mất sớm, con trai bỏ đi đồn điền cao su vì không đủ tiền cưới vợ" },
                { name: "Buộc phải bán con chó Vàng - người bạn duy nhất để giữ lại mảnh vườn cho con" }
              ]
            },
            {
              name: "Vẻ đẹp nhân phẩm",
              children: [
                { name: "Lòng tự trọng đáng quý: Gửi gắm tiền trọn vẹn cho ông giáo để lo tang ma, kiên quyết không phạm vào tiền của con" },
                { name: "Cái chết đau đớn, dữ dội bằng bả chó để tự vẫn nhằm giữ trọn lương tâm và tài sản" }
              ]
            }
          ]
        }
      }
    ],
    7: [
      {
        id: "tieng-ga-trua",
        title: "Tiếng gà trưa",
        author: "Xuân Quỳnh",
        type: "Thơ",
        year: "Thời kỳ đầu kháng chiến chống Mỹ",
        summary: "Tiếng gà trưa đánh thức những kỷ niệm đẹp đẽ của tuổi thơ và tình cảm gia đình ấm áp, qua đó nuôi dưỡng tình yêu quê hương, đất nước trong lòng người chiến sĩ.",
        coreValues: {
          content: "Khơi gợi tình cảm gia đình, tình bà cháu thiêng liêng và cội nguồn yêu thương của người lính.",
          art: "Thể thơ 5 chữ nhịp nhàng; sử dụng điệp từ 'tiếng gà trưa' làm âm hưởng chủ đạo kết nối ký ức và hiện tại."
        },
        mindmap: {
          root: "Tiếng gà trưa (Xuân Quỳnh)",
          children: [
            {
              name: "Khởi đầu hành trình",
              children: [
                { name: "Tiếng gà trưa đánh thức cảm xúc của người lính trên đường hành quân" }
              ]
            },
            {
              name: "Kỷ niệm tuổi thơ",
              children: [
                { name: "Ổ trứng hồng tuổi thơ, hình ảnh người bà tần tảo chắt chiu" },
                { name: "Niềm vui thơ ngây khi nghe tiếng gà nhảy ổ" }
              ]
            },
            {
              name: "Ý nghĩa hiện tại",
              children: [
                { name: "Chiến đấu vì những điều bình dị nhất: Vì quê hương, vì tổ ấm gia đình" }
              ]
            }
          ]
        }
      }
    ],
    6: [
      {
        id: "thanh-giong",
        title: "Thánh Gióng",
        author: "Truyền thuyết dân gian",
        type: "Truyền thuyết",
        year: "Dân gian",
        summary: "Truyền thuyết ca ngợi tinh thần yêu nước, ý chí chống giặc ngoại xâm kiên cường của nhân dân ta thông qua hình tượng vị anh hùng làng Gióng.",
        coreValues: {
          content: "Phản ánh ước mơ của nhân dân về sức mạnh đoàn kết và lòng dũng cảm chiến thắng giặc ngoại xâm.",
          art: "Kết hợp yếu tố kỳ ảo, thần kỳ với các sự kiện lịch sử; xây dựng hình tượng anh hùng mang tầm vóc lớn lao."
        },
        mindmap: {
          root: "Thánh Gióng",
          children: [
            {
              name: "Sự ra đời kỳ lạ",
              children: [
                { name: "Sinh ra từ vết chân lạ, bà mẹ mang thai 12 tháng mới sinh" }
              ]
            },
            {
              name: "Sự lớn lên thần tốc",
              children: [
                { name: "Lên ba tuổi không biết nói cười, nhưng nghe tiếng sứ giả tìm người cứu nước bỗng vụt lớn thành tráng sĩ" }
              ]
            },
            {
              name: "Hành trình đánh giặc và bay về trời",
              children: [
                { name: "Cưỡi ngựa sắt, mặc giáp sắt, roi sắt dẹp tan giặc Ân" },
                { name: "Bay về trời, để lại dấu tích là các ao hồ chiêm trũng và tre ngà" }
              ]
            }
          ]
        }
      }
    ]
  },

  // Ngân hàng đề thi trắc nghiệm THCS
  exams: [
    {
      id: "thcs-01",
      title: "Đề kiểm tra Ngữ Văn Lớp 9 - Chuyên đề Thơ Hiện Đại",
      grade: 9,
      duration: 30,
      questionsCount: 5,
      attempts: 3420,
      rating: 4.9,
      difficulty: "Trung bình",
      description: "Đề kiểm tra hệ thống kiến thức trọng tâm các bài thơ lớp 9 như Đồng chí, Bếp lửa, giúp học sinh vững vàng kiến thức thi vào lớp 10.",
      questions: [
        {
          id: 1,
          text: "Bài thơ 'Đồng chí' của nhà thơ Chính Hữu sáng tác vào năm nào?",
          options: [
            "A. Năm 1945",
            "B. Năm 1948",
            "C. Năm 1954",
            "D. Năm 1975"
          ],
          correctOption: 1,
          explanation: "Bài thơ 'Đồng chí' được sáng tác vào năm 1948 tại chiến khu Việt Bắc, in trong tập thơ 'Đầu súng trăng treo' của Chính Hữu."
        },
        {
          id: 2,
          text: "Hình tượng 'Đầu súng trăng treo' ở cuối bài thơ 'Đồng chí' mang ý nghĩa biểu tượng gì?",
          options: [
            "A. Sự khắc nghiệt của thời tiết ban đêm",
            "B. Sự kết hợp hài hòa giữa hiện thực chiến đấu và chất lãng mạn trữ tình",
            "C. Sự cô đơn của người lính khi canh gác",
            "D. Vẻ đẹp thiên nhiên hoang sơ của núi rừng"
          ],
          correctOption: 1,
          explanation: "'Đầu súng trăng treo' là hình ảnh biểu tượng tuyệt đẹp kết hợp giữa súng (chiến sĩ, hiện thực) và trăng (thi sĩ, hòa bình, lãng mạn)."
        },
        {
          id: 3,
          text: "Trong bài thơ 'Bếp lửa', hình ảnh bếp lửa do ai nhóm lên?",
          options: [
            "A. Người cháu",
            "B. Người bà",
            "C. Cả bà và cháu",
            "D. Người mẹ"
          ],
          correctOption: 2,
          explanation: "Bếp lửa do 'một sớm mưa vui' bà nhóm, rồi bà nhóm 'mỗi sớm mai đầy', và sau này người cháu đã kế thừa để 'nhóm niềm yêu thương'."
        },
        {
          id: 4,
          text: "Phương thức biểu đạt chính của bài thơ 'Bếp lửa' là gì?",
          options: [
            "A. Biểu cảm kết hợp tự sự và miêu tả",
            "B. Tự sự kết hợp thuyết minh",
            "C. Nghị luận kết hợp biểu cảm",
            "D. Miêu tả kết hợp hành chính"
          ],
          correctOption: 0,
          explanation: "Bài thơ kết hợp nhuần nhuyễn giữa biểu cảm (bộc lộ cảm xúc) với tự sự (kể chuyện quá khứ) và miêu tả."
        },
        {
          id: 5,
          text: "Tác phẩm nào sau đây cùng viết về đề tài người lính thời kỳ kháng chiến chống Pháp với 'Đồng chí'?",
          options: [
            "A. Bài thơ về tiểu đội xe không kính (Phạm Tiến Duật)",
            "B. Tây Tiến (Quang Dũng)",
            "C. Sang thu (Hữu Thỉnh)",
            "D. Mùa xuân nho nhỏ (Thanh Hải)"
          ],
          correctOption: 1,
          explanation: "'Tây Tiến' của Quang Dũng cũng là tác phẩm xuất sắc viết về người lính và tình đồng đội trong giai đoạn đầu chống Pháp."
        }
      ]
    }
  ],

  // Dữ liệu câu hỏi cho trợ lý văn học AI mô phỏng (THCS)
  aiReplies: {
    hello: "Xin chào! Mình là Trợ lý Ngữ Văn AI 4.0 dành cho cấp THCS (6, 7, 8, 9) theo chương trình Kết nối tri thức. Mình có thể giúp bạn tóm tắt tác phẩm, phân tích bài thơ, lập dàn ý văn bản và giải đáp kiến thức Ngữ Văn. Bạn hãy chọn gợi ý bên dưới nhé! 😊",
    
    "dong-chi-1": `### Dàn ý phân tích hình tượng người lính trong bài thơ "Đồng chí" (Chính Hữu)

1. **Hoàn cảnh xuất thân nghèo khó:**
   - Họ đều là những người nông dân mặc áo lính, xuất thân từ những vùng đất nghèo khó ("nước mặn đồng chua", "đất cày lên sỏi đá").
   - Sự đồng cảm giai cấp chính là nền móng vững chắc kết nối họ lại với nhau.

2. **Sẻ chia gian lao, thiếu thốn nơi chiến trường:**
   - Cùng chung hiện thực khắc nghiệt: áo rách, chân không giày, những cơn sốt rét rừng run người.
   - Những cử chỉ ân cần, gắn bó thắm thiết: "Thương nhau tay nắm bàn chân".

3. **Vẻ đẹp tâm hồn và lý tưởng cao đẹp:**
   - Sẵn sàng gác lại tình riêng vì nghĩa lớn ("Ruộng nương gửi lại bạn thân cày / Gian nhà không mặc kệ gió lung lay").
   - Biểu tượng sáng ngời ở cuối bài: "Đầu súng trăng treo" - người lính vừa kiên cường cầm súng bảo vệ Tổ quốc, vừa giữ tâm hồn lãng mạn, yêu hòa bình.`,

    "bep-lua-1": `### Phân tích ý nghĩa hình tượng "bếp lửa" trong bài thơ của Bế Văn Kỳ

1. **Bếp lửa là hình ảnh thực gắn liền với kỷ niệm tuổi thơ:**
   - Là hình ảnh người bà tần tảo sớm hôm nhóm bếp lửa, chắt chiu từng cành củi để sưởi ấm gia đình trong những năm tháng đói kém, chiến tranh.
   - Gắn với tiếng chim tu hú kêu tha thiết, gợi nhắc không gian quê hương đậm đà tình nghĩa.

2. **Bếp lửa mang ý nghĩa biểu tượng sâu sắc:**
   - Biểu tượng cho tình bà cháu ấm áp, thiêng liêng.
   - Biểu tượng cho sức sống, lòng kiên nhẫn và ngọn lửa của niềm tin yêu luôn được truyền từ thế hệ này sang thế hệ khác.`
  }
};

// Đảm bảo dữ liệu có thể sử dụng ở các tệp khác
if (typeof window !== "undefined") {
  window.NGU_VAN_DATA = NGU_VAN_DATA;
}
