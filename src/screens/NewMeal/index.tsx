import { Text } from 'react-native';
import { Container, Content } from '../../components/shared/CommonStyles';
import { Header } from '../../components';

export function NewMeal() {
  return (
    <Container>
      <Header variant="backBtnAndText" />

      <Content>
        <Text>Conteúdo</Text>
      </Content>
    </Container>
  );
}
