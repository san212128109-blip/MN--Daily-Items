// Sticky Header
window.addEventListener('scroll', () => {document.getElementById('header').classList.toggle('sticky', window.scrollY > 50);});

// Scroll Animation
const animatedCards = document.querySelectorAll('.animate');
const observer = new IntersectionObserver(entries => {entries.forEach(entry => {if(entry.isIntersecting){entry.target.classList.add('show');}});},{threshold:0.2});
animatedCards.forEach(card => observer.observe(card));

// Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
document.body.classList.toggle('dark');
themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e){
e.preventDefault();
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
const formMsg = document.getElementById('formMsg');
if(!name || !email || !message){formMsg.style.color='red';formMsg.textContent='সব ফিল্ড পূরণ করুন!'; return;}
if(!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)){formMsg.style.color='red';formMsg.textContent='সঠিক ইমেইল লিখুন!'; return;}
formMsg.style.color='green';formMsg.textContent='আপনার বার্তা পাঠানো হয়েছে!'; this.reset();
});

// Hero Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {slides[currentSlide].classList.remove('active'); currentSlide = (currentSlide+1)%slides.length; slides[currentSlide].classList.add('active');},4000);

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
document.querySelectorAll('.view-btn').forEach(btn => {btn.addEventListener('click', e => {lightbox.style.display='flex'; lightboxContent.textContent=e.target.parentElement.textContent;});});
document.querySelector('.lightbox .close').addEventListener('click', ()=>{lightbox.style.display='none';});
window.addEventListener('click', e=>{if(e.target==lightbox){lightbox.style.display='none';}});

// Dashboard Charts
const projectChartCtx = document.getElementById('projectChart').getContext('2d');
const projectChart = new Chart(projectChartCtx, {
type:'doughnut',
data:{labels:['Complete','In Progress','Pending'], datasets:[{data:[0,0,0],backgroundColor:['#4CAF50','#FF9800','#f44336']}]},
options:{responsive:true}
});

const userChartCtx = document.getElementById('userChart').getContext('2d');
const userChart = new Chart(userChartCtx, {
type:'bar',
data:{labels:['Mon','Tue','Wed','Thu','Fri'], datasets:[{label:'Active Users',data:[0,0,0,0,0],backgroundColor:'#2196F3'}]},
options:{responsive:true,plugins:{legend:{display:false}}}
});

// AI Suggestions & Dashboard Updates
function fetchDashboardData(filter='all'){
    // Random data simulation
    const projectDataMap = {
        all: [12,5,3],
        frontend:[5,2,1],
        backend:[4,1,1],
        fullstack:[3,2,1]
    };
    projectChart.data.datasets[0].data = projectDataMap[filter] || projectDataMap['all'];
    projectChart.update();

    const userData = Array.from({length:5},()=>Math.floor(Math.random()*20)+5);
    userChart.data.datasets[0].data = userData;
    userChart.update();

    const aiSuggestions = ["প্রজেক্ট X শুরু করুন","UI আপডেট করুন","নতুন API ইন্টিগ্রেট করুন","ফ্রন্টএন্ড অপ্টিমাইজ করুন"];
    const suggestionList = document.getElementById('aiSuggestions');
    suggestionList.innerHTML = "";
    aiSuggestions.sort(()=>0.5-Math.random()).slice(0,3).forEach(s => {
        const li = document.createElement('li');
        li.textContent = s;
        suggestionList.appendChild(li);
    });
}

// Initial fetch
fetchDashboardData();

// Filter change
document.getElementById('projectFilter').addEventListener('change', e => {fetchDashboardData(e.target.value);});

// Update every 5 seconds
setInterval(fetchDashboardData,5000);
