import React, { useState, useEffect } from 'react';
import { 
  Home, Tag, ShoppingBag, Gift, DollarSign, Menu, Bell, User, X, 
  Smartphone, Wifi, Tv, Star, CreditCard, ChevronRight, Barcode, Zap, Landmark, Shield, Banknote
} from 'lucide-react';
import './App.css'; 

import minhaFoto from './assets/perfil.jpg'; 

export default function App() {
  const [modalAberto, setModalAberto] = useState(null);
  const [menuLateralAberto, setMenuLateralAberto] = useState(false); 
  
  // NOVO ESTADO: Guarda o texto que está sendo digitado
  const [textoDigitado, setTextoDigitado] = useState('');

  // NOVO EFEITO: Máquina de Escrever
  useEffect(() => {
    const textoOriginal = "Você tem (1) oferta liberada:";
    let i = 0;
    
    // Inicia um temporizador que roda a cada 50 milissegundos
    const interval = setInterval(() => {
      if (i < textoOriginal.length) {
        setTextoDigitado(textoOriginal.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval); // Para o timer quando terminar
      }
    }, 50); // <-- Você pode mudar a velocidade aqui (50ms é um bom padrão)

    return () => clearInterval(interval); // Limpeza de segurança do React
  }, []);

  const abrirModal = (nomeDoMenu) => setModalAberto(nomeDoMenu);
  const fecharModal = () => setModalAberto(null);

  const abrirModalDoMenuLateral = (nome) => {
    setMenuLateralAberto(false);
    abrirModal(nome);
  };

  const renderConteudoModal = () => {
    switch (modalAberto) {
      case 'Detalhes Fibra':
        return (
          <div className="modal-custom-content text-center">
            <div className="points-circle" style={{backgroundColor: '#fdf4ff'}}>
              <Wifi size={40} color="#660099" />
            </div>
            <h3 className="modal-greeting">MarVin Fibra 600 Mega</h3>
            <p className="modal-subtext" style={{marginBottom: '16px'}}>Ultravelocidade com Wi-Fi grátis e roteador de última geração.</p>
            <div className="modal-list-item">
              <div className="list-text">
                <strong>Valor promocional</strong>
                <span>R$ 100,00/mês nos primeiros 12 meses</span>
              </div>
            </div>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={() => abrirModal('Garantir oferta')}>Assinar agora</button>
          </div>
        );
      case 'Detalhes Móvel':
        return (
          <div className="modal-custom-content text-center">
            <div className="points-circle" style={{backgroundColor: '#e0e7ff'}}>
              <Smartphone size={40} color="#312e81" />
            </div>
            <h3 className="modal-greeting">MarVin Controle Especial</h3>
            <p className="modal-subtext" style={{marginBottom: '16px'}}>15 GB de internet + Redes Sociais ilimitadas (WhatsApp, Instagram e TikTok).</p>
            <div className="modal-list-item">
              <div className="list-text">
                <strong>Benefício incluso</strong>
                <span>Assinatura do Disney+ Padrão</span>
              </div>
            </div>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={() => abrirModal('Garantir oferta')}>Mudar meu plano</button>
          </div>
        );
      case 'Detalhes Seguros':
        return (
          <div className="modal-custom-content text-center">
            <div className="points-circle" style={{backgroundColor: '#fce7f3'}}>
              <Shield size={40} color="#be185d" />
            </div>
            <h3 className="modal-greeting">Seguro Celular</h3>
            <p className="modal-subtext" style={{marginBottom: '16px'}}>Cobertura completa contra roubo, furto qualificado e danos acidentais para o seu aparelho.</p>
            <div className="modal-list-item">
              <div className="list-text">
                <strong>A partir de</strong>
                <span>R$ 15,90/mês na sua fatura MarVin</span>
              </div>
            </div>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Simular valor exato</button>
          </div>
        );
      case 'Detalhes Empréstimo':
        return (
          <div className="modal-custom-content text-center">
            <div className="points-circle" style={{backgroundColor: '#dbeafe'}}>
              <Banknote size={40} color="#1e3a8a" />
            </div>
            <h3 className="modal-greeting">MarVin Money</h3>
            <p className="modal-subtext" style={{marginBottom: '16px'}}>Crédito pessoal rápido, seguro e 100% digital. Dinheiro na conta em até 2 dias úteis.</p>
            <div className="modal-list-item">
              <div className="list-text">
                <strong>Limite pré-aprovado</strong>
                <span style={{color: '#15803d', fontWeight: 'bold'}}>Até R$ 5.000,00 disponíveis</span>
              </div>
            </div>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Ver condições</button>
          </div>
        );

      case 'Garantir oferta':
        return (
          <div className="modal-custom-content text-center">
            <div className="points-circle" style={{backgroundColor: '#fdf4ff'}}>
              <Wifi size={40} color="#660099" />
            </div>
            <h3 className="modal-greeting">Oferta Garantida!</h3>
            <p className="modal-subtext">Excelente escolha, Marcos! O plano foi separado para você com sucesso.</p>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Continuar para o carrinho</button>
          </div>
        );
      case 'Ocultar notificação':
        return (
          <div className="modal-custom-content text-center">
            <div className="points-circle" style={{backgroundColor: '#f3f4f6'}}>
              <Bell size={40} color="#6b7280" />
            </div>
            <h3 className="modal-greeting">Notificação Ocultada</h3>
            <p className="modal-subtext">Tudo bem! Você não verá mais esta oferta na sua tela inicial.</p>
            <button className="btn-secondary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Fechar aviso</button>
          </div>
        );

      case 'Pra você':
        return (
          <div className="modal-custom-content">
            <h3 className="modal-greeting">Olá, Marcos!</h3>
            <p className="modal-subtext">Veja o resumo do seu consumo atual:</p>
            <div className="modal-info-box">
              <div className="info-row">
                <Wifi size={20} color="#660099" />
                <span>Internet Móvel: <strong>12 GB / 15 GB</strong></span>
              </div>
              <div className="progress-bar-bg"><div className="progress-bar-fill" style={{width: '80%'}}></div></div>
            </div>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Ver detalhes</button>
          </div>
        );
      case 'Assinaturas':
        return (
          <div className="modal-custom-content">
            <p className="modal-subtext">Meus planos ativos:</p>
            <div className="modal-list-item">
              <Wifi size={24} color="#660099" />
              <div className="list-text">
                <strong>MarVin Fibra 600 Mega</strong>
                <span>Ativo e roteando</span>
              </div>
              <ChevronRight size={20} color="#9ca3af" />
            </div>
            <div className="modal-list-item">
              <Tv size={24} color="#660099" />
              <div className="list-text">
                <strong>Disney+ Padrão</strong>
                <span>Incluso no plano móvel</span>
              </div>
              <ChevronRight size={20} color="#9ca3af" />
            </div>
          </div>
        );
      case 'Loja':
        return (
          <div className="modal-custom-content">
            <p className="modal-subtext">O que você está procurando hoje?</p>
            <div className="store-grid">
              <div className="store-card">
                <Smartphone size={32} color="#660099" />
                <span>Smartphones</span>
              </div>
              <div className="store-card">
                <ShoppingBag size={32} color="#660099" />
                <span>Acessórios</span>
              </div>
            </div>
          </div>
        );
      case 'Benefícios':
        return (
          <div className="modal-custom-content text-center">
            <div className="points-circle">
              <Star size={40} color="#ffb700" fill="#ffb700" />
            </div>
            <h3 className="points-title">1.500 Pontos</h3>
            <p className="modal-subtext">MarVin Valoriza: Você é categoria <strong>Silver</strong></p>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Resgatar benefícios</button>
          </div>
        );
      case 'Pay':
        return (
          <div className="modal-custom-content">
            <p className="modal-subtext">Sua carteira digital MarVin Pay</p>
            <div className="balance-box">
              <span>Saldo disponível</span>
              <h2>R$ 150,00</h2>
            </div>
            <div className="action-grid">
              <div className="action-btn">
                <CreditCard size={24} color="#660099" />
                <span>Pagar Fatura</span>
              </div>
              <div className="action-btn">
                <DollarSign size={24} color="#660099" />
                <span>Fazer Pix</span>
              </div>
            </div>
          </div>
        );
      case 'Central de faturas':
        return (
          <div className="modal-custom-content">
            <p className="modal-subtext">Sua fatura de Março já está fechada.</p>
            <div className="invoice-box">
              <div className="invoice-header">
                <span>Vencimento 15/03</span>
                <strong className="invoice-status">Fechada</strong>
              </div>
              <h2 className="invoice-value">R$ 120,00</h2>
            </div>
            <button className="btn-primary" style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}} onClick={fecharModal}>
              <Barcode size={20} /> Copiar código de barras
            </button>
          </div>
        );
      case 'Recarga':
        return (
          <div className="modal-custom-content">
            <p className="modal-subtext">Escolha o valor da recarga:</p>
            <div className="recharge-grid">
              <div className="recharge-option">R$ 15</div>
              <div className="recharge-option popular">R$ 20</div>
              <div className="recharge-option">R$ 30</div>
              <div className="recharge-option">R$ 40</div>
            </div>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px'}} onClick={fecharModal}>
              <Zap size={20} /> Recarregar com Pix
            </button>
          </div>
        );
      case 'Open finance':
        return (
          <div className="modal-custom-content text-center">
            <div className="points-circle" style={{backgroundColor: '#f3e8ff'}}>
              <Landmark size={40} color="#660099" />
            </div>
            <h3 className="modal-greeting" style={{marginBottom: '8px'}}>Open Finance MarVin</h3>
            <p className="modal-subtext" style={{lineHeight: '1.5'}}>Traga seu histórico financeiro de outros bancos e consiga limites melhores na nossa plataforma.</p>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Conectar meus bancos</button>
          </div>
        );
      case 'Seguros':
        return (
          <div className="modal-custom-content">
             <h3 className="modal-greeting">Seguros MarVin</h3>
             <p className="modal-subtext">Proteja seu aparelho contra roubos, furtos e danos acidentais.</p>
             <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Ver planos disponíveis</button>
          </div>
        );
      case 'Meu Perfil':
        return (
          <div className="modal-custom-content">
            <div className="points-circle" style={{backgroundColor: '#e5e7eb'}}>
              <img src={minhaFoto} alt="Marcos Vinicius" className="foto-perfil-img" />
            </div>
            <h3 className="modal-greeting text-center">Marcos Vinicius</h3>
            <p className="modal-subtext text-center" style={{marginBottom: '16px'}}>Trainee Full Stack</p>
            
            <div className="modal-list-item">
              <div className="list-text">
                <strong>Meus Dados</strong>
                <span>Atualize suas informações</span>
              </div>
              <ChevronRight size={20} color="#9ca3af" />
            </div>
            <div className="modal-list-item">
              <div className="list-text">
                <strong>Configurações do App</strong>
                <span>Senhas e biometria</span>
              </div>
              <ChevronRight size={20} color="#9ca3af" />
            </div>
            <button className="btn-secondary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Sair da conta</button>
          </div>
        );
      case 'Notificações':
        return (
          <div className="modal-custom-content">
            <h3 className="modal-greeting">Suas Notificações</h3>
            
            <div className="modal-list-item" style={{borderLeft: '4px solid #db2777'}}>
              <div className="list-text">
                <strong style={{color: '#db2777'}}>Fatura disponível</strong>
                <span>Sua fatura de R$ 100,00 já pode ser paga.</span>
              </div>
            </div>
            <div className="modal-list-item">
              <div className="list-text">
                <strong>Bônus de 2GB</strong>
                <span>Você ganhou 2GB por pagar com Pix!</span>
              </div>
            </div>
            <div className="modal-list-item">
              <div className="list-text">
                <strong>Oferta na Loja</strong>
                <span>Acessórios com 50% de desconto hoje.</span>
              </div>
            </div>
            <button className="btn-primary" style={{width: '100%', marginTop: '16px'}} onClick={fecharModal}>Marcar todas como lidas</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      
      {/* Cabeçalho */}
      <header className="header">
        <div className="profile-icon cursor-pointer" onClick={() => abrirModal('Meu Perfil')}>
          <img src={minhaFoto} alt="Marcos Vinicius" className="foto-perfil-img" />
          <span className="notification-badge">+9</span>
        </div>
        <div className="header-actions">
          <Bell 
            size={24} 
            color="#374151" 
            className="cursor-pointer" 
            onClick={() => abrirModal('Notificações')} 
          />
          <Menu 
            size={24} 
            color="#374151" 
            className="cursor-pointer" 
            onClick={() => setMenuLateralAberto(true)} 
          />
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="main-content">
        {/* AQUI ESTÁ A MÁGICA: O texto digitado e o cursor! */}
        <h1 className="title typing-cursor">{textoDigitado}</h1>
        <p className="subtitle">Fibra 600 Mega por apenas R$ 100/mês</p>

        <div className="buttons-container">
          <button className="btn-primary" onClick={() => abrirModal('Garantir oferta')}>Garantir oferta</button>
          <button className="btn-secondary" onClick={() => abrirModal('Ocultar notificação')}>Ocultar notificação</button>
        </div>

        {/* Carrossel de Cards */}
        <div className="carousel">
          <div className="card bg-purple cursor-pointer" onClick={() => abrirModal('Detalhes Fibra')}>
            <div className="card-header">
              <span className="asterisk">*</span>Fibra
            </div>
            <div className="card-body">
              <span className="card-tag">Exclusivo no app</span>
              <h2 className="card-title">600 Mega por apenas R$ 100/mês</h2>
              <p className="card-desc">Wi-Fi nota 10 em cada quesito</p>
            </div>
          </div>

          <div className="card bg-dark cursor-pointer" onClick={() => abrirModal('Detalhes Móvel')}>
            <div className="card-header">
              <span className="asterisk">*</span>Móvel
            </div>
            <div className="card-body">
              <span className="card-tag">15 GB</span>
              <h2 className="card-title">MarVin Controle Especial</h2>
              <p className="card-desc">Redes sociais ilimitadas</p>
            </div>
          </div>

          <div className="card bg-purple cursor-pointer" onClick={() => abrirModal('Detalhes Empréstimo')}>
            <div className="card-header">
              <span className="asterisk">*</span>Pay
            </div>
            <div className="card-body">
              <span className="card-tag">Dinheiro na mão</span>
              <h2 className="card-title">Empréstimo Pessoal</h2>
              <p className="card-desc">Crédito rápido com taxas exclusivas</p>
            </div>
          </div>

          <div className="card bg-dark cursor-pointer" onClick={() => abrirModal('Detalhes Seguros')}>
            <div className="card-header">
              <span className="asterisk">*</span>Seguros
            </div>
            <div className="card-body">
              <span className="card-tag">Proteção total</span>
              <h2 className="card-title">Seguro Celular</h2>
              <p className="card-desc">Contra roubos, furtos e danos</p>
            </div>
          </div>
        </div>
      </main>

      {/* Menu Inferior */}
      <nav className="bottom-nav">
        <div className="nav-item active" onClick={() => abrirModal('Pra você')}>
          <Home size={22} />
          <span>Pra você</span>
        </div>
        <div className="nav-item" onClick={() => abrirModal('Assinaturas')}>
          <Tag size={22} />
          <span>Assinaturas</span>
        </div>
        <div className="nav-item" onClick={() => abrirModal('Loja')}>
          <div className="icon-wrapper">
            <ShoppingBag size={22} />
            <span className="dot"></span>
          </div>
          <span>Loja</span>
        </div>
        <div className="nav-item" onClick={() => abrirModal('Benefícios')}>
          <Gift size={22} />
          <span>Benefícios</span>
        </div>
        <div className="nav-item" onClick={() => abrirModal('Pay')}>
          <DollarSign size={22} />
          <span>Pay</span>
        </div>
      </nav>

      {/* Modal Centralizado */}
      {modalAberto !== null && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{modalAberto.includes('Detalhes') ? 'Detalhes' : modalAberto}</h2>
              <button className="close-btn" onClick={fecharModal}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              {renderConteudoModal()}
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Lateral */}
      {menuLateralAberto && (
        <>
          <div className="sidebar-overlay" onClick={() => setMenuLateralAberto(false)}></div>
          <div className="sidebar-menu">
            <header className="header menu-header-lateral">
              <div className="profile-icon">
                <img src={minhaFoto} alt="Marcos Vinicius" className="foto-perfil-img" />
                <span className="notification-badge">+9</span>
              </div>
              <button className="close-menu-lateral" onClick={() => setMenuLateralAberto(false)}>
                <X size={32} color="white" />
              </button>
            </header>

            <div className="menu-title-section">
              <span className="asterisk">*</span> Pay
            </div>

            <div className="menu-pills-container">
              <button className="menu-pill" onClick={() => abrirModalDoMenuLateral('Central de faturas')}>Central de faturas</button>
              <button className="menu-pill" onClick={() => abrirModalDoMenuLateral('Recarga')}>Recarga</button>
              <button className="menu-pill" onClick={() => abrirModalDoMenuLateral('Open finance')}>Open finance</button>
            </div>

            <div className="menu-cards-grid">
              <div className="menu-card-outline" onClick={() => abrirModalDoMenuLateral('Seguros')}>
                <div className="menu-card-icon-container">
                   <Smartphone size={28} color="white" strokeWidth={1.5} />
                </div>
                <h3 className="menu-card-title-outline">Seguros</h3>
                <p className="menu-card-desc-outline">Contra roubos, furtos e danos</p>
              </div>
            </div>
          </div>
        </>
      )}
      
    </div>
  );
}