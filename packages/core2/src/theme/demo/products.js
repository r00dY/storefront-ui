const productsRaw = [
  {
    model: "Scott",
    color: "Blush Pink Cotton Velvet",
    hex: "#A17772",
    size: "2 seats",
    price: "£799",
    compareAtPrice: "£949",
    title: "Scott Large 2 Seater Sofa, Blush Pink Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/5/6/8/6/5686a4c61df2ac1d11b5a14f901183cc5a1911d7_SOFSCT084PNK_UK_SCOTT_Large_2_Seater_Sofa_Velvet_Blush_Pink_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/d/3/5/a/d35a4a43542055d3b693044f2fb6207e8c75d494_SOFSCT084PNK_UK_SCOTT_Large_2_Seater_Sofa_Velvet_Blush_Pink_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/2/f/7/6/2f76e3dde330bf1752ed3280b9af03d958f6d462_SOFSCT084PNK_UK_SCOTT_Large_2_Seater_Sofa_Velvet_Blush_Pink_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/d/b/3/1/db31cbb28466fd2e4ac998c47ccc14c1aeba69f4_SOFSCT084PNK_UK_SCOTT_Large_2_Seater_Sofa_Velvet_Blush_Pink_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/1/3/9/d/139d9a8e6a116d57d6f5769ec3d022d845c9ff74_SOFSCT084PNK_UK_SCOTT_Large_2_Seater_Sofa_Velvet_Blush_Pink_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/d/c/a/5/dca552637104b85f6016166bc663a68cdc82334c_SOFSCT084PNK_UK_SCOTT_Large_2_Seater_Sofa_Velvet_Blush_Pink_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/5/9/c/0/59c09d553bdd4506e767a4ba5ff1ee445fcc6405_SOFSCT084PNK_UK_SCOTT_Large_2_Seater_Sofa_Velvet_Blush_Pink_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Blush Pink Cotton Velvet",
    hex: "#A17773",
    size: "Left Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Left Hand Facing Chaise End Corner Sofa, Blush Pink Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/9/d/3/e9d3e695cea14c740f24a00203ba3589b632aa92_SOFSCT082PNK_UK_SCOTT_4Seat_Chaise_L_Hand_Facing_Velvet_Blush_Pink_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/7/a/f/87af75ef5165dcd92cbe4fd763ff1b8a7dc5987a_SOFSCT082PNK_UK_SCOTT_4Seat_Chaise_L_Hand_Facing_Velvet_Blush_Pink_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/a/2/3/2/a232739a435101a9a2f5d66ef3526b1d77b94575_SOFSCT082PNK_UK_SCOTT_4Seat_Chaise_L_Hand_Facing_Velvet_Blush_Pink_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/0/7/e/d07e84fb766c54acedf1394bc85776def4b9c5ca_SOFSCT082PNK_UK_SCOTT_4Seat_Chaise_L_Hand_Facing_Velvet_Blush_Pink_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/a/1/7/ca172ada12c02659b1f91ccce1ec61134cc9c480_SOFSCT082PNK_UK_SCOTT_4Seat_Chaise_L_Hand_Facing_Velvet_Blush_Pink_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/a/b/e/c/abec45813ece115d705ac2fc83bfa2cb3cf17f6e_SOFSCT082PNK_UK_SCOTT_4Seat_Chaise_L_Hand_Facing_Velvet_Blush_Pink_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/5/6/6/35668e1d779aecdd9433bb3b0d13257e55da03dd_SOFSCT082PNK_UK_SCOTT_4Seat_Chaise_L_Hand_Facing_Velvet_Blush_Pink_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Blush Pink Cotton Velvet",
    hex: "#A17774",
    size: "Right Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Right Hand Facing Chaise End Corner Sofa, Blush Pink Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/1/8/f/818fd3330af115f794c096fb114bcfb323e00a79_SOFSCT083PNK_UK_SCOTT_4Seat_Chaise_R_Hand_Facing_Velvet_Blush_Pink_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/7/3/c/8/73c8e14a16af118552bec93437e4fe115e79848a_SOFSCT083PNK_UK_SCOTT_4Seat_Chaise_R_Hand_Facing_Velvet_Blush_Pink_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/a/f/9/2af9fb9c6bd7b4fd75f1cbe20d03b47a57284af6_SOFSCT083PNK_UK_SCOTT_4Seat_Chaise_R_Hand_Facing_Velvet_Blush_Pink_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/6/0/9/c609e2efbd536205f388409554292a6d1188030a_SOFSCT083PNK_UK_SCOTT_4Seat_Chaise_R_Hand_Facing_Velvet_Blush_Pink_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/9/3/3/59339d3c76430a36f4830725de3c3bd698f3d756_SOFSCT083PNK_UK_SCOTT_4Seat_Chaise_R_Hand_Facing_Velvet_Blush_Pink_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/6/8/b/3/68b332c664cadc3a62e29e51e41dfb03d8b015a0_SOFSCT083PNK_UK_SCOTT_4Seat_Chaise_R_Hand_Facing_Velvet_Blush_Pink_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/0/9/8/d098c68fab9e8a9fe296bf7bc9b38ed0d8145db4_SOFSCT083PNK_UK_SCOTT_4Seat_Chaise_R_Hand_Facing_Velvet_Blush_Pink_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Burnt Orange Cotton Velvet",
    hex: "#AB4F31",
    size: "2 seats",
    price: "£799",
    compareAtPrice: "£949",
    title: "Scott Large 2 Seater Sofa, Burnt Orange Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/6/a/e/7/6ae7dd24c24ab940258a5fa75f853eff956f53a2_SOFSCT040ORA_UK_Scott_Large_2_Seater_Sofa_Burnt_Orange_Cotton_Velvet_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/0/c/d/a/0cda568cd8875313f09d5fa5e710323b72fb24c3_SOFSCT040ORA_UK_Scott_Large_2_Seater_Sofa_Burnt_Orange_Cotton_Velvet_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/8/4/1/f/841f1c317e01f328c2e85c8c5f7218332483ddb6_SOFSCT040ORA_UK_Scott_Large_2_Seater_Sofa_Burnt_Orange_Cotton_Velvet_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/c/7/6/a/c76a52aeb40fd1419c3fdb25925bc59ad42e933c_SOFSCT040ORA_UK_Scott_Large_2_Seater_Sofa_Burnt_Orange_Cotton_Velvet_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/7/3/0/1/7301f7f2f6ed87c79d2afca9c6ad3bad3e11032a_SOFSCT040ORA_UK_Scott_Large_2_Seater_Sofa_Burnt_Orange_Cotton_Velvet_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/d/7/7/e/d77eb5a7bd2317dcd2be8007b35228a7b7cf4ecc_SOFSCT040ORA_UK_Scott_Large_2_Seater_Sofa_Burnt_Orange_Cotton_Velvet_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/a/1/5/6/a156980ab64c3d60d0fbf44257c5949bb13a6f64_SOFSCT040ORA_UK_Scott_Large_2_Seater_Sofa_Burnt_Orange_Cotton_Velvet_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Burnt Orange Cotton Velvet",
    hex: "#AB4F32",
    size: "3 seats",
    price: "£849",
    compareAtPrice: "£999",
    title: "Scott 3 Seater Sofa, Burnt Orange Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/d/0/c/cd0c47f315928d28bace28b33e731bc56cd0b84a_SOFSCT027ORA_UK_Scott_3Seater_with_Cushions_Burnt_Orange_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/1/9/2/9/1929cb35ad877c7b4ed32bda321d1e5835143af1_SOFSCT027ORA_UK_Scott_3Seater_with_Cushions_Burnt_Orange_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/7/6/c/b/76cb087c1ca30316e4e692b4c892650604bd384c_SOFSCT027ORA_UK_Scott_3Seater_with_Cushions_Burnt_Orange_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/d/d/9/3dd986b8ee0b80e95897d41d4806df00944993f1_SOFSCT027ORA_UK_Scott_3Seater_with_Cushions_Burnt_Orange_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/f/9/6/bf968c8677c217ee9758805f0bb28eebf944bdda_SOFSCT027ORA_UK_Scott_3Seater_with_Cushions_Burnt_Orange_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/7/4/c/b/74cb4cf99157bdc1beee8c9c26bb5a0d7e0b1160_SOFSCT027ORA_UK_Scott_3Seater_with_Cushions_Burnt_Orange_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/f/b/f/2fbfb8c485365669a34ed1a0346fa6f5ac134869_SOFSCT027ORA_UK_Scott_3Seater_with_Cushions_Burnt_Orange_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Burnt Orange Cotton Velvet",
    hex: "#AB4F33",
    size: "Left Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Left Hand Facing Chaise End Corner Sofa, Burnt Orange Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/9/d/c/9/9dc962ef8e08875861a43457f299eb528d19bbcf_SOFSCT045ORA_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/6/d/d/a/6ddadf3a4a4ddc5f9b09ec007cbfe1aebfd845d1_SOFSCT045ORA_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/2/0/8/d20832fb7a32dbadf525cd0da8657ac24a86acdb_SOFSCT045ORA_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/3/d/6/53d644aa3af0c21f177264fc7ad1564864659a17_SOFSCT045ORA_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/c/e/4/4ce44a08d48826e99a73a2dcf7ecc3a72684a474_SOFSCT045ORA_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/3/b/0/e3b044332f2d69825cd9595c816137f90f509632_SOFSCT045ORA_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/a/8/f/ba8f76a472964a744e373e82695400f7c475020d_SOFSCT045ORA_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Burnt Orange Cotton Velvet",
    hex: "#AB4F34",
    size: "Right Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Right Hand Facing Chaise End Corner Sofa, Burnt Orange Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/a/8/f/da8f76f0f5aaabd97761f32014e3dae776b84d2a_SOFSCT049ORA_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/6/6/2/7/6627f06927ec9a4359380e235786546834866e8e_SOFSCT049ORA_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/d/5/d/ed5d524ed2e3d145660bca25b236a505c87158f7_SOFSCT049ORA_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/7/5/6/4756634edadd148061171a5ae9d3af9e291bebd9_SOFSCT049ORA_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/0/1/6/f/016f1ac79b1a5f6e83939fd41682d18a2361c87c_SOFSCT049ORA_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/f/f/5/0/ff505e79168a9e2022b9f864f18fb1d4dcbe365d_SOFSCT049ORA_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/f/f/2/2ff2ba0b39df76d30095d5ef2089b329d37050c1_SOFSCT049ORA_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_BURNT_ORANGE_VELVET_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Concrete Cotton Velvet",
    hex: "#595752",
    size: "2 seats",
    price: "£799",
    compareAtPrice: "£949",
    title: "Scott Large 2 Seater Sofa, Concrete Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/4/3/7/4437cdc6d392094d3a14af1b99fd509e6e3d7e4a_SOFSCT037GRY_UK_SCOTT_LARGE_2_SSEATER_SOFA_CONCRETE_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/1/f/3/1/1f3194dbf65b9e2d741e1c3814f52f24415ced15_SOFSCT037GRY_UK_SCOTT_LARGE_2_SSEATER_SOFA_CONCRETE_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/c/5/c/4c5ce2f8898774c4f87879a3430bdf1858d65a10_SOFSCT037GRY_UK_SCOTT_LARGE_2_SSEATER_SOFA_CONCRETE_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/f/7/d/6/f7d62a9f61f642918503d2a706bbbb2009cddb30_SOFSCT037GRY_UK_SCOTT_LARGE_2_SSEATER_SOFA_CONCRETE_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/1/5/9/2/1592e218435980edd1c4ae51b142d8a7072a4eac_SOFSCT037GRY_UK_SCOTT_LARGE_2_SSEATER_SOFA_CONCRETE_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/8/8/5/9/88594962d44ae2e54e648991ef1dcbac32580f68_SOFSCT037GRY_UK_SCOTT_LARGE_2_SSEATER_SOFA_CONCRETE_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/d/e/e/2/dee24779c05461c4039e17d605fcfa0db67cb94d_SOFSCT037GRY_UK_SCOTT_LARGE_2_SSEATER_SOFA_CONCRETE_VELVET_LB07_upd.jpg"
  },
  {
    model: "Scott",
    color: "Concrete Cotton Velvet",
    hex: "#595753",
    size: "3 seats",
    price: "£849",
    compareAtPrice: "£999",
    title: "Scott 3 Seater Sofa, Concrete Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/9/2/a/292a4a52b61ab5a1ab1c236136e00085bc975567_s_o_sofsct020gryuk_scott_3seater_with_cushions_concrete_lb01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/a/e/7/bae7b85f4244be3ef4f72e39e8fb02eb352dbfe6_s_o_sofsct020gryuk_scott_3seater_with_cushions_concrete_lb02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/8/0/6/c8060cc84218c549b750d0f1d2cd00287a9f02fe_s_o_sofsct020gryuk_scott_3seater_with_cushions_concrete_lb03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/6/e/0/c/6e0ce73f6c4424962f37386f60cfd10cec666346_s_o_sofsct020gryuk_scott_3seater_with_cushions_concrete_lb04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/c/1/1/3c11f686c1453c1f26a15cf9fce5465c41743185_s_o_sofsct020gryuk_scott_3seater_with_cushions_concrete_lb05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/5/5/1/c55177d2c5de8e3584e5225047cb26af36300904_s_o_sofsct020gryuk_scott_3seater_with_cushions_concrete_lb06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/4/e/8/e4e8a4b60aa592b2b4a3de6b691664b89b9c87b1_SOFSCT020GRY_UK_Scott_3Seater_with_Cushions_Concrete_LB07a_updated.jpg"
  },
  {
    model: "Scott",
    color: "Concrete Cotton Velvet",
    hex: "#595754",
    size: "Left Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Left Hand Facing Chaise End Corner Sofa, Concrete Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/d/1/3/8d13f29f6686ac6273c797d2b94718e52b979e00_SOFSCT043GRY_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/a/d/5/4/ad54ee6991b43d429b5002984b86773b2d977c8a_SOFSCT043GRY_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/5/a/2/45a25789dad8ebc3e807bb133f8a301e4bd5b26a_SOFSCT043GRY_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/9/8/7/c/987c2f00d50ac2041ec80ee90424336672f8497b_SOFSCT043GRY_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/2/f/c/82fc2ae7f957a4f807f80276f608f3e1b942f755_SOFSCT043GRY_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/3/0/5/5305b705ef5f2dab11bb0d4e812ddda4648cc0e3_SOFSCT043GRY_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/4/3/2/54322d333266d744954653fe81c0bba49a4560d3_SOFSCT043GRY_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB07_upd.jpg"
  },
  {
    model: "Scott",
    color: "Concrete Cotton Velvet",
    hex: "#595755",
    size: "Right Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Right Hand Facing Chaise End Corner Sofa, Concrete Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/8/0/a/280a12427c85c7c739ddd035a5592e2bb19f1b7d_SOFSCT047GRY_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/4/6/a/846a355dac45c4b8619d59b54925943f5bdf5c17_SOFSCT047GRY_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/0/7/a/5/07a54b69e6f6b7630794ae750ec2294eec514ccb_SOFSCT047GRY_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/2/b/4/32b4c2048ad8fd525b93cb730a7818aea603a069_SOFSCT047GRY_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/b/0/f/4b0f3790b4dbf28955ba9920dd76e7d96cbb5463_SOFSCT047GRY_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/5/7/d/557ddf861ec79c50ee85fe8c2767a992ae7091b9_SOFSCT047GRY_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/7/6/4/b764dd2832098faeacba278548488061b8639022_SOFSCT047GRY_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_CONCRETE_VELVET_LB07_upd.jpg"
  },
  {
    model: "Scott",
    color: "Grass Cotton Velvet",
    hex: "#48542F",
    size: "2 seats",
    price: "£799",
    compareAtPrice: "£949",
    title: "Scott Large 2 Seater Sofa, Grass Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/f/4/c/c/f4cc0929c59601c3cadd71c0384c722c4d11802f_SOFSCT038GRN_UK_SCOTT_LARGE_2_SSEATER_SOFA_GRASS_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/8/9/9/b/899b68996c12d29d6eceb17551805c4ada3f29cb_SOFSCT038GRN_UK_SCOTT_LARGE_2_SSEATER_SOFA_GRASS_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/0/a/d/c/0adc11940e1002ef8dcb06f327839757df39bff4_SOFSCT038GRN_UK_SCOTT_LARGE_2_SSEATER_SOFA_GRASS_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/b/b/4/f/bb4f6f4d3ccd559034dd7bc0acaeccc093fe0cb7_SOFSCT038GRN_UK_SCOTT_LARGE_2_SSEATER_SOFA_GRASS_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/2/b/c/7/2bc77fd646ac01d98245bfd5a22a7880a164dd2f_SOFSCT038GRN_UK_SCOTT_LARGE_2_SSEATER_SOFA_GRASS_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/d/4/c/5/d4c5bc65e64c4ea533e3dbe9f6fde2b54f760ac3_SOFSCT038GRN_UK_SCOTT_LARGE_2_SSEATER_SOFA_GRASS_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/d/b/6/4db67561ea319a50e9e6da5834f2676ea118ec10_SOFSCT038GRN_UK_SCOTT_LARGE_2_SSEATER_SOFA_GRASS_VELVET_LB07_upd.jpg"
  },
  {
    model: "Scott",
    color: "Grass Cotton Velvet",
    hex: "#48542F",
    size: "3 seats",
    price: "£849",
    compareAtPrice: "£999",
    title: "Scott 3 Seater Sofa, Grass Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/c/6/2/2c6217dd8f7143e9d18302001dc12e7f4e792b1e_s_o_sofsct019greuk_scott_3seater_with_cushions_grass_lb01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/f/e/3/3fe366f3c55b22114af435e1f90e5030970deb52_s_o_sofsct019greuk_scott_3seater_with_cushions_grass_lb02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/0/b/c/c/0bcc29613dff33b14be348b5b0e69ddbb376b957_s_o_sofsct019greuk_scott_3seater_with_cushions_grass_lb03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/a/6/e/ba6eba14eaa8688c2b488871462181370196f33c_s_o_sofsct019greuk_scott_3seater_with_cushions_grass_lb04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/9/2/7/2/92724b0dd07559e795348278d54e18676d68fa4d_s_o_sofsct019greuk_scott_3seater_with_cushions_grass_lb05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/1/0/1/8101341dd6d4f984f629b2b5e78612ef0ed115b7_s_o_sofsct019greuk_scott_3seater_with_cushions_grass_lb06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/0/6/7/d/067d72838cf375734bba238c456ae5e1916d0e50_SOFSCT019GRE_UK_Scott_3Seater_with_Cushions_Grass_LB07a_updated.jpg"
  },
  {
    model: "Scott",
    color: "Grass Cotton Velvet",
    hex: "#48542F",
    size: "Right Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Right Hand Facing Chaise End Corner Sofa, Grass Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/5/7/f/357fb6b9f2c07ab867afeef4372a51d80ed761bd_SOFSCT048GRN_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_GRASS_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/7/3/c/d/73cdc2c19cae12d8532e6f0c06ed7cd7c9e41157_SOFSCT048GRN_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_GRASS_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/2/5/3/d253b6fb4b13cd78a39188fd5ba4af272b0df06d_SOFSCT048GRN_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_GRASS_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/1/2/6/0/1260e1dfbf74ab10fcc78dc3ef3fb83d4d2293a3_SOFSCT048GRN_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_GRASS_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/3/3/2/43324f6106cbcd3617ac61d0d808eee034bd59e9_SOFSCT048GRN_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_GRASS_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/5/d/b/55db1130e15b734174feded1f646864b09b273d9_SOFSCT048GRN_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_GRASS_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/7/d/a/b/7dab30ad93f52ff231bdf7d74156b881b20dea87_SOFSCT048GRN_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_GRASS_VELVET_LB07_upd.jpg"
  },
  {
    model: "Scott",
    color: "Grass Cotton Velvet",
    hex: "#48542F",
    size: "Corner sofa",
    price: "£1,899",
    compareAtPrice: "£2,299",
    title: "Scott Corner Sofa, Grass Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/3/c/6/e3c61036ef443a85f98a60fffd446831de4fe9cd_SOFSCT071GRE_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Grass_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/2/4/1/4241191ad565f196c731fed39ac1dec07d9f4828_SOFSCT071GRE_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Grass_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/0/c/8/e0c8d6278c9124268b35ef5a0eab40b82575cc84_SOFSCT071GRE_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Grass_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/9/3/0/e930f2034bf50314d0ea116f5e04262a45d1e048_SOFSCT071GRE_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Grass_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/f/5/1/d/f51d4c2e8198d8e4cbe3ac54aae1e5a0ba5a3e67_SOFSCT071GRE_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Grass_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/5/d/f/85df8eceffb8f2b2399ed90cd7bdd6523bca2f04_SOFSCT071GRE_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Grass_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/f/2/d/0/f2d0bea26f809c0c63524b307ede94637310ece6_SOFSCT071GRE_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Grass_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Navy Cotton Velvet",
    hex: "#25313C",
    size: "2 seats",
    price: "£799",
    compareAtPrice: "£949",
    title: "Scott Large 2 Seater Sofa, Navy Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/8/d/2/48d239ca34d5f9dc4e722a7152a385d8af236026_SOFSCT066NVY_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Navy_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/5/7/d/1/57d12c1cafbf92e136fbf4031889621e151d3301_SOFSCT066NVY_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Navy_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/1/7/d/f/17df342f263524aef2387c5c97c0f665b0f30e4a_SOFSCT066NVY_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Navy_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/6/b/c/4/6bc48285f1c9b3c35ef2171b1889f7bf267e9351_SOFSCT066NVY_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Navy_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/d/d/b/1/ddb13bc9d41480e76a4c7a8be3af09e84b3c6ead_SOFSCT066NVY_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Navy_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/b/b/8/e/bb8ee5f2e1afe60a44668640964164d90a20756a_SOFSCT066NVY_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Navy_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/e/e/b/6/eeb6c02b719600b5ed0cfdd93bf72b8299d599b5_SOFSCT066NVY_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Navy_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Navy Cotton Velvet",
    hex: "#25313C",
    size: "3 seats",
    price: "£849",
    compareAtPrice: "£999",
    title: "Scott 3 Seater Sofa, Navy Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/f/6/1/6/f616c5ba04b49ab7bf8fe60df7167304df7aa992_SOFSCT067NVY_UK_SCOTT_3Seat_Sofa_Cotton_Velvet_Navy_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/0/9/6/20965048bc5b6d742355e4d1c142824787e1e060_SOFSCT067NVY_UK_SCOTT_3Seat_Sofa_Cotton_Velvet_Navy_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/4/7/5/e47549aaea8012a76be7aa3580a566c384539348_SOFSCT067NVY_UK_SCOTT_3Seat_Sofa_Cotton_Velvet_Navy_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/6/8/2/56823728bacb40b1866954391f1e01baa1422f37_SOFSCT067NVY_UK_SCOTT_3Seat_Sofa_Cotton_Velvet_Navy_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/6/3/6/c636e5c3b4a5702e8fc8b4df1b3cc380b346cb95_SOFSCT067NVY_UK_SCOTT_3Seat_Sofa_Cotton_Velvet_Navy_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/f/5/9/b/f59bcae33b7ce35819a27528df3507b3a1fbe7ac_SOFSCT067NVY_UK_SCOTT_3Seat_Sofa_Cotton_Velvet_Navy_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/c/2/2/4c224a302ed398e6e51e39284b17f260cd45bbf9_SOFSCT067NVY_UK_SCOTT_3Seat_Sofa_Cotton_Velvet_Navy_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Navy Cotton Velvet",
    hex: "#25313C",
    size: "Left Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Left Hand Facing Chaise End Corner Sofa, Navy Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/9/9/a/299a2e0b24578b04966ef16aca507dc23cc176fb_SOFSCT065NVY_UK_SCOTT_4Seat_Chaise_LH_Facing_Cotton_Velvet_Navy_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/e/c/4/5ec48e6dd99f38854a4d0aacdcb229900b5f4f0e_SOFSCT065NVY_UK_SCOTT_4Seat_Chaise_LH_Facing_Cotton_Velvet_Navy_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/5/6/e/b56e358341da3d48d3981f12c6cb774a02d9281c_SOFSCT065NVY_UK_SCOTT_4Seat_Chaise_LH_Facing_Cotton_Velvet_Navy_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/7/a/2/47a25b3305d39be83540903a3899aa7df0f8793a_SOFSCT065NVY_UK_SCOTT_4Seat_Chaise_LH_Facing_Cotton_Velvet_Navy_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/6/0/3/46031c366bd6eb5f02e72c3212f3f267f89b1243_SOFSCT065NVY_UK_SCOTT_4Seat_Chaise_LH_Facing_Cotton_Velvet_Navy_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/1/6/0/316041e1a799f008f8e87f3071859a48d76bbbfe_SOFSCT065NVY_UK_SCOTT_4Seat_Chaise_LH_Facing_Cotton_Velvet_Navy_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/6/6/5/e665a2206cead615cb7655460ee5b46d41d1c76f_SOFSCT065NVY_UK_SCOTT_4Seat_Chaise_LH_Facing_Cotton_Velvet_Navy_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Navy Cotton Velvet",
    hex: "#25313C",
    size: "Right Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Right Hand Facing Chaise End Corner Sofa, Navy Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/f/d/0/1/fd0144856f478bfa0cbdd412d8a739ce1f7bb7fe_SOFSCT064NVY_UK_SCOTT_4Seat_Chaise_RH_Facing_Cotton_Velvet_Navy_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/6/c/e/2/6ce25b3a6ef618b833c69e3e17371e962776baf4_SOFSCT064NVY_UK_SCOTT_4Seat_Chaise_RH_Facing_Cotton_Velvet_Navy_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/1/b/a/b/1bab34387f2f8112372b36b05aaca8008b0c2c42_SOFSCT064NVY_UK_SCOTT_4Seat_Chaise_RH_Facing_Cotton_Velvet_Navy_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/6/b/0/d6b0cd4f7dd4c800e72cf9094523ad7e598c4821_SOFSCT064NVY_UK_SCOTT_4Seat_Chaise_RH_Facing_Cotton_Velvet_Navy_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/f/c/6/3/fc63e265486ab4f479918c7069ed3fa01c6399dc_SOFSCT064NVY_UK_SCOTT_4Seat_Chaise_RH_Facing_Cotton_Velvet_Navy_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/5/1/3/c513fb1650c625fb01e372c2bd7c1cd728a794d4_SOFSCT064NVY_UK_SCOTT_4Seat_Chaise_RH_Facing_Cotton_Velvet_Navy_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/0/6/a/a/06aa35f80d2ee344e9e31140e89d92c420d5c7a9_SOFSCT064NVY_UK_SCOTT_4Seat_Chaise_RH_Facing_Cotton_Velvet_Navy_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Navy Cotton Velvet",
    hex: "#25313C",
    size: "Corner sofa",
    price: "£1,899",
    compareAtPrice: "£2,299",
    title: "Scott Corner Sofa, Navy Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/a/6/1/ba61970e73be4f7caa872a3a2205f90ca3687632_SOFSCT110NVY_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Navy_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/f/5/9/8/f598865de0cd3886b796406d3aa4e88ae60c3b33_SOFSCT110NVY_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Navy_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/2/7/a/f/27afb73d41330cfe9c418391e3352f990b6dc1ae_SOFSCT110NVY_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Navy_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/e/7/8/5/e785720fd7afed2838b26414229f227c10fe912a_SOFSCT110NVY_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Navy_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/c/3/d/4c3d444845791839c5658376124a569de4348327_SOFSCT110NVY_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Navy_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/b/9/5/e/b95e5f56907c5a7bf5cb6f6e6dac8cce3eba83f4_SOFSCT110NVY_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Navy_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/6/5/a/9/65a942ad286b1d79ac9a1f09f09f25074b5edf64_SOFSCT110NVY_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Navy_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Petrol Cotton Velvet",
    hex: "#264341",
    size: "2 seats",
    price: "£799",
    compareAtPrice: "£949",
    title: "Scott Large 2 Seater Sofa, Petrol Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/9/f/f/0/9ff03ee2efd3d5a8bfe4e1df10f9493353b22f96_SOFSCT039BLU_UK_Scott_Large_2_Seater_Sofa_Petrol_Cotton_Velvet_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/9/c/2/1/9c215d85067101ac10ff9915ea749156b21ade95_SOFSCT039BLU_UK_Scott_Large_2_Seater_Sofa_Petrol_Cotton_Velvet_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/e/0/1/4e01a4f3d43626846a1b354a137ee10cbf4c140c_SOFSCT039BLU_UK_Scott_Large_2_Seater_Sofa_Petrol_Cotton_Velvet_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/3/4/0/8/34086f8575221503a860d9d932d530112f1aa86b_SOFSCT039BLU_UK_Scott_Large_2_Seater_Sofa_Petrol_Cotton_Velvet_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/a/c/4/4ac454c3b0683edc9c555786c04f5ae3781ec199_SOFSCT039BLU_UK_Scott_Large_2_Seater_Sofa_Petrol_Cotton_Velvet_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/c/8/7/7/c8771a3248aad25a325ebd3508e4f74b147466e0_SOFSCT039BLU_UK_Scott_Large_2_Seater_Sofa_Petrol_Cotton_Velvet_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/c/c/1/4cc180704f6e590492f9ed8028c4b0a25574b0f2_SOFSCT039BLU_UK_Scott_Large_2_Seater_Sofa_Petrol_Cotton_Velvet_LB07_upd.jpg"
  },
  {
    model: "Scott",
    color: "Petrol Cotton Velvet",
    hex: "#264342",
    size: "3 seats",
    price: "£849",
    compareAtPrice: "£999",
    title: "Scott 3 Seater Sofa, Petrol Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/5/0/9/b509a28a85f2bac04eda7a87425b260c635f6976_s_o_sofsct028gryuk_scott_3seater_with_cushions_petrol_lb01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/b/9/e/d/b9eda5cf34a533feb84482bfe05cce90d6db1215_s_o_sofsct028gryuk_scott_3seater_with_cushions_petrol_lb02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/7/a/8/2/7a820a1026fd9d9baa0ed74c0406d4f385de265f_s_o_sofsct028gryuk_scott_3seater_with_cushions_petrol_lb03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/a/0/f/c/a0fc55963d82f685a57f92554f9bfb4ed0d71b73_s_o_sofsct028gryuk_scott_3seater_with_cushions_petrol_lb04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/6/2/0/7/6207e112bec7de95cfcd3bfc06e4bc7843d51092_s_o_sofsct028gryuk_scott_3seater_with_cushions_petrol_lb05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/e/e/b/deebb62996e20e26c8fd3ea3288ebc3626394987_s_o_sofsct028gryuk_scott_3seater_with_cushions_petrol_lb06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/7/8/8/2788a380d5b7fd756ddc8d2f5b7ba518815dd112_SOFSCT028GRY_UK_Scott_3Seater_with_Cushions_Petrol_LB07a_updated.jpg"
  },
  {
    model: "Scott",
    color: "Petrol Cotton Velvet",
    hex: "#264343",
    size: "Left Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Left Hand Facing Chaise End Corner Sofa, Petrol Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/f/b/8/8fb85a922259bb2d5354476891250cd676d02def_SOFSCT046BLU_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/d/6/c/3d6cdb248713561836ae072824d0f1c3fbc4fb37_SOFSCT046BLU_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/8/4/8/9/8489e96b9f73c177ac9267380c22800cd976295e_SOFSCT046BLU_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/2/4/b/d24b9ac887a1320df8f429ebe2c9ab959e154bef_SOFSCT046BLU_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/8/8/c/288cf20a70f6d1309ad14343d23782dd09af5b2a_SOFSCT046BLU_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/9/8/2/f/982f457918a371e475c481f0fe5a3a5a30ff0c94_SOFSCT046BLU_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/a/8/3/ca83c0fc209c1564ed31b72daee93c0bd3f45dcb_SOFSCT046BLU_UK_SCOTT_4_SEATER_LEFT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB07_upd.jpg"
  },
  {
    model: "Scott",
    color: "Petrol Cotton Velvet",
    hex: "#264344",
    size: "Right Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Right Hand Facing Chaise End Corner Sofa, Petrol Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/7/f/f/2/7ff272c0267bb5c94d07601a09fe4c413c8d579e_SOFSCT050BLU_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/d/9/c/f/d9cf2a9c6e934c0eadc4a4b692da6874b536bec4_SOFSCT050BLU_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/a/a/b/2aab18af5ba92eb299d72c0fa9bc77f1895f6b13_SOFSCT050BLU_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/0/4/2/b/042ba54507e8e07c3442c3373d464d133c03d9b6_SOFSCT050BLU_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/e/a/5/2ea5739ad830541aaae39a21dce2e034f626813f_SOFSCT050BLU_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/a/e/1/5ae12178c518fb6eb051b514d8b0512843312c98_SOFSCT050BLU_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/c/3/1/ec31844aebaf4a33b6df08e7594d18610c2ee19d_SOFSCT050BLU_UK_SCOTT_4_SEATER_RIGHT_HAND_FACING_CHAISE_END_SOFA_PETROL_VELVET_LB07_upd.jpg"
  },
  {
    model: "Scott",
    color: "Petrol Cotton Velvet",
    hex: "#264345",
    size: "Corner sofa",
    price: "£1,899",
    compareAtPrice: "£2,299",
    title: "Scott Corner Sofa, Petrol Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/1/4/c/1/14c10f7df18584f75549df2af33ebf34a127e8cd_SOFSCT111BLU_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Petrol_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/f/5/9/7/f597c4309ae21a06582998bfcba51aa483210740_SOFSCT111BLU_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Petrol_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/e/2/1/3/e21315fff4a3af06e921c68a17905f2ba603351c_SOFSCT111BLU_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Petrol_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/d/c/c/f/dccf443a1dee723a0b1c90c0620652594366dcf4_SOFSCT111BLU_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Petrol_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/7/c/8/5/7c851aa51ef6ef4499879d31701e56d94b2f0799_SOFSCT111BLU_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Petrol_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/7/f/2/9/7f29bcce115fa5f1403836b7a5e8d76208c4663a_SOFSCT111BLU_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Petrol_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/3/2/d/4/32d4cf6c7af801c192f804a50d94e72e0b302ded_SOFSCT111BLU_UK_SCOTT_Corner_Sofa_Cotton_Velvet_Petrol_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Gold Cotton Velvet",
    hex: "#7E5A16",
    size: "2 seats",
    price: "£799",
    compareAtPrice: "£949",
    title: "Scott Large 2 Seater Sofa, Gold Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/e/9/d/5/e9d5bb7e3f36ff7371d2e75849a88a4bd37b7afb_SOFSCT055GOL_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Gold_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/b/7/c/4b7c44f7a1a8a7a9a74953387599c8781ef4254f_SOFSCT055GOL_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Gold_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/7/a/5/d/7a5d3a283f151279cd416949d03aa8328bc18613_SOFSCT055GOL_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Gold_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/4/6/6/d/466db8d1fb7c2eeb012baf9e6cfc0ce707fc5d3a_SOFSCT055GOL_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Gold_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/1/1/f/3/11f392ae57a4063ea3d6647a34d7844240ead611_SOFSCT055GOL_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Gold_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/e/d/7/c/ed7c19c089d6998659e7f4993eb2aa87761aa5b5_SOFSCT055GOL_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Gold_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_414,dpr_2.0,q_auto:best/v4/catalog/product/asset/8/1/5/5/8155fa19df977cb6fcb865261f07e94a69236d30_SOFSCT055GOL_UK_SCOTT_Large_2_Seater_Sofa_Cotton_Velvet_Gold_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Gold Cotton Velvet",
    hex: "#7E5A17",
    size: "3 seats",
    price: "£899",
    compareAtPrice: "£999",
    title: "Scott 3 Seater Sofa, Gold Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/3/6/1/3/36136ce1089abc77844f546c9a130d6ccc16ea17_SOFSCT054GOL_UK_SCOTT_3_Seat_Sofa_Cotton_Velvet_Gold_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/c/5/e/cc5e8d185315b4e167cc83085012a0128ea98b56_SOFSCT054GOL_UK_SCOTT_3_Seat_Sofa_Cotton_Velvet_Gold_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/2/e/9/e2e9624ba2df842602d1fc20cd87a54b7f3434fd_SOFSCT054GOL_UK_SCOTT_3_Seat_Sofa_Cotton_Velvet_Gold_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/d/5/6/2d56cfefdc0e2b8b3d986e31bd0d47a318ae22c7_SOFSCT054GOL_UK_SCOTT_3_Seat_Sofa_Cotton_Velvet_Gold_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/4/e/7/c4e7464ba227c612252adc930a584c4eab956bb0_SOFSCT054GOL_UK_SCOTT_3_Seat_Sofa_Cotton_Velvet_Gold_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/1/0/4/2/1042b3a3c5992195908cf0b9cfa69a85d25dc767_SOFSCT054GOL_UK_SCOTT_3_Seat_Sofa_Cotton_Velvet_Gold_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/2/a/c/9/2ac9d25da4c15e52bf647ffc365f399affd03bb4_SOFSCT054GOL_UK_SCOTT_3_Seat_Sofa_Cotton_Velvet_Gold_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Gold Cotton Velvet",
    hex: "#7E5A18",
    size: "Left Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Left Hand Facing Chaise End Corner Sofa, Gold Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/e/0/2/7/e027db1a8c4abe9d471112d46d399c75af1684bd_SOFSCT053GOL_UK_SCOTT_4_Seat_Chaise_LH_Facing_Cotton_Velvet_Gold_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/f/4/7/f/f47fb0feb37b9038d2bb420acbdc8e314db69d0a_SOFSCT053GOL_UK_SCOTT_4_Seat_Chaise_LH_Facing_Cotton_Velvet_Gold_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/7/b/e/f/7befdd565afb4a4f12c846fb0fe170763b89e731_SOFSCT053GOL_UK_SCOTT_4_Seat_Chaise_LH_Facing_Cotton_Velvet_Gold_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/9/5/0/2/95023c84afd91a32009af0667f5abdc7df1014d8_SOFSCT053GOL_UK_SCOTT_4_Seat_Chaise_LH_Facing_Cotton_Velvet_Gold_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/1/4/0/3/1403d25e81f9725e1e9f2fb141ffb88866818fb0_SOFSCT053GOL_UK_SCOTT_4_Seat_Chaise_LH_Facing_Cotton_Velvet_Gold_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/5/b/b/3/5bb3c5bf69018d6e55c131a414857f846c122686_SOFSCT053GOL_UK_SCOTT_4_Seat_Chaise_LH_Facing_Cotton_Velvet_Gold_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/9/5/8/a/958ac21d61575e9add9013cb51a274660f4a28ce_SOFSCT053GOL_UK_SCOTT_4_Seat_Chaise_LH_Facing_Cotton_Velvet_Gold_LB07.jpg"
  },
  {
    model: "Scott",
    color: "Gold Cotton Velvet",
    hex: "#7E5A19",
    size: "Right Hand Facing Chaise End Corner Sofa",
    price: "£1,499",
    compareAtPrice: "£1,799",
    title:
      "Scott 4 Seater Right Hand Facing Chaise End Corner Sofa, Gold Cotton Velvet",
    image1:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/d/c/8/cdc813ec66c7a6250bed1f7a9668c1e2c4acf02f_SOFSCT052GOL_UK_SCOTT_4_Seat_Chaise_RH_Facing_Cotton_Velvet_Gold_LB01.jpg",
    image2:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/c/e/7/4/ce740a2cf470a10e682f5faf71bd9071b041c716_SOFSCT052GOL_UK_SCOTT_4_Seat_Chaise_RH_Facing_Cotton_Velvet_Gold_LB02.jpg",
    image3:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/1/f/4/0/1f40273fb4cfae1df038c6b71c925c09b3ea3303_SOFSCT052GOL_UK_SCOTT_4_Seat_Chaise_RH_Facing_Cotton_Velvet_Gold_LB03.jpg",
    image4:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/0/f/f/0/0ff00c864df3b9208c6ae1b378cd322b8a381b14_SOFSCT052GOL_UK_SCOTT_4_Seat_Chaise_RH_Facing_Cotton_Velvet_Gold_LB04.jpg",
    image5:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/1/a/0/d/1a0dd4ec2f41c3799c90b6b8e278d0df015e0417_SOFSCT052GOL_UK_SCOTT_4_Seat_Chaise_RH_Facing_Cotton_Velvet_Gold_LB05.jpg",
    image6:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/a/8/5/a/a85a6c7e9db0b7579ab0b90aba7fc782e0915605_SOFSCT052GOL_UK_SCOTT_4_Seat_Chaise_RH_Facing_Cotton_Velvet_Gold_LB06.jpg",
    image7:
      "https://img.made.com/image/upload/c_pad,d_made.svg,f_auto,w_1055,dpr_1.0,q_auto:best/v4/catalog/product/asset/4/e/c/c/4ecc6e27f9e61ea89e72673002e91d6ae1b2df82_SOFSCT052GOL_UK_SCOTT_4_Seat_Chaise_RH_Facing_Cotton_Velvet_Gold_LB07.jpg"
  }
];

const createImage = src => {
  return {
    altText: "Some furniture",
    originalSrc: src,
    variants: [
      {
        name: "natural",
        aspectRatio: 1.925,
        srcset: [
          {
            url: src,
            w: 1055,
            h: 548
          }
        ]
      }
    ]
  };
};

const products = productsRaw.map((p, index) => ({
  ...p,
  compareAtPrice: index % 2 === 0 ? p.compareAtPrice : undefined,
  images: [
    createImage(p.image1),
    createImage(p.image2),
    createImage(p.image3),
    createImage(p.image4),
    createImage(p.image5),
    createImage(p.image6)
  ]
}));

export { products };
