const events = document.querySelectorAll('.event');
const navbarItems = document.querySelectorAll('.navbar-item');

window.addEventListener('scroll', () => {
  events.forEach(event => {
    const eventTop = event.getBoundingClientRect().top;
    if (eventTop < window.innerHeight / 2 && eventTop > -event.clientHeight / 2) {
      event.classList.add('fade-in');
    } else {
      event.classList.remove('fade-in');
    }
  });
});

navbarItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = item.getAttribute('href');
    const targetEvent = document.querySelector(targetId);
    if (targetEvent) {
      window.scrollTo({
        top: targetEvent.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// JavaScript to add smooth scroll behavior
document.addEventListener("DOMContentLoaded", function() {
  const navbarItems = document.querySelectorAll(".navbar-item");
  
  navbarItems.forEach(item => {
    item.addEventListener("click", function(event) {
      event.preventDefault();
      
      const targetEventId = this.getAttribute("href");
      const targetEvent = document.querySelector(targetEventId);
      
      if (targetEvent) {
        window.scrollTo({
          top: targetEvent.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });
});

// JavaScript to handle scroll-to-top button
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopButton = document.getElementById("scrollToTop");

  scrollToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // Show/hide the button based on scrolling
  window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
});

const videos = document.querySelectorAll(".event-video");

const videoOptions = {
  threshold: 0.5 // Adjust the threshold as needed
};

const videoObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
}, videoOptions);

videos.forEach(video => {
  videoObserver.observe(video);
});

const expandButton = document.getElementById("expandButton");
const hiddenItems = document.getElementById("hiddenItems");

expandButton.addEventListener("click", () => {
  hiddenItems.classList.toggle("show");
});

function toggleHiddenItems() {
  var hiddenItems = document.getElementById("hiddenItems");
  if (hiddenItems.style.display === "none") {
    hiddenItems.style.display = "flex";
  } else {
    hiddenItems.style.display = "none";
  }
}

// Function to show the pop-up with a custom message
function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  popupMessage.textContent = message;
  popup.style.display = "block";
}

// Function to close the pop-up
function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}

// Call this function to show the alert when the page loads
window.onload = function () {
  var message = "Hi Mahnoor, I hope you know that you are my world, my everything, my safe space, my comfort, just the best genuinely. I love you more than anything in this world and I CANNOT wait to be able to spend the rest of our lives together In Sha Allah. Happy 6 Months baby!! ❤️";
  alert(message);
};
// Close the pop-up when the close button is clicked
document.getElementById("closePopup").addEventListener("click", closePopup);

// Close the pop-up when the user clicks outside of it
window.onclick = function (event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    closePopup();
  }
};
