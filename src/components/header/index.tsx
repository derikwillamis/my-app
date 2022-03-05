import logoimg from '../../image/pngegg.png'
import { Container , Content} from './styles'

export function Header (){
 return (
 <Container> 
  <Content>
     <img src={logoimg} alt="Paulo arte"/>
     <button>Todas minhas arte</button>
     </Content>
 </Container>
)
}