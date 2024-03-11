import React from 'react';
import './App.css';

function App(){
    const [nome, setNome] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [sobrenome, setSobrenome] = React.useState('')
    const [senha, setSenha] = React.useState('')

    const handleSubmit = (event) => {
event.preventDefault()

alert(`Nome: ${nome}, Email: ${email}, Sobrenome: ${sobrenome}, Senha: ${senha}`)
    };

    return(

            <form onSubmit={handleSubmit}>
                <h1>Forms</h1>
                <label btmFor="nome">Nome:</label>
                <input type="text" name="nome" id="nome" value={nome} 
                onChange={(e) => setNome(e.target.value)}/>
                <br /> 

                <label btmFor="email">Email:</label>
                <input type="email" name="email" id="email" value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                <br />

                <label btmFor="sobrenome">Sobrenome:</label>
                <input type="text" name="sobrenome" id="sobrenome" value={sobrenome} 
                onChange={(e) => setSobrenome(e.target.value)}/>
                <br />

                <label btmFor="senha">Senha:</label>
                <input type="password" name="senha" id="senha" value={senha} 
                onChange={(e) => setSenha(e.target.value)}/>
                <br />


                            
                    <div className='check'> 
                        
                        <input type="checkbox" name='checkbox' id='check' />
                        <label htmlFor="checkbox">Você esta de acordo com os nossos termos?</label>
                    </div>














                <button type="submit"> Enviar</button>


            </form>
    );

}

export default App;