# Daily diet

## Anotações

### Instalar fonte do google fonts

Utilizar o `npx` + `expo`. Instalar `expo-font` e `@expo-google-fonts/fonte`

Exemplo:

```bash
  npx expo install expo-font @expo-google-fonts/inter
```

### Utilizar font

Importar a fonte no componente que abriga as rotas, como `Inter_900Black` e o hook `useFonts`

Exemplo:

```tsx
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  })

  return (
    {fontsLoaded ? <Routes/> : <Erro/>}
  )
}

```
