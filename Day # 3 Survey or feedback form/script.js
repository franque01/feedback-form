const stars1 = document.querySelectorAll('.stars-1 i');
const stars2 = document.querySelectorAll('.stars-2 i');
const stars3 = document.querySelectorAll('.stars-3 i');
const stars4 = document.querySelectorAll('.stars-4 i');

stars1.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars1.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
        })
    })
})
stars2.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars2.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
        })
    })
})
stars3.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars3.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
        })
    })
})
stars4.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars4.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');
        })
    })
})
