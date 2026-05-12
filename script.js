/* =========================================================
   CCTE FUTURISTIC WEBSITE JAVASCRIPT
   FULL CLEAN VERSION
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

/* =========================================================
   LOADER
========================================================= */

const loader = document.getElementById('loader');

window.addEventListener('load', () => {

    setTimeout(() => {

        loader.style.opacity = '0';

        setTimeout(() => {

            loader.style.display = 'none';

        }, 600);

    }, 1200);

});

/* =========================================================
   PARTICLES
========================================================= */

const particles = document.getElementById('particles');

if(particles){

    for(let i = 0; i < 80; i++){

        const span = document.createElement('span');

        const size = Math.random() * 5 + 2;

        span.style.width = size + 'px';
        span.style.height = size + 'px';

        span.style.left = Math.random() * window.innerWidth + 'px';

        span.style.animationDuration =
        (Math.random() * 10 + 8) + 's';

        span.style.animationDelay =
        Math.random() * 5 + 's';

        particles.appendChild(span);
    }
}

/* =========================================================
   CYBORG CURSOR
========================================================= */

const cursor = document.querySelector('.cursor');
const trail = document.querySelector('.cursor-trail');

let mouseX = 0;
let mouseY = 0;

let trailX = 0;
let trailY = 0;

document.addEventListener('mousemove', (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    if(cursor){

        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }

   if(Math.random() > 0.7){
   createTrail(mouseX, mouseY);
}
});

function animateTrail(){

    trailX += (mouseX - trailX) * 0.15;
    trailY += (mouseY - trailY) * 0.15;

    if(trail){

        trail.style.left = trailX + 'px';
        trail.style.top = trailY + 'px';
    }

    requestAnimationFrame(animateTrail);
}

animateTrail();

function createTrail(x,y){

    const t = document.createElement('div');

    t.classList.add('trail');

    t.style.left = x + 'px';
    t.style.top = y + 'px';

    document.body.appendChild(t);

    setTimeout(() => {

        t.remove();

    }, 600);
}

/* =========================================================
   TYPING EFFECT
========================================================= */

const typing = document.getElementById('typing');

if(typing){

    const words = [
        'Future Engineers',
        'Technology Leaders',
        'Programmers',
        'Innovators',
        'Cybersecurity Experts',
        'Creators of Tomorrow'
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect(){

        const currentWord = words[wordIndex];

        if(!deleting){

            typing.textContent =
            currentWord.substring(0, charIndex);

            charIndex++;

            if(charIndex > currentWord.length){

                deleting = true;

                setTimeout(typeEffect, 1200);

                return;
            }

        }else{

            typing.textContent =
            currentWord.substring(0, charIndex);

            charIndex--;

            if(charIndex < 0){

                deleting = false;

                wordIndex =
                (wordIndex + 1) % words.length;

                charIndex = 0;
            }
        }

        setTimeout(typeEffect, deleting ? 45 : 100);
    }

    typeEffect();
}

/* =========================================================
   VIDEO SYSTEM
========================================================= */

const heroPlayBtn =
document.getElementById('heroPlayBtn');

const heroVideoWrapper =
document.getElementById('heroVideoWrapper');

const heroVideo =
document.getElementById('heroVideo');

if(heroPlayBtn){

    heroPlayBtn.addEventListener('click', () => {

        const videoSrc =
        heroVideo.getAttribute('data-src');

        heroVideo.src =
        videoSrc + '&autoplay=1';

        heroVideoWrapper.classList.add('active');

        heroPlayBtn.style.opacity = '0';

        setTimeout(() => {

            heroPlayBtn.style.display = 'none';

        }, 800);
    });
}

/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
document.querySelectorAll('.counter');

function startCounter(counter){

    const target =
    parseInt(counter.getAttribute('data-target'));

    let count = 0;

    const speed = target / 120;

    function updateCounter(){

        count += speed;

        if(count < target){

            counter.innerText =
            Math.floor(count);

            requestAnimationFrame(updateCounter);

        }else{

            counter.innerText = target + '+';
        }
    }

    updateCounter();
}

const statsSection =
document.getElementById('stats');

if(statsSection){

    const observer = new IntersectionObserver(

        entries => {

            if(entries[0].isIntersecting){

                counters.forEach(counter => {

                    startCounter(counter);
                });

                observer.unobserve(statsSection);
            }

        },

        {
            threshold:0.5
        }
    );

    observer.observe(statsSection);
}

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealItems = document.querySelectorAll(
'.card, .timeline-card, .stat-box, .about-grid img, .mini-stat'
);

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = '1';
                entry.target.style.transform =
                'translateY(0)';
            }
        });

    },

    {
        threshold:0.15
    }
);

revealItems.forEach(item => {

    item.style.opacity = '0';
    item.style.transform = 'translateY(80px)';
    item.style.transition = '1s ease';

    revealObserver.observe(item);
});

/* =========================================================
   EXPLORE BUTTON
========================================================= */

window.exploreMessage = function(){

    const programs =
    document.getElementById('programs');

    if(programs){

        programs.scrollIntoView({
            behavior:'smooth'
        });
    }
};

}); 

const cursor = document.querySelector(".cyber-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const hoverElements = document.querySelectorAll(
  "a, button, .card, .timeline-content, .mini-stat, .facility"
);

hoverElements.forEach(el => {

  el.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-hover");
  });

  el.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-hover");
  });

});