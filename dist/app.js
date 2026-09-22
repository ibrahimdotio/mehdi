'use strict';
const english = {
  skip:'Skip to content', navApproach:'The approach', navTeacher:'Meet Méhdi', navPricing:'Pricing', navTrial:'Try a lesson', navFaq:'Questions',
  heroTitle:'A little curiosity.<br><span>A world of<br>understanding.</span>',
  heroDescription:'One-to-one maths and science, taught in English.<br>Space to ask questions. Time to understand.<br class="desktop-break"> Confidence to keep going.',
  heroCta:'Let’s try a lesson',heroNote:'60 minutes · ¥1,000 <span>·</span> Online, from home',heroDetail1:'01 / One-to-one',heroDetail2:'02 / In English',heroDetail3:'03 / At your pace',artNote:'Understanding builds confidence.',
  fact1:'Teaching that starts with you',fact2:'Years of teaching experience',fact3:'Maths, science & English',fact4:'Your space. Your classroom.',
  approachTitle:'Beyond the answer.<br>Into the “why”.',approachDescription:'Learning is more than remembering the right answer. It’s making connections, talking things through and feeling comfortable enough to ask another question.',
  benefit1Title:'Room to say “I don’t know.”',benefit1Text:'One teacher, one student. Time to ask questions, revisit the tricky parts and work things out together.',
  benefit2Title:'A plan that meets you here.',benefit2Text:'Lessons shaped around individual goals and understanding. Practice and regular feedback help learning build, step by step.',
  benefit3Title:'English opens the conversation.',benefit3Text:'Learn maths and science through English. Connect the language to the ideas, and practise explaining the thinking behind an answer.',
  lessonTitle:'A small moment<br>of discovery.',lessonDescription:'Start with a question. Look at the picture, think it through and explain why. Maths and English can grow together.',sampleLabel:'A little fraction practice',boardHint:'Look at the four equal parts. How many are green?',answerLegend:'Choose your answer',answerInitial:'Choose an answer to explore the thinking behind it.',tryAgain:'Try again',
  teacherPronunciation:'Your online teacher',teacherExperience:'Years of teaching experience',teacherTitle:'Teaching the subject.<br>Building the confidence.',teacherText:'Méhdi brings more than ten years of experience teaching maths, science and English. His starting point is a learning environment where students feel comfortable asking questions and thinking for themselves.',teacherText2:'An individual learning plan, regular feedback and communication with parents keep everyone involved in the learning journey.',teacherValue1:'Individual learning plans',teacherValue2:'Regular feedback',teacherValue3:'Parent communication',teacherCta:'Meet in a trial lesson',
  pricingTitle:'A small first step.<br>A clear way forward.',pricingDescription:'Get a feel for the lessons and the teacher before discussing an ongoing learning plan.',firstLesson:'For new students',trialTitle:'The trial lesson',trialDuration:'/ 60 minutes',trialDescription:'An hour to experience the teaching and see how the lessons feel.',trialFeature1:'One-to-one, online',trialFeature2:'Discuss subjects and learning goals',trialFeature3:'Explore an ongoing plan afterwards',trialCta:'Ask about a trial lesson',regularTitle:'Ongoing lessons',regularDuration:'/ hour, including tax',regularDescription:'Consistent support to deepen understanding and keep learning moving.',regularFeature1:'Standard format: 2+ lessons/week, 120 min each',regularFeature2:'An individual learning plan',regularFeature3:'Practice materials and feedback',monthlyLabel:'Monthly illustration',monthlyDetail:'For 8 lessons / 16 teaching hours',pricingNote:'Confirm your schedule, number of lessons, payment and rescheduling terms with the school before enrolling.',
  faqTitle:'A few good<br>questions.',faqNote:'Every learner is different.<br>Let’s talk about yours.',
  faq1q:'Does my child need fluent English?',faq1a:'Lessons are taught in English. Share your child’s current English level and what they are studying so you can discuss whether the lessons are a good fit before the trial.',
  faq2q:'Which ages and curricula do you support?',faq2a:'Méhdi teaches maths, science and English. Let the school know your child’s grade, curriculum and the topics they need help with. The school will confirm the appropriate subject coverage.',
  faq3q:'What do we need for an online lesson?',faq3a:'You will need an internet connection and a device that can use Zoom. Check any materials and preparation with the school before the lesson.',
  faq4q:'Can we discuss lesson times and duration?',faq4a:'The standard ongoing format is at least two lessons per week, with each lesson lasting 120 minutes. Share your preferred days, times and learning goals to discuss availability and any possible adjustments. Confirm the time zone when arranging your lesson.',
  faq5q:'What happens after the trial? What about cancellations?',faq5a:'If you would like to continue, discuss a learning plan with the school. Confirm payment, cancellation, rescheduling and the number of lessons in each month before enrolling.',
  closingTitle:'The next “I get it!”<br>starts here.',closingText:'Tell us your child’s grade, the subject they’re working on<br>and what they could use a little help with.',closingPrice:'A trial lesson · 60 minutes / ¥1,000',closingCta:'Enquire about a trial lesson',closingNote:'Opens the school’s existing enquiry form.<br>Include your preferred lesson times in your message.',footerTagline:'From understanding to confidence.<br>A little more of the world, in English.',footerHoursTitle:'School hours',footerHours:'Monday–Friday, 11:00–20:00<br>Closed Saturday & Sunday',backTop:'Back to top ↑',mobileTrialPrice:'Trial · 60 min / ¥1,000',mobileTrialCta:'Try a lesson'
};
const translatedNodes = [...document.querySelectorAll('[data-i18n]')];
const japanese = new Map(translatedNodes.map(node => [node, node.innerHTML]));
let currentLanguage = 'ja';
let selectedAnswer = null;
const languageButton = document.getElementById('language');
const feedback = document.getElementById('answer-feedback');
const resetButton = document.getElementById('reset-lesson');
const answerButtons = [...document.querySelectorAll('.answer')];
function renderAnswer() {
  if (!selectedAnswer) {
    feedback.innerHTML = currentLanguage === 'en' ? english.answerInitial : japanese.get(feedback);
    feedback.classList.remove('solved'); resetButton.hidden = true; return;
  }
  const correct = selectedAnswer === 'threequarters';
  feedback.classList.toggle('solved', correct);
  if (currentLanguage === 'en') feedback.textContent = correct ? 'Exactly. Three of four equal parts are shaded: three quarters. Try saying, “Three out of four parts are green.”' : 'Look once more: the whole is split into four equal parts, and three are green. How could we write that?';
  else feedback.textContent = correct ? 'その通り！同じ大きさの4つのうち、3つに色がついています。英語でも言ってみよう：“Three out of four parts are green.”' : 'もう一度見てみよう。全体は同じ大きさの4つに分かれていて、3つに色がついています。分数ではどう書けるかな？';
  resetButton.hidden = false;
}
function setLanguage(lang, persist = true) {
  currentLanguage = lang === 'en' ? 'en' : 'ja';
  document.documentElement.lang = currentLanguage;
  for (const node of translatedNodes) {
    const key = node.dataset.i18n;
    node.innerHTML = currentLanguage === 'en' ? (english[key] ?? japanese.get(node)) : japanese.get(node);
  }
  languageButton.textContent = currentLanguage === 'en' ? '日本語' : 'EN';
  languageButton.setAttribute('aria-label', currentLanguage === 'en' ? '日本語に切り替える' : 'Switch to English');
  document.getElementById('menu-toggle').setAttribute('aria-label', currentLanguage === 'en' ? 'Menu' : 'メニュー');
  document.querySelector('.hero-art').alt = currentLanguage === 'en' ? 'An editorial illustration of geometric solids, graph paper and a pencil' : '立体図形と方眼紙を組み合わせた数学のイラスト';
  document.title = currentLanguage === 'en' ? 'Méhdi’s Online School — A world of understanding.' : 'Méhdi’s Online School — 理解から、自信へ。';
  renderAnswer();
  if (persist) {try {localStorage.setItem('mehdi-language',currentLanguage);} catch { /* Language works without storage. */ }}
}
languageButton.addEventListener('click', () => setLanguage(currentLanguage === 'ja' ? 'en' : 'ja'));
for (const button of answerButtons) {
  button.addEventListener('click', () => {
    selectedAnswer = button.dataset.answer;
    for (const other of answerButtons) {
      const selected = other === button;
      other.setAttribute('aria-pressed', String(selected));
      other.classList.toggle('correct', selected && selectedAnswer === 'threequarters');
      other.classList.toggle('incorrect', selected && selectedAnswer !== 'threequarters');
    }
    renderAnswer();
  });
}
resetButton.addEventListener('click', () => {
  selectedAnswer = null;
  for (const button of answerButtons) {button.setAttribute('aria-pressed','false');button.classList.remove('correct','incorrect');}
  renderAnswer();answerButtons[0].focus();
});
const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
function closeMenu() { mobileNav.hidden = true; menuToggle.setAttribute('aria-expanded','false'); }
menuToggle.addEventListener('click', () => { const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';menuToggle.setAttribute('aria-expanded',String(expanded));mobileNav.hidden = !expanded; });
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown',event => {if(event.key === 'Escape' && !mobileNav.hidden){closeMenu();menuToggle.focus();}});
window.matchMedia('(min-width:681px)').addEventListener('change', e => {if(e.matches) closeMenu();});
if ('IntersectionObserver' in window) {
  const sticky = document.querySelector('.mobile-trial');
  const observer = new IntersectionObserver(entries => {for(const entry of entries) sticky.classList.toggle('is-hidden',entry.isIntersecting);},{threshold:0.2});
  observer.observe(document.getElementById('trial'));
}
document.getElementById('year').textContent = String(new Date().getFullYear());
let preferred = 'ja';
try {preferred = localStorage.getItem('mehdi-language') || 'ja';} catch { /* Default Japanese. */ }
const queryLanguage = new URLSearchParams(location.search).get('lang');
if (queryLanguage === 'en' || queryLanguage === 'ja') preferred = queryLanguage;
setLanguage(preferred,false);
