const form = document.querySelector("#formCadastro");

// escuta o evento do formulário
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(Object.fromEntries(
        [...form.elements]
            .filter(abacate => abacate.id)
            .map(abacate => [abacate.id, abacate.value])
    ));
    form.reset();
});
