let total = 1400;

function adicionar () 
{
    //initializating the variables
    let prod = document.getElementById('produto').value;
    let nomeProd = prod.split('-')[0];
    let valUni = prod.split('$')[1];
    let qtde = document.getElementById('quantidade').value;

    //alerts that it's a repeated item
    if (carrinho.textContent.includes(`${nomeProd}`))
        alert('Lembre-se que já adicionou esse produto ao carrinho! :)');

    //prevents a null quantify of a item to be added
    if (!qtde || qtde == 0)  
        alert('Altere a quantidade do produto!');
    else 
    {
        let valProd = valUni * qtde;
        muda_total(valProd);

        //updating the buying list
        let carrinho = document.getElementById('lista-produtos');        
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${qtde}x</span> ${nomeProd} <span class="texto-azul">R$ ${valUni}</span>
      </section>`;
    }
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
    if (!par)   //par == 0
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