# BU LIKELION US 웹사이트

정기 모임 2회 + 주중 개인 작업으로 만드는 챕터 공식 사이트.

---

## 작업 규칙 3가지

1. **자기 파일만 수정.** 담당 외 HTML 파일은 열지 않습니다. 이것만 지키면 충돌이 생기지 않습니다.
2. **`style.css` 와 `main.js` 는 아무도 수정하지 않습니다.** 변경이 필요하면 단톡방에 요청하세요.
3. **네비게이션과 푸터는 `_nav.txt` 에서 복사해서 그대로 붙입니다.**

---

## 파일 담당

| 파일 | 페이지 | 담당 |
|---|---|---|
| `index.html` | Home | |
| `about.html` | About | |
| `team.html` | Team | |
| `activities.html` | Activities | |
| `projects.html` | Projects | |
| `contact.html` | Contact | |

`style.css` `main.js` `_nav.txt` `README.md` 는 운영진 관리 파일입니다.

---

## 움직이는 기능

**JavaScript 를 직접 쓸 일은 없습니다.** HTML 에 클래스만 붙이면 `main.js` 가 알아서 작동시킵니다.

| 하고 싶은 것 | 붙일 것 |
|---|---|
| 스크롤하면 아래에서 나타나기 | `class="reveal"` |
| 숫자가 0부터 세어 올라가기 | `<span class="count" data-to="60">0</span>` |
| 접었다 펴는 FAQ | `.acc` → `.acc-item` → `.acc-q` + `.acc-a` |
| 옆으로 미는 카드 목록 | `<div class="hscroll">` 안에 카드 |
| 흐르는 띠 | `.marquee` → `.marquee-track` |

이미 자동으로 되는 것 — 현재 페이지 메뉴 강조, 모바일 햄버거 메뉴, 스크롤 시 네비 변화, 맨 위로 버튼.

> 카드가 여러 개면 순서대로 조금씩 늦게 나타납니다. 따로 설정할 필요 없습니다.

---

## 쓸 수 있는 클래스

**레이아웃** · `container` `section` `section dark` `section orange` `section tight`

**제목** · `section-label` `section-title` `section-sub` `lead`

**히어로** · `hero` `hero-badge` `hero-title` (안에 `<mark>`) `hero-sub` `hero-actions`

**기수 구분** · `cohort` `cohort-title` `cohort-year` `group-label`

**그리드** · `grid grid-2` `grid grid-3` `grid grid-4` `hscroll`

**카드** · `card` `card dark` `card accent` `card yellow` / 안에 `card-label` `card-role` `card-title` `card-text`

**숫자** · `stats` → `stat` → `stat-num` + `stat-label`

**아코디언** · `acc` → `acc-item` → `acc-q` + `acc-a`

**타임라인** · `timeline` → `timeline-item` → `timeline-when` `timeline-what` `timeline-note`

**버튼 · 태그** · `btn` `btn btn-outline` `btn btn-yellow` `tag` `tag accent` `tag soon`

**기타** · `avatar` `strip` `muted` `accent` `mono` `reveal` `count`

---

## 바이브코딩 프롬프트 템플릿

```
아래 조건대로 HTML 조각을 만들어줘.

[페이지] team.html
[목적] BU LIKELION 운영진과 멤버를 기수별로 소개

[규칙]
- CSS 를 새로 쓰지 말고, 아래 클래스만 사용할 것
  container, section, section dark, section-label, section-title, section-sub, lead,
  cohort, cohort-title, cohort-year, group-label,
  grid grid-2, grid grid-3, grid grid-4, hscroll,
  card, card dark, card accent, card yellow,
  card-label, card-role, card-title, card-text,
  stats, stat, stat-num, stat-label,
  acc, acc-item, acc-q, acc-a,
  timeline, timeline-item, timeline-when, timeline-what, timeline-note,
  btn, btn-outline, btn-yellow, tag, tag accent, tag soon,
  avatar, strip, muted, accent, mono, reveal, count
- 나타나는 효과를 줄 요소에는 class="reveal" 을 함께 넣을 것
- <style> 태그나 style="..." 속성은 쓰지 말 것
- <head>, 네비게이션, 푸터, <script> 는 넣지 말 것
- 설명 없이 코드만

[내용]
(여기에 넣을 내용을 편하게 작성)
```

받은 코드를 파일 안의 `담당자가 채우는 부분` 주석 아래에 붙여넣으면 됩니다.

---

## GitHub 에 올리는 법 (웹에서만, 설치 없음)

1. 저장소에서 **자기 파일** 클릭
2. 오른쪽 위 **연필 아이콘**
3. 해당 구간을 새 코드로 교체
4. 아래 **Commit changes**
5. **Create a new branch for this commit and start a pull request** 선택
6. 브랜치 이름은 `이름-페이지명` (예: `yeju-team`)
7. **Propose changes** → **Create pull request**
8. 운영진이 병합하면 1~2분 뒤 사이트에 반영

---

## 사이트 주소

`https://[계정].github.io/[저장소]/`

병합 후 바로 안 보이면 1~2분 기다렸다가 새로고침하세요.
