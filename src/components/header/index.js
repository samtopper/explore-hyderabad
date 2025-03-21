import { Container, List, NavItem } from "./styles";


const Header = (props) => {
  return (
    <Container className="App-header">

      <h1>Explore Hyderabad</h1>

      <nav>
        <List>
          <NavItem>
            <button>Home</button>
          </NavItem>
          <NavItem>
            <button>About</button>
          </NavItem>
          <NavItem>
            <button>Contact</button>
          </NavItem>
        </List>
      </nav>
    </Container>
  );
};

export default Header;
