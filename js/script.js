document.getElementById("download").addEventListener("click", function () {
  
  const text = document.getElementById("editor-content").value;
  const a = document.createElement("a");
  const blob = new Blob([text], { type: "text/markdown" });

  a.href = window.URL.createObjectURL(blob);
  a.download =
    (document.getElementById("name-file").value || "arquivo") + ".md";
  a.click();

  URL.revokeObjectURL(a.href);
});

document
  .getElementById("editor-content")
  .addEventListener("dragenter", function () {
    document.querySelector(".editor").classList.toggle("active");
  });

document
  .getElementById("editor-content")
  .addEventListener("dragleave", function () {
    document.querySelector(".editor").classList.toggle("active");
  });

document
  .getElementById("editor-content")
  .addEventListener("drop", function (e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const fileName = file.name.split(".");
    const extension = fileName[fileName.length - 1];

    if (extension == "md") {
      const reader = new FileReader();

      reader.onload = () => {
        document.getElementById("editor-content").value = reader.result;
        markdownLoad(reader.result);
      };

      reader.onerror = function () {
        alert("Erro ao ler o arquivo.");
      };

      reader.readAsText(file);
    } else {
      alert("Este arquivo não é Markdown.");
    }
    document.querySelector(".editor").classList.toggle("active");
  });
