const pub = document.documentElement;

pub.addEventListener('mousemove', e => {
    pub.style.setProperty('--x', e.clientX + 'px');
    pub.style.setProperty('--y', e.clientY + 'px');
})