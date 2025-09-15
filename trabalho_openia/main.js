let chat = document.getElementById('chat');

function criar(){
    let pergunta = document.getElementById('criar').value;
    
    const KEY = ``;
    const URL = `https://api.openai.com/v1/chat/completions`;


    fetch(URL, {
        method: 'POST', //post, get, delete, put
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${KEY}`
        },
        body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: `Cria uma música com o genero ${ musica.estilo }, a letra baseada em ${musica.letra} e o nome vai ser ${musica.nome}. ` },
                { role: 'user', content: criar },
            ],
            max_tokens: 50
        })
    })
    .then( resp => resp.json() )
    .then( resp => {
        console.log(resp);

        let col_perg = document.createElement('div');
        col_perg.classList.add('col-12', 'd-flex', 'justify-content-end');

        let col_resp = document.createElement('div');
        col_resp.classList.add('col-12', 'd-flex', 'justify-content-start');

        let card_perg = document.createElement('div');
        card_perg.classList.add('card', 'p-2', 'm-1', 'bg-primary', 'text-end');
        card_perg.innerText = pergunta;

        let card_resp = document.createElement('div');
        card_resp.classList.add('card', 'p-2', 'm-1', 'bg-warning', 'text-start');
        card_resp.innerText = personagem.nome + ' diz: ' + resp.choices[0].message.content;

        let foto = document.createElement('img');
        foto.setAttribute('src', personagem.foto);
        foto.setAttribute('width', "70px");
        col_resp.appendChild(foto);
        
        col_perg.appendChild(card_perg);
        col_resp.appendChild(card_resp);

        chat.appendChild(col_perg);
        chat.appendChild(col_resp);


    } )
    .catch(erro => {
        console.log(erro);
    })
    .finally(()=>{
        console.log('Finalizado');
    })

}