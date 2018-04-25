

// http://www.mocky.io/v2/5a86297f31000072002531f3

jQuery(document).ready(function() {

    // atenção com as funções imediatas (carregam na hora), elas não podem ser chamadas depois
    var loadCostumers = function() {
        $.ajax({
            url: "http://www.mocky.io/v2/5a86297f31000072002531f3",

            // JASONP -> técnica para acessar URLs que validam o domínio para acessar, 
            // bom para desenvolvimento que é localhost e a API tem um domínio 
            dataType: "jsonp", 
            error: loadCostumersError,
            success: loadCostumersSuccess 
        });
    }();
    
    var loadCostumersError = function() {
        console.log("Error");
    };

    // Usando o engine templates (Handlebars) para contruir as TR com os dados de retorno
    var loadCostumersSuccess = function(costumersList) {
        /* $.each(costumersList, function(index, cliente){
            console.log(index, cliente);
        }) */

        // pegando o html dentro do script em index.html
        var source = $("#line").html();
        // passando o pedaço de html para o Handlebars, onde gera uma função chamada template
        var template = Handlebars.compile(source);
        // o Handlebars espera a passagem dos dados
        var html = template({
            clientes: costumersList // lista de clientes que o Ajax está retornando (parametro da funçãp)
        });

        console.log(html)

        $("table tbody").html(html);

    };

})

//JASON P -> técnca para URLs sem serem do mesmo dominio


//TEMPLATES ENGINE -
//http://handlebarsjs.com/
//http://dustjs.com