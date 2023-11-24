const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "assets/images/avatar-1.png",
    post: "assets/images/post-image-1.png",
    comment: "just took a few mushrooms lol",
    likes: 21,
    isLiked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "assets/images/avatar-2.png",
    post: "assets/images/post-image-2.png",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    isLiked: false,
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
    isLiked: false,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  createPosts(posts);
});

function createPosts(posts) {
  let postContainer = document.querySelector("#post-section");

  for (let i = 0; i < posts.length; i++) {
    let newPostContainer = createPostElement(posts[i]);
    postContainer.appendChild(newPostContainer);

    let likeBtn = newPostContainer.querySelector(".likeBtn");
    let likeCount = newPostContainer.querySelector(".likeCount");

    likeBtn.addEventListener("click", () => {
      toggleLikeState(posts[i]);
      updateLikeButton(likeBtn, likeCount, posts[i]);
    });
  }
}

function createPostElement(post) {
  let newPostContainer = document.createElement("div");
  newPostContainer.classList.add("post-container", "container");

  newPostContainer.innerHTML = getPostHTML(post);

  return newPostContainer;
}

function getPostHTML(post) {
  return `
    <div class="user-info">
        <img class="avatar-width" src="${post.avatar}"/>
        <div>
            <h2 class="fs-l fw-700">${post.name}</h2>
            <p class="fs-m fw-400">${post.location}</p>
        </div>
    </div>

    <img class="post-img" src="${post.post}"/>

    <div class="icons-container">
        <div>
            <i class="likeBtn icons fa ${
              post.isLiked ? "fa-heart" : "fa-heart-o"
            }" aria-hidden="true"></i>
            <i class="icons fa fa-comment-o" aria-hidden="true"></i>
            <i class="icons fa fa-share-alt-square" aria-hidden="true"></i>
        </div>

        <h3 class="likes fs-l fw-700"><span class="likeCount">${
          post.likes
        }</span> likes</h3>
        <p class="username-caption fs-m fw-400">
            <span class="username fw-700">${post.username}</span> ${
    post.comment
  }
        </p>
    </div>`;
}

function toggleLikeState(post) {
  post.isLiked = !post.isLiked;

  if (post.isLiked) {
    post.likes += 1;
  } else {
    post.likes -= 1;
  }
}

function updateLikeButton(likeBtn, likeCount, post) {
  if (post.isLiked) {
    likeBtn.classList.remove("fa-heart-o");
    likeBtn.classList.add("fa-heart");
  } else {
    likeBtn.classList.remove("fa-heart");
    likeBtn.classList.add("fa-heart-o");
  }
  likeCount.textContent = post.likes;
}
