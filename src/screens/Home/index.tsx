import { Content, Container } from '../../components/shared/CommonStyles';
import { Header, HighlightCard } from '../../components/';
import { RefeicoesTitle } from './styles';
import { Button } from '../../components/Button';
import { ScrollView, SectionList } from 'react-native';
import { MealListItem } from '../../components/MealListItem';
import { MealDate } from '../../components/MealListItem/styles';
import { useState } from 'react';
import { MealList } from '../../@types/intefaces';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();
  const [mealList, setMealList] = useState<MealList[]>([
    {
      id: 'kldfdkjfdjdf11111',
      date: new Date().toLocaleDateString(),
      data: [
        {
          id: 'fdnklfdgnkljfbgnklsas111a',
          hour: new Date().toLocaleTimeString(),
          title: 'X-Tudo',
          type: 'out',
        },
        {
          id: 'fdnklfdgnkljfbgnkl',
          hour: new Date().toLocaleTimeString(),
          title: 'Hamburguer',
          type: 'out',
        },
        {
          id: 'fdnklfdgnkljfbgnkl2323',
          hour: new Date().toLocaleTimeString(),
          title: 'salada Verde',
          type: 'in',
        },
      ],
    },
    {
      id: 'dujgfhfhufg',
      date: new Date().toLocaleDateString(),
      data: [
        {
          id: 'fdnklfdgnkljfbgnklasaaxvb23',
          hour: new Date().toLocaleTimeString(),
          title: 'X-100',
          type: 'out',
        },
        {
          id: 'fdnklfdgnkljfbgnklsaadf',
          hour: new Date().toLocaleTimeString(),
          title: 'risoto',
          type: 'in',
        },
        {
          id: 'fdnklfdgnkljfbgnklssss',
          hour: new Date().toLocaleTimeString(),
          title: 'feijão',
          type: 'in',
        },
      ],
    },
  ]);

  return (
    <Container>
      <Header />
      <Content>
        <HighlightCard
          title="90,86%"
          subtitle="das refeições dentro da dieta"
          style={{ marginTop: 24 }}
        />

        <RefeicoesTitle>Refeições</RefeicoesTitle>

        <Button
          title="Nova refeição"
          icon="add"
          style={{ marginBottom: 32 }}
          onPress={() => navigation.navigate('newMeal')}
        />

        <SectionList
          sections={mealList}
          keyExtractor={(item, i) => item.id}
          renderItem={({ item }) => (
            <MealListItem
              hour={item.hour}
              meal={item.title}
              type={item.type}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <MealDate>{date}</MealDate>
          )}
          contentContainerStyle={{ gap: 8, paddingBottom: 80 }}
          scrollEnabled
        />
      </Content>
    </Container>
  );
}
