<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Luxury Shop — One File, 3 Pages</title>

  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
<style>
  :root {
  --gold: #ffd166;
  --gold-dark: #ffcf6b;
  --bg-dark: #0f0f0f;
  --card-bg: rgba(255,255,255,0.04);
  --text: #f3f3f3;
  --muted: #cfcfcf;
  --container: 1200px;
}

/* Reset & base */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: var(--text);
  background: linear-gradient(135deg, #070707, #141414 60%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
header.site-header {
  background: linear-gradient(90deg, rgba(0,0,0,0.85), rgba(20,20,20,0.6));
  border-bottom: 1px solid rgba(255,209,102,0.06);
  position: sticky;
  top: 0;
  z-index: 60;
  backdrop-filter: blur(4px);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 0;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--gold);
}

.brand .logo {
  width: 46px;
  height: 46px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  box-shadow: 0 6px 18px rgba(0,0,0,0.6),
              inset 0 -6px 18px rgba(255,255,255,0.06);
}

h1.site-title {
  font-family: 'Playfair Display', serif;
  font-size: 22px;
  color: var(--gold);
  margin: 0;
  letter-spacing: 0.6px;
}

nav.site-nav {
  background: transparent;
}

nav.site-nav ul {
  list-style: none;
  display: flex;
  gap: 22px;
  align-items: center;
}

nav.site-nav a {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 8px;
  transition: all .18s ease;
  display: inline-block;
}

nav.site-nav a:hover,
nav.site-nav a.active {
  color: #0b0b0b;
  background: linear-gradient(90deg, var(--gold), var(--gold-dark));
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255,193,7,0.12);
}

main.site-main {
  background: transparent;
  
main.site-main .section {
  padding: 64px 0;
}
}

.hero {
  padding: 80px 0 60px;
  background-image: linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.45));
  margin-bottom: 14px;
  border-bottom: 1px solid rgba(255,215,0,0.04);
}

