
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery-container img');
    const body = document.body;
    let currentIndex = 0;

    images.forEach((img, index) => {
        img.addEventListener('click', function() {
            currentIndex = index;
            const modal = document.createElement('div');
            modal.className = 'modal';
            
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modalImg.className = 'modal-content';
            
            const nextBtn = document.createElement('div');
            nextBtn.className = 'modal-arrow modal-next';
            nextBtn.innerHTML = '&#10095;';
            
            const prevBtn = document.createElement('div');
            prevBtn.className = 'modal-arrow modal-prev';
            prevBtn.innerHTML = '&#10094;';
            
            modal.appendChild(modalImg);
            modal.appendChild(nextBtn);
            modal.appendChild(prevBtn);
            body.appendChild(modal);
            
            // Show modal with fade effect
            requestAnimationFrame(() => {
                modal.classList.add('show');
            });
            
            nextBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % images.length;
                modalImg.src = images[currentIndex].src;
            });
            
            prevBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                modalImg.src = images[currentIndex].src;
            });
            
            modal.addEventListener('click', function() {
                modal.classList.remove('show');
                setTimeout(() => modal.remove(), 300);
            });
        });
    });
});
