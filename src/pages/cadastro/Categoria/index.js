import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../../components/PageLayout';

function CadastroCategoria() {
  return (
    <PageLayout>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <Link to="/">
        Ir para home
      </Link>
    </PageLayout>
  )
}

export default CadastroCategoria;