.hero-inner {
  display: flex;
  gap: 36px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hero-left {
  max-width: 640px;
}

.hero h2 {
  font-family: 'Playfair Display', serif;
  color: var(--gold);
  font-size: 46px;
  margin-bottom: 12px;
  line-height: 1.02;
  text-shadow: 0 6px 24px rgba(0,0,0,0.6);
}

.hero p {
  color: var(--muted);
  font-size: 18px;
  margin-bottom: 18px;
}

.hero .cta {
  display: flex;
  gap: 12px;
  align-items: center;
}

.btn {
  display: inline-block;
  background: linear-gradient(90deg, var(--gold), var(--gold-dark));
  color: #081010;
  padding: 12px 20px;
  border-radius: 10px;
  font-weight: 700;
  text-decoration: none;
  transition: transform .18s ease, box-shadow .18s ease;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 40px rgba(255,193,7,0.12);
}


  .grid{
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap:22px;
    margin-top:20px;
  }

  .product{
    list-style:none;
    display:flex;
    flex-direction:column;
    width:100%;
    background: var(--card-bg);
    border-radius:12px;
    overflow:hidden;
    border: 1px solid rgba(255,215,0,0.06);
    box-shadow: 0 10px 30px rgba(0,0,0,0.6);
    transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
  }
  .product:hover{
    transform: translateY(-10px);
    border-color: rgba(255,215,0,0.35);
    box-shadow: 0 30px 60px rgba(0,0,0,0.75);
  }

  .product .imgwrap{width:100%; aspect-ratio: 4/3; overflow:hidden; background:#000;}
  .product img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .35s ease}
  .product:hover img{transform:scale(1.06)}

  .product-body{padding:14px 14px 18px; display:flex; flex-direction:column; gap:8px; flex:1}
  .product h3{font-family:'Playfair Display', serif; color:var(--gold); font-size:18px; margin:0}
  .product p{color:var(--muted); font-size:14px; margin:0; line-height:1.45}
  .product .price{margin-top:auto;font-weight:700;color:var(--text); font-size:15px}
  .product .actions{display:flex; gap:10px; margin-top:10px}
  .product .actions .btn{padding:8px 12px; font-size:14px;border-radius:8px}

  .about{
    display:flex; gap:30px; align-items:center; flex-wrap:wrap;
    color:var(--muted)
  }
  .about .about-media{flex:0 0 420px; max-width:100%}
  .about img{width:100%; border-radius:12px; box-shadow:0 12px 30px rgba(0,0,0,0.6); display:block}
  .about .about-text{flex:1; min-width:260px}
  .about .about-text h3{font-family:'Playfair Display', serif; color:var(--gold); margin-bottom:12px}
  .about .about-text p{color:var(--muted); font-size:16px}

  .contact-box{
    max-width:420px;
    background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));
    border-radius:12px;
    padding:16px;
    border:1px solid rgba(255,215,0,0.12);
    box-shadow: 0 12px 30px rgba(0,0,0,0.6);
    color:var(--muted);
  }
  .contact-box label{display:block;font-size:13px;color:var(--muted);margin-bottom:6px}
  .contact-box input, .contact-box textarea{
    width:100%; padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.06);
    background: rgba(0,0,0,0.45); color:var(--text); font-size:14px; outline:none;
  }
  .contact-box textarea{min-height:96px; resize:vertical}
  .contact-actions{display:flex; gap:10px; margin-top:10px; justify-content:flex-end}

  footer.site-footer{
    margin-top:48px; padding:22px 0; text-align:center;
    border-top:1px solid rgba(255,215,0,0.06);
    color:var(--muted);
    font-size:14px;
  }

  .content { font-family: "Inter", Arial, sans-serif; font-size:16px; color:var(--muted); line-height:1.7 }
  p { line-height:1.7 }
  h1 { text-align:center; font-family:'Playfair Display', serif; color:var(--gold); font-size:34px; margin-bottom:6px }

  @media(max-width:1100px){ .grid{grid-template-columns:repeat(3,1fr)} }
  @media(max-width:820px){ .grid{grid-template-columns:repeat(2,1fr)} .hero h2{font-size:36px} }
  @media(max-width:520px){ .grid{grid-template-columns:1fr} .header-inner{flex-direction:column; align-items:flex-start} nav.site-nav ul{flex-wrap:wrap}}
</style> 
  <link rel="stylesheet" href="vip.css">
  <script src="vip.js" defer></script>
