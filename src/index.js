document.addEventListener('alpine:init', () => {
    Alpine.data('carousel', () => ({
        currentIndex: 0,
        images: [
            '../images/b6b2ae78-749a-48e0-bc3a-0465d8ba4bc7.webp',
            '../images/a7aa6cc8-916c-43b5-baaf-619fdb18a2d1.jpg',
            '../images/31adef74-8d57-4bea-a03f-0bf303507f04.webp'
        ],
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.images.length - 1;
            }
        },
        next() {
            if (this.currentIndex < this.images.length - 1) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
        }
    }));
});