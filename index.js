const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "assets/images/avatar-1.png",
    post: "assets/images/post-image-1.png",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "assets/images/avatar-2.png",
    post: "assets/images/post-image-2.png",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "assets/images/avatar-3.png",
    post: "assets/images/post-image-3.png",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  createPost(posts);
});

// create post

function createPost(postArray) {
  // loop through the array of objects
  for (let i = 0; i < postArray.length; i++) {
    let postEl = document.querySelector("#post-section");

    postEl.innerHTML += `
            <div class="post-container container">
                <div class="user-info">
                    <img class="avatar-width" src="${postArray[i].avatar}"/>
                    <div>
                        <h2 class="fs-l fw-700">${postArray[i].name}</h2>
                        <p class="fs-m fw-400">${postArray[i].location}</p>
                    </div>
                </div>
    
                <img class="post-img" src="${postArray[i].post}"/>
    
                <div class="icons-container">
                    <div>
                        <i class="likeBtn icons fa fa-heart-o" aria-hidden="true"></i>
                        <i class="icons fa fa-comment-o" aria-hidden="true"></i>
                        <i class="icons fa fa-share-alt-square" aria-hidden="true"></i>
                    </div>
    
                    <h3 class="likes fs-l fw-700"><span class="likeCount">${postArray[i].likes}</span> likes</h3>
                    <p class="username-caption fs-m fw-400">
                        <span class="username fw-700">${postArray[i].username}</span> ${postArray[i].comment}
                    </p>
                </div>
            </div>
        `;

    // Select the like button and like count for the current post
    let likeBtn = document.querySelector(".likeBtn");
    let likeEl = document.querySelector(".likeCount");

    let countFromArray = postArray[i];
    let currentCount = countFromArray[1];

    likeBtn.addEventListener("click", () => {
      // Increase the like count for the specific post when the like button is clicked
      postArray[i].likes++;
      likeEl.textContent = ` ${postArray[i].likes}`;
    });
  }
}