</head>
<body>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#home" aria-label="Luxury Shop">
        <span class="logo" aria-hidden="true"></span>
        <h1 class="site-title">Luxury Shop</h1>
      </a>

      <nav class="site-nav" aria-label="Primary">
        <ul>
          <li><a href="#home" data-route="home" class="nav-link">Trang Chủ</a></li>
          <li><a href="#products" data-route="products" class="nav-link">Sản Phẩm</a></li>
          <li><a href="#about" data-route="about" class="nav-link">Giới Thiệu</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="site-main">
    <div class="container">

      
      <article id="home" class="section" data-page="home" tabindex="-1">
        <section class="hero">
          <div class="container hero-inner">
            <div class="hero-left">
              <h2>Khẳng định đẳng cấp — Sống khác biệt</h2>
              <p class="content">Luxury Shop tuyển chọn tinh hoa của thế giới xa xỉ: đồng hồ Thụy Sĩ, túi da thủ công, trang sức quý và những vật phẩm phong cách sống dành cho người sành sỏi. Mỗi món đồ là một câu chuyện, một thủ pháp chế tác, và là tuyên ngôn về phong cách.</p>
              <h2>Nơi KHông Dành Cho Người Nghèo</h2>
              <div class="cta">
                <a class="btn" href="#products" data-route="products">Khám phá bộ sưu tập</a>
                <a class="btn" href="#about" data-route="about" style="background:transparent;color:var(--gold);border:1px solid rgba(255,215,0,0.12)">Về chúng tôi</a>
              </div>
            </div>

            <div style="min-width:320px;max-width:420px;margin-top:14px">
              <div class="contact-box" aria-label="Contact">
                <strong style="color:var(--gold);font-family:'Playfair Display', serif">Liên hệ nhanh</strong>
                <p style="font-size:13px;color:var(--muted);margin:8px 0 12px">Gửi yêu cầu hoặc đặt lịch tư vấn cá nhân hóa.</p>
                <label for="cname">Họ & Tên</label>
                <input id="cname" type="text" placeholder="Nguyễn Văn A">
                <label for="cemail">Email</label>
                <input id="cemail" type="email" placeholder="email@domain.com">
                <label for="cmsg">Tin nhắn</label>
                <textarea id="cmsg" placeholder="Cho chúng tôi biết nhu cầu của bạn"></textarea>
                <div class="contact-actions">
                  <button class="btn" id="quickSend">Gửi</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>

      <!-- ===== PRODUCTS ===== -->
      <article id="products" class="section" data-page="products" tabindex="-1" hidden>
        <h2 class="section-title">Bộ Sưu Tập Sang Trọng</h2>

        <div class="grid" role="list" aria-label="Sản phẩm">
          <div class="product" role="listitem">
            <div class="imgwrap"><img src="https://mediaelly.sgp1.digitaloceanspaces.com/uploads/2021/03/31225451/tong-quan-thuong-hieu-tui-xach-gucci.12.jpg" alt="Túi xách cao cấp"></div>
            <div class="product-body">
              <h3>Túi xách cao cấp</h3>
              <p>Da thật nhập khẩu, chế tác thủ công, thiết kế độc quyền.</p>
              <div class="price">₫1.500.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://thegioiso247.vn/wp-content/uploads/2023/06/z4159530161456_801bf60c14de9cae800c890739911223.jpg" alt="Đồng hồ Thụy Sĩ"></div>
            <div class="product-body">
              <h3>Đồng hồ Thụy Sĩ</h3>
              <p>Chế tác chuẩn mực; tinh tế đến từng chi tiết.</p>
              <div class="price">₫9.900.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://giayhuyhoang.vn/wp-content/uploads/2024/01/ban-giay-da-nam-cao-cap-thu-cong-oxford-o2547-005.jpg" alt="Giày Ý"></div>
            <div class="product-body">
              <h3>Giày Ý sang trọng</h3>
              <p>Hoàn thiện thủ công, form ôm vừa vặn, sang trọng.</p>
              <div class="price">₫800.200.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://drlacir.vn/wp-content/uploads/2021/01/nuoc-hoa-nu-cao-cap-2.jpg" alt="Nước hoa quý hiếm"></div>
            <div class="product-body">
              <h3>Nước hoa quý hiếm</h3>
              <p>Hương độc bản, lưu hương lâu, ghi dấu ấn riêng.</p>
              <div class="price">₫2.300.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://www.lamoredesign.com/cdn/shop/products/ovalchampagnediamondringrosegoldhaloengagementringlamoredesignjewelry-9.jpg?v=1651861134&width=2800"></div>
            <div class="product-body">
              <h3>Nhẫn kim cương</h3>
              <p>Độ tinh khiết cao, mài giũa hoàn hảo.</p>
              <div class="price">₫12.000.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lq05uv9wm0qd4e" alt="Vòng cổ ngọc trai"></div>
            <div class="product-body">
              <h3>Vòng cổ ngọc trai</h3>
              <p>Biểu tượng của sự tinh tế và quý phái.</p>
              <div class="price">₫1.800.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://lili.vn/wp-content/uploads/2021/12/Bong-tai-bac-nu-hinh-that-no-dinh-da-CZ-LILI_698154_1.jpg" alt="Nhẫn kim cương"></div>
            <div class="product-body">
              <h3>Khuyên tai kim cương</h3>
              <p>Thiết kế tao nhã, giới hạn số lượng.</p>
              <div class="price">4.560.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://down-vn.img.susercontent.com/file/d4145c72cb4610ae861f21aaf8ab55df" alt="Kính râm thương hiệu"></div>
            <div class="product-body">
              <h3>Kính râm thương hiệu</h3>
              <p>Phong cách và bảo vệ mắt tối ưu.</p>
              <div class="price">₫45.200.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://product.hstatic.net/200000661969/product/valy-cao-cap-nhat-samsonite-carbon-2-luxury-mau-do-n7jc4_5e6dd70ece154e599d9d1482d0dc63e5.jpg" alt="Vali du lịch"></div>
            <div class="product-body">
              <h3>Vali du lịch</h3>
              <p>Chịu lực, thiết kế sang trọng cho hành trình xa xỉ.</p>
              <div class="price">₫690.300.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://juanstailor.com.vn/uploaded/news/quy-trinh-cat-may-vest-nam-italia-tai-juan-stailor.jpg" alt="Áo vest Ý"></div>
            <div class="product-body">
              <h3>Áo vest Ý</h3>
              <p>Form chuẩn, vải cao cấp nhập khẩu.</p>
              <div class="price">₫786.800.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://www.zstyle.vn/hoanghung/29/images/V%C3%AD%20da%20c%C3%A1%20s%E1%BA%A5u%20nam.png" alt="Ví da nam"></div>
            <div class="product-body">
              <h3>Ví da nam</h3>
              <p>Thiết kế tối giản, chất liệu bền bỉ.</p>
              <div class="price">₫180.500.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://lury.net.vn/uploads/diem-danh-mau-vi-nu-cam-tay-hang-hieu-moi-nhat-2017-2.jpg" alt="Ví da nữ"></div>
            <div class="product-body">
              <h3>Ví da nữ</h3>
              <p>Quý phái, sang trọng và đầy quyến rũ.</p>
              <div class="price">₫3.300.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://www.zstyle.vn/hoanghung/30/images/top-6-thuong-hieu-giay-cao-got-xa-xi-nhat-the-gioi5.jpg" alt="Giày cao gót"></div>
            <div class="product-body">
              <h3>Giày cao gót</h3>
              <p>Thanh lịch, tôn dáng cho những dịp đặc biệt.</p>
              <div class="price">₫420.900.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://lh3.googleusercontent.com/proxy/ZXGhpDL4QLKbZCuFccYPy82dEcofieQ2gHU7P4vvD1Ol-I9d-hI84oRFsAuvfO76VIddJrS6XSa1bbTn--Zk14HIgUEm45TkycpkdQxreADw2aQuHB9k8eOoYlG9d3m6brN0xPcHimtqX5cPd2qEgPA5uGFNabL5cmVKwA" alt="Trang sức vàng"></div>
            <div class="product-body">
              <h3>Trang sức vàng</h3>
              <p>Thiết kế tinh xảo, vật phẩm lưu giữ giá trị.</p>
              <div class="price">₫2.200.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://ktck.1cdn.vn/2025/10/03/iphone-17-pro-max-galaxy-s25-ultra-camera.png" alt="Điện thoại hạng sang"></div>
            <div class="product-body">
              <h3>Điện thoại hạng sang</h3>
              <p>Thiết kế độc đáo, hiệu năng cao cấp.</p>
              <div class="price">35.000.000-70.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

          <div class="product">
            <div class="imgwrap"><img src="https://product.hstatic.net/1000230670/product/o1cn01ppqxdp1xegyknjr9h___66052949_01f3ac434640463fb2c38bd7090709b1_large.jpg" alt="Nón thời trang"></div>
            <div class="product-body">
              <h3>Nón thời trang</h3>
              <p>Hoàn thiện tinh tế, phù hợp phong cách hiện đại.</p>
              <div class="price">₫850.000.000</div>
              <div class="actions"><a class="btn" href="#!" data-action="quickview">Xem</a></div>
            </div>
          </div>

        </div>
      </article>

      <!-- thong tin -->

      <article id="about" class="section" data-page="about" tabindex="-1" hidden>
        <h2 class="section-title">Về Luxury Shop</h2>
        <div class="about">
          <div class="about-media"><img src="https://vietartdecor.vn/wp-content/uploads/2025/08/VAD_CHTT_7-1.png" alt="Showroom Luxury"></div>
          <div class="about-text">
            <h3>Biểu tượng của tinh hoa & phong cách sống</h3>
            <p class="content">
              Luxury Shop ra đời từ khát vọng mang đến cho giới thượng lưu một không gian mua sắm trực tuyến
              thực sự khác biệt — nơi chất lượng vượt trội, tính xác thực và trải nghiệm khách hàng được đặt lên hàng đầu.
              Chúng tôi lựa chọn từng nhà cung cấp, kiểm định từng sản phẩm, và thiết kế trải nghiệm mua sắm để tôn vinh
              cá tính độc lập của mỗi khách hàng.
            </p>

            <p class="content">
              Sứ mệnh của chúng tôi là kết nối những tinh hoa thủ công và công nghệ chế tác cao cấp với những người biết
              trân trọng giá trị thật sự. Luxury Shop cam kết minh bạch xuất xứ, bảo hành, và dịch vụ hậu mãi chu đáo —
              để mỗi giao dịch không chỉ là sở hữu, mà còn là kỷ niệm và di sản.
            </p>

            <p class="content" style="margin-top:12px">
              <strong style="color:var(--gold)">Địa chỉ trải nghiệm:</strong> ở tận gốc mít đi tít vào trong<br> <strong style="color:var(--gold)">Hotline:</strong> 6677 3508
          </div>
        </div>
      </article>

    </div>
  </main>

  <footer class="site-footer">
    <div class="container">
      <div style="opacity:.9">
        &copy; 2025 Luxury Shop. All Rights Reserved by
        (<a href="https://www.facebook.com/TP.BaKa" style="color: gold;">Gió</a>).
      </div>
    </div>
  </footer>

