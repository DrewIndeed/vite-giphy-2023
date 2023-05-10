import Header from "@components/Header";
import { useTheme } from "@context/themeContext";
import { AppStyled } from "@styles/app";

const App = () => {
  const theme = useTheme();
  return (
    <AppStyled theme={theme}>
      <Header />
    </AppStyled>
  );
};

export default App;
