import styled from 'styled-components'

const SeparateSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const SeparateHead = styled.div`
  width: 40%;
  box-sizing: border-box;
  padding: 4%;

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
  width: 60%;
`

export { SeparateSection, SeparateHead, SeparateContent }
