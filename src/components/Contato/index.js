import React from 'react'
import Links from '../../components/Links'

function Contatos(){
    return(
        <div className="descContato">
            <h2>Vamos conversar</h2>
            <span>Acesse abaixo meu email e se preferir um contato mais direto, envie uma mensagem em meu WhatsApp: </span><br/><br/>

            <span><a href="mailto:matheus.abentof@gmail.com"><i class="fas fa-envelope icone-envelope"></i>  matheus.abentof@gmail.com</a></span><br/>
            <span><a href="https://api.whatsapp.com/send?phone=5511975507168" target="_blank" rel="noreferrer"><i class="fab fa-whatsapp"></i>  (11) 97550-7168</a></span><br/><br/><br/>

            <span>Outros contatos:</span>
            <span><Links /></span>
        </div>
    )
}

export default Contatos;