import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Video from "../components/video"

import "../components/layout.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home"/>

    <div style={{width: 200, height: 200}}>
      <Image />
    </div>

   
    <h1 >RESUMO</h1>
    <p>
      O Robô Instagram é o maior e mais popular ferramenta de automação do Instagram. Sua incrível variedade de recursos o torna a ferramenta uma boa opção para aumentar sua conta e direcionar seu público principal da melhor maneira possível.
    </p>
    <p>
      Ao simular o comportamento humano, não é apenas mais seguro do que a maioria das ferramentas pagas existentes, mas também extremamente eficiente quando se trata de alcançar novas pessoas e contas no Instagram. Pode curtir, comentar, seguir e muitas outras interações que você mesmo teria que fazer para atingir um público maior.
    </p>
    <p>
    Também veremos lógicas mais complexas que fornecem a você ainda mais poder e permitem que você realmente impulsione sua conta.
    </p>

    <h2>Conceito de Multimídia</h2>

    <p>Multimídia: Programas e sistemas em que a comunicação entre homem e computador se dá através de múltiplos meios de representação de informação (p.ex.: áudio, imagem estática, animação, gráficos e texto), ou seja, multimídia é o conjunto de recursos que visam estimular todos os sentidos, porém, os mais usuais são a visão e a audição. Multimídia significa que uma informação digital pode ser representada através de áudio, vídeo e animação em conjunto com mídias tradicionais (texto, gráficos e imagens) simultaneamente. </p>

    <p>Os programas que permitem ao contador fazer as apresentações e interagir com seus olhos são os produtos multimídia os produtos multimídias podem ser usados para permitir aos usuários diferentes graus de interação tais como:</p>
    
    <p>- Percorrer material ao divisor de forma não-linear.</p>

    <p>- Consultar pesquisar e atualizar material armazenado em bases de dados audiovisuais.</p>

    <p>- Efetuar simulações sistemas físicos como menor ou maior grau de realismo.</p>
    
    <h2>Conceito de Compiladores</h2>
    
    <p>Compilador: é um programa de computador (ou um grupo de programas) que, a partir de um código fonte escrito em uma linguagem compilada, cria um programa semanticamente equivalente, porém escrito em outra linguagem, código objeto. Classicamente, um compilador traduz um programa de uma linguagem textual facilmente entendida por um ser humano para uma linguagem de máquina , específica para um processador e sistema operacional.</p>
    

    <h2>Objetivo geral</h2>

    <p>Mostrar através da linguagem Python o conceito de Compiladores e Multimídia uma ferramenta para automação de uma grande empresa de mídia social chamada  Instagram. Através de bibliotecas e comandos, estaremos abordando pontos específicos da linguagem que são bastante utilizadas por muitos desenvolvedores para simular um comportamento humano dentro de uma plataforma digital.</p>
    
    <h2>Motivação</h2>

    <p>Foi identificado uma oportunidade para comercializar o robô no mercado de mídias sociais. Com a crescente alta dos usuários do instagram querendo monetizar o perfil através de seguidores. Foi avaliado que o robô pode resolver essa for, automatizando as interações dos usuários, e aumentando o número de seguidores.</p>

    <h2>Instalação</h2>

    <h3>Instalção Geral Ambiente Windows</h3>

  <div style={{ 
    backgroundColor: "rgba(242, 242, 242, 1)", 
    borderRadius: '8px',
    padding: 30 
    }} > 
    <p>Primeiramente é preciso de baixar e instalar os programas:</p>
    <a href="https://www.python.org">Python: https://www.python.org/ + patch</a> 
    <br/>
    <a href="https://www.mozilla.org/pt-BR/firefox/new/">Mozilla Firefox: https://www.mozilla.org/pt-BR/firefox/new/</a>
    <p>Para instalação abrimos o CMD(Prompt de Comando) como administrador e digitamos o seguinte comando:</p>
    <p>pip install instapy</p>
    <p>Importante: dependendo do seu sistema, certifique-se de usar pip3 e python3.</p>
  </div>
    

    <h3 >Instalção Geral Ambiente Linux</h3>

  <div style={{ 
    backgroundColor: "rgba(242, 242, 242, 1)", 
    borderRadius: '8px',
    padding: 30 
    }}>
    <p>$ sudo apt-get update</p>
    <p>$ sudo apt-get -y upgrade</p>
    <p>$ sudo apt-get -y install unzip python3-pip python3-dev build-essential libssl-dev libffi-dev xvfb</p>
    <p>$ sudo pip3 install --upgrade pip</p>
    <p>$ export LANGUAGE=en_US.UTF-8</p>
    <p>$ export LANG=en_US.UTF-8</p>
    <p>$ export LC_ALL=en_US.UTF-8</p>
    <p>$ locale-gen en_US.UTF-8</p>
    <p>$ sudo dpkg-reconfigure locales</p>
    <p>$ pip3 install --upgrade pip</p>
  </div>
    
    <h3>Configurações Chrome-stable</h3>

  <div style={{ 
      backgroundColor: "rgba(242, 242, 242, 1)", 
        borderRadius: '8px',
      padding: 30 
      }} >
      <p>$ cd ~</p>
      <p>$ wget "https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb"</p>
      <p>$ sudo dpkg -i google-chrome-stable_current_amd64.deb</p>
      <p>$ sudo apt-get install -y -f</p>
      <p>$ sudo rm google-chrome-stable_current_amd64.deb</p>

      <p>$ pip install instapy</p>
  </div>
   

  <h3 >5.1.3 Ambiente MacOs</h3>

  <div style={{ 
      backgroundColor: "rgba(242, 242, 242, 1)", 
        borderRadius: '8px',
      padding: 30 
      }}>
    <p>Faça download do arquivo</p>
    <a href=" https://github.com/InstaPy/instapy-quickstart"> https://github.com/InstaPy/instapy-quickstart  </a>
  </div>
 
  <div style={{
    backgroundColor: "rgba(242, 242, 242, 1)", 
    borderRadius: '8px',
    padding: 30
  }}>
  <h3 >Executando Robô Instagram</h3>

    <p>Para executar o Robô do Instagram, você precisará executar o script de início rápido que acabou de baixar.</p>
    <p>Você pode inserir os detalhes de sua conta agora, passando os parâmetros de nome de usuário e senha para a função InstaPy() em seu script de início rápido, assim:</p>

      <h4>InstaPy(username="abcd",  password="1234")</h4>

    <p>Ou você pode passá-los usando a interface de linha de comando (CLI).</p>
    <p>Depois de configurar o script de início rápido, você pode executá-lo com os comandos a seguir.</p>

    <h4>python quickstart.py	ou	python quickstart.py --username abcd --password 1234</h4>

    <p>O Robô do Instagram agora abrirá uma janela do navegador e começará a trabalhar.</p>
    <p>Se quiser que o Robô do Instagram seja executado em segundo plano, passe a opção --headless-browser ao executar a partir da CLI</p>
    <p>Ou adicione o parâmetro headless_browser = True dentro do arquivo do robô.</p>

    <h2>Atualizando Robô Instagram</h2>

    <h4>pip install instapy -U</h4>
  </div>

  <h2>Explicação mais aprofundada</h2>

    <Video videoSrcURL="https://www.youtube.com/embed/JOh5sxficvM" videoTitle="Explicação aprofundada" />

  </Layout>
)

export default IndexPage
