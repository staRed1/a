import { useState } from "react";
export default function Main(){
    const [nome,setNome] = useState("");
    const [telefone,setTelefone] = useState();
    const [listaContatos,setContatos] = useState([]);

    const registrar = (event) => {
        event.proventDefault();
        alert("REGISTRATO COM SUCESSO")
        setContatos([...listaContatos,
            {
                nomeSalvo: nome,
                telefoneSalvo: telefone
            }
        ]);
    }
    console.table(listaContatos);
    return(
        <main>
            <form onSubmit={registrar}>
                <label htmlFor="nome"></label>
                <imput
                    type="text"
                    name="nome-contato"
                    id="nome"
                    onChange={(event)=> setNome(event.taget.value)}/>
                    {nome}
            </form>
            <form>
            <label For ="telefone">Telefone</label>
            |{/*onChange= Atributo que quando altera o input dispara uma função--!>*/}
            {/*} setTelefone /salve a informação/ (informacao)*/}
            <imput
                    type="tel"
                    name=""
                    id=""
                    onChange={(event)=> setTelefone(event.taget.value)}/>
                    {telefone}
                    <br></br>
                    ,<button type="submit">Enviar</button>
            </form>
        </main>
    )
}
