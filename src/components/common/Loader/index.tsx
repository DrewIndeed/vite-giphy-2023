import { LoaderStyled } from "./style";

const Loader = () => {
  return (
    <LoaderStyled>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderStyled>
  );
};

export default Loader;
