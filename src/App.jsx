import { useLayoutEffect } from 'react'
import './index.css'
import mockupImage from './assets/mockup.png'
import logo from './assets/logo.png'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {
  const redirectToKirvano = () => {
    window.location.href = 'https://pay.kirvano.com/776a100e-d53e-4f5e-9a5a-f5ca18bfe53d';
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

      gsap.to(".parte1a", {
        x: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".parte1a",
          start: "top 100%"
        }
      });

     
        gsap.to(".parte1b", {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".parte1a",
            start: "top 100%"
          }
        });
  
        gsap.to(".parte2a", {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".parte2",
            start: "top 80%"
          }
        });
  
        gsap.to(".parte2b", {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".parte2",
            start: "top 80%"
          }
        });
  
        gsap.to(".desconto", {
          opacity: 1,
          scrollTrigger: {
            trigger: ".parte3",
            start: "top 80%"
          }
        });
  
        gsap.to(".h24", {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".parte3",
            start: "top 80%"
          }
        });
  
        gsap.to(".chamada", {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".parte4",
            start: "top 80%"
          }
        });
  
        gsap.to(".Copyright", {
          x: 0,
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: ".parte4",
            start: "top 80%"
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
          <p>Este e-book é uma obra original dos Representantes Do Reino, um canal de comunicação dedicada a pregar o evangelho de forma divertida, descontraída e original, nele você conhecer histórias de ums dos maiores heróis do cristianismo, depois dos apóstolos e profetas, além de poder connhecer algumas de suas frases mais impactantes, antes que se pergunte, este ebook vai te trazer grandes reflexões baseadas
          </p>
          <p>em um contexto sólido da palavra de Deus, caso você tenha uma certa dificuldade em entende-la em sua totalidade, com certeza este livro te ajudará a entender pelo meno a base do que significa ser um discípulo de Jesus e a importancia de viver segundo os princípios ensinadas pela bíblia, tanto por ele como pelos profetas, adquira o seu e-book clicando no botão abaixo, tenho certeza que a sua leitura irá mudar a sua vida.
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
