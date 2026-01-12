<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Luxury Shop — One File</title>

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">

  <!-- ================= CSS GỘP ================= -->
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

    * { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      font-family: "Inter", system-ui, sans-serif;
      color: var(--text);
      background: linear-gradient(135deg, #070707, #141414 60%);
      line-height: 1.6;
    }

    .container {
      max-width: var(--container);
      margin: 0 auto;
      padding: 0 20px;
    }

    /* ===== HEADER ===== */
    header.site-header {
      position: sticky;
      top: 0;
      z-index: 60;
      backdrop-filter: blur(6px);
      background: linear-gradient(90deg, rgba(0,0,0,.85), rgba(20,20,20,.6));
      border-bottom: 1px solid rgba(255,209,102,.06);
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
    }

    h1.site-title {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      color: var(--gold);
    }

    nav.site-nav ul {
      list-style: none;
      display: flex;
      gap: 22px;
    }

    nav.site-nav a {
      color: var(--text);
      text-decoration: none;
      font-weight: 600;
      padding: 8px 10px;
      border-radius: 8px;
      transition: .2s;
    }

    nav.site-nav a:hover,
    nav.site-nav a.active {
      background: linear-gradient(90deg, var(--gold), var(--gold-dark));
      color: #000;
      transform: translateY(-2px);
    }

    /* ===== HERO ===== */
    .hero {
      padding: 80px 0;
      border-bottom: 1px solid rgba(255,215,0,.05);
    }

    .hero-inner {
      display: flex;
      gap: 36px;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .hero h2 {
      font-family: 'Playfair Display', serif;
      font-size: 46px;
      color: var(--gold);
    }

    .hero p { color: var(--muted); font-size: 18px; }

    .btn {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 10px;
      font-weight: 700;
      text-decoration: none;
      background: linear-gradient(90deg, var(--gold), var(--gold-dark));
      color: #000;
    }

    /* ===== GRID PRODUCT ===== */
    .grid {
      display: grid;
      grid-template-columns: repeat(4,1fr);
      gap: 22px;
      margin-top: 20px;
    }

    .product {
      background: var(--card-bg);
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(255,215,0,.06);
      transition: .25s;
    }

    .product:hover { transform: translateY(-8px); }

    .product img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .product-body {
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .product h3 {
      font-family: 'Playfair Display', serif;
      color: var(--gold);
    }

    .price { font-weight: bold; }

    /* ===== ABOUT ===== */
    .about {
      display: flex;
      gap: 30px;
      flex-wrap: wrap;
    }

    .about img {
      width: 100%;
      border-radius: 12px;
    }

    /* ===== CONTACT ===== */
    .contact-box {
      background: rgba(255,255,255,.03);
      border: 1px solid rgba(255,215,0,.12);
      border-radius: 12px;
      padding: 16px;
    }

    input, textarea {
      width: 100%;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 8px;
      border: none;
      background: rgba(0,0,0,.5);
      color: #fff;
    }

    footer {
      text-align: center;
      padding: 22px;
      border-top: 1px solid rgba(255,215,0,.06);
      color: var(--muted);
    }

    @media(max-width:1100px){ .grid{grid-template-columns:repeat(3,1fr)} }
    @media(max-width:820px){ .grid{grid-template-columns:repeat(2,1fr)} }
    @media(max-width:520px){ .grid{grid-template-columns:1fr} }
  </style>
</head>

<body>

<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="#home">
      <span class="logo"></span>
      <h1 class="site-title">Luxury Shop</h1>
    </a>
    <nav class="site-nav">
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

    <!-- HOME -->
    <article id="home" data-page="home">
      <section class="hero">
        <div class="hero-inner">
          <div>
            <h2>Khẳng định đẳng cấp</h2>
            <p>Luxury Shop – nơi dành cho người hiểu giá trị thật.</p>
            <a class="btn" href="#products" data-route="products">Xem sản phẩm</a>
          </div>

          <div class="contact-box">
            <input id="cname" placeholder="Họ tên">
            <input id="cemail" placeholder="Email">
            <textarea id="cmsg" placeholder="Tin nhắn"></textarea>
            <button class="btn" id="quickSend">Gửi</button>
          </div>
        </div>
      </section>
    </article>

    <!-- PRODUCTS -->
    <article id="products" data-page="products" hidden>
      <h2>Bộ sưu tập</h2>
      <div class="grid">
        <div class="product">
          <img src="https://mediaelly.sgp1.digitaloceanspaces.com/uploads/2021/03/31225451/tong-quan-thuong-hieu-tui-xach-gucci.12.jpg">
          <div class="product-body">
            <h3>Túi xách cao cấp</h3>
            <div class="price">₫1.500.000.000</div>
          </div>
        </div>
      </div>
    </article>

    <!-- ABOUT -->
    <article id="about" data-page="about" hidden>
      <h2>Về chúng tôi</h2>
      <div class="about">
        <img src="https://vietartdecor.vn/wp-content/uploads/2025/08/VAD_CHTT_7-1.png">
        <p>Luxury Shop – tinh hoa xa xỉ.</p>
      </div>
    </article>

  </div>
</main>

<footer>
  © 2025 Luxury Shop — Gió
</footer>

<!-- ================= JS GỘP ================= -->
<script>
(function(){
  const pages = ['home','products','about'];
  const links = document.querySelectorAll('.nav-link');

  function showPage(page){
    pages.forEach(p=>{
      const el = document.getElementById(p);
      if(el) el.hidden = p !== page;
    });
    links.forEach(a=>a.classList.toggle('active', a.dataset.route === page));
  }

  showPage('home');

  document.querySelectorAll('[data-route]').forEach(a=>{
    a.onclick = e => {
      e.preventDefault();
      showPage(a.dataset.route);
    };
  });

  document.getElementById('quickSend').onclick = ()=>{
    alert('Đã gửi yêu cầu!');
  };
})();
</script>

</body>
</html>
