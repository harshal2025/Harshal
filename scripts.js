// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Welcome animation after load
    setTimeout(() => {
        showToast("Welcome to Harshal Porwal's personal webpage!");
    }, 700);

    // Add subtle pop animation when clicking social icons
    const socialImages = document.querySelectorAll('.social-links img');

    socialImages.forEach(img => {
        img.addEventListener('click', (e) => {
            img.classList.add('pop');
            setTimeout(() => {
                img.classList.remove('pop');
            }, 300);
        });
    });
});

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 3000);
}

// Toast Styling dynamically via JS
const style = document.createElement('style');
style.innerHTML = `
.toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    background: #3498db;
    color: white;
    padding: 15px 25px;
    border-radius: 30px;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    opacity: 0;
    transition: all 0.5s ease;
    z-index: 9999;
}
.toast.show {
    opacity: 1;
    bottom: 50px;
}
.pop {
    animation: pop 0.3s forwards;
}
@keyframes pop {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
`;
document.head.appendChild(style);
