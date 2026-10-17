hereconst captionInput = document.getElementById("caption");
const photoInput = document.getElementById("photo");
const postButton = document.getElementById("postButton");
const postsContainer = document.getElementById("posts");

postButton.addEventListener("click", function () {
  const caption = captionInput.value.trim();
  const photo = photoInput.files[0];

  if (!caption && !photo) {
    alert("Please write something or choose a photo!");
    return;
  }

  const post = document.createElement("article");
  post.style.cssText =
    "padding:16px 0;border-bottom:1px solid #eee;overflow-wrap:anywhere;";

  if (caption) {
    const text = document.createElement("p");
    text.textContent = caption;
    text.style.cssText = "margin-bottom:12px;line-height:1.6;";
    post.appendChild(text);
  }

  if (photo) {
    if (!photo.type.startsWith("image/")) {
      alert("Please choose an image file.");
      return;
    }

    const image = document.createElement("img");
    image.src = URL.createObjectURL(photo);
    image.alt = "Post image";
    image.style.cssText =
      "width:100%;max-height:450px;object-fit:contain;border-radius:12px;margin-bottom:12px;";
    post.appendChild(image);
  }

  const time = document.createElement("small");
  time.textContent = "Just now";
  time.style.color = "#81758f";
  post.appendChild(time);

  const emptyMessage = postsContainer.querySelector(".empty");

  if (emptyMessage) {
    emptyMessage.remove();
  }

  postsContainer.prepend(post);

  captionInput.value = "";
  photoInput.value = "";
});
