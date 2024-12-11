/* import { useState } from 'react' */
import './index.css'
import mockupImage from './assets/imagens/mockup.png'
import logo from './assets/imagens/logo.jpg'

function App() {
  const redirectToKirvano = () => {
    window.location.href = 'https://pay.kirvano.com/776a100e-d53e-4f5e-9a5a-f5ca18bfe53d';
  };

  return (
    <div className='app'>
      <div className="parte1">
        <div className="parte1a">
          <h1>Os verdadeiros Heróis que <span>Transformaram</span> Gerações</h1>
          <p>Descubra hoje as histórias dos grandes heróis da fé, homens que transformaram gerações e ainda inspiram milhões. Garanta já o eBook clicando no botão abaixo e libere a sabedoria que pode mudar sua vida!</p>
          <button className='chamada' onClick={redirectToKirvano}>QUERO ME TORNAR UM HERÓI DA FÉ</button>
        </div>
        <div className="parte1b">
          <div className="bookImg">
            <img src={mockupImage} alt="Mockup do eBook" />
          </div>
        </div>
      </div>

      <div className="parte2">
        <div className="parte2a">
          <p>Descubra histórias de grandes heróis da fé que moldaram o cristianismo e marcaram gerações. Este eBook traz um retrato cativante de líderes espirituais como Billy Graham, Charles Spurgeon, John Piper e C.S. Lewis.
            Com biografias breves e frases impactantes, veja os desafios que superaram, os caminhos
          </p>
          <p>que seguiram e as verdades que proclamaram com coragem. Mais que celebrar o legado desses gigantes, este livro oferece inspiração para fortalecer sua própria caminhada espiritual.
            Heróis da Fé não é só história; é um convite para viver com propósito e deixar um impacto duradouro.
          </p>
        </div>
        <div className="parte2b">
          <button className='chamada' onClick={redirectToKirvano}>QUERO TRANSFORMAR MINHA VIDA AGORA</button>
        </div>
      </div>

      <div className="parte3">
        <div className="desconto">
          <div className="descontoA">
            <h2><span>33%</span>  de desconto</h2>
            <p>Utilize o cupom <strong><span>REPRESENTANTEDOREINO</span></strong><br /> e garanta o seu desconto<br />
              Cupons limitados aproveite!
            </p>
          </div>
          <div className="descontoB">
            <p>De <s>14,90</s> por</p>
            <strong>9,99</strong>
            <p>em até <span>4x</span></p>
            <button className='chamada' onClick={redirectToKirvano}>APROVEITAR OFERTA</button>
          </div>
        </div>
      </div>

      <div className="parte4">
        <h2>Aproveite seu cupom limitado clicando no botão abaixo, adquira o ebook, e torne-se o próximo herói da fé!</h2>
        <button className='chamada' onClick={redirectToKirvano}>SIM, EU QUERO ME TORNAR UM HERÓI DA FÉ</button>
        <div className="Copyright">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <p>
            Copyright © 2024 Representante do Reino.
            <br /><br />
            Este site e todos os seus conteúdos, incluindo texto, imagens, gráficos, logotipos e outros materiais, são protegidos por leis de direitos autorais e propriedade intelectual. É proibida a reprodução, distribuição, modificação ou qualquer uso não autorizado dos conteúdos sem a permissão expressa do titular dos direitos.
            Violação de direitos autorais pode resultar em penalidades legais.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
