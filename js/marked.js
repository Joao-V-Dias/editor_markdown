function markdownLoad(e) {
  marked.parse(
    e.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
  );
  document.getElementById("preview-content").innerHTML = marked.parse(
    e
  );
}

document
  .getElementById("editor-content")
  .addEventListener("input", function (e) {
    markdownLoad(e.target.value);
  });
