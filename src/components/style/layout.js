import styled from 'styled-components'

const Section = styled.section`
  background-color: ${props => (props.primary ? '#f5f5f5' : '#fff')};
  padding-top: 60px;
  padding-bottom: 60px;

  @media (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`

const Container = styled.div`
  max-width: 1125px; /* iPhone X 縦持ちの横幅 */
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 1124px) {
    max-width: 1480px;
  }
`

const FooterContainer = styled.footer`
  background-color: #29abe2;
  padding: 30px 0 60px;
`

export { Section, Container, FooterContainer }
