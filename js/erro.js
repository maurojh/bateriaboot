function mostraErro(mensagem, arquivo, linha) {
                document.write("Mensagem: " + mensagem);
                document.write("<br>Arquivo: " + arquivo);
                document.write("<br>Linha: " + linha);
}    

window.onerror = mostraErro;