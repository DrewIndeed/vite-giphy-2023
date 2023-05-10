import { useTheme } from "@context/themeContext";
import { AppWrapper } from "@styles/app";

const App = () => {
  const theme = useTheme();
  console.log(theme); // test if theme is provided globally

  return <AppWrapper>GIF Showings</AppWrapper>;
};

export default App;
