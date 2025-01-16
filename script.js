// Substitua com sua chave de API
const apiKey = '1f511621e0f641029dbd324ee196a4c8';
const url = `https://newsapi.org/v2/top-headlines?category=technology&apiKey=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Exibe as notícias no console
    console.log(data.articles);
    
    const ContainerConteudo = document.getElementById('container-conteudo');
    // Aqui você pode manipular os dados e exibir as notícias na página
    data.articles.forEach(article => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('newsdiv')

        newsDiv.innerHTML = `
            <img src="${article.urlToImage}" alt="${article.title}" width="100">

            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            
            <p>${article.description}</p>
            `;

        ContainerConteudo.appendChild(newsDiv);
    });
  })
    .catch(error => console.log('Erro ao buscar notícias:', error));
