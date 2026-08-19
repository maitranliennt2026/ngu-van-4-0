// Dữ liệu học tập và ngân hàng đề thi Ngữ Văn 4.0

const NGU_VAN_DATA = {
  // Danh sách bài học chia theo khối lớp
  lessons: {
    12: [
      {
        id: "vcap",
        title: "Vợ chồng A Phủ",
        author: "Tô Hoài",
        type: "Truyện ngắn",
        year: "1952",
        summary: "Tác phẩm phản ánh số phận đau khổ của người dân nghèo vùng cao Tây Bắc dưới ách áp bức của bọn chúa đất phong kiến và thực dân, đồng thời khẳng định sức sống tiềm tàng, khát vọng tự do và con đường tự giải phóng của họ đi theo cách mạng.",
        coreValues: {
          content: "Giá trị nhân đạo sâu sắc: Cảm thông với số phận bất hạnh của Mị và A Phủ; tố cáo tội ác giai cấp thống trị (nhà thống lý Pá Tra); ngợi ca sức sống tiềm tàng, khát vọng tự do cháy bỏng của con người Tây Bắc.",
          art: "Nghệ thuật miêu tả tâm lý nhân vật sắc sảo; nghệ thuật xây dựng nhân vật độc đáo; ngôn ngữ đậm đà màu sắc vùng cao; cách kể chuyện tự nhiên, lôi cuốn."
        },
        mindmap: {
          root: "Vợ chồng A Phủ",
          children: [
            {
              name: "Nhân vật Mị",
              children: [
                { name: "Trước khi làm dâu: Trẻ trung, tài hoa, hiếu thảo" },
                { name: "Khi làm dâu gạt nợ: Bị bóc lột, chai sạn tâm hồn ('lùi lũi như con rùa')" },
                { name: "Đêm tình mùa xuân: Sức sống trỗi dậy khi nghe tiếng sáo" },
                { name: "Đêm đông cởi trói: Cắt dây cởi trói cứu A Phủ và tự cứu mình" }
              ]
            },
            {
              name: "Nhân vật A Phủ",
              children: [
                { name: "Hoàn cảnh: Mồ côi, nghèo khó nhưng khỏe mạnh, gan góc" },
                { name: "Mâu thuẫn: Đánh A Sử vì bất bình, bị phạt vạ làm nô lệ gạt nợ" },
                { name: "Đêm đông: Bị trói đứng chờ chết, giọt nước mắt cầu cứu" }
              ]
            },
            {
              name: "Giá trị tác phẩm",
              children: [
                { name: "Hiện thực: Tố cáo chúa đất, thực dân vùng cao Tây Bắc" },
                { name: "Nhân đạo: Sự đồng cảm, trân trọng khát vọng sống tự do" }
              ]
            }
          ]
        }
      },
      {
        id: "taytien",
        title: "Tây Tiến",
        author: "Quang Dũng",
        type: "Thơ",
        year: "1948",
        summary: "Bài thơ khắc họa bức tranh thiên nhiên Tây Bắc hùng vĩ, dữ dội nhưng cũng rất thơ mộng, trữ tình. Qua đó làm nổi bật vẻ đẹp kiêu hùng, hào hoa của người lính Tây Tiến cùng tình đồng chí, đồng đội gắn bó.",
        coreValues: {
          content: "Khắc họa vẻ đẹp hào hùng và hào hoa của người lính Tây Tiến trên nền thiên nhiên miền Tây vừa hùng vĩ, hiểm trở vừa mĩ lệ, trữ tình.",
          art: "Bút pháp lãng mạn kết hợp với khuynh hướng sử thi; ngôn ngữ giàu tính tạo hình và nhạc điệu; sử dụng nhiều từ Hán Việt tạo không khí trang trọng."
        },
        mindmap: {
          root: "Tây Tiến",
          children: [
            {
              name: "Thiên nhiên miền Tây",
              children: [
                { name: "Hùng vĩ, dữ dội: Dốc cao, vực thẳm, cọp trêu người" },
                { name: "Thơ mộng, mĩ lệ: Sương lấp, hoa đong đưa, dáng người trên độc mộc" }
              ]
            },
            {
              name: "Hình tượng người lính",
              children: [
                { name: "Vẻ đẹp bi tráng: 'không mọc tóc', 'xanh màu lá', 'chiến trường đi chẳng tiếc đời xanh'" },
                { name: "Vẻ đẹp hào hoa: 'đêm mơ Hà Nội dáng kiều thơm'" },
                { name: "Sự hy sinh thanh thản: 'áo bào thay chiếu anh về đất'" }
              ]
            }
          ]
        }
      },
      {
        id: "song",
        title: "Sóng",
        author: "Xuân Quỳnh",
        type: "Thơ",
        year: "1967",
        summary: "Thông qua hình tượng sóng, tác phẩm thể hiện vẻ đẹp tâm hồn của người phụ nữ trong tình yêu: vừa truyền thống, thủy chung, vừa hiện đại, khát khao tự do và chủ động hướng tới hạnh phúc trọn vẹn.",
        coreValues: {
          content: "Tình yêu thiết tha, nồng nàn, đầy khát vọng của người phụ nữ. Tình yêu vừa mang nét truyền thống (thủy chung, gắn bó) vừa mang nét hiện đại (tự nhận thức, khát khao vô biên).",
          art: "Thể thơ 5 chữ nhịp nhàng mô phỏng nhịp sóng; xây dựng hình tượng song hành 'sóng' và 'em'; ngôn từ giản dị, chân thành, giàu cảm xúc."
        },
        mindmap: {
          root: "Sóng (Xuân Quỳnh)",
          children: [
            {
              name: "Đặc điểm của sóng và tình yêu",
              children: [
                { name: "Trạng thái đối lập: 'Dữ dội và dịu êm / Ồn ào và lặng lẽ'" },
                { name: "Hành trình: Từ sông ra bể, khát khao tìm đến không gian lớn" }
              ]
            },
            {
              name: "Tự nhận thức & Lý giải",
              children: [
                { name: "Nguồn gốc: Sóng từ gió, gió từ đâu? -> Sự bí ẩn của tình yêu" },
                { name: "Nỗi nhớ: Bao trùm không gian, thời gian (thức - ngủ, lòng sâu - mặt nước)" }
              ]
            },
            {
              name: "Khát vọng thủy chung",
              children: [
                { name: "Lòng thủy chung: Dù xuôi phương bắc, ngược phương nam đều hướng về một phương" },
                { name: "Khát khao bất tử hóa: Muốn tan thành trăm con sóng nhỏ giữa đại dương tình yêu" }
              ]
            }
          ]
        }
      }
    ],
    11: [
      {
        id: "cntt",
        title: "Chữ người tử tù",
        author: "Nguyễn Tuân",
        type: "Truyện ngắn",
        year: "1940",
        summary: "Truyện ca ngợi vẻ đẹp của Huấn Cao - một con người tài hoa, có thiên lương trong sáng và khí phách hiên ngang, đồng thời khẳng định sự chiến thắng của cái đẹp, cái thiện trước sự tàn bạo, phàm tục.",
        coreValues: {
          content: "Ngợi ca cái đẹp tài hoa, khí phách anh hùng và thiên lương cao cả. Khẳng định sự bất tử của cái đẹp trước bóng tối và cái ác.",
          art: "Nghệ thuật tạo dựng tình huống truyện độc đáo; bút pháp dựng cảnh xuất sắc (cảnh cho chữ); ngôn ngữ giàu tính tạo hình và cổ kính."
        },
        mindmap: {
          root: "Chữ người tử tù",
          children: [
            {
              name: "Nhân vật Huấn Cao",
              children: [
                { name: "Tài hoa: Viết chữ đẹp nổi tiếng, 'tài viết chữ nhanh và đẹp'" },
                { name: "Khí phách: Hiên ngang coi thường cái chết, không quỵ lụy uy quyền" },
                { name: "Thiên lương: Trọng nghĩa khinh tài, quý trọng tấm lòng biệt nhỡn" }
              ]
            },
            {
              name: "Quản ngục & Thơ lại",
              children: [
                { name: "Hoàn cảnh: Làm việc nơi ngục tù tối tăm đầy tội ác" },
                { name: "Tâm hồn: Biết trân quý cái đẹp - 'một thanh âm trong trẻo chen vào giữa bản đàn'" }
              ]
            },
            {
              name: "Cảnh cho chữ",
              children: [
                { name: "Không gian: Phòng giam tối tăm, hôi hám, ẩm ướt" },
                { name: "Ý nghĩa: Cái đẹp tỏa sáng giữa vũng bùn tăm tối, kẻ tử tù khuyên quản ngục hướng thiện" }
              ]
            }
          ]
        }
      },
      {
        id: "chipheo",
        title: "Chí Phèo",
        author: "Nam Cao",
        type: "Truyện ngắn",
        year: "1941",
        summary: "Tác phẩm là bản án đanh thép tố cáo xã hội thực dân nửa phong kiến cướp đi cả nhân hình lẫn nhân tính của người nông dân lương thiện, đồng thời khẳng định bản chất lương thiện tốt đẹp của họ ngay cả khi bị tha hóa.",
        coreValues: {
          content: "Giá trị hiện thực sâu sắc: Phản ánh quá trình bần cùng hóa và lưu manh hóa của người nông dân. Giá trị nhân đạo cao cả: Phát hiện và khẳng định đốm sáng lương thiện trong tâm hồn Chí Phèo.",
          art: "Cách kể chuyện linh hoạt, điểm nhìn trần thuật đa dạng; miêu tả tâm lý nhân vật bậc thầy; ngôn từ tự nhiên, sinh động, đậm đà hơi thở cuộc sống."
        },
        mindmap: {
          root: "Chí Phèo",
          children: [
            {
              name: "Quá trình tha hóa",
              children: [
                { name: "Trước khi đi tù: Anh canh điền lương thiện, tự trọng, có ước mơ" },
                { name: "Sau khi đi tù: Biến dạng nhân hình (đầu trọc, răng cạo trắng, đầy xăm trổ)" },
                { name: "Mất nhân tính: Trở thành quỷ dữ của làng Vũ Đại, tay sai của Bá Kiến" }
              ]
            },
            {
              name: "Quá trình thức tỉnh",
              children: [
                { name: "Gặp Thị Nở: Tình thương mộc mạc và bát cháo hành ấm áp" },
                { name: "Thức tỉnh: Nhận thức được âm thanh cuộc sống, sợ tuổi già và sự cô độc" },
                { name: "Bi kịch bị từ chối: Bị Thị Nở cự tuyệt -> Tuyệt vọng, phẫn uất" }
              ]
            },
            {
              name: "Kết thúc",
              children: [
                { name: "Hành động: Mang dao đâm chết Bá Kiến rồi tự sát" },
                { name: "Câu hỏi nhức nhối: 'Ai cho tôi lương thiện?'" }
              ]
            }
          ]
        }
      }
    ],
    10: [
      {
        id: "tthieu",
        title: "Truyện Kiều (Đoạn trường tân thanh)",
        author: "Nguyễn Du",
        type: "Truyện thơ Nôm",
        year: "Đầu thế kỷ XIX",
        summary: "Tác phẩm kể về cuộc đời chìm nổi, đầy bất hạnh của Thúy Kiều - một cô gái tài sắc vẹn toàn. Qua đó thể hiện bức tranh xã hội phong kiến tàn bạo đồng thời ngợi ca vẻ đẹp, ước mơ công lý của con người.",
        coreValues: {
          content: "Giá trị hiện thực: Tố cáo các thế lực tàn bạo chà đạp quyền sống con người. Giá trị nhân đạo: Đề cao tài năng, nhân phẩm, khát vọng tự do, tình yêu đôi lứa thủy chung và lòng hiếu thảo.",
          art: "Sử dụng thể thơ lục bát truyền thống đạt đến đỉnh cao; nghệ thuật xây dựng nhân vật (tả cảnh ngụ tình, miêu tả nội tâm); sử dụng điển điển cố linh hoạt."
        },
        mindmap: {
          root: "Truyện Kiều",
          children: [
            {
              name: "Giá trị nội dung",
              children: [
                { name: "Giá trị hiện thực: Thế lực đồng tiền, quan lại tham nhũng, lầu xanh" },
                { name: "Giá trị nhân đạo: Tôn trọng sắc tài, khát vọng hạnh phúc và tự do" }
              ]
            },
            {
              name: "Nghệ thuật xây dựng nhân vật",
              children: [
                { name: "Ước lệ tượng trưng: Miêu tả vẻ đẹp của Kiều, Vân bằng thiên nhiên" },
                { name: "Miêu tả nội tâm: Trực tiếp qua ngôn ngữ độc thoại, gián tiếp qua tả cảnh ngụ tình" }
              ]
            }
          ]
        }
      },
      {
        id: "bndc",
        title: "Bình Ngô Đại Cáo",
        author: "Nguyễn Trãi",
        type: "Cáo",
        year: "1428",
        summary: "Được coi là bản Tuyên ngôn Độc lập thứ hai của dân tộc, tác phẩm tổng kết chiến thắng vĩ đại của cuộc khởi nghĩa Lam Sơn, khẳng định nền độc lập chủ quyền quốc gia và nêu cao tư tưởng nhân nghĩa, lấy dân làm gốc.",
        coreValues: {
          content: "Khẳng định chủ quyền độc lập dân tộc. Tố cáo tội ác man rợ của giặc Minh. Tái hiện quá trình kháng chiến đầy gian khổ nhưng anh dũng. Tuyên bố hòa bình và xây dựng đất nước.",
          art: "Thể văn nghị luận chính luận mẫu mực; kết cấu chặt chẽ; nhịp điệu hào hùng, bi tráng; hình ảnh giàu sức gợi cảm, đối lập sâu sắc giữa chính nghĩa và phi nghĩa."
        },
        mindmap: {
          root: "Bình Ngô Đại Cáo",
          children: [
            {
              name: "Tư tưởng nhân nghĩa",
              children: [
                { name: "Cốt lõi: Yên dân (lo cho dân) và trừ bạo (diệt giặc xâm lược)" },
                { name: "Chủ quyền: Lãnh thổ, văn hiến, phong tục, lịch sử độc lập từ lâu" }
              ]
            },
            {
              name: "Bản cáo trạng tội ác",
              children: [
                { name: "Giặc Minh: Tàn sát trẻ em, phu dịch nặng nề, tàn phá môi trường ('Trúc Nam Sơn không ghi hết tội')" }
              ]
            },
            {
              name: "Quá trình kháng chiến",
              children: [
                { name: "Giai đoạn đầu: Gian khổ, thiếu thốn lương thực, nhân tài ('Tuấn kiệt như sao buổi sớm')" },
                { name: "Giai đoạn sau: Phản công thần tốc, chiến thắng vang dội (Chi Lăng, Xương Giang)" }
              ]
            }
          ]
        }
      }
    ]
  },

  // Ngân hàng đề thi trắc nghiệm
  exams: [
    {
      id: "thpt-qg-01",
      title: "Đề ôn luyện THPT Quốc gia - Chuyên đề Thơ Cách Mạng",
      grade: 12,
      duration: 45,
      questionsCount: 15,
      attempts: 8520,
      rating: 4.8,
      difficulty: "Khó",
      description: "Đề kiểm tra bao quát kiến thức các tác phẩm thơ cách mạng trong chương trình lớp 12 như Tây Tiến, Việt Bắc, Đất Nước, Sóng. Tập trung vào kỹ năng đọc hiểu văn bản, phân tích biện pháp tu từ và nắm vững hoàn cảnh sáng tác.",
      questions: [
        {
          id: 1,
          text: "Bài thơ 'Tây Tiến' của Quang Dũng được sáng tác tại địa danh nào?",
          options: [
            "A. Sầm Nưa",
            "B. Phù Lưu Chanh",
            "C. Mai Châu",
            "D. Mường Lát"
          ],
          correctOption: 1,
          explanation: "Bài thơ Tây Tiến được Quang Dũng sáng tác ở Phù Lưu Chanh (một làng thuộc tỉnh Hà Đông cũ) vào năm 1948, khi ông đã chuyển sang đơn vị khác và nhớ về đơn vị cũ Tây Tiến."
        },
        {
          id: 2,
          text: "Trong bài thơ 'Tây Tiến', câu thơ 'Tây Tiến đoàn binh không mọc tóc' phản ánh thực tế nào của người lính thời kỳ đó?",
          options: [
            "A. Quy định nghiêm ngặt về quân trang quân dụng",
            "B. Căn bệnh sốt rét rừng hiểm nghèo khiến tóc rụng",
            "C. Việc cạo trọc đầu để dễ ngụy trang trong rừng sâu",
            "D. Phong trào cắt tóc ngắn thể hiện quyết tâm ra trận"
          ],
          correctOption: 1,
          explanation: "Căn bệnh sốt rét rừng hiểm nghèo làm người lính rụng tóc, da xanh như lá. Quang Dũng đã đưa chi tiết hiện thực nghiệt ngã này vào thơ bằng cái nhìn lãng mạn, biến thành nét kiêu hùng 'không mọc tóc' đầy oai phong."
        },
        {
          id: 3,
          text: "Hình tượng 'sóng' trong bài thơ cùng tên của Xuân Quỳnh mang ý nghĩa biểu tượng gì?",
          options: [
            "A. Vẻ đẹp dữ dội và hung bạo của thiên nhiên vùng biển",
            "B. Sự biến đổi không ngừng của xã hội Việt Nam những năm kháng chiến",
            "C. Sự hóa thân, phân thân của nhân vật trữ tình 'em' để bộc lộ tình yêu",
            "D. Khát vọng chinh phục vũ trụ của con người thời đại mới"
          ],
          correctOption: 2,
          explanation: "Trong bài thơ Sóng, 'Sóng' và 'Em' là hai hình tượng song hành, tuy hai mà một. Sóng là sự phân thân của 'em', qua đó biểu hiện những cung bậc tình yêu tha thiết, vừa truyền thống vừa hiện đại."
        },
        {
          id: 4,
          text: "Hai dòng thơ: 'Sông Mã gầm lên khúc độc hành / Người đi châu thổ chia phôi ấy' thể hiện cảm xúc chủ đạo nào?",
          options: [
            "A. Sự uất hận trước cảnh đất nước bị giày xéo",
            "B. Niềm tự hào về sức mạnh tự nhiên sông nước miền Tây",
            "C. Nỗi buồn biệt ly nhuốm màu sắc bi tráng và tình cảm thủy chung với miền Tây",
            "D. Tiếng reo vui khi chiến dịch Tây Tiến giành thắng lợi hoàn toàn"
          ],
          correctOption: 2,
          explanation: "Câu thơ thể hiện nỗi buồn tiễn biệt nhưng không bi lụy mà vô cùng bi tráng. Dòng Sông Mã như tấu lên bản nhạc tiễn đưa người anh hùng về với lòng đất mẹ."
        },
        {
          id: 5,
          text: "Câu thơ nào sau đây trong bài 'Sóng' thể hiện rõ nét tính chất truyền thống của tình yêu người phụ nữ?",
          options: [
            "A. Con sóng dưới lòng sâu / Con sóng trên mặt nước",
            "B. Hướng về anh một phương / Cả trong mơ còn thức",
            "C. Làm sao được tan ra / Thành trăm con sóng nhỏ",
            "D. Ôi con sóng ngày xưa / Và ngày sau vẫn thế"
          ],
          correctOption: 1,
          explanation: "Sự chung thủy, một lòng hướng về anh ('dù xuôi về phương bắc, dù ngược về phương nam') là nét đẹp truyền thống trong tâm hồn người phụ nữ Việt Nam được Xuân Quỳnh khẳng định sâu sắc."
        }
      ]
    },
    {
      id: "ki-1-class-11",
      title: "Đề kiểm tra Học kỳ I - Ngữ văn lớp 11 - Tác phẩm chí nhân Chí Phèo",
      grade: 11,
      duration: 15,
      questionsCount: 5,
      attempts: 4120,
      rating: 4.6,
      difficulty: "Trung bình",
      description: "Đề thi tập trung đánh giá khả năng hiểu giá trị hiện thực và giá trị nhân đạo của truyện ngắn Chí Phèo (Nam Cao), hiểu sâu sắc tấn bi kịch bị từ chối quyền làm người của Chí Phèo.",
      questions: [
        {
          id: 1,
          text: "Tiếng chửi của Chí Phèo ở đầu tác phẩm thể hiện điều gì ở nhân vật này?",
          options: [
            "A. Sự say rượu mất kiểm soát hành vi hoàn toàn",
            "B. Sự phá phách vô ý thức của một kẻ điên khùng",
            "C. Sự phản kháng tuyệt vọng trước bi kịch bị xã hội gạt ra ngoài lề",
            "D. Nỗ lực dọa dẫm để đòi tiền Bá Kiến"
          ],
          correctOption: 2,
          explanation: "Tiếng chửi của Chí Phèo là một tiếng chửi có thứ tự: chửi trời, chửi đời, chửi làng Vũ Đại, chửi đứa nào không chửi nhau với hắn, và cuối cùng chửi đứa chết mẹ nào đẻ ra hắn. Đó là sự thèm khát giao tiếp, nhưng nhận lại chỉ là sự im lặng đáng sợ. Tiếng chửi là bi kịch bị cô lập của Chí."
        },
        {
          id: 2,
          text: "Chi tiết 'bát cháo hành' của Thị Nở có vai trò gì trong sự thức tỉnh của Chí Phèo?",
          options: [
            "A. Chỉ là liều thuốc giải rượu thông thường giúp Chí tỉnh táo",
            "B. Biểu tượng của tình thương ấm áp, đánh thức bản tính lương thiện bị vùi lấp",
            "C. Món ăn thể hiện sự nghèo nàn, xơ xác của người dân làng Vũ Đại",
            "D. Cách để Thị Nở lấy lòng Chí Phèo nhằm nhờ vả công việc"
          ],
          correctOption: 1,
          explanation: "Bát cháo hành mộc mạc của Thị Nở là lần đầu tiên Chí Phèo được nhận tình thương từ một người khác mà không phải cướp giật hay dọa dẫm. Tình thương mộc mạc ấy đã đánh thức thiên lương, bản chất lương thiện ngủ quên của Chí Phèo."
        },
        {
          id: 3,
          text: "Trước khi tự sát, Chí Phèo đã đến nhà ai và thực hiện hành động gì?",
          options: [
            "A. Đến nhà Thị Nở để van xin tình yêu",
            "B. Đến nhà Bá Kiến đòi lương thiện, đâm chết Bá Kiến rồi tự sát",
            "C. Đến nhà tự vệ của làng để tự thú tội lỗi",
            "D. Đến lò gạch cũ nằm nhớ lại quãng đời lương thiện"
          ],
          correctOption: 1,
          explanation: "Khi bị Thị Nở cự tuyệt, Chí Phèo mang dao đi đòi nợ máu. Hắn không đến nhà Thị Nở mà đến thẳng nhà Bá Kiến - kẻ gây ra bi kịch đời mình, đòi lương thiện, giết chết Bá Kiến và tự kết liễu đời mình."
        },
        {
          id: 4,
          text: "Ai là người đã đẩy Chí Phèo vào tù, mở đầu cho quá trình tha hóa của nhân vật?",
          options: [
            "A. Lý Cường (con trai Bá Kiến)",
            "B. Bá Kiến vì ghen tuông vô cớ với Chí",
            "C. Bà cô Thị Nở vì ghét sự lưu manh của Chí",
            "D. Binh Chức vì tranh giành quyền lực"
          ],
          correctOption: 1,
          explanation: "Bá Kiến ghen tuông vì Chí Phèo (lúc đó là anh canh điền khỏe mạnh) làm việc trong nhà và có mối quan hệ mập mờ với bà ba trẻ đẹp của ông ta, nên đã ngầm đẩy Chí Phèo đi tù."
        },
        {
          id: 5,
          text: "Ý nghĩa của hình ảnh 'cái lò gạch cũ' xuất hiện ở đầu và cuối tác phẩm là gì?",
          options: [
            "A. Tố cáo nạn đói hoành hành làm người dân chết xơ xác",
            "B. Vòng luẩn quẩn bế tắc của số phận người nông dân nghèo trước Cách mạng",
            "C. Sự chậm trễ, lạc hậu của nền công nghiệp địa phương",
            "D. Biểu tượng cho sự cô đơn, hoang vắng của làng quê Việt Nam"
          ],
          correctOption: 1,
          explanation: "Hình ảnh lò gạch cũ xuất hiện ở đầu tác phẩm (nơi Chí Phèo bị bỏ rơi) và cuối tác phẩm (trong suy nghĩ của Thị Nở khi nhìn vào bụng mình) tạo ra cấu trúc đầu cuối tương ứng, ám chỉ nếu không có Cách mạng, sẽ lại có một 'Chí Phèo con' ra đời, bi kịch sẽ tiếp diễn vòng luẩn quẩn."
        }
      ]
    },
    {
      id: "lop-10-co-ban",
      title: "Đề ôn tập Khối lớp 10 - Tác phẩm Bình Ngô Đại Cáo",
      grade: 10,
      duration: 15,
      questionsCount: 5,
      attempts: 2980,
      rating: 4.7,
      difficulty: "Dễ",
      description: "Đề kiểm tra ngắn giúp củng cố kiến thức về bố cục, thể loại Cáo và nội dung nhân nghĩa trọng tâm trong kiệt tác Bình Ngô Đại Cáo của Nguyễn Trãi.",
      questions: [
        {
          id: 1,
          text: "Bình Ngô Đại Cáo của Nguyễn Trãi được viết theo thể loại văn học nào?",
          options: [
            "A. Chiếu (văn bản truyền đạt mệnh lệnh của nhà vua)",
            "B. Cáo (thể văn nghị luận chính luận dùng để ban bố sự kiện lớn)",
            "C. Hịch (thể văn kêu gọi, cổ vũ tinh thần chiến đấu)",
            "D. Biểu (tờ trình của bề tôi lên nhà vua)"
          ],
          correctOption: 1,
          explanation: "Cáo là thể văn nghị luận cổ có tính chất chính luận, thường được vua chúa hoặc thủ lĩnh dùng để trình bày chủ trương hay công bố một sự kiện trọng đại trước bàn dân thiên hạ."
        },
        {
          id: 2,
          text: "Tư tưởng cốt lõi xuyên suốt tác phẩm 'Bình Ngô Đại Cáo' là gì?",
          options: [
            "A. Tư tưởng trung quân ái quốc (trung thành với vua)",
            "B. Tư tưởng nhân nghĩa lấy dân làm gốc",
            "C. Tư tưởng bành trướng lãnh thổ quốc gia",
            "D. Tư tưởng tôn sùng đạo Phật giải thoát con người"
          ],
          correctOption: 1,
          explanation: "Tư tưởng nhân nghĩa của Nguyễn Trãi là 'Việc nhân nghĩa cốt ở yên dân / Quân điếu phạt trước lo trừ bạo'. Nhân nghĩa gắn liền với yêu nước chống xâm lược, bảo vệ nhân dân."
        },
        {
          id: 3,
          text: "Từ 'Ngô' trong tiêu đề tác phẩm dùng để chỉ thế lực xâm lược nào?",
          options: [
            "A. Nhà Tống",
            "B. Nhà Minh",
            "C. Nhà Nguyên",
            "D. Nhà Thanh"
          ],
          correctOption: 1,
          explanation: "Nguyễn Trãi gọi giặc Minh là giặc 'Ngô'. Đây là cách gọi mang tính truyền thống của người Việt, xuất phát từ nguồn gốc vùng đất khởi phát của giặc Minh (vùng đất Ngô xưa) nhằm biểu lộ sự khinh bỉ thế lực xâm lược."
        },
        {
          id: 4,
          text: "Câu thơ nào sau đây tố cáo tội ác hủy hoại môi trường của kẻ thù xâm lược?",
          options: [
            "A. Độc ác thay, trúc Nam Sơn không ghi hết tội",
            "B. Tàn hại cả giống côn trùng cây cỏ",
            "C. Người bị ép xuống dòng đen bẫy trĩu",
            "D. Nướng dân đen trên ngọn lửa hung tàn"
          ],
          correctOption: 1,
          explanation: "Câu thơ 'Tàn hại cả giống côn trùng cây cỏ' trực tiếp tố cáo hành vi tàn sát dã man, hủy hoại cả sự sống thiên nhiên, sinh vật của quân giặc."
        },
        {
          id: 5,
          text: "Ai là người thừa lệnh công bố bản 'Bình Ngô Đại Cáo' sau thắng lợi kháng chiến?",
          options: [
            "A. Nguyễn Trãi tự ý công bố",
            "B. Lê Lợi (Bình Định Vương)",
            "C. Vua Trần Nhân Tông",
            "D. Nguyễn Nhạc"
          ],
          correctOption: 1,
          explanation: "Nguyễn Trãi viết Bình Ngô Đại Cáo theo lệnh của Bình Định Vương Lê Lợi để tuyên bố với toàn dân về thắng lợi hoàn toàn của khởi nghĩa Lam Sơn."
        }
      ]
    }
  ],

  // Dữ liệu câu hỏi cho trợ lý văn học AI mô phỏng
  aiReplies: {
    hello: "Xin chào! Mình là Trợ lý Ngữ Văn AI 4.0. Mình có thể giúp bạn lập dàn ý, tóm tắt tác phẩm, giải thích ý nghĩa nghệ thuật và phân tích các bài văn học. Bạn hãy chọn câu hỏi gợi ý bên dưới hoặc nhập câu hỏi của riêng mình nhé! 😊",
    "tay-tien-1": `### Dàn ý phân tích bức tranh thiên nhiên Tây Bắc trong bài thơ "Tây Tiến" (Quang Dũng)

Thiên nhiên Tây Bắc hiện lên vừa **hùng vĩ, dữ dội, hiểm trở**, lại vừa **thơ mộng, trữ tình, mĩ lệ**:

1. **Vẻ đẹp hùng vĩ, dữ dội và hiểm trở:**
   - *Địa hình hiểm trở:* "Dốc lên khúc khuỷu dốc thăm thẳm", từ láy giàu chất tạo hình vẽ ra những con dốc gập ghềnh, uốn lượn.
   - *Độ cao choáng ngợp:* "Heo hút cồn mây súng ngửi trời", nhân hóa tinh nghịch thể hiện tầm cao của núi non và nét tếu táo của người lính.
   - *Thác ghềnh hoang sơ:* "Chiều chiều oai linh thác gầm thét / Đêm đêm Mường Hịch cọp trêu người" gợi tả thiên nhiên chứa đầy hiểm nguy luôn rình rập.

2. **Vẻ đẹp thơ mộng, trữ tình và mĩ lệ:**
   - *Bức tranh bản làng trong sương khói:* "Mường Lát hoa về trong đêm hơi", làn sương hư ảo che chở cho đoàn quân.
   - *Cảnh sông nước tĩnh lặng:* "Người đi châu thổ chia phôi ấy / Có thấy hồn lau nẻo bến bờ", những bông cỏ lau như có linh hồn đang tiễn đưa người đi.
   - *Nét đẹp văn hóa ấm áp:* "Nhà ai Pha Luông mưa xa khơi", hình ảnh mái nhà ẩn hiện trong mưa rừng gợi cảm giác bình yên ấm lòng.

**Kết luận:** Thiên nhiên Tây Bắc là cái nền tráng lệ tôn vinh vẻ đẹp tâm hồn và khí phách anh hùng của người lính Tây Tiến.`,
    
    "vcap-1": `### Phân tích sức sống tiềm tàng của nhân vật Mị trong "đêm tình mùa xuân"

Trong truyện ngắn *Vợ chồng A Phủ*, sức sống tiềm tàng của Mị được nhà văn Tô Hoài miêu tả vô cùng tinh tế qua các giai đoạn:

1. **Những tác động ngoại cảnh khơi gợi sức sống:**
   - **Cảnh ngày xuân Tây Bắc:** Màu sắc rực rỡ của váy hoa, tiếng cười đùa của trẻ thơ.
   - **Tiếng sáo gọi bạn:** Tiếng sáo lửng lơ bay ngoài đường, tiếng sáo lùa vào tai Mị. Tiếng sáo chính là xúc tác mạnh mẽ nhất gọi thức tâm hồn trẻ trung vốn có của cô.
   - **Chất men say:** Mị lén uống rượu, uống "ực từng bát", uống cả cái đắng cay của phần đời đã qua và say cái ngọt ngào của tương lai.

2. **Diễn biến tâm lý phức tạp của Mị:**
   - Mị nhận thức lại bản thân: "Mị thấy phơi phới trở lại, lòng đột ngột vui sướng như những đêm tết ngày trước. Mị trẻ lắm. Mị vẫn còn trẻ. Mị muốn đi chơi."
   - Ý nghĩ tự tử xuất hiện: Mị nhớ đến lá ngón. Trớ trêu thay, chỉ khi muốn sống thực sự, người ta mới cảm nhận hết nỗi cay đắng của cái chết và muốn tìm đến cái chết để giải thoát.
   - Hành động nổi loạn: Mị thắp đèn cho sáng căn buồng tối tăm, Mị quấn lại tóc, với tay lấy cái váy hoa chuẩn bị đi chơi.

3. **Khi bị trói đứng:**
   - Dù bị A Sử trói đứng vào cột bằng cả thúng thúng sợi dây đay, Mị vẫn không hay biết mình đang bị trói. Hồn Mị vẫn bay theo tiếng sáo, theo những cuộc chơi xuân.
   - Chỉ khi vùng bước đi mà tay chân đau đớn, Mị mới chợt tỉnh mộng, nghe tiếng ngựa nhai cỏ bên vách và trở lại với thực tại phũ phàng.

**Ý nghĩa:** Sức sống của Mị giống như ngọn lửa âm ỉ dưới tàn tro, chỉ cần một làn gió xuân thổi tới là bùng cháy dữ dội. Đây là giá trị nhân đạo sâu sắc của Tô Hoài.`,
    
    "song-1": `### Giải thích ý nghĩa nhan đề "Sóng" của nhà văn Xuân Quỳnh

Nhan đề **Sóng** ngắn gọn nhưng chứa đựng những tầng lớp nghĩa vô cùng sâu sắc:

1. **Nghĩa tả thực (Hình tượng Sóng):**
   - Sóng là một hiện tượng tự nhiên của biển cả, mang những đặc tính vật lý: lúc ồn ào dữ dội, lúc lặng lẽ êm đềm; có sóng dưới lòng sâu, có sóng trên mặt nước; sóng luôn khát khao hướng vào bờ.

2. **Nghĩa ẩn dụ (Hình tượng Em):**
   - Sóng chính là sự hóa thân, phân thân của nhân vật trữ tình "em".
   - Những trạng thái đối lập của sóng cũng là những tâm trạng phức tạp của người con gái khi yêu: nhớ nhung, giận hờn, thủy chung và mong muốn bất tử hóa tình yêu.

3. **Mối quan hệ song hành:**
   - Cả bài thơ được xây dựng trên kết cấu hai hình tượng song hành: *Sóng* và *Em*. Hai hình tượng này lúc tách đôi để soi chiếu cho nhau, lúc hòa nhập vào nhau để tạo ra sự cộng hưởng cảm xúc tuyệt vời.

**Tóm lại:** Nhan đề "Sóng" đã mở ra cánh cửa thế giới tâm hồn người phụ nữ trong tình yêu: nồng nàn, thủy chung, khao khát tự nhận thức và dâng hiến trọn vẹn.`
  }
};

// Đảm bảo dữ liệu có thể sử dụng ở các tệp khác
if (typeof window !== "undefined") {
  window.NGU_VAN_DATA = NGU_VAN_DATA;
}
