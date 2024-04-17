Web Scraper

Descrição:

Este projeto consiste em um web scraper construído em JavaScript usando Puppeteer para automatizar a navegação em páginas da web. Ele realiza a busca no Google com uma determinada palavra-chave e retorna os URLs relevantes encontrados, filtrando os URLs com base em uma lista de termos proibidos.
Arquivos

    browser.js: Contém a função para iniciar o navegador Puppeteer.
    functions.js: Inclui funções utilitárias, como a função de espera (sleep) e a função de filtragem de URL (filtraUrl).
    index.js: O arquivo principal que configura um servidor Express para fornecer uma API para acionar o scraper.
    pageScraper.js: Contém a lógica do scraper, incluindo a função para obter a página do Google, extrair URLs e filtrar URLs indesejados.

Como Usar:

    Certifique-se de ter o Node.js e o npm instalados.
    Instale as dependências executando npm install.
    Inicie o servidor executando node index.js.
    Acesse http://localhost:3001/run com a palavra-chave desejada como parâmetro para iniciar o scraper.
