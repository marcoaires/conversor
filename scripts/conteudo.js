/**
 *
 * @param {String} pagina
 * @param {String} destino
 */
function carregarConteudo(pagina, elemetoDestino) {
    const request = new XMLHttpRequest();

    request.open('GET', pagina, true);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            document.querySelector(elemetoDestino).innerHTML = request.responseText;
        }
    };

    request.send();
}

function temperatura() {
    carregarConteudo('PaginaTemperatura.html', '#principalcontentor');
}

function comprimento() {
    carregarConteudo('PaginaComprimento.html', '#principalcontentor');
}

(function() {
    // Carregar menu
    carregarConteudo('content-cima.html', '#Contentcima');

    // Carregar formulário temperatura
    temperatura();
})();