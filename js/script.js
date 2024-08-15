document.getElementById('download').addEventListener('click', function () {
  // Cria uma variavel para armazenar o texto
  let text = document.getElementById("editor-content").value;

  // Cria um link para download do texto
  let a = document.createElement("a");

  // Cria um Blob com o texto
  let blob = new Blob([text], {type: "text/plain"})

  // Configura o link para o tipo de arquivo como texto
  a.href = window.URL.createObjectURL(blob);

  a.download = (document.getElementById("name-file").value || "arquivo") + ".md";

  // Simula o click do link para iniciar o download
  a.click();

  // Libera a memória do link após download
  URL.revokeObjectURL(a.href);
})

