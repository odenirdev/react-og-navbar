import Styled, { keyframes } from 'styled-components'

const fade = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`

export const Container = Styled.nav.attrs({
  id: 'react-og-navbar'
})`
  background-color: var(--primary-color);
  color: var(--secundary-color);

  box-shadow: 1px 1px 3px -1px #121212;

  padding: 25px 0;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .react-og-links a {
    margin-right: 12px;

    font-size: 20px;
    font-family: var(--title-font);
    font-weight: 500;
    color: var(--secundary-color);

    text-decoration: none;
    word-spacing: 2px;
    display: inline;
  }

  .react-og-links a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: var(--secundary-color);
    transition: width .3s;
  }

  .react-og-links a:hover::after {
    width: 100%;
  }

  @media (max-width: 750px) {
    flex-direction: column;

    padding: 15px 0;

    .react-og-links a {
      width: 100%;

      margin: 0;
      padding: 15px 0;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .react-og-links a::after {
      display: none;
    }

    .react-og-links a:hover {
      filter: brightness(120%);
    }

    .react-og-infos {
      padding-top: 15px;
    }
  }
`

interface GridProps {
  show?: boolean
}

export const Grid = Styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${fade} linear 0.3s;

  &:first-child {
    width: 20%;
  }

  &:last-child {
    width: 20%;
  }

  .react-og-resposive-icon {
    display: none;
  }

  @media (max-width: 750px) {
    width: 100%;

    &:first-child {
      width: 100%;
    }

    &:last-child {
      width: 100%;
    }

    &.react-og-links {
      flex-direction: column;
    }

    &.react-og-header {
      justify-content: space-around;
    }

    &.react-og-links, &.react-og-infos {
      display: ${(props: GridProps) => (props.show ? 'flex' : 'none')};
    }
    .react-og-resposive-icon {
      display: block;
    }
  }


`
