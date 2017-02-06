import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router'

let Header =function () {
        return (
            <header className="main-header">
                <ul className="main_menu">
                    <li className="active">
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/music">Музыка</Link>
                    </li>
                    <li>
                        <Link to="/video">Видео</Link>
                    </li>
                    <li>
                        <Link to="/photo" id="photo">Фото</Link>
                    </li>
                    <li>
                        <Link to="/chat">Чат</Link>
                    </li>
                    <li>
                        <Link to="/enter">Вход</Link>
                    </li>
                </ul>
            </header>
        )
    };

export default Header;