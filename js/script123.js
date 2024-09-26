document.querySelectorAll('.img-thumbnail').forEach(img => {
    img.addEventListener('click', () => {
        const src = img.src.replace('300', '1200'); // Assuming you have a higher resolution image
        document.getElementById('modalImage').src = src;
    });
});