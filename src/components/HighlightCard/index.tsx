import {
  Container,
  HighlightCardVariant,
  CardBtnContainer,
  CardBtnIcon,
  Title,
  Subtitle,
} from './styles';
import { TouchableOpacityProps } from 'react-native';

type HighlightCardProps = TouchableOpacityProps & {
  variant?: HighlightCardVariant;
  title: string;
  subtitle: string;
};

export function HighlightCard({
  variant = 'green',
  title,
  subtitle,
  ...rest
}: HighlightCardProps) {
  return (
    <Container
      variant={variant}
      {...rest}
    >
      <CardBtnContainer>
        <CardBtnIcon variant={variant} />
      </CardBtnContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
