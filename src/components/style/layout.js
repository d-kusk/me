import styled from 'styled-components'

const Section = styled.section`
  background-color: ${props => (props.primary ? '#29abe2' : '#fff')};
  padding-top: 100px;
  padding-bottom: 100px;
`

const Container = styled.div`
  max-width: 1125px; /* iPhone X 縦持ちの横幅 */
  margin-left: auto;
  margin-right: auto;
`

const Footer = styled.footer`
  background-color: #29abe2;
  padding: 30px 0 60px;
`

export { Section, Container, Footer }
