import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Etapas from '../../Components/Etapas/Etapas'
import { AcessoriosContainer, AcessoriosDiv, AcessoriosLeft, AcessoriosRight, Modal, ItemCarrinho, EtapasDiv } from './Acessorios.styles';
import Xbutton from '../../Components/Images/Acessorios/x-square.svg';
import Trash from '../../Components/Images/Acessorios/trash.svg';
import acessorios from '../../Components/Arrays/Acessorios.arrays.jsx';

export default function Acessorios() {
    const [selectedAcessorio, setSelectedAcessorio] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [carrinho, setCarrinho] = useState(() => {
        const savedCart = localStorage.getItem('carrinhoAcessorios');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const handleCardClick = (acessorio) => {
        setSelectedAcessorio(acessorio);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedAcessorio(null);
        setModalOpen(false);
    };

    const handleAddToCart = (acessorio) => {
        // Verifica se um acessório foi selecionado
        if (acessorio) {
            // Verifica se o acessório já está no carrinho
            const existingItemIndex = carrinho.findIndex(item => item.cod_acessorio === acessorio.cod_acessorio);
            if (existingItemIndex !== -1) {
                // Se o acessório já estiver no carrinho, atualiza a quantidade
                const updatedCart = [...carrinho];
                updatedCart[existingItemIndex].quantidade += 1;
                setCarrinho(updatedCart);
            } else {
                // Se o acessório não estiver no carrinho, adiciona-o com quantidade inicial 1
                const newItem = {
                    ...acessorio,
                    quantidade: 1
                };
                setCarrinho([...carrinho, newItem]);
            }
            handleCloseModal(); // Fecha o modal após adicionar ao carrinho
        }
    };

    const handleQuantityChange = (index, quantity) => {
        const updatedCart = [...carrinho];
        if (quantity === 0) {
            // Remove o item do carrinho se a quantidade for igual a 0
            updatedCart.splice(index, 1);
        } else {
            updatedCart[index].quantidade = quantity;
        }
        setCarrinho(updatedCart);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = [...carrinho];
        updatedCart.splice(index, 1);
        setCarrinho(updatedCart);
    };

    useEffect(() => {
        // Carregar carrinho do localStorage ao montar o componente
        const savedCart = JSON.parse(localStorage.getItem('carrinhoAcessorios'));
        if (savedCart) {
            setCarrinho(savedCart);
        }
    }, []);

    useEffect(() => {
        // Atualizar o localStorage sempre que o carrinho mudar
        localStorage.setItem('carrinhoAcessorios', JSON.stringify(carrinho));
    }, [carrinho]);

    const handleNextStepClick = () => {
        localStorage.setItem('carrinhoAcessorios', JSON.stringify(carrinho))
    }

    return (
        <>
            <AcessoriosContainer>
                <EtapasDiv>
                    <Etapas etapa={2} />
                </EtapasDiv>
                <AcessoriosDiv>
                    <AcessoriosLeft>
                        <div className='title'>
                            <span>2</span>
                            <h3>Escolha seus acessórios</h3>
                        </div>
                        <div className='acessoriosDiv-div'>
                            {carrinho.length === 0 ? (
                                <div className='carrinho-vazio-div'>Carrinho vazio</div>
                            ) : (
                                carrinho.map((item, index) => (
                                    <ItemCarrinho key={index}>
                                        <div className='left'>
                                            <img className='img' src={item.imagem} alt="imagem-acessorio" />
                                        </div>
                                        <div className='right'>
                                            <h3>{item.acessorio}</h3>
                                            <div className='buttons'>
                                                <div onClick={() => handleQuantityChange(index, item.quantidade - 1)}>-</div>
                                                <input type="text" value={item.quantidade} readOnly />
                                                <div onClick={() => handleQuantityChange(index, item.quantidade + 1)}>+</div>
                                            </div>
                                        </div>
                                        <div className='trash-div'>
                                            <img src={Trash} alt='Trash' onClick={() => handleRemoveItem(index)} />
                                        </div>
                                    </ItemCarrinho>
                                ))
                            )}
                        </div>
                        <div className='buttons-div-div'>
                            <div className='buttons-div'>
                                <Link to='/identificadores'>
                                    <button className='button-voltar'>Voltar</button>
                                </Link>
                                <Link to='/finalizacao'>
                                    <button className='button-proxima-etapa' onClick={handleNextStepClick}>Próxima etapa</button>
                                </Link>
                            </div>
                        </div>
                    </AcessoriosLeft>
                    <AcessoriosRight>
                        {acessorios.map(acessorio => (
                            <div className='cards' key={acessorio.cod_acessorio}>
                                <div className='cards-img-div' onClick={() => handleCardClick(acessorio)}>
                                    <img className='' src={acessorio.imagem} alt="acessorio-imagem" />
                                </div>
                                <div className='text-and-button-div'>
                                    <h3>{acessorio.acessorio}</h3>
                                    <button onClick={() => handleCardClick(acessorio)}>Ver mais</button>
                                </div>
                            </div>
                        ))}
                    </AcessoriosRight>
                </AcessoriosDiv>
                {modalOpen && (
                    <Modal>
                        <img className='x-button' src={Xbutton} onClick={handleCloseModal} alt="x-button" />
                        <div className='modal-content-div'>
                            <div className='left'>
                                <img className='img' src={selectedAcessorio.imagem} alt="acessorio-imagem" />
                            </div>
                            <div className='right'>
                                <h3>{selectedAcessorio.acessorio}</h3>
                                <p>{selectedAcessorio.descricao}</p>
                                <button onClick={() => handleAddToCart(selectedAcessorio)}>Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </Modal>
                )}
            </AcessoriosContainer >

        </>
    )
}




