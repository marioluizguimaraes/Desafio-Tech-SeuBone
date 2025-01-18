import './InputPass.css'

function InputPass(){

    return(
        <form action="" className='inputpassword'>
            <label For="inputpass">Inserir senha</label>
            <input type="password" name="" id="inputpass" placeholder='Digite sua senha'/>
            <button>Acessar</button>
        </form>        
    )
}

export default InputPass