import './App.css';
import './Reset.css'
import './Normalize.css';

import Footer from './components/Footer';
import MainHeader from './components/MainHeader';
import TalkWithMe from './components/TalkWithMe';
import People from './components/People';
import Events from './components/Events';

function App() {

  const urlPictureAlternative='https://via.placeholder.com/50';

  return (

    <div className="App">
      <MainHeader/>

      {/* Start TalkWithMe */}
      <TalkWithMe nickname='Leonardo'/>
      <TalkWithMe nickname='Cauã'/>
      <TalkWithMe nickname/>
      {/* End TalkWithMe */}

      {/* Start People */}
      <People 
        EmployerPicture='https://avatars.githubusercontent.com/u/75439898?v=4'
        EmployerName="Leonardo"
        Age={24}
        Profession="Estagiário front-end"
      />
      <People 
        EmployerPicture={urlPictureAlternative}
        EmployerName="Cauã"
        Age={21}
        Profession="Estagiário front-end"
      />
      <People 
        EmployerPicture={urlPictureAlternative}
        EmployerName="Suzane"
        Age={27}
        Profession="Desenvolvedora front-end"
      />
      {/* End People */}

      {/* Start Buttons */}
      <Events
        // Phrase="Teste"
      />
      {/* End Buttons */}
      
      <Footer/>
    </div>
  );
}

export default App;
