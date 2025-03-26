import { useLayoutEffect } from 'react'
import './index.css'
import mockupImage from './assets/mockup.png'
import logo from './assets/logo.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {
  const redirectToKirvano = () => {
    window.location.href = 'https://pay.kirvano.com/596fdef3-be8a-4a7f-8b96-acb26adf92f7';
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".parte1a", {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".parte1",
        start: "top 100%"
      }
    });


    gsap.to(".parte1b", {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".parte1",
        start: "top 100%"
      }
    });

    gsap.to(".parte2a", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".parte2",
        start: "top 75%"
      }
    });

    gsap.to(".parte2b", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".parte2",
        start: "top 75%"
      }
    });

    gsap.to(".desconto", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".parte3",
        start: "top 75%"
      }
    });

    gsap.to(".h24", {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".parte3",
        start: "top 75%"
      }
    });

    gsap.to(".chamada", {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".parte4",
        start: "top 75%"
      }
    });

    gsap.to(".Copyright", {
      x: 0,
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".parte4",
        start: "top 75%"
      }
    });




    // Reavaliar quando a janela for redimensionada


    return () => {
      gsap.killTweensOf(".parte1a")
      gsap.killTweensOf(".parte1b")
      gsap.killTweensOf(".parte2a")
      gsap.killTweensOf(".parte2b")
      gsap.killTweensOf(".desconto")
      gsap.killTweensOf(".chamada")
      gsap.killTweensOf(".h24")
      gsap.killTweensOf(".Copyright")
    }
  }, [])


  return (
    <div className='app'>
      <div className="parte1">
        <div className="parte1a">
          <h1>Os verdadeiros Heróis que <span>Transformaram</span> Gerações</h1>
          <p>Descubra hoje as histórias dos grandes heróis da fé, homens que transformaram gerações e ainda inspiram milhões. Garanta já o eBook clicando no botão abaixo e libere a sabedoria que pode mudar sua vida!</p>
          <button className='chamada' onClick={redirectToKirvano}>QUERO MEU EBOOK AGORA</button>
        </div>
        <div className="parte1b">
          <div className="bookImg">
            <img src={mockupImage} alt="Mockup do eBook" />
          </div>
        </div>
      </div>

      <div className="parte2">
        <div className="parte2a">
          <p>Este e-book é uma obra original dos Representantes Do Reino, um canal de comunicação dedicada a pregar o evangelho de forma divertida, descontraída e original, nele você conhecer histórias de ums dos maiores heróis do cristianismo, depois dos apóstolos e profetas, além de poder connhecer algumas de suas frases mais impactantes, antes que se pergunte, este ebook vai te trazer grandes reflexões baseadas em um contexto sólido da palavra de Deus,
          </p>
          <p className='mTop'>Ele ajudará principalmente pessoas que se encontram com uma certa dificuldade de entender as escrituras, com toda a certeza este material te levará a compreender melhor a base do que significa ser um discípulo de Jesus e a importancia de viver segundo os princípios ensinados por ele, pelos profetas e por seus discípulos, adquira o seu e-book agora mesmo clicando no botão abaixo, tenho absoluta certeza que a sua leitura irá mudar a sua vida!
          </p>
        </div>
        <div className="parte2b">
          <button className='chamada' onClick={redirectToKirvano}>BAIXAR MEU GUIA DOS HERÓIS DA FÉ</button>
        </div>
      </div>

      <div className="parte3">
        <div className="desconto">
          <div className="descontoA">
            <h2><span>50%</span>  de desconto</h2>
            <p>Utilize o cupom <strong><span>REPRESENTANTEDOREINO</span></strong><br /> e garanta o seu desconto<br /><br />
              <strong className="ilimit">CUPONS LIMITADOS, APROVEITE!</strong>
            </p>
          </div>
          <div className="descontoB">
            <p>De <s>19,90</s> por apenas</p>
            <strong>9,95</strong>
            <p>em até 4x!</p>
            <button className='chamada2' onClick={redirectToKirvano}>APROVEITAR OFERTA</button>
          </div>
        </div>
      </div>

      <div className="parte4">
        <h2 className="h24">O que está esperando? Clique no botão abaixo e torne-se o próximo herói da fé!</h2>
        <button className='chamada' onClick={redirectToKirvano}>QUERO ME TORNAR UM HERÓI DA FÉ</button>
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
