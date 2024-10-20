import React from 'react';
import Navigation from './Navigation';
import ProjectSection from './Sections/ProjectSection';
import SectionDivider from './Sections/SectionDivider';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Portifólio de Henrique</h1>
        <p>Conheça os meus projetos</p>
        <Navigation />
      </header>
      <main className="container">
        <ProjectSection 
          title="Bloomie"
          imageUrl="./public/bloomie.png"
          buttons={
            [
              { label: "Projeto no GitHub", url: "https://github.com/Henrique1701/Bloomie" },
              { label: "Mais informações", url: "https://sites.google.com/cin.ufpe.br/bloomie" }
            ]
          }
        />
        <SectionDivider />

        <ProjectSection 
          title="Cloudy"
          buttons={
            [
              { label: "Projeto no GitHub", url: "https://github.com/Henrique1701/cloudy-app?tab=readme-ov-file" },
              { label: "Mais informações", url: "https://sites.google.com/cin.ufpe.br/cloudy/"}
            ]
          }
        />
        <SectionDivider />

        <ProjectSection 
          title="Banho Rápido"
          videoUrl="https://www.youtube.com/embed/4klilST6neY?si=EcnW6dskd6JPJBNa"
          buttons={
            [
              { label: "Projeto no GitHub", url: "https://github.com/Henrique1701/Banho-Rapido" }
            ]
          }
        />
        <SectionDivider />

        <ProjectSection 
          title="YouTube PIP"
          videoUrl="https://www.youtube.com/embed/--Rk9L1WSNQ"
          buttons={
            [
              { label: "Projeto no GitHub", url: "https://github.com/Henrique1701/YouTube_PiP" }
            ]
          }
        />
        <SectionDivider />

        <ProjectSection 
          title="TopDownBoat"
          videoUrl="https://www.youtube.com/embed/VdkZQFLj4Ps?si=Phr0XbFvbkyomhWq"
          buttons={
            [
              { label: "Projeto no GitHub", url: "https://github.com/Henrique1701/cloudy-app?tab=readme-ov-file" },
              { label: "Mais informações", url: "https://medium.com/appledeveloperacademy-ufpe/movimenta%C3%A7%C3%A3o-top-down-de-personagens-utilizando-spritekit-para-tvos-a018767dc228"}
            ]
          }
        />

      </main>
      <footer>
        <p>© 2024 José Henrique Fernandes Silva - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;