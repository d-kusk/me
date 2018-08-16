import styled from 'styled-components'

const MainTitle = styled.h1`
  margin-bottom: 0;
  font-size: 1.6rem;
  color: #efefef;
`

const SubTitle = styled.h2`
  margin-bottom: 0;
  font-size: 1.3rem;
  color: ${props => (props.primary ? '#29abe2' : 'inherit')};
`

const SubSubTitle = styled.h3`
  font-weight: 400;
  font-size: 1.1rem;
  color: #7b7b7b;
`

export { MainTitle, SubTitle, SubSubTitle }
