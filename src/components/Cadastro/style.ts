import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

// disposição do meu formulario em linha
export const Formulario = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 3px;
`
// estilo do meu botão principal de adicionar
export const Button = styled.button`
  background: ${variaveis.grafite};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 78px; /* Defina o tamanho fixo desejado */
  height: 35px; /* Defina a altura fixa desejada */

  &:hover {
    background: ${variaveis.amarelo};
  }
`
// Quando o UseState for acionado no botão de Editar, ele vai trocar o nome para SALVAR e deve ter esta cor verde
export const ButtonSalvar = styled(Button)`
  background: ${variaveis.verde};
  color: ${variaveis.branco};
  width: 78px; /* Defina o tamanho fixo desejado */
  height: 35px; /* Defina a altura fixa desejada */

  &:hover {
    background: ${variaveis.verdeHover};
  }
`
// Aqui passo por função no styled() os atributos do meu Botão e trato apenas o Hover para que não fique com o mesmo hover verde
export const CancelButton = styled(Button)`
  background-color: ${variaveis.vermelho};
  width: 78px; /* Defina o tamanho fixo desejado */
  height: 35px; /* Defina a altura fixa desejada */

  &:hover {
    background: ${variaveis.vermelhoHover};
  }
`
// Aqui estou definindo um regra geral para os inputs
export const InputNomeRegistrado = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid ${variaveis.cinzaLight};
  background-color: transparent;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 300px;
`
// Agora passando uma função dentro do styled ()
// Aqui está recebendo por função as informações do (InputNomeRegistrado) e adiciono um espacamento e margin
export const InputTelefoneRegistrado = styled(InputNomeRegistrado)`
  width: 215px;
`
// Aqui está recebendo por função as informações do (InputNomeRegistrado) e adiciono um espacamento e margin
export const InputEmailRegistrado = styled(InputNomeRegistrado)`
  width: 300px;
`
