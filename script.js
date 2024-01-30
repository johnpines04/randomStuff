function showUselessFact(photoId) {
  // Substitua a URL abaixo pela URL da Useless Facts API.
  const uselessFactApiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";

  // Fazendo uma solicitação fetch para a Useless Facts API.
  fetch(uselessFactApiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Extraindo o fato da resposta.
      const uselessFact = data.text;

      // Exibindo a mensagem na div de mensagem.
      document.getElementById("uselessFactMessage").innerText = uselessFact;
    })
    .catch((error) => {
      console.error("Erro ao obter o fato:", error);
      // Em caso de erro, você pode exibir uma mensagem alternativa ou lidar com a situação de outra forma.
      document.getElementById("uselessFactMessage").innerText =
        "Erro ao obter o fato. Tente novamente mais tarde.";
    });
}