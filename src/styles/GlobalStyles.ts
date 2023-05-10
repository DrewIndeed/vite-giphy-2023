import { createGlobalStyle } from "styled-components";
import { themes } from "./themes";

export const GlobalStyles = createGlobalStyle`
    /* basic css reset baselines */
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;

        /* uncomment this line to test if global styles work */
        /* border: 2px solid lime; */
    }

    body{
        min-height: 100vh;
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;

        /* to customize scrollbar */
        ::-webkit-scrollbar{
            width: 7px;
        }
        ::-webkit-scrollbar-track{
            background: #252525;
        }
        ::-webkit-scrollbar-thumb{
            background: linear-gradient(${themes[1].cyan},${themes[1].purple});
            border-radius: 1rem;
        }
    }
`;
