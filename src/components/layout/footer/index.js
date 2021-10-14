import Container from 'react-bootstrap/Container';

import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="p-3">
        <p className="m-0 text-center">Movie Theater &reg;2021</p>
      </Container>
    </footer>
  );
}

export default Footer;
