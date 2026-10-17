document.addEventListener("DOMContentLoaded", function () {
  const captionInput = document.getElementById("caption");
  const photoInput = document.getElementById("photo");
  const postButton = document.getElementById("postButton");
  const postsContainer = document.getElementById("posts");

  if (!captionInput || !photoInput || !postButton || !postsContainer) {
    console.error("Kaybgram: A required HTML element is missing.");
    return;
  }

  postButton.addEventListener("click", function () {
    const caption = captionInput.value.trim();
    const photo = photoInput.files[0];

    if (!caption && !photo) {
      alert("Please write something or choose a photo!");
      return;
    }

    if (photo && !photo.type.startsWith("image/")) {
      alert("Please choose a valid image.");
      return;
    }

    const post = document.createElement("article");
    post.className = "post";

    if (caption) {
      const text = document.createElement("p");
      text.textContent = caption;
      post.appendChild(text);
    }

    if (photo) {
      const image = document.createElement("img");
      image.src = URL.createObjectURL(photo);
      image.alt = "Post image";
      image.style.width = "100%";
      image.style.borderRadius = "12px";
      post.appendChild(image);
    }

    const time = document.createElement("small");
    time.textContent = "Just now";
    post.appendChild(time);

    const emptyMessage = postsContainer.querySelector(".empty");

    if (emptyMessage) {
      emptyMessage.remove();
    }

    postsContainer.prepend(post);

    captionInput.value = "";
    photoInput.value = "";

    alert("Post created successfully!");
  });
});
