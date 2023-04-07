import { Title } from 'components/App/App.styled';
import img from '../images/phonebook-img.jpg';

const styles = {
  container: {
    background: 'linear-gradient(#e66465, #9198e5)',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <Title>Phonebook</Title>
      <div>
        <img
          src={img}
          alt={'phone hand book'}
          width="100%"
          style={styles.img}
        />
      </div>
    </div>
  );
}
