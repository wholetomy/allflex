import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { IdentificadoresContainer, IdentificadoresDiv, IdentificadoresLeft, IdentificadoresRight, LogoViewer, Carrinho } from './Identificadores.styles'
import Etapas from '../../Components/Etapas/Etapas'
import { Link } from 'react-router-dom';
import { tiposIdentificador, especies, tiposMacho, tiposFemea, tiposGravacao } from '../../Components/Dropdowns/Identificadores.dropdowns.jsx';
import shopingCartIcon from '../../Components/Images/Identificadores/shopping-cart-icon.svg';
import Trash from '../../Components/Images/Acessorios/trash.svg';
import { FemEletHdxFdxSVG, FemGrandeSVG, FemMaxiSVG, FemMediaSVG, FemOvinoCaprinoSVG, FemPequenaSVG, FemSuinoOvinoSVG, MachoGrandeSVG, MachoMaxiSVG, MachoMedioSVG, MachoOvinoCaprinoSVG, MachoPequenoSVG, MachoTipTagSVG } from '../../Components/SVG/Identificadores.svg.jsx';


export default function Inicio() {


  // Início chamando a API
  const [dataAPI, setDataAPI] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://i9bnl8uzma.execute-api.us-east-1.amazonaws.com/dev/teste2');
        setDataAPI(response.data.data);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);
  // Final chamando a API

  // Início do State e Handle de cores
  const [selectedColor, setSelectedColor] = useState('Amarelo');
  const [hexCorSelecionada, setHexCorSelecionada] = useState('');

  const CoresDisponiveis = [ // Isso precisa vir do banco...
    { id: 1, hex: '#EEEE22', nome: 'Amarelo' },
    { id: 2, hex: '#22BAD8', nome: 'Azul' },
    { id: 3, hex: '#FFFFFF', nome: 'Branco' },
    { id: 4, hex: '#F4901D', nome: 'Laranja' },
    { id: 5, hex: '#71AF36', nome: 'Verde' },
    { id: 6, hex: '#DD3333', nome: 'Vermelho' }
  ];

  const handleColorChange = (event) => {
    const corSelecionada = event.target.value;
    setSelectedColor(corSelecionada);
    const hexCorSelecionada = getHexColor(corSelecionada);
    setHexCorSelecionada(hexCorSelecionada);
  }

  const getHexColor = (nomeCor) => {
    const corEncontrada = CoresDisponiveis.find(cor => cor.nome === nomeCor);
    return corEncontrada ? corEncontrada.hex : '';
  }
  // Final do State e Handle de cores

  //Inicio de funções para abrir o carrinho
  const [showCartScreen, setShowCartScreen] = useState(false);

  const handleCartButtonClick = () => {
    setShowCartScreen(true);
  };

  const handleCartScreenClose = () => {
    setShowCartScreen(false);
  };
  //Final de funções para abrir o carrinho

  //Inicio de funções para adicionar e remover itens falsos no carrinho
  const [cartItems, setCartItems] = useState([]);
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedMachoType, setSelectedMachoType] = useState('');
  const [selectedFemeaType, setSelectedFemeaType] = useState('');
  const [selectedRecordingType, setSelectedRecordingType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [initialNumber, setInitialNumber] = useState('');
  const [finalNumber, setFinalNumber] = useState('');
  const [farmName, setFarmName] = useState('');
  const [observation, setObservation] = useState('');
  const [optionType, setOptionType] = useState('');

  // Função utilitária para encontrar o nome da espécie com base no código de espécie
  const getSpecieName = (codEspecie) => {
    const especie = dataAPI.especie.find(e => e.cod_especie == codEspecie);
    return especie ? especie.especie : '';
  };

  const getTypeName = (typeCode) => {
    const tipo_identificador = dataAPI.tipo_identificador.find(t => t.cod_tipo_identificador == typeCode);
    return tipo_identificador ? tipo_identificador.tipo_identificador : '';
  };

  const getMachoTypeName = (machoTypeCode) => {
    const macho = dataAPI.macho.find(m => m.cod_macho == machoTypeCode);
    return macho ? macho.macho : '';
  };

  const getFemeaTypeName = (femeaTypeCode) => {
    const femea = dataAPI.femea.find(f => f.cod_femea == femeaTypeCode);
    return femea ? femea.femea : '';
  };

  const getRecordingTypeName = (recordingTypeCode) => {
    const tipo_gravacao = dataAPI.tipo_gravacao.find(t => t.cod_tipo_gravacao == recordingTypeCode);
    return tipo_gravacao ? tipo_gravacao.tipo_gravacao : '';
  };

  const addToCart = () => {
    const newItem = {
      especie: getSpecieName(selectedSpecies),
      tipo: getTypeName(selectedType),
      macho: getMachoTypeName(selectedMachoType),
      femea: getFemeaTypeName(selectedFemeaType),
      gravacao: getRecordingTypeName(selectedRecordingType),
      cor: selectedColor,
      quantidade: quantity,
      numeroInicial: initialNumber,
      numeroFinal: finalNumber,
      fazenda: farmName,
      logo: logoUrl,
      observacao: observation,
    };

    // Atualiza o estado local do carrinho
    setCartItems([...cartItems, newItem]);
    setLogoUrl(''); // Limpa URL do logo após adicionar ao carrinho

    // Salva os itens do carrinho no localStorage
    const carrinhoAtualizado = [...cartItems, newItem];
    localStorage.setItem('carrinhoIdentificadores', JSON.stringify(carrinhoAtualizado));
  };

  // Função para remover um item do carrinho
  const removeItemFromCart = (index) => {
    // Remove o item do localStorage
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    localStorage.setItem('carrinhoIdentificadores', JSON.stringify(newCartItems));

    // Atualiza o estado local do carrinho
    setCartItems(newCartItems);
  };

  // Carrega os itens do carrinho do localStorage ao montar o componente
  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem('carrinhoIdentificadores');
    if (carrinhoSalvo) {
      setCartItems(JSON.parse(carrinhoSalvo));
    }
  }, []);
  //Final de funções para adicionar e remover itens falsos no carrinho

  //Inicio de Logo
  const [logoUrl, setLogoUrl] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setLogoUrl(reader.result); // Atualiza o estado com o URL do logo
        };
      } else {
        alert('Por favor, selecione um arquivo JPEG ou PNG.');
      }
    }
  };
  //Final de Logo

  //Inicio Mapeie os nomes dos tipos para os componentes SVGs
  const machoSVGs = {
    /* Esses valores dependem da tabela SELECT * FROM macho */
    1: <MachoPequenoSVG />,
    2: <MachoMedioSVG />,
    3: <MachoGrandeSVG />,
    4: <MachoPequenoSVG />,
    5: <MachoPequenoSVG />,
    6: <MachoPequenoSVG />,
    7: <MachoPequenoSVG />,
    8: <MachoMedioSVG />,
    9: <MachoGrandeSVG />,
    10: <MachoMaxiSVG />,
    11: <MachoPequenoSVG />,
    12: <MachoOvinoCaprinoSVG />,
    13: <MachoTipTagSVG />,
  };

  const femeaSVGs = {
    /* Esses valores dependem da tabela SELECT * FROM femea */
    1: <FemEletHdxFdxSVG />,
    2: <FemEletHdxFdxSVG />,
    3: <FemPequenaSVG />,
    4: <FemGrandeSVG />,
    5: <FemMediaSVG />,
    6: <FemMaxiSVG />,
    7: <FemOvinoCaprinoSVG />,
    8: <FemSuinoOvinoSVG />
  };
  //Final Mapeie os nomes dos tipos para os componentes SVGs

  //Inicio Funções de Limpar os valores iniciais e finais
  useEffect(() => {
    // Limpar os valores de initialNumber e finalNumber quando selectedType mudar para um valor diferente de 2
    if (selectedType !== 2) {
      setInitialNumber('');
      setFinalNumber('');
    }
  }, [selectedType]);
  //Inicio Funções de Limpar os valores iniciais e finais

  return (
    <>
      {dataAPI ?
        <IdentificadoresContainer>
          <Etapas etapa={1} />
          <IdentificadoresDiv>
            <IdentificadoresLeft>
              <div className='title'>
                <span>1</span>
                <h3>Escolha seus identificadores</h3>
              </div>
              <div className='options-div-master'>
                <div className='options-div'>
                  <div className='options-div-long'>
                    <span>Tipo do Identificador</span>
                    <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
                      <option value="">Selecione...</option>
                      {dataAPI.tipo_identificador.map((tipo) => (
                        <option key={tipo.cod_tipo_identificador} value={tipo.cod_tipo_identificador}>{tipo.tipo_identificador}</option>
                      ))}
                    </select>
                  </div>
                </div>
                {selectedType == 1 && (
                  <div className='options-div'>
                    <div className='options-div-long'>
                      <span>Opção do Identificador</span>
                      <select value={optionType} onChange={(e) => setOptionType(e.target.value)}>
                        <option value="Inviolável">Inviolável</option>
                        <option value="Reutilizável">Reutilizável</option>
                      </select>
                    </div>
                  </div>
                )}
                <div className='options-div'>
                  <div className='options-div-long'>
                    <span>Selecione a espécie</span>
                    <select value={selectedSpecies} onChange={(e) => setSelectedSpecies(e.target.value)}>
                      <option value="">Selecione...</option>
                      {dataAPI.especie.filter(e => e.cod_tipo_identificador == selectedType).map((especie) => (
                        <option key={especie.cod_especie} value={especie.cod_especie}>{especie.especie}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='options-div'>
                  <div className='options-div-small'>
                    <span>Tipo de Macho</span>
                    <select value={selectedMachoType} onChange={(e) => setSelectedMachoType(e.target.value)}>
                      <option value="">Selecione...</option>
                      {dataAPI.macho.filter(e => e.cod_especie == selectedSpecies).map((macho) => (
                        <option key={macho.cod_macho} value={macho.cod_macho}>{macho.macho}</option>
                      ))}
                    </select>
                  </div>
                  <div className='options-div-small'>
                    <span>Tipo de Fêmea</span>
                    <select value={selectedFemeaType} onChange={(e) => setSelectedFemeaType(e.target.value)}>
                      <option value="">Selecione...</option>
                      {dataAPI.machos_femeas_depara.filter(e => e.cod_macho == selectedMachoType)
                        .map((depara) => {
                          const femea = dataAPI.femea.find(f => f.cod_femea === depara.cod_femea);
                          if (femea) {
                            return <option key={femea.cod_femea} value={femea.cod_femea}>{femea.femea}</option>;
                          }
                          return null;
                        })}
                    </select>
                  </div>
                </div>
                <div className='options-div'>
                  <div className='options-div-long'>
                    <span>Tipo de gravação</span>
                    <select value={selectedRecordingType} onChange={(e) => setSelectedRecordingType(e.target.value)}>
                      <option value="">Selecione...</option>
                      {dataAPI.femeas_tipo_gravacoes_depara.filter(e => e.cod_femea == selectedFemeaType)
                        .map((depara) => {
                          const tipo_gravacao = dataAPI.tipo_gravacao.find(t => t.cod_tipo_gravacao === depara.cod_tipo_gravacao);
                          if (tipo_gravacao) {
                            return <option key={tipo_gravacao.cod_tipo_gravacao} value={tipo_gravacao.cod_tipo_gravacao}>{tipo_gravacao.tipo_gravacao}</option>
                          }
                          return null;
                        })}
                    </select>
                  </div>
                </div>
                <div className='options-div'>
                  <div className='options-div-small'>
                    <span>Cores disponíveis</span>
                    <select value={selectedColor} onChange={handleColorChange}>
                      {CoresDisponiveis.map(cor => (
                        <option key={cor.id} value={cor.nome}>{cor.nome}</option>
                      ))}
                    </select>
                  </div>
                  <div className='options-div-small'>
                    <span>Quantidade</span>
                    <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                  </div>
                </div>
                {selectedType == 2 && (
                  <div className='options-div'>
                    <div className='options-div-small'>
                      <span>Número Inicial</span>
                      <input type="text" value={initialNumber} onChange={(e) => setInitialNumber(e.target.value)} />
                    </div>
                    <div className='options-div-small'>
                      <span>Número Final</span>
                      <input type="text" value={finalNumber} onChange={(e) => setFinalNumber(e.target.value)} />
                    </div>
                  </div>
                )}
                <div className='options-div'>
                  <div className='options-div-long'>
                    <span>Nome da fazenda</span>
                    <input type="text" value={farmName} onChange={(e) => setFarmName(e.target.value)} />
                  </div>
                </div>
                <div className='options-div'>
                  <div className='options-div-small'>
                    <span>Logo</span>
                    <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
                  </div>
                </div>
                <div className='options-div'>
                  <div className='options-div-long'>
                    <span>Observação</span>
                    <textarea placeholder='Explique sobre alguma personalização da sua gravação' value={observation} onChange={(e) => setObservation(e.target.value)} />
                  </div>
                </div>
              </div>
              <div className='options-div-buttons'>
                <div className='options-div-small'>
                  <button className='button' onClick={addToCart}>Adicionar</button>
                </div>
                <div className='options-div-small'>
                  <div className='button-with-notification'>
                    <button className='button' onClick={handleCartButtonClick}>
                      <img src={shopingCartIcon} alt="CarrinhoIcon" />
                      Carrinho
                    </button>
                    {cartItems.length > 0 && <span className='notification'>{cartItems.length}</span>}
                  </div>
                </div>
              </div>
            </IdentificadoresLeft>

            {showCartScreen ? (
              <Carrinho
                cartItems={cartItems}
                logoUrl={logoUrl}
                handleCartScreenClose={() => setShowCartScreen(false)}
                removeItemFromCart={removeItemFromCart}
              >
                <div className='carrinho-title-div'>
                  <h1>Carrinho</h1>
                  <div className='proxima-etapa-button-div'>
                    <button className='voltar-button' onClick={handleCartScreenClose}>Voltar</button>
                    <Link to="/acessorios">
                      <button className='proxima-etapa-button'>Próxima etapa</button>
                    </Link>
                  </div>
                </div>
                {cartItems.length > 0 ? (
                  <>
                    <div className='carrinho-table-div'>
                      <table className="carrinho-table">
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
                          {cartItems.map((item, index) => (
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
                                {/* <button onClick={() => removeItemFromCart(index)}>X</button> */}
                                <img src={Trash} className='trash-icon' onClick={() => removeItemFromCart(index)} alt="trash" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <div className="carrinho-vazio">
                    <p>O carrinho está vazio</p>
                  </div>
                )}
              </Carrinho>
            ) : (
              <IdentificadoresRight corSelecionada={getHexColor(selectedColor)}>
                <div className='macho-div'>
                  <h1>Macho</h1>
                  <div className='macho-cor'>
                    {machoSVGs[selectedMachoType]}
                  </div>
                </div>
                <div className='femea-div'>
                  <h1>Fêmea</h1>
                  <div className='femea-cor'>
                    {femeaSVGs[selectedFemeaType]}
                  </div>
                </div>
              </IdentificadoresRight>
            )}
          </IdentificadoresDiv>
        </IdentificadoresContainer>
        :
        <div>POR UM LOADING AQUI SEILA</div>
      }
    </>
  )
}
