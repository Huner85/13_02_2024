import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Logo } from './components/logo/Logo';
import { Icon } from './components/icon/Icon';
import { Main } from './layout/section/Main';
import { Works } from './layout/section/works/Works';


export function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Works/>
        </div>
    );
}
