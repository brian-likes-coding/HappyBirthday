// script.js
// Romantic interactive features for girlfriend

// DOM elements
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const surpriseBtn = document.getElementById('surpriseBtn');
const galleryGrid = document.getElementById('galleryGrid');
const revealMsgBtn = document.getElementById('revealMessageBtn');
const secretMsgDiv = document.getElementById('secretMessage');
const petalGameDiv = document.getElementById('petalGame');
const petalCountSpan = document.getElementById('petalCount');
const senderSpan = document.getElementById('senderName');

// personal touch: you can change name here
const BOYFRIEND_NAME = "your love";  // replace with your actual name if you want
senderSpan.innerText = BOYFRIEND_NAME;

// Flower collection with romantic personal messages
const flowersData = [
    { name: "Garden Rose", msg: "You are elegant and timeless like this rose 🌹", image: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Peony", msg: "Your heart is as soft and full as a peony in bloom 💗", image: "https://images.pexels.com/photos/1103450/pexels-photo-1103450.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Lavender", msg: "You bring calm and peace into my life 💜", image: "https://images.pexels.com/photos/1710795/pexels-photo-1710795.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Sunflower", msg: "You are my sunshine, warm and radiant 🌻", image: "https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Daisy", msg: "Pure, sweet, and full of joy — that's you 🌼", image: "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { name: "Orchid", msg: "Exotic, unique, and breathtakingly beautiful 💖", image: "https://images.pexels.com/photos/139603/pexels-photo-139603.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

// Render gallery
function buildGallery() {
    if (!galleryGrid) return;
    galleryGrid.innerHTML = '';
    flowersData.forEach(flower => {
        const card = document.createElement('div');
        card.className = 'flower-card';
        card.innerHTML = `
            <img src="${flower.image}" class="flower-img" alt="${flower.name}" loading="lazy">
            <div class="flower-info">
                <div class="flower-name">${flower.name}</div>
                <div class="flower-message"><i class="fas fa-heart"></i> tap for a note</div>
            </div>
        `;
        card.addEventListener('click', () => {
            showRomanticToast(`💌 "${flower.msg}"`);
        });
        galleryGrid.appendChild(card);
    });
}

// Toast message for romantic notes
let toastTimer;
function showRomanticToast(msg) {
    let existing = document.querySelector('.romantic-toast');
    if(existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'romantic-toast';
    toast.innerText = msg;
    toast.style.position = 'fixed';
    toast.style.bottom = '30px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = '#fff2ed';
    toast.style.color = '#b55a4c';
    toast.style.padding = '0.8rem 1.6rem';
    toast.style.borderRadius = '60px';
    toast.style.fontWeight = '500';
    toast.style.fontSize = '0.9rem';
    toast.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
    toast.style.zIndex = '9999';
    toast.style.backdropFilter = 'blur(8px)';
    toast.style.border = '1px solid #f3cfc4';
    document.body.appendChild(toast);
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2700);
}

// Surprise button: floating petals effect and sweet words
surpriseBtn?.addEventListener('click', () => {
    showRomanticToast("🌷 Every flower I see whispers your name. I love you! 🌷");
    createFloatingPetals();
});

function createFloatingPetals() {
    for(let i=0;i<18;i++) {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.style.position = 'fixed';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.bottom = '-20px';
        petal.style.fontSize = (Math.random() * 20 + 18) + 'px';
        petal.style.opacity = '0.8';
        petal.style.pointerEvents = 'none';
        petal.style.zIndex = '999';
        petal.style.transition = 'transform 3s linear, opacity 3s';
        document.body.appendChild(petal);
        setTimeout(() => {
            petal.style.transform = `translateY(-${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`;
            petal.style.opacity = '0';
        }, 50);
        setTimeout(() => petal.remove(), 3500);
    }
}

// Hidden secret message in letter
let secretMessages = [
    "🌙 I dream of you every single night. You're my favorite thought.",
    "💖 The best thing in my life is knowing you smile because of me.",
    "🌸 You are the poetry my heart was always trying to write.",
    "✨ Every petal, every star — they all remind me of your eyes."
];
revealMsgBtn?.addEventListener('click', () => {
    const randomMsg = secretMessages[Math.floor(Math.random() * secretMessages.length)];
    secretMsgDiv.classList.remove('hidden');
    secretMsgDiv.innerHTML = `<i class="fas fa-heart"></i> ${randomMsg} <i class="fas fa-heart"></i>`;
    // auto hide after 5 sec? no, but make disappear if clicked again? we'll keep gentle.
    setTimeout(() => {
        if(secretMsgDiv && !secretMsgDiv.classList.contains('hidden')) {
            // optional fade out not necessary but good
        }
    }, 8000);
});

// Petals interactive memory game (click to collect love notes)
const petalMessages = [
    "🌷 Remember our first walk? You laughed, I fell harder.",
    "🌸 Your smile is my favorite flower.",
    "🌼 Every moment with you is a petal in my memory garden.",
    "🌺 You make ordinary days magical.",
    "💐 I fall for you more and more every day.",
    "🌹 You are my always and forever."
];
let collected = 0;
function buildPetals() {
    if(!petalGameDiv) return;
    petalGameDiv.innerHTML = '';
    for(let i=0;i<8;i++) {
        const petalDiv = document.createElement('div');
        petalDiv.className = 'petal';
        petalDiv.innerHTML = '<i class="fas fa-leaf"></i>';
        petalDiv.addEventListener('click', () => {
            if(petalDiv.style.opacity === '0.5') return;
            const loveMsg = petalMessages[Math.floor(Math.random() * petalMessages.length)];
            showRomanticToast(`✨ ${loveMsg} ✨`);
            collected++;
            petalCountSpan.innerText = collected;
            petalDiv.style.opacity = '0.5';
            petalDiv.style.transform = 'rotate(45deg) scale(0.8)';
            petalDiv.style.pointerEvents = 'none';
            if(collected === 8) {
                setTimeout(() => {
                    showRomanticToast("💕 You've collected all my love notes — just like you've captured my whole heart 💕");
                }, 500);
            }
        });
        petalGameDiv.appendChild(petalDiv);
    }
}

// Navbar mobile toggle
function toggleMobileNav() {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
}
burger?.addEventListener('click', toggleMobileNav);
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', () => {
        if(navLinks.classList.contains('active')) toggleMobileNav();
        document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// smooth scrolling and active section
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if(scrollY >= top && scrollY < top+height) {
            current = sec.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href')?.substring(1);
        if(href === current) item.classList.add('active');
    });
});

// launch on load
buildGallery();
buildPetals();

// extra floating hearts animation (added on letter section)
const heartsContainer = document.getElementById('floatingHearts');
setInterval(() => {
    if(heartsContainer) {
        const heart = document.createElement('i');
        heart.className = 'fas fa-heart';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 90 + '%';
        heart.style.bottom = '-20px';
        heart.style.color = '#e6a597';
        heart.style.opacity = '0.6';
        heart.style.fontSize = Math.random() * 14 + 12 + 'px';
        heart.style.animation = 'floatUp 5s linear forwards';
        heart.style.pointerEvents = 'none';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}, 1200);

// add keyframes dynamically
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes floatUp {
    0% { transform: translateY(0) rotate(0deg); opacity: 0.8; }
    100% { transform: translateY(-600px) rotate(20deg); opacity: 0; }
}
`;
document.head.appendChild(styleSheet);
console.log("💗 For my love — every flower, every petal, every heartbeat 💗");