<srcipt>
  (function(){
  const pages = ['home','products','about'];
  const links = document.querySelectorAll('.nav-link');

  function showPage(pageId, focus=true){
    pages.forEach(p=>{
      const el = document.getElementById(p);
      if(!el) return;
      if(p === pageId){
        el.hidden = false;
        el.scrollIntoView({behavior:'smooth', block:'start'});
        if(focus) el.focus({preventScroll:true});
      } else {
        el.hidden = true;
      }
    });

    links.forEach(a=> a.classList.toggle('active', a.dataset.route === pageId));
    if(location.hash !== '#'+pageId) history.replaceState(null,'', '#'+pageId);
  }

  const initial = (location.hash && pages.includes(location.hash.replace('#','')))
    ? location.hash.replace('#','')
    : 'home';

  pages.forEach(p => {
    const el = document.getElementById(p);
    if(el) el.hidden = true;
  });
  showPage(initial,false);

  document.querySelectorAll('[data-route]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const target = a.dataset.route;
      if(target) showPage(target);
    });
  });

  window.addEventListener('hashchange', ()=> {
    const h = location.hash.replace('#','');
    if(pages.includes(h)) showPage(h);
  });

  document.getElementById('quickSend').addEventListener('click', ()=>{
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const msg = document.getElementById('cmsg').value.trim();
    if(!name || !email || !msg){
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }
    alert('Cảm ơn ' + name + '! Chúng tôi đã nhận yêu cầu.');
    document.getElementById('cname').value='';
    document.getElementById('cemail').value='';
    document.getElementById('cmsg').value='';
  });

  document.querySelectorAll('[data-action="quickview"]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      alert('Xem chi tiết sản phẩm — demo.');
    });
  });

})();
</srcipt>
  
</body>
</html>
