import React, { Component } from 'react';

const Footer = ({text, date}) => (
    <footer>
        <p>
            Todos los derechos reservados {text} &copy; {date}
        </p>
    </footer>
);


export default Footer;