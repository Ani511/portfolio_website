// Dynamic Greeting
const header = document.querySelector('header p');
const hours = new Date().getHours();
const greeting =
    hours < 12 ? 'Good Morning!' :
    hours < 18 ? 'Good Afternoon!' : 'Good Evening!';
header.textContent = `Hi, I’m Anni, an aspiring software developer and UI designer! ${greeting}`;

// Glow Effect for Header
const headerTitle = document.querySelector('header h1');
headerTitle.addEventListener('mouseover', () => {
    headerTitle.style.textShadow = '0 0 20px #ff79c6, 0 0 30px #bd93f9';
});
headerTitle.addEventListener('mouseout', () => {
    headerTitle.style.textShadow = 'none';
});

// Skill Animation
document.querySelectorAll('#skills li').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.transform = 'scale(1.2)';
        skill.style.color = '#ff79c6';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.transform = 'scale(1)';
        skill.style.color = '';
    });
});

// Floating Particles
const particles = document.createElement('div');
particles.id = 'particles';
document.body.appendChild(particles);

for (let i = 0; i < 50; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particles.appendChild(particle);
}
