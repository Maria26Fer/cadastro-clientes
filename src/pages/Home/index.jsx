import './style.css'
import Trash from '../../assets/trash.svg'
function Home() {

  //Temporario
  const users = [{
    id: 'c15d4cd0-3c91-4b2d-a2f5-efb2ff8411b1',
    name: 'Francisco',
    age: 22,
    email: 'francisco@email.com',
  },
  {
    id: 'cd25e4cd0-3c91-4b2d-a2f5-efb2ff8411b1',
    name: 'Maria',
    age: 26,
    email: 'maria@email.com',
  },
  {
    id: 'cd25e4cd0-4y87-4b2d-a2f5-efb2ff8411b1',
    name: 'Ana',
    age: 36,
    email: 'ana@email.com',
  },
  ]
  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Clientes</h1>
        <input name="nome" type='text' />
        <input name="idade" type='number' />
        <input name="email" type='email' />
        <button type='button'>Cadastrar</button>
      </form>
      {/* Estou mapeando meus usuarios e guardadndo dentro de user. */}
      {users.map(user => (
        <div key={user.id}>
          <div>
            <p>Nome: {user.name}</p>
            <p>Idade: {user.age}</p>
            <p>Email: {user.email}</p>
          </div>
          <button>
            <img src={Trash} width='24px' height='24px'/>
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
