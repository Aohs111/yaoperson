// 幻灯片功能
let slideIndex = 0;

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    showSlides();
});

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    // 隐藏所有幻灯片
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // 递增幻灯片索引
    slideIndex++;
    
    // 如果达到最后一张幻灯片，重置索引
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // 显示当前幻灯片
    slides[slideIndex-1].style.display = "block";  
    
    // 每3秒切换一次
    setTimeout(showSlides, 3000);
}

// 添加页面滚动动画
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.intro, .gallery, footer');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // 当元素进入视口时添加动画类
        if(position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('fade-in');
        }
    });
});

// 社交媒体链接悬停效果
document.addEventListener('DOMContentLoaded', function() {
    const socialBtns = document.querySelectorAll('.social-btn');
    
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
        
        btn.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}); 