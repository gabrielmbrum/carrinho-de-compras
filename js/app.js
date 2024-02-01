let total = 1400;

function adicionar () 
{
   
    let prod = document.getElementById('produto').value;
    let nomeProd = prod.split('-')[0];
    console.log(nomeProd);
    let valUni = prod.split('$')[1];
    console.log(valUni);

    let qtde = document.getElementById('quantidade').value;
    console.log(qtde);

    if (!qtde || qtde == 0)  alert('Altere a quantidade do produto!');
    else 
    {
        let valProd = valUni * qtde;

        muda_total(valProd);
    }
    
    //falta atualizar o carrinho
}

function limpar ()
{
    muda_total(0);

    //changing the buying list
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = null;
}

function muda_total (par)
{
    let texto = document.querySelector('p');
    if (!par)   
    {
        texto.innerHTML = `Total: R$ ${par}`;
        total = 0;
    }
    else    
    {
        total = parseInt(total) + parseInt(par);
        texto.innerHTML = `Total: R$ ${total}`;
    }
}