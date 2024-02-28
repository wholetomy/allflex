import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Etapas from '../../Components/Etapas/Etapas'
import { FinalizacaoContainer, FinalizacaoDiv, FinalizacaoLeft, FinalizacaoRight } from './Finalizacao.styles';
import Trash from '../../Components/Images/Acessorios/trash.svg';

export default function Finalizacao() {

  //Início de funções para pegar o carrinho de acessórios
  const [carrinhoIdentificadores, setCarrinhoIdentificadores] = useState([]);
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('carrinhoIdentificadores'));
    if (savedCart) {
      setCarrinhoIdentificadores(savedCart);
    }
  }, []);

  const handleRemoveIdentificador = (index) => {
    const updatedCart = [...carrinhoIdentificadores];
    updatedCart.splice(index, 1);
    setCarrinhoIdentificadores(updatedCart);
    updateLocalStorageIdentificadores(updatedCart);
  };

  const updateLocalStorageIdentificadores = (cart) => {
    localStorage.setItem('carrinhoIdentificadores', JSON.stringify(cart));
  };
  //Final de funções para pegar o carrinho de acessórios

  //Início de funções para pegar o carrinho de Acessórios
  const [carrinhoAcessorios, setCarrinhoAcessorios] = useState([]);

  useEffect(() => {
    // Carregar carrinho do localStorage ao montar o componente
    const savedCart = JSON.parse(localStorage.getItem('carrinhoAcessorios'));
    if (savedCart) {
      setCarrinhoAcessorios(savedCart);
    }
  }, []);

  const handleAddUnit = (index) => {
    const updatedCart = [...carrinhoAcessorios];
    updatedCart[index].quantidade += 1;
    setCarrinhoAcessorios(updatedCart);
    updateLocalStorageAcessorios(updatedCart);
  };

  const handleRemoveUnit = (index) => {
    const updatedCart = [...carrinhoAcessorios];
    if (updatedCart[index].quantidade > 1) {
      updatedCart[index].quantidade -= 1;
      setCarrinhoAcessorios(updatedCart);
      updateLocalStorageAcessorios(updatedCart);
    } else {
      // Remove o item do carrinho se a quantidade for igual a 0
      updatedCart.splice(index, 1);
      setCarrinhoAcessorios(updatedCart);
      updateLocalStorageAcessorios(updatedCart);
    }
  };

  const handleRemoveAcessorio = (index) => {
    const updatedCart = [...carrinhoAcessorios];
    updatedCart.splice(index, 1);
    setCarrinhoAcessorios(updatedCart);
    updateLocalStorageAcessorios(updatedCart);
  };

  const updateLocalStorageAcessorios = (cart) => {
    localStorage.setItem('carrinhoAcessorios', JSON.stringify(cart));
  };
  //Final de funções para pegar o carrinho de Acessórios

  // Inicio definindo estados para os inputs, dropdowns e textareas
  const [clienteInfo, setClienteInfo] = useState({
    clienteAllflex: 'Sim', // Valor padrão definido como "Sim"
    cnpjCpf: '',
    inscricaoEstadual: '',
    nomeFazenda: '',
    telefone: '',
    email: '',
    observacoes: ''
  });

  useEffect(() => {
    const savedClienteInfo = JSON.parse(localStorage.getItem('informacoesCliente'));
    if (savedClienteInfo) {
      setClienteInfo(savedClienteInfo);
    }
  }, []);

  // Atualiza o estado quando os campos mudam
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClienteInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Função para lidar com o clique no botão "Solicitar pedido"
  const handleSolicitarPedido = () => {
    // Armazenar os dados no localStorage
    localStorage.setItem('informacoesCliente', JSON.stringify(clienteInfo));
    // Redirecionar ou realizar outra ação após armazenar os dados
    // Aqui você pode redirecionar para outra página ou fazer qualquer outra coisa necessária
  };

  // Final definindo estados para os inputs, dropdowns e textareas


  return (
    <>
      <FinalizacaoContainer>
        <Etapas etapa={3} />
        <FinalizacaoDiv>
          <FinalizacaoLeft>
            <div className='title'>
              <span>3</span>
              <h3>Finalize seu pedido</h3>
            </div>
            <div className='options-div-master'>
              <div className='options-div'>
                <div className='options-div-long'>
                  <span>Já é cliente Allflex?</span>
                  <select name="clienteAllflex" value={clienteInfo.clienteAllflex} onChange={handleChange}>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                  </select>
                </div>
              </div>
              <div className='options-div'>
                <div className='options-div-small'>
                  <span>Digite seu CNPJ/CPF</span>
                  <input type="text" name="cnpjCpf" value={clienteInfo.cnpjCpf} onChange={handleChange} />
                </div>
                <div className='options-div-small'>
                  <span>Inscrição Estadual</span>
                  <input type="text" name="inscricaoEstadual" value={clienteInfo.inscricaoEstadual} onChange={handleChange} />
                </div>
              </div>
              <div className='options-div'>
                <div className='options-div-long'>
                  <span>Nome da fazenda</span>
                  <input type="text" name="nomeFazenda" value={clienteInfo.nomeFazenda} onChange={handleChange} />
                </div>
              </div>
              <div className='options-div'>
                <div className='options-div-long'>
                  <span>Digite seu telefone</span>
                  <input type="text" name="telefone" value={clienteInfo.telefone} onChange={handleChange} />
                </div>
              </div>
              <div className='options-div'>
                <div className='options-div-long'>
                  <span>Digite seu e-mail</span>
                  <input type="text" name="email" value={clienteInfo.email} onChange={handleChange} />
                </div>
              </div>
              <div className='options-div'>
                <div className='options-div-long'>
                  <span>Observações sobre o pedido</span>
                  <textarea rows={4} name="observacoes" value={clienteInfo.observacoes} onChange={handleChange} placeholder='Escreva em caso de urgência no pedido, observação sobre boleto e dia do pagamento' />
                </div>
              </div>
            </div>
            <div className='options-div-buttons'>
              <div className='options-div-small'>
                <Link to='/acessorios'>
                  <button className='button button-voltar'>Voltar</button>
                </Link>
              </div>
              <div className='options-div-small'>
                <button className='button' onClick={handleSolicitarPedido}>Solicitar pedido</button>
              </div>
            </div>
          </FinalizacaoLeft>
          <FinalizacaoRight>
            <div className='identificadores-div'>
              <h1>Identificadores</h1>
              {carrinhoIdentificadores.length === 0 ? (
                <p>Carrinho Vazio</p>
              ) : (
                <table className="identificadores-table">
                  <thead>
                    <tr>
                      <th>Espécie</th>
                      <th>Tipo</th>
                      <th>Macho</th>
                      <th>Fêmea</th>
                      <th>Cor</th>
                      <th>Quantidade</th>
                      <th>Número Inicial</th>
                      <th>Número Final</th>
                      <th>Vezes</th>
                      <th>Código de Barras</th>
                      <th>Logo</th>
                      <th>Observação</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrinhoIdentificadores.map((item, index) => (
                      <tr key={index}>
                        <td>{item.especie}</td>
                        <td>{item.tipo}</td>
                        <td>{item.macho}</td>
                        <td>{item.femea}</td>
                        <td>{item.cor}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.numeroInicial}</td>
                        <td>{item.numeroFinal}</td>
                        <td>{item.vezes}</td>
                        <td>{item.codigoDeBarras}</td>
                        <td><img src={item.logo} alt="Logo" /></td>
                        <td>{item.observacao}</td>
                        <td>
                          <img src={Trash} className='trash-icon' onClick={() => handleRemoveIdentificador(index)} alt="trash" />
                          {/* <button onClick={() => handleRemoveIdentificador(index)}>X</button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className='acessorios-div'>
              <h1>Acessórios</h1>
              {carrinhoAcessorios.length === 0 ? (
                <p>Carrinho Vazio</p>
              ) : (
                <table className='acessorios-table'>
                  <thead>
                    <tr>
                      <th>Nome do Acessório</th>
                      <th>Quantidade</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrinhoAcessorios.map((item, index) => (
                      <tr key={index}>
                        <td>{item.acessorio}</td>
                        <td>
                          <button className='button-quantidade' onClick={() => handleRemoveUnit(index)}>-</button>
                          {item.quantidade}
                          <button className='button-quantidade' onClick={() => handleAddUnit(index)}>+</button>
                        </td>
                        <td>
                          <img src={Trash} className='trash-icon' onClick={() => handleRemoveAcessorio(index)} alt="trash" />
                          {/* <button onClick={() => handleRemoveAcessorio(index)}>X</button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </FinalizacaoRight>
        </FinalizacaoDiv>
      </FinalizacaoContainer>
    </>
  )
}
