document
  .getElementById("editor-content")
  .addEventListener("input", function (e) {
    // remove the most common zerowidth characters from the start of the file
    marked.parse(
        e.target.value.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "")
    );
    document.getElementById("preview-content").innerHTML = marked.parse(
      e.target.value
    );
    console.log(e.target.value);
  });
