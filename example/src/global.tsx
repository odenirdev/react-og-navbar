import { createGlobalStyle } from 'styled-components'

const Index = createGlobalStyle`
  :root {
    --bg-color: #e6e6e6;
    --primary-color: #191919;
    --secundary-color: #FAFAFA;
    --title-font: Roboto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-width: 100vw;
    min-height: 100vh;
  }

  body {
    background-color: var(--bg-color);
    font-size: 110%;
    font-family: var(--content-font);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--title-font);
    margin-top: 1.1rem;
  }

  .icones {
    display: flex;
    flex-wrap: wrap;

    a {
      padding-left: 5px;
    }

    @media (max-width: 750px) {
      flex-direction: row;
    }
  }

  .aside-icons {
    a {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 750px) {
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export default Index
