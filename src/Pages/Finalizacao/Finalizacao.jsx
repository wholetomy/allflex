import React, { useState, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Etapas from '../../Components/Etapas/Etapas'
import { FinalizacaoContainer, FinalizacaoDiv, FinalizacaoLeft, FinalizacaoRight, EtapasDiv, Modal } from './Finalizacao.styles';
import Trash from '../../Components/Images/Acessorios/trash.svg';
import Xbutton from '../../Components/Images/Acessorios/x-square.svg';
import axios from 'axios';

export default function Finalizacao() {

  //Início obrigatoriedade dos campos

  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleSolicitarPedido = () => {
    const camposObrigatorios = ['cnpjCpf', 'nomeFazenda', 'telefone', 'email'];
    const camposPreenchidos = camposObrigatorios.every((campo) => clienteInfo[campo].trim() !== '');

    if (camposPreenchidos) {
      // Todos os campos obrigatórios estão preenchidos, continuar com a lógica para solicitar o pedido
      localStorage.setItem('informacoesCliente', JSON.stringify(clienteInfo));
      enviarParaBancoDeDados();
      navigate("/final");
    } else {
      // Exibir o modal de aviso informando que todos os campos obrigatórios devem ser preenchidos
      setErrorMessage('Todos os campos obrigatórios devem ser preenchidos.');
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  //Final obrigatoriedade dos campos

  //Início de funções de solicitar pedido
  const [errorMessage, setErrorMessage] = useState('');

  const handleSuccess = () => {
    // Limpar os campos de clienteInfo
    setClienteInfo({
      clienteAllflex: 'Sim',
      cnpjCpf: '',
      inscricaoEstadual: '',
      nomeFazenda: '',
      telefone: '',
      email: '',
      observacoes: ''
    });

    // Limpar os carrinhos
    setCarrinhoIdentificadores([]);
    setCarrinhoAcessorios([]);

    // Limpar o localStorage
    localStorage.removeItem('informacoesCliente');
    localStorage.removeItem('carrinhoIdentificadores');
    localStorage.removeItem('carrinhoAcessorios');
  };

  const enviarParaBancoDeDados = () => {
    axios.post('https://i9bnl8uzma.execute-api.us-east-1.amazonaws.com/dev/pedido', {
      clienteInfo: clienteInfo,
      carrinhoIdentificadores: carrinhoIdentificadores,
      carrinhoAcessorios: carrinhoAcessorios
    })
      .then(response => {
        console.log('Dados enviados com sucesso:', response.data);
        handleSuccess();
      })
      .catch(error => {
        console.error('Erro ao enviar os dados:', error);
        // Atualizar a mensagem de erro
        setErrorMessage('Erro: ' + error.message);
        // Abrir o modal de erro
        setModalVisible(true);
      });
  };
  //Final de funções de solicitar pedido

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

  const handleMouseOver = (event, content) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      event.target.title = content;
    } else {
      event.target.title = '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue;

    // Verifica o nome do campo para determinar a formatação
    if (name === "cnpjCpf") {
      formattedValue = formatCpfCnpj(value);
    } else if (name === "inscricaoEstadual") {
      formattedValue = formatInscricaoEstadual(value);
    } else {
      formattedValue = value;
    }

    setClienteInfo(prevState => ({
      ...prevState,
      [name]: formattedValue
    }));
  };

  const formatCpfCnpj = (value) => {
    // Remove all non-digits
    const cleanedValue = value.replace(/\D/g, '');

    // Check the length to determine if it's CPF or CNPJ
    if (cleanedValue.length <= 11) {
      // Format CPF
      return cleanedValue.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
    } else {
      // Format CNPJ
      return cleanedValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5');
    }
  };

  const formatInscricaoEstadual = (value) => {
    // Remove all non-digits
    const cleanedValue = value.replace(/\D/g, '');

    // Format Inscrição Estadual
    // Exemplo: 123456789 -> 12.345.678-9
    return cleanedValue.replace(/^(\d{2})(\d{3})(\d{3})(\d{1}).*/, '$1.$2.$3-$4');
  };

  return (
    <>
      <FinalizacaoContainer>
        <EtapasDiv>
          <Etapas etapa={3} />
        </EtapasDiv>
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
                  <span>Digite seu CNPJ/CPF<span className="required">*</span></span>
                  <input
                    type="text"
                    name="cnpjCpf"
                    value={clienteInfo.cnpjCpf}
                    onChange={handleChange}
                  />
                </div>
                {/*  <div className='options-div-small'>
                  <span>Digite seu CNPJ/CPF<span className="required">*</span></span>
                  <input type="text" name="cnpjCpf" value={clienteInfo.cnpjCpf} onChange={handleChange} />
                </div> */}



                <div className='options-div-small'>
                  <span>Inscrição Estadual</span>
                  <input
                    type="text"
                    name="inscricaoEstadual"
                    value={clienteInfo.inscricaoEstadual}
                    onChange={handleChange}
                  />
                </div>

                {/* <div className='options-div-small'>
                  <span>Inscrição Estadual</span>
                  <input type="text" name="inscricaoEstadual" value={clienteInfo.inscricaoEstadual} onChange={handleChange} />
                </div> */}




              </div>
              <div className='options-div'>
                <div className='options-div-long'>
                  <span>Nome da fazenda<span className="required">*</span></span>
                  <input type="text" name="nomeFazenda" maxLength={40} value={clienteInfo.nomeFazenda} onChange={handleChange} />
                </div>
              </div>
              <div className='options-div'>
                <div className='options-div-long'>
                  <span>Digite seu telefone<span className="required">*</span></span>
                  <input type="text" name='telefone' value={clienteInfo.telefone} onChange={handleChange} />
                </div>
              </div>
              <div className='options-div'>
                <div className='options-div-long'>
                  <span>Digite seu e-mail<span className="required">*</span></span>
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
                      <th>Tipo</th>
                      <th>Espécie</th>
                      <th>Opção</th>
                      <th>Macho</th>
                      <th>Fêmea</th>
                      <th>Gravação</th>
                      <th>Cor</th>
                      <th>Fazenda</th>
                      <th>Quantidade</th>
                      <th>Número Inicial</th>
                      <th>Número Final</th>
                      <th>Logo</th>
                      <th>Observação</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrinhoIdentificadores.map((item, index) => (
                      <tr key={index}>
                        <td onMouseOver={(e) => handleMouseOver(e, item.tipo)}>{item.tipo && item.tipo.length > 20 ? `${item.tipo.slice(0, 20)}...` : item.tipo}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.especie)}>{item.especie && item.especie.length > 20 ? `${item.especie.slice(0, 20)}...` : item.especie}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.opcao)}>{item.opcao && item.opcao.length > 20 ? `${item.opcao.slice(0, 20)}...` : item.opcao}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.macho)}>{item.macho && item.macho.length > 20 ? `${item.macho.slice(0, 20)}...` : item.macho}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.femea)}>{item.femea && item.femea.length > 20 ? `${item.femea.slice(0, 20)}...` : item.femea}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.gravacao)}>{item.gravacao && item.gravacao.length > 20 ? `${item.gravacao.slice(0, 20)}...` : item.gravacao}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.cor)}>{item.cor && item.cor.length > 20 ? `${item.cor.slice(0, 20)}...` : item.cor}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.fazenda)}>{item.fazenda && item.fazenda.length > 20 ? `${item.fazenda.slice(0, 20)}...` : item.fazenda}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.quantidade)}>{item.quantidade && item.quantidade.length > 20 ? `${item.quantidade.slice(0, 20)}...` : item.quantidade}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.numeroInicial)}>{item.numeroInicial && item.numeroInicial.length > 20 ? `${item.numeroInicial.slice(0, 20)}...` : item.numeroInicial}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.numeroFinal)}>{item.numeroFinal && item.numeroFinal.length > 20 ? `${item.numeroFinal.slice(0, 20)}...` : item.numeroFinal}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.logo)}>{item.logo ? <img src={item.logo} alt="Logo" /> : 'Não'}</td>
                        <td onMouseOver={(e) => handleMouseOver(e, item.observacao)}>{item.observacao && item.observacao.length > 20 ? `${item.observacao.slice(0, 20)}...` : item.observacao}</td>
                        <td>
                          <img src={Trash} className='trash-icon' onClick={() => handleRemoveIdentificador(index)} alt="trash" />
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
        {modalVisible && (
          <Modal>
            <div className="modal-content">
              <img className='x-button' src={Xbutton} onClick={closeModal} alt="x-button" />
              <h3>Erro</h3>
              <p>{errorMessage}</p>
            </div>
          </Modal>
        )}
      </FinalizacaoContainer>
    </>
  )
}
