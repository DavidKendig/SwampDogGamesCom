// Links data - customize these with your actual links
const links = [
    {
        title: "Merch & More",
        url: "https://store.swampdoggames.com/",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/ebay.svg",
        variant: "primary"
    },
    {
        title: "Main Channel",
        url: "https://www.youtube.com/@SwampDogGames",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/youtube.svg",
        variant: "primary"
    },
    {
        title: "Rumble",
        url: "https://rumble.com/user/SwampDogGames",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/rumble.svg",
        variant: "primary"
    },
    {
        title: "YT Livestreams",
        url: "https://www.youtube.com/@SwampDogLivestreams",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/youtube.svg",
        variant: "primary"
    },
    {
        title: "Twitch Livestreams",
        url: "https://www.youtube.com/@SwampDogGames",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/twitch.svg",
        variant: "primary"
    },
    {
        title: "YT Shorts",
        url: "https://www.youtube.com/@SwampDogShorts",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/youtube.svg",
        variant: "primary"
    },
    {
        title: "YT Clips",
        url: "https://www.youtube.com/@SwampDogClips",
        iconUrl: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/youtube.svg",
        variant: "primary"
    },
    {
        title: "Support Us",
        url: "https://streamelements.com/swampdoggames/tip",
        icon: "❤️",
        variant: "primary"
    }
];

// Function to create 3D button elements
function createButton(link) {
    const button = document.createElement('a');
    button.href = link.url;
    button.className = `link-button ${link.variant}`;
    button.target = "_blank";
    button.rel = "noopener noreferrer";

    // Add icon if provided
    if (link.iconUrl) {
        const icon = document.createElement('img');
        icon.className = 'icon-img';
        icon.src = link.iconUrl;
        icon.alt = '';
        button.appendChild(icon);
    } else if (link.icon) {
        const icon = document.createElement('span');
        icon.className = 'icon';
        icon.textContent = link.icon;
        button.appendChild(icon);
    }

    // Add title text
    const text = document.createElement('span');
    text.textContent = link.title;
    button.appendChild(text);

    // Add 3D tilt effect on mouse move
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        button.style.transform = `
            translateY(-4px)
            translateZ(20px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });

    // Reset transform on mouse leave
    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });

    return button;
}

// Initialize the page
function init() {
    const container = document.getElementById('linksContainer');

    // Create and append all buttons
    links.forEach(link => {
        const button = createButton(link);
        container.appendChild(button);
    });

    // Add parallax effect to profile image
    const profileImg = document.getElementById('profileImg');
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;

        if (profileImg.parentElement) {
            profileImg.parentElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
}

// Check if it's Christmas and add festive elements
function checkChristmas() {
    const today = new Date();
    const month = today.getMonth(); // 0-11 (11 = December)
    const day = today.getDate();

    // Check if it's December 24-26 (Christmas Eve, Christmas, Boxing Day)
    if (month === 11 && day >= 24 && day <= 26) {
        addChristmasElements();
    }
}

function addChristmasElements() {
    // Add Christmas class to body
    document.body.classList.add('christmas-mode');

    // Add snowflakes
    createSnowflakes();

    // Add Santa hat to profile image
    addSantaHat();

    // Add Christmas lights to buttons
    addChristmasLights();
}

function createSnowflakes() {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    document.body.appendChild(snowContainer);

    // Create 50 snowflakes
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.innerHTML = '❄';
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.opacity = Math.random() * 0.6 + 0.4;
        snowContainer.appendChild(snowflake);
    }
}

function addSantaHat() {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        const hat = document.createElement('div');
        hat.className = 'santa-hat';
        hat.innerHTML = '🎅';
        profileImage.appendChild(hat);
    }
}

function addChristmasLights() {
    const container = document.querySelector('.container');
    if (container) {
        const lights = document.createElement('div');
        lights.className = 'christmas-lights';

        const colors = ['#ff0000', '#00ff00', '#ffff00', '#0000ff', '#ff00ff'];
        for (let i = 0; i < 20; i++) {
            const light = document.createElement('div');
            light.className = 'light';
            light.style.backgroundColor = colors[i % colors.length];
            light.style.left = (i * 5) + '%';
            light.style.animationDelay = (i * 0.1) + 's';
            lights.appendChild(light);
        }

        container.insertBefore(lights, container.firstChild);
    }
}

// Update copyright year
function updateCopyrightYear() {
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        init();
        checkChristmas();
        updateCopyrightYear();
    });
} else {
    init();
    checkChristmas();
    updateCopyrightYear();
}

// Add click analytics (optional)
document.addEventListener('click', (e) => {
    if (e.target.closest('.link-button')) {
        const button = e.target.closest('.link-button');
        console.log('Button clicked:', button.textContent.trim());
        // Add your analytics tracking here
    }
});
