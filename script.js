// Video URLs categorized by type
const videoData = {
  "video-editing": [
    "https://www.youtube.com/embed/P_Y3QWRfJ70",
    "https://www.youtube.com/embed/oN16xA8Fnzo"
  ],
  "motion-graphics": [
    "https://www.youtube.com/embed/SvkbJcXDs_c",
    "https://www.youtube.com/embed/UgP2k8OWuEo"
  ],
  "face-cam": [
    "https://www.youtube.com/embed/DdZmeeLcjbY",
    "https://www.youtube.com/embed/pb6eVKcjul0"
  ]
};

// Select all video category cards and video display section
const cards = document.querySelectorAll('.card');
const videoList = document.querySelector('.video-list');

// Add click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const category = card.getAttribute('data-category');
    showVideos(category);
  });
});

// Function to display videos based on category
function showVideos(category) {
  videoList.innerHTML = ''; // Clear existing videos

  if (!videoData[category]) {
    videoList.innerHTML = '<p>No videos available for this category.</p>';
    return;
  }

  // Loop through each video and create iframe
  videoData[category].forEach(url => {
    const iframe = document.createElement('iframe');
    iframe.width = "100%";
    iframe.height = "315";
    iframe.src = url;
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');
    iframe.style.marginBottom = '20px';
    videoList.appendChild(iframe);
  });

  // Scroll smoothly to video section
  document.getElementById('video-showcase').scrollIntoView({ behavior: 'smooth' });
}

// Auto update footer year
document.getElementById('year').textContent = new Date().getFullYear();
