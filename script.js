// Video URLs categorized by type
const videoData = {
    "video-editing": [
      "https://youtu.be/P_Y3QWRfJ70",  // Example videos, replace with your own
      "https://youtu.be/oN16xA8Fnzo"
    ],
    "motion-graphics": [
      "https://youtu.be/SvkbJcXDs_c",
      "https://youtu.be/UgP2k8OWuEo"
    ],
    "face-cam": [
      "https://youtu.be/DdZmeeLcjbY",
      "https://youtu.be/pb6eVKcjul0"
    ]
  };
  
  const cards = document.querySelectorAll('.card');
  const videoList = document.querySelector('.video-list');
  
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      showVideos(category);
    });
  });
  
  function showVideos(category) {
    videoList.innerHTML = ''; // Clear existing videos
  
    if (!videoData[category]) {
      videoList.innerHTML = '<p>No videos available for this category.</p>';
      return;
    }
  
    videoData[category].forEach(url => {
      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allowfullscreen', '');
      videoList.appendChild(iframe);
    });
  
    // Scroll smoothly to video section
    document.getElementById('video-showcase').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Footer year auto update
  document.getElementById('year').textContent = new Date().getFullYear();
  