import React from 'react';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/58918493?s=400&amp;u=6267e5f2e34cc7b87e5c22475dc993b757f32ebd&amp;v=4" alt="Profile"/>
        <div>
          <strong>Diego Fernandes</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada
        <br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas de experiências.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>

        <button type="button">
          <img src={whatsIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
