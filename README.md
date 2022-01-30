# Usando navegação com react-router-dom
* npm install styled-components
* npm install -D @types/styled-components
* formas para importar components styed-components
* navigation muito bom https://alunos.b7web.com.br/curso/reactjs/redirecionamento-de-rotas

## Instalando e configurando react-router-dom
    * npm install react-router-dom
    * configurando o inicio
        * no arquivo index do seu projeto configurar
        * importar o arquivo e envolver no seu principal
        * import { BrowserRouter } from 'react-router-dom';

            import React from 'react';
            import ReactDOM from 'react-dom';
            import './index.css';
            import App from './App';
            import { BrowserRouter } from 'react-router-dom';

            ReactDOM.render(
                <React.StrictMode >
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </React.StrictMode>,
            document.getElementById('root')
            );
        
        * Agora criando as rotas no seu arquivo App
        * import { Route, Routes } from 'react-router-dom';
            <div>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Aboult/>} />
                <Route path="/sobre/bonieky" element={<AboutBonieky/>} />
                <Route path="/sobre/pedro" element={<AboutPedro/>} />
                </Routes>
            </div>


## Usando Bootstrap
    * formas de instalar o bootstrap
        * npm install react-bootstrap bootstrap@5.1.3
        * npm install react-bootstrap
    * forma de usar
        * importar no arquivo principal index.js ou index.ts, ou index.tsx
        * import 'bootstrap/dist/css/bootstrap.min.css';

## Usando Twaind
    * instalação no react-app
        * link: https://tailwindcss.com/docs/guides/create-react-app
        * npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
        * npx tailwindcss init -p

## Material Designer UI