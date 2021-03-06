import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`

:root{
  --color-header : #A1683A ;
}


*{
  margin:0 auto ;
  align-items:center ;
}

body{
  font-family:sans-serif ;
  max-width:1366px ;
}
html{
        scroll-behavior:smooth;
        max-width:1366px ;
    }

    .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
     .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: white;
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    }

`



