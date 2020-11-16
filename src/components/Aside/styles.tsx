import Styled from 'styled-components'

export const Container = Styled.nav.attrs({
  className: 'react-og-aside'
})`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 5vw;

  overflow-y: auto;

  background-color: var(--primary-color);

  font-family: var(--title-font);
  transition: width .2s;

  display: flex;
  flex-direction: column;

  &:hover {
    width: 15vw;

    .react-og-title {
      width: 60%;
      display: flex;
    }

    .react-og-icon {
      width: 40%;
    }
  }

  a {
    transition: width 5s;

    display: flex;

    padding: 1.5rem 0;
    color: var(--secundary-color);

    text-decoration: none;

    position: relative;
  }

  a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 0%;
    background-color: rgba(250, 250, 250, 0.3);
    transition: .5s;
  }

  a:hover::before {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 750px) {
    top: initial;
    bottom: 0;

    height: 10vh;
    width: 100vw;

    overflow-x: auto;

    flex-direction: row;
    justify-content: center;

    a {
      padding: 0 1.5rem;
    }

    &:hover {
      width: 100vw;

      .react-og-title {
        display: none;
      }

      .react-og-icon {
        width: auto;
      }
    }
  }
`

export const Title = Styled.span.attrs({
  className: 'react-og-title'
})`
  display: none;

  align-items: center;
  padding-left: 10px;
`

export const Icon = Styled.i.attrs({
  className: 'react-og-icon'
})`
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
`

export const Bottom = Styled.div`
  margin-top: auto;
  padding-top: 10px;

  @media (max-width: 750px) {
    margin-top: initial;
    padding-top: initial;
  }
`
