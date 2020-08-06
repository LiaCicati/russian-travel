// General Data
const photoGridList = document.querySelector('.photo-grid');
const photoGridItem = photoGridList.querySelectorAll('.photo-grid__item');
const leadImage = document.querySelector('.lead__image');
const placeList = document.querySelector('.place');
const placeImageList = document.querySelectorAll('.place__image');


// Modal Image
const modalWindow = document.querySelector('.modal');
const closeModalWindow = modalWindow.querySelector('.modal__close-button');

// Toggle Any Modal
function toggleModal(modal) {
    const isOpen = modal.classList.contains('modal_opened');
    if (isOpen) {
        document.removeEventListener('keydown', closeOnEsc)
        document.removeEventListener('click', closeByOverlay);
    } else {
        document.addEventListener('keydown', closeOnEsc)
        document.addEventListener('click', closeByOverlay);
    }
    modal.classList.toggle('modal_opened');
};

// Image Modals
function leadImageModal(evt) {
    const clickedImage = evt.target;
    toggleModal(modalWindow);
    modalWindow.querySelector('.modal__image').src = clickedImage.src;
    modalWindow.querySelector('.modal__caption').textContent = clickedImage.parentElement.querySelector('.lead__caption').textContent;
};

function photoGridModal(evt) {
    const clickedImage = evt.target;
    toggleModal(modalWindow);
    modalWindow.querySelector('.modal__image').src = clickedImage.src;
    modalWindow.querySelector('.modal__caption').textContent = "";
}

photoGridItem.forEach(function (image) {
    image.addEventListener('click', photoGridModal);
});

function placesModal(evt) {
    const clickedImage = evt.target;
    toggleModal(modalWindow);
    modalWindow.querySelector('.modal__image').src = clickedImage.src;
    modalWindow.querySelector('.modal__caption').textContent = clickedImage.parentElement.parentElement.querySelector('.place__title').textContent;
}

placeImageList.forEach(function (image) {
    image.addEventListener('click', placesModal);
});

// Close Modal by Overlay & on Esc
function closeByOverlay(evt) {
    if (evt.target.classList.contains('modal')) {
        toggleModal(document.querySelector('.modal_opened'));
    }
};

function closeOnEsc(evt) {
    if (evt.key === 'Escape') {
        toggleModal(document.querySelector('.modal_opened'));
    }
};



// Event Listeners
leadImage.addEventListener('click', leadImageModal);
closeModalWindow.addEventListener('click', () => toggleModal(modalWindow));