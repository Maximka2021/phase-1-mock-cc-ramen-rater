const ramenMenu = document.querySelector('#ramen-menu');
const ramenDetail = document.querySelector('#ramen-detail');
const foodName = document.querySelector('.name');
const restaurant = document.querySelector('.restaurant');
const ratingDisplay = document.querySelector('#rating-display');
const commentDisplay = document.querySelector('#comment-display');
const ramenImage = document.querySelector('#ramen-image');
const detailImage = document.querySelector('.detail-image');


//new Ramen
const newNameInput = document.querySelector('#new-name');
const newRestaurantInput = document.querySelector('#new-restaurant');
const newImageInput = document.querySelector('#new-image');
const newRatingInput = document.querySelector('#new-rating');
const newCommentInput = document.querySelector('#new-comment');
const submitBtn = document.querySelector('#btn');
//new Ramen

//edit Ramen
const editRating = document.querySelector('#new-rating');
const editComent = document.querySelector('#new-comment');
const editBtn = document.querySelector('#edit-btn')
//edit Ramen

//delete Ramen
const deleteInput = document.querySelector('#delete-id');
const deleteBtn = document.querySelector('#delete-btn');
//delete Ramen

//update Ramen
const idOfUpdatedElem = document.querySelector('#id-of-updated-elem');
const updateNameInput = document.querySelector('#update-name');
const updateBtn = document.querySelector('#update-btn');
//update Ramen

// dispay Ramen
fetch('http://localhost:3000/ramens')
.then(r => r.json())
.then(data => data.forEach(elem => {
    const image = document.createElement('img');
    ramenMenu.append(image);
    image.src = elem.image;
    image.addEventListener('click', () =>{
        foodName.textContent = elem.name;
        restaurant.textContent = elem.restaurant;
        detailImage.src = elem.image;
        ratingDisplay.textContent = elem.rating;
        commentDisplay.textContent = elem.comment;
    })
    image.addEventListener('dblclick', () =>{
        image.src = '';
        foodName.textContent = '';
        restaurant.textContent = '';
        detailImage.src = './assets/image-placeholder.jpg';
        ratingDisplay.textContent = '';
        commentDisplay.textContent = '';
    })
}))
// display Ramen

//first Ramen
fetch('http://localhost:3000/ramens/1')
.then(r => r.json())
.then(data => {
    foodName.textContent = data.name;
    restaurant.textContent = data.restaurant;
    detailImage.src = data.image;
    ratingDisplay.textContent = data.rating;
    commentDisplay.textContent = data.comment;
})
//first Ramen

//new Ramen
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newData = {
        name: newNameInput.value,
        restaurant: newRestaurantInput.value,
        image: newImageInput.value,
        rating: newRatingInput.value,
        comment: newCommentInput.value,
    }
    fetch('http://localhost:3000/ramens', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        },
        body: JSON.stringify(newData)
    })
})
// new Ramen

//edit Ramen
editBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(editRating.value)
    ratingDisplay.textContent = editRating.value;
    commentDisplay.textContent = editComent.value;
})
//edit Ramen

//delete Ramen
deleteBtn.addEventListener('click', () => {
    fetch(`http://localhost:3000/ramens/${deleteInput.value}`, {
        method: "DELETE"
    })
})
//delete Ramen

//update Ramen
updateBtn.addEventListener('click', () =>{
    const newData = {
        name: updateNameInput.value
    }
    fetch(`http://localhost:3000/ramens/${idOfUpdatedElem.value}`, {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newData)
    })
})
//update Ramen


