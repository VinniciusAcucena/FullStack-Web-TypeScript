export default function Page() {

    const usuarios = [
        {id: 1, nome: 'Vinnicius', email: 'V@email.com'},
        {id: 1, nome: 'Maria', email: 'A@email.com'},
        {id: 1, nome: 'João', email: 'J@email.com'},
        {id: 1, nome: 'Larissa', email: 'L@email.com'},
    ]

    const list = usuarios
                    .map( usuario => 
                        <li key={usuario.id}>
                            {usuario.nome} ( {usuario.email} )
                        </li>
                    )

    return (
        <ul>
            {list}
        </ul>
    )
}