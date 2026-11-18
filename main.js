/* ===================================================================
   BU LIKELION US — 공통 스크립트
   이 파일은 운영진만 수정합니다.
   각자 페이지에서는 HTML 에 클래스만 붙이면 아래 기능이 자동으로 켜집니다.

     class="reveal"                  스크롤하면 나타남
     class="count" data-to="60"      화면에 들어오면 0 부터 세어 올림
     class="acc" > .acc-item > .acc-q / .acc-a    아코디언
     class="marquee"                 흐르는 띠 (내용 자동 복제)
   =================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* 1. 현재 페이지 메뉴 자동 강조 ------------------------------------ */
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });

  /* 2. 모바일 메뉴 ---------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      toggle.textContent = links.classList.contains('open') ? 'CLOSE' : 'MENU';
    });
  }

  /* 3. 스크롤하면 네비에 주황 선 ------------------------------------- */
  var nav = document.querySelector('.nav');
  var toTop = document.querySelector('.totop');
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 10);
    if (toTop) toTop.classList.toggle('show', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* 4. 흐르는 띠 : 내용을 한 번 복제해서 끊김 없이 ------------------- */
  document.querySelectorAll('.marquee-track').forEach(function (t) {
    t.innerHTML = t.innerHTML + t.innerHTML;
  });

  /* 5. 스크롤 등장 + 숫자 세어 올리기 -------------------------------- */
  function countUp(el) {
    var to = parseFloat(el.dataset.to || '0');
    var dur = 900, t0 = performance.now();
    (function step(now) {
      var p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('in');
        e.target.querySelectorAll('.count').forEach(countUp);
        if (e.target.classList.contains('count')) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { threshold: 0.18 });

    document.querySelectorAll('.reveal, .count').forEach(function (el) { io.observe(el); });

    /* .reveal 이 여러 개면 순서대로 살짝 늦게 */
    document.querySelectorAll('.grid, .stats, .hscroll').forEach(function (g) {
      Array.prototype.forEach.call(g.children, function (c, i) {
        c.style.transitionDelay = (i * 70) + 'ms';
      });
    });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* 6. 아코디언 ------------------------------------------------------- */
  document.querySelectorAll('.acc-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = q.closest('.acc-item');
      var acc = q.closest('.acc');
      var wasOpen = item.classList.contains('open');
      acc.querySelectorAll('.acc-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

});
