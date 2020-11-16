import Styled from 'styled-components'

export const Container = Styled.footer.attrs({
  id: 'react-og-footer'
})`
  width: 100%;

  padding: 12px;

  background-color: var(--primary-color);
  color: var(--secundary-color);

  font-family: var(--title-font);

  display: flex;
  flex-direction: row;

  @media (max-width: 750px) {
    flex-direction: column;
  }

`

export const Grid = Styled.div`
  width: 60%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:first-child, &:last-child {
    width: 20%;
  }

  &.react-og-footer-links {
    a {
      color: var(--secundary-color);
      font-family: var(--title-font);
      font-weight: 500;

      text-decoration: none;
      word-spacing: 2px;
      display: inline;

      margin-bottom: 5px;
    }

    a:last-child {
      margin-bottom: 0;
    }

    a::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: var(--secundary-color);
      transition: width .3s;
    }

    a:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 750px) {
    width: 100%;

    text-align: center;
    margin: 10px 0;

    &:first-child, &:last-child {
      width: 100%;
      margin: 0;
    }
  }
`
