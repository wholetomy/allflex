import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IdentificadoresContainer, IdentificadoresDiv, IdentificadoresLeft, IdentificadoresRight, Modal, Carrinho, EtapasDiv } from './Identificadores.styles'
import Etapas from '../../Components/Etapas/Etapas'
import { Link } from 'react-router-dom';
import shopingCartIcon from '../../Components/Images/Identificadores/shopping-cart-icon.svg';
import Trash from '../../Components/Images/Acessorios/trash.svg';
import ImagemGado from '../../Components/Images/Identificadores/gado-com-brinco2.jpg';
import Xbutton from '../../Components/Images/Acessorios/x-square.svg';
import { FemEletHdxFdxSVG, FemGrandeSVG, FemMaxiSVG, FemMediaSVG, FemOvinoCaprinoSVG, FemPequenaSVG, FemSuinoOvinoSVG, MachoGrandeSVG, MachoMaxiSVG, MachoMedioSVG, MachoOvinoCaprinoSVG, MachoPequenoSVG, MachoTipTagSVG } from '../../Components/SVG/Identificadores.svg.jsx';

export default function Inicio() {

  // Início chamando a API
  const [dataAPI, setDataAPI] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://i9bnl8uzma.execute-api.us-east-1.amazonaws.com/dev/data');
        setDataAPI(response.data.data);
      } catch (error) {
        console.error('Ocorreu um erro ao buscar os dados:', error);
      }
    };

    fetchData();
  }, []);
  // Final chamando a API

  // Início do State e Handle de cores
  const [selectedColor, setSelectedColor] = useState('Amarelo')
  const [hexCorSelecionada, setHexCorSelecionada] = useState('');

  const handleColorChange = (event) => {
    const corSelecionada = event.target.value;
    setSelectedColor(corSelecionada);
    const hexCorSelecionada = getHexColor(corSelecionada);
    setHexCorSelecionada(hexCorSelecionada);
  }

  const getHexColor = (nomeCor) => {
    const corEncontrada = dataAPI.cores.find(cor => cor.cores === nomeCor);
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

  //Inicio de funções para adicionar e remover itens no carrinho
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
  const [optionType, setOptionType] = useState('Não aplicável');

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

  const clearFields = () => {
    setSelectedSpecies('');
    setSelectedType('');
    setSelectedMachoType('');
    setSelectedRecordingType('');
    setOptionType('Não aplicável');
    setSelectedColor('Amarelo');
    setQuantity('');
    setFinalNumber('');
    setFarmName('');
    setObservation('');
    setInitialNumber('');
    setSelectedFemeaType('');
    setLogoUrl('');
  };

  const addToCart = () => {
    if (!selectedType
      || (!optionType && selectedType == 1)
      || !selectedSpecies
      || !selectedMachoType
      || !selectedFemeaType
      || !selectedRecordingType
      || !selectedColor
      || !quantity
      || !farmName
      || (selectedType == 2 && selectedRecordingType != 5 && !initialNumber)
      || (selectedType == 2 && selectedRecordingType != 5 && !finalNumber)
    ) {
      chamarModal('Todos os campos obrigatórios devem ser preenchidos.')
      return;
    }

    const newItem = {
      tipo: getTypeName(selectedType),
      especie: getSpecieName(selectedSpecies),
      macho: getMachoTypeName(selectedMachoType),
      femea: getFemeaTypeName(selectedFemeaType),
      gravacao: getRecordingTypeName(selectedRecordingType),
      opcao: optionType,
      cor: selectedColor,
      quantidade: quantity,
      numeroInicial: initialNumber,
      numeroFinal: finalNumber,
      fazenda: farmName,
      logo: logoUrl,
      observacao: observation,
    };

    // Atualizar o estado local do carrinho
    setCartItems([...cartItems, newItem]);
    setLogoUrl(''); // Limpar URL do logo após adicionar ao carrinho

    // Salvar os itens do carrinho no localStorage
    const carrinhoAtualizado = [...cartItems, newItem];
    localStorage.setItem('carrinhoIdentificadores', JSON.stringify(carrinhoAtualizado));

    // Limpar os campos após adicionar ao carrinho
    clearFields();
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
  //Final de funções para adicionar e remover itens no carrinho

  //Inicio de Logo
  const [logoUrl, setLogoUrl] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileType = file.type;
      const fileSize = file.size;
      const maxSize = 5 * 1024 * 1024; // 5MB em bytes
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
        if (fileSize > maxSize) {
          chamarModal('O tamanho do arquivo excede 5MB. Por favor, selecione um arquivo menor.');
          return;
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        console.log('arquivo:', file)
        reader.onload = () => {
          // Atualiza o estado com o URL do logo
          setLogoUrl(reader.result);
        };
      } else {
        chamarModal('Por favor, selecione um arquivo JPEG ou PNG.');
      }
    }
  };

  const chamarModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  //Final de Logo

  //Inicio Mapeie os nomes dos tipos para os componentes SVGs
  const machoSVGs = {
    /* Esses valores dependem da tabela SELECT * FROM macho */
    1: <MachoPequenoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    2: <MachoMedioSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    3: <MachoGrandeSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    4: <MachoPequenoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    5: <MachoPequenoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    6: <MachoPequenoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    7: <MachoPequenoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    8: <MachoMedioSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    9: <MachoGrandeSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    10: <MachoMaxiSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    11: <MachoPequenoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    12: <MachoOvinoCaprinoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    13: <MachoTipTagSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
  };

  const femeaSVGs = {
    /* Esses valores dependem da tabela SELECT * FROM femea */
    1: <FemEletHdxFdxSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    2: <FemEletHdxFdxSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    3: <FemPequenaSVG text={farmName} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    4: <FemGrandeSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    5: <FemMediaSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    6: <FemMaxiSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    7: <FemOvinoCaprinoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
    8: <FemSuinoOvinoSVG text={farmName} uploadedFile={logoUrl} initialNumber={initialNumber} typeRecording={selectedRecordingType} />,
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

  //Início de funções para lidar com os dropdowns
  // Função para controlar o estado de habilitação dos dropdowns com base nas seleções
  const handleDropdownEnabled = (dropdown, value) => {
    switch (dropdown) {
      case 'optionType':
        return selectedType !== '';
      case 'selectedSpecies':
        return selectedType !== '';
      case 'selectedMachoType':
        return selectedSpecies !== '';
      case 'selectedFemeaType':
        return selectedMachoType !== '';
      case 'selectedRecordingType':
        return selectedFemeaType !== '';
      default:
        return false;
    }
  };

  // Função para lidar com a alteração de uma seleção
  const handleSelectionChange = (dropdown, value) => {
    switch (dropdown) {
      case 'selectedType':
        setSelectedType(value);
        setOptionType('');
        setSelectedSpecies('');
        setSelectedMachoType('');
        setSelectedFemeaType('');
        setSelectedRecordingType('');
        break;
      case 'optionType':
        setOptionType(value);
        setSelectedSpecies('');
        setSelectedMachoType('');
        setSelectedFemeaType('');
        setSelectedRecordingType('');
        break;
      case 'selectedSpecies':
        setSelectedSpecies(value);
        setSelectedMachoType('');
        setSelectedFemeaType('');
        setSelectedRecordingType('');
        break;
      case 'selectedMachoType':
        setSelectedMachoType(value);
        setSelectedFemeaType('');
        setSelectedRecordingType('');
        setSelectedColor('Amarelo');
        break;
      case 'selectedFemeaType':
        setSelectedFemeaType(value);
        setSelectedRecordingType('');
        setInitialNumber('');
        setFarmName('');
        setLogoUrl('');
        break;
      case 'selectedRecordingType':
        setSelectedRecordingType(value);
        setInitialNumber('');
        setFarmName('');
        setLogoUrl('');
        break;
      default:
        break;
    }
  };
  //Final de funções para lidar com os dropdowns

  //Início de funções para corrigir valores nos dropdowns
  const handleInputChange2 = (setValue) => (e) => {
    const value = e.target.value;
    // Verifica se o valor é um número (apenas dígitos) e maior que 1
    if (/^\d*$/.test(value) && parseInt(value) >= 1) {
      setValue(value);
    }
  };

  const handleInputChange = (setValue) => (e) => {
    const value = e.target.value;
    // Verifica se o valor é um número (apenas dígitos)
    if (/^\d*$/.test(value)) {
      setValue(value);
    }
  };

  const handleMouseOver = (event, content) => {
    if (event.target.offsetWidth < event.target.scrollWidth) {
      event.target.title = content;
    } else {
      event.target.title = '';
    }
  };
  //Final de funções para corrigir valores nos dropdowns

  return (
    <>
      {dataAPI ?
        <IdentificadoresContainer>
          <EtapasDiv>
            <Etapas etapa={1} />
          </EtapasDiv>
          <IdentificadoresDiv>
            <IdentificadoresLeft>
              <div className='title'>
                <span>1</span>
                <h3>Escolha seus identificadores</h3>
              </div>
              <div className='options-div-master'>
                <div className='options-div'>
                  <div className='options-div-long'>
                    <span>Tipo do Identificador<span className="required">*</span></span>
                    <select value={selectedType} onChange={(e) => handleSelectionChange('selectedType', e.target.value)}>
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
                      <span>Opção do Identificador<span className="required">*</span></span>
                      <select id="optionDropDownList" value={optionType} onChange={(e) => handleSelectionChange('optionType', e.target.value)} disabled={!handleDropdownEnabled('optionType')}>
                        <option value="">Selecione...</option>
                        <option value="Inviolável">Inviolável</option>
                        <option value="Reutilizável">Reutilizável</option>
                      </select>
                    </div>
                  </div>
                )}
                <div className='options-div'>
                  <div className='options-div-long'>
                    <span>Selecione a espécie<span className="required">*</span></span>
                    <select value={selectedSpecies} onChange={(e) => handleSelectionChange('selectedSpecies', e.target.value)} disabled={!handleDropdownEnabled('selectedSpecies') || !selectedType}>
                      <option value="">Selecione...</option>
                      {dataAPI.especie.filter(e => e.cod_tipo_identificador == selectedType).map((especie) => (
                        <option key={especie.cod_especie} value={especie.cod_especie}>{especie.especie}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='options-div'>
                  <div className='options-div-small'>
                    <span>Tipo de Macho<span className="required">*</span></span>
                    <select value={selectedMachoType} onChange={(e) => handleSelectionChange('selectedMachoType', e.target.value)} disabled={!handleDropdownEnabled('selectedMachoType')}>
                      <option value="">Selecione...</option>
                      {dataAPI.macho.filter(e => e.cod_especie == selectedSpecies).map((macho) => (
                        <option key={macho.cod_macho} value={macho.cod_macho}>{macho.macho}</option>
                      ))}
                    </select>
                  </div>
                  <div className='options-div-small'>
                    <span>Tipo de Fêmea<span className="required">*</span></span>
                    <select value={selectedFemeaType} onChange={(e) => handleSelectionChange('selectedFemeaType', e.target.value)} disabled={!handleDropdownEnabled('selectedFemeaType')}>
                      <option value="">Selecione...</option>
                      {dataAPI.machos_femeas_depara.filter(e => e.cod_macho == selectedMachoType).map((depara) => {
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
                    <span>Tipo de gravação<span className="required">*</span></span>
                    <select value={selectedRecordingType} onChange={(e) => handleSelectionChange('selectedRecordingType', e.target.value)} disabled={!handleDropdownEnabled('selectedRecordingType')}>
                      <option value="">Selecione...</option>
                      {dataAPI.femeas_tipo_gravacoes_depara.filter(e => e.cod_femea == selectedFemeaType).map((depara) => {
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
                    <span>Cores disponíveis<span className="required">*</span></span>
                    <select value={selectedColor} onChange={handleColorChange} disabled={!handleDropdownEnabled('selectedFemeaType')}>
                      {/* <option value="">Selecione...</option> */}
                      {dataAPI.cores_machos_depara.filter(e => e.cod_macho == selectedMachoType).map((depara) => {
                        const cor = dataAPI.cores.find(c => c.cod_cores === depara.cod_cor);
                        if (cor) {
                          return <option key={cor.cod_cores} value={cor.cores}>{cor.cores}</option>
                        }
                        return null;
                      })}
                    </select>
                  </div>
                  <div className='options-div-small'>
                    <span>Quantidade<span className="required">*</span></span>
                    <input type="number" value={quantity} maxLength={5} onChange={handleInputChange2(setQuantity)} />
                  </div>
                </div>
                {selectedType == 2 && selectedRecordingType != '' && selectedRecordingType != 5 && (
                  <div className='options-div'>
                    <div className='options-div-small'>
                      <span>Número Inicial<span className="required">*</span></span>
                      <input type="text" value={initialNumber} maxLength={5} onChange={handleInputChange(setInitialNumber)} />
                    </div>
                    <div className='options-div-small'>
                      <span>Número Final<span className="required">*</span></span>
                      <input type="text" value={finalNumber} maxLength={5} onChange={handleInputChange(setFinalNumber)} />
                    </div>
                  </div>
                )}
                {selectedRecordingType != '' && selectedRecordingType != 5 && selectedRecordingType != 2 && selectedMachoType != 13 && (
                  <div className='options-div'>
                    <div className='options-div-long'>
                      <span>Fazenda para Gravação<span className="required">*</span></span>
                      <input type="text" value={farmName} maxLength={40} onChange={(e) => setFarmName(e.target.value)} />
                    </div>
                  </div>
                )}
                {selectedRecordingType != '' && selectedRecordingType != 5 && selectedRecordingType != 2 && selectedFemeaType != 3 && selectedMachoType != 13 && (
                  <div className='options-div'>
                    <div className='options-div-long'>
                      <span>Logo</span>
                      <input type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
                    </div>
                  </div>
                )}
                <div className='options-div'>
                  <div className='options-div-long'>
                    <span>Observação</span>
                    <textarea placeholder='Explique sobre alguma personalização da sua gravação' maxLength={300} value={observation} onChange={(e) => setObservation(e.target.value)} />
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
                          {cartItems.map((item, index) => (
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
                {!(machoSVGs[selectedMachoType] || femeaSVGs[selectedFemeaType]) && (
                  <img className='imagem-gado' src={ImagemGado} alt="ImagemGado" />
                )}
                {machoSVGs[selectedMachoType] && (
                  <div className='macho-div'>
                    <h1>Macho</h1>
                    <div className='macho-cor'>
                      {machoSVGs[selectedMachoType]}
                    </div>
                  </div>
                )}
                {femeaSVGs[selectedFemeaType] && (
                  <div className='femea-div'>
                    <h1>Fêmea</h1>
                    <div className='femea-cor'>
                      {femeaSVGs[selectedFemeaType]}
                    </div>
                  </div>
                )}
              </IdentificadoresRight>
            )}
          </IdentificadoresDiv>
          {modalVisible && (
            <Modal>
              <div className="modal-content">
                <img className='x-button' src={Xbutton} onClick={closeModal} alt="x-button" />
                <h3>Atenção</h3>
                <p>{modalMessage}</p>
              </div>
            </Modal>
          )}
        </IdentificadoresContainer>
        :
        <div>{/* por um loading aqui */}</div>
      }
    </>
  )
}
