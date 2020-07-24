import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="spi-header">
      <section className="container">
        <Link to="/" className="spi-header__logo">
          <img src="/assets/images/logo.png" alt="logo" />
            玩儿技术
        </Link>
      </section>
    </header>
  );
}
