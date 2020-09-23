import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from 'carbon-components-react'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <h1>RESUMO</h1>
    <p>
      O Robô Instagram é o maior e mais popular ferramenta de automação do Instagram. Sua incrível variedade de recursos o torna a ferramenta uma boa opção para aumentar sua conta e direcionar seu público principal da melhor maneira possível.
    </p>
    <p>
      Ao simular o comportamento humano, não é apenas mais seguro do que a maioria das ferramentas pagas existentes, mas também extremamente eficiente quando se trata de alcançar novas pessoas e contas no Instagram. Pode curtir, comentar, seguir e muitas outras interações que você mesmo teria que fazer para atingir um público maior.
    </p>
    <p>
    Também veremos lógicas mais complexas que fornecem a você ainda mais poder e permitem que você realmente impulsione sua conta.
    </p>
    

    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
