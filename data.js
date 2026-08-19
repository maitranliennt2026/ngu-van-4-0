// ==========================================
// KHO DỮ LIỆU NGỮ VĂN 4.0 - THCS (LỚP 6, 7, 8, 9)
// Chuẩn chương trình GDPT mới (Kết nối tri thức)
// ==========================================

const NGU_VAN_DATA = {
  // Danh sách bài học và tác phẩm chia theo khối lớp THCS chuẩn chương trình mới
  lessons: {
    9: [
      {
        id: "anh-trang",
        title: "Ánh trăng",
        author: "Nguyễn Duy",
        type: "Thơ",
        year: "1978",
        summary: "Bài thơ là lời tự nhắc nhở về những năm tháng gian lao của cuộc kháng chiến, qua đó thái độ sống ân nghĩa, thủy chung với quá khứ.",
        coreValues: {
          content: "Thể hiện thái độ sống uống nước nhớ nguồn, ân nghĩa thủy chung cùng quá khứ gian lao và nghĩa tình.",
          art: "Thể thơ năm chữ nhịp nhàng; giọng điệu tâm tình, tự nhiên; kết hợp giữa tự sự và trữ tình; hình ảnh thơ mang ý nghĩa biểu tượng sâu sắc."
        },
        mindmap: {
          root: "Ánh trăng (Nguyễn Duy)",
          children: [
            {
              name: "Quá khứ nghĩa tình",
              children: [
                { name: "Gắn bó với thiên nhiên, với vầng trăng tri kỷ trong những năm tháng gian khổ ở chiến trường" }
              ]
            },
            {
              name: "Hiện tại đổi thay",
              children: [
                { name: "Sống trong thành phố hiện đại, đầy đủ tiện nghi, con người dễ vô tình quên đi quá khứ" }
              ]
            },
            {
              name: "Bước ngoặt tình huống và thức tỉnh",
              children: [
                { name: "Đèn điện tắt đột ngột, vầng trăng xuất hiện vẹn nguyên, nhân vật giật mình vỡ lẽ, đối diện với chính mình" }
              ]
            }
          ]
        }
      },
      {
        id: "nhung-ngoi-sao-xa-xoi",
        title: "Những ngôi sao xa xoi",
        author: "Lê Minh Khuê",
        type: "Truyện ngắn",
        year: "1971",
        summary: "Tác phẩm ca ngợi vẻ đẹp dũng cảm, tinh thần lạc quan và tình đồng đội gắn bó của những cô gái thanh niên xung phong trên tuyến đường Trường Sơn.",
        coreValues: {
          content: "Khắc họa thành công vẻ đẹp anh hùng, sự dũng cảm và tâm hồn trong sáng, mộng mơ của tuổi trẻ Việt Nam thời kháng chiến chống Mỹ.",
          art: "Nghệ thuật miêu tả tâm lý nhân vật sắc sảo qua ngôi kể thứ nhất; ngôn ngữ sinh động, trẻ trung, đậm chất lính."
        },
        mindmap: {
          root: "Những ngôi sao xa xoi (Lê Minh Khuê)",
          children: [
            {
              name: "Hoàn cảnh chiến đấu",
              children: [
                { name: "Trọng điểm trên tuyến đường Trường Sơn, máy bay oanh tạc hiểm trở, công việc phá bom nguy hiểm" }
              ]
            },
            {
              name: "Vẻ đẹp chung của tổ trinh sát",
              children: [
                { name: "Dũng cảm, kiên cường, tinh thần trách nhiệm cao độ với nhiệm vụ" },
                { name: "Tình đồng đội gắn bó sâu sắc, yêu thương nhau như chị em trong nhà" }
              ]
            },
            {
              name: "Nét tính cách riêng của Phương Định",
              children: [
                { name: "Cô gái Hà Nội xinh xắn, nhạy cảm, hay mơ mộng và rất dũng cảm khi đối mặt với cái chết" }
              ]
            }
          ]
        }
      }
    ],
    8: [
      {
        id: "gio-lạnh-dau-mua",
        title: "Gió lạnh đầu mùa",
        author: "Thạch Lam",
        type: "Truyện ngắn",
        year: "1937",
        summary: "Câu chuyện cảm động về tình cảm nhân ái, sự sẻ chia yêu thương giữa những đứa trẻ ở một phố huyện nghèo khi mùa đông đến.",
        coreValues: {
          content: "Đề cao tình người ấm áp, lòng trắc ẩn và sự sẻ chia đối với những hoàn cảnh bất hạnh trong cuộc sống.",
          art: "Truyện ngắn giàu chất thơ; cốt truyện nhẹ nhàng; miêu tả tâm lý tinh tế, sâu lắng."
        },
        mindmap: {
          root: "Gió lạnh đầu mùa (Thạch Lam)",
          children: [
            {
              name: "Khung cảnh mùa đông về",
              children: [
                { name: "Cái lạnh đầu mùa rét mướt khắc họa rõ nét cảnh ngộ nghèo khó của trẻ em vùng quê" }
              ]
            },
            {
              name: "Hành động của Sơn và Lê",
              children: [
                { name: "Sơn và chị Lan thương cảm khi thấy bé Cụt rách rưới, ro ro vì lạnh" },
                { name: "Sơn quyết định lấy chiếc áo ấm của em gái đã mất đem cho bé Hiên mặc" }
              ]
            },
            {
              name: "Ý nghĩa nhân văn",
              children: [
                { name: "Sự ấm áp của tình người vượt lên trên cái lạnh giá của thời tiết và ranh giới giàu nghèo" }
              ]
            }
          ]
        }
      }
    ],
    7: [
      {
        id: "me",
        title: "Mẹ",
        author: "Đỗ Trung Quân",
        type: "Thơ",
        year: "Hiện đại",
        summary: "Bài thơ khắc họa nỗi vất vả, hy sinh thầm lặng của người mẹ vì con cái, qua đó nhắc nhở đạo lý làm con phải biết ơn và yêu thương mẹ.",
        coreValues: {
          content: "Tôn vinh tình mẫu tử thiêng liêng, sự hy sinh vô điều kiện của người mẹ suốt đời vì gia đình.",
          art: "Thể thơ linh hoạt, hình ảnh mộc mạc, gần gũi, giàu sức gợi cảm xúc."
        },
        mindmap: {
          root: "Mẹ (Đỗ Trung Quân)",
          children: [
            {
              name: "Hình ảnh người mẹ tần tảo",
              children: [
                { name: "Mẹ gánh chịu mọi nhọc nhằn, giông bão cuộc đời để che chở cho con" }
              ]
            },
            {
              name: "Tình cảm của con",
              children: [
                { name: "Lòng biết ơn sâu sắc, sự thấu hiểu những hy sinh thầm lặng mà mẹ đã trải qua" }
              ]
            }
          ]
        }
      }
    ],
    6: [
      {
        id: "thach-sanh",
        title: "Thạch Sanh",
        author: "Truyện cổ tích",
        type: "Truyện cổ tích",
        year: "Dân gian",
        summary: "Truyện cổ tích ca ngợi phẩm chất tốt đẹp, tài năng và lòng nhân đạo của nhân vật Thạch Sanh, đồng thời phản ánh triết lý nhân quả 'ở hiền gặp lành'.",
        coreValues: {
          content: "Thể hiện ước mơ của nhân dân về công lý xã hội, cái thiện chiến thắng cái ác, người hiền gặp lành.",
          art: "Sử dụng yếu tố thần kỳ, kết cấu truyện quen thuộc của truyện cổ tích thần kỳ."
        },
        mindmap: {
          root: "Thạch Sanh",
          children: [
            {
              name: "Thân phận & Phẩm chất",
              children: [
                { name: "Mồ côi, nghèo khó nhưng dũng cảm, thật thà, bao dung và tài năng" }
              ]
            },
            {
              name: "Thử thách & Chiến công",
              children: [
                { name: "Diệt chăn tinh, đại bàng, vạch trần bộ mặt gian ác của Lí Thông" },
                { name: "Đánh tan quân xâm lược bằng tiếng đàn và niêu cơm thần kỳ" }
              ]
            },
            {
              name: "Kết thúc",
              children: [
                { name: "Thạch Sanh được cưới công chúa, ở hiền gặp lành, cái ác bị trừng trị thích đáng" }
              ]
            }
          ]
        }
      }
    ]
  },

  // Ngân hàng đề thi trắc nghiệm THCS chuẩn chương trình mới
  exams: [
    {
      id: "thcs-01",
      title: "Đề khảo sát Ngữ Văn Lớp 9 - Bám sát chương trình mới (Thi vào 10)",
      grade: 9,
      duration: 45,
      questionsCount: 5,
      attempts: 4120,
      rating: 4.9,
      difficulty: "Trung bình",
      description: "Đề kiểm tra trắc nghiệm tổng hợp kiến thức tác phẩm trọng tâm chương trình Ngữ Văn 9 mới như Ánh trăng, Những ngôi sao xa xôi.",
      questions: [
        {
          id: 1,
          text: "Bài thơ 'Ánh trăng' của nhà thơ Nguyễn Duy được sáng tác vào năm nào?",
          options: [
            "A. Năm 1969",
            "B. Năm 1975",
            "C. Năm 1978",
            "D. Năm 1980"
          ],
          correctOption: 2,
          explanation: "Bài thơ 'Ánh trăng' được Nguyễn Duy sáng tác năm 1978 tại thành phố Hồ Chí Minh, mang âm hưởng suy ngẫm sâu sắc về nghĩa tình quá khứ."
        },
        {
          id: 2,
          text: "Hình ảnh 'vầng trăng' ở cuối bài thơ 'Ánh trăng' mang ý nghĩa biểu tượng gì?",
          options: [
            "A. Vẻ đẹp của thiên nhiên vũ trụ bao la",
            "B. Quá khứ nghĩa tình, thiên nhiên hồn nhiên, nhân hậu và sự nghiêm khắc tự nhắc nhở bản thân",
            "C. Ánh sáng của đèn điện trong thành phố hiện đại",
            "D. Sự thay đổi thời tiết bất ngờ ban đêm"
          ],
          correctOption: 1,
          explanation: "Vầng trăng cuối bài là biểu tượng của quá khứ gian lao, nghĩa tình thủy chung và là hiện thân của sự bao dung, nhắc nhở con người không được sống vô tình."
        },
        {
          id: 3,
          text: "Truyện ngắn 'Những ngôi sao xa xoi' của Lê Minh Khuê viết về đề tài gì?",
          options: [
            "A. Cuộc sống của người nông dân trước cách mạng",
            "B. Cuộc sống chiến đấu của các cô gái thanh niên xung phong trên tuyến đường Trường Sơn",
            "C. Sinh hoạt của học sinh trong kháng chiến",
            "D. Cuộc sống lao động ở miền biển"
          ],
          correctOption: 1,
          explanation: "Tác phẩm khắc họa vẻ đẹp dũng cảm, tinh thần lạc quan của những cô gái thanh niên xung phong làm nhiệm vụ phá bom trên tuyến đường Trường Sơn."
        },
        {
          id: 4,
          text: "Nhân vật chính kiêm người kể chuyện trong 'Những ngôi sao xa xoi' là ai?",
          options: [
            "A. Nho",
            "B. Thao",
            "C. Phương Định",
            "D. Chị đội trưởng"
          ],
          correctOption: 2,
          explanation: "Truyện được kể qua góc nhìn và lời kể của Phương Định - một cô gái Hà Nội nhạy cảm, mơ mộng và kiên cường."
        },
        {
          id: 5,
          text: "Đâu là chủ đề chính của truyện ngắn 'Gió lạnh đầu mùa' (Thạch Lam)?",
          options: [
            "A. Phê phán tầng lớp thống trị phong kiến",
            "B. Tình cảm nhân ái, lòng trắc ẩn và sự sẻ chia ấm áp tình người",
            "C. Ca ngợi tinh thần chiến đấu chống giặc ngoại xâm",
            "D. Phản ánh đời sống công nhân nơi đô thị"
          ],
          correctOption: 1,
          explanation: "Tác phẩm đề cao tình người mộc mạc, lòng trắc ẩn của những đứa trẻ đối với người nghèo khó trong cái lạnh đầu mùa."
        }
      ]
    }
  ],

  // Dữ liệu câu hỏi cho trợ lý văn học AI mô phỏng (THCS)
  aiReplies: {
    hello: "Xin chào! Mình là Trợ lý Ngữ Văn AI 4.0 chuẩn chương trình GDPT mới (Kết nối tri thức). Mình có thể hỗ trợ em tóm tắt tác phẩm, phân tích nhân vật và lập dàn ý bài văn cho các lớp 6, 7, 8, 9. Em cần giúp gì nào? 😊",
    
    "anh-trang-1": `### Phân tích ý nghĩa hình tượng vầng trăng trong bài thơ "Ánh trăng" (Nguyễn Duy)

1. **Vầng trăng trong quá khứ (Nghĩa tình, gắn bó):**
   - Trăng là người bạn tri kỷ, gắn bó máu thịt với người lính trong những năm tháng gian khổ ở rừng rậm, chiến trường.
   - Trăng tượng trưng cho thiên nhiên hồn hậu, nghĩa tình và quá khứ son sắt không thể nào quên.

2. **Vầng trăng trong hiện tại (Sự lãng quên và thức tỉnh):**
   - Khi về thành phố, sống trong điều kiện đầy đủ, con người quen với ánh điện cửa gương và vô tình "vầng trăng đi qua ngõ / như người dưng qua đường".
   - Cuộc đối diện bất ngờ khi đèn điện tắt: Trăng hiện ra vẹn nguyên, lầm lủi, gợi lại bao ân tình xưa.
   - Cái "giật mình" của nhân vật trữ tình ở cuối bài là cái giật mình của sự thức tỉnh lương tâm, tự soi rọi lại mình để không sống bội bạc, vô tình với quá khứ.`,

    "nhung-ngoi-sao-xa-xoi-1": `### Phân tích vẻ đẹp thế hệ trẻ qua "Những ngôi sao xa xoi" (Lê Minh Khuê)

1. **Hoàn cảnh chiến đấu khốc liệt:**
   - Sống ở trọng điểm trên tuyến đường Trường Sơn, nơi tập trung bom đạn và hiểm nguy rình rập từng phút giây.
   - Công việc đo và phá bom hẹn giờ đòi hỏi sự tập trung cao độ, thần kinh thép và lòng dũng cảm tuyệt vời.

2. **Vẻ đẹp tâm hồn và phẩm chất cao đẹp:**
   - **Tinh thần trách nhiệm:** Luôn hoàn thành xuất sắc nhiệm vụ dù cái chết luôn cận kề.
   - **Sự dũng cảm:** Không nao núng trước hiểm nguy, bình tĩnh xử lý từng quả bom.
   - **Tâm hồn trong sáng, lơ thơ mộng mơ:** Dù chiến tranh gian khổ nhưng các cô gái vẫn yêu đời, thích làm đẹp, hay hát và vô cùng yêu thương nhau như ruột thịt.`
  }
};

// Đảm bảo dữ liệu có thể sử dụng ở các tệp khác
if (typeof window !== "undefined") {
  window.NGU_VAN_DATA = NGU_VAN_DATA;
}
