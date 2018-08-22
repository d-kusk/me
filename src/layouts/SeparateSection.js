import styled from 'styled-components'

const SeparateSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
  }
`

const SeparateHead = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 4%;

  @media (min-width: 769px) {
    width: 40%;
  }

  header {
    margin-bottom: 1em;

    &::after {
      content: '';
      diaplay: block;
      background-color: #fff;
    }
  }

  h2 {
    font-size: 3em;
  }

  > .button {
    margin-top: 1.4em;
    text-align: left;
  }
`

const SeparateContent = styled.div`
  width: 100%;

  @media (min-width: 769px) {
    width: 60%;
    padding: 2%;
  }
`

export { SeparateSection, SeparateHead, SeparateContent }
