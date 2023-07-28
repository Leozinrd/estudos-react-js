import './App.css';
import './Reset.css'
import './Normalize.css';

import Header from './components/Header/header';
import TalkWithMe from './components/TalkWithMe/talkWithMe';
import People from './components/People/people';
import Events from './components/Events/events';
import Forms from './components/Forms/forms';
import Conditional from './components/Conditional/conditional';
import Footer from './components/Footer/footer'

function App() {

  const urlPictureAlternative='https://via.placeholder.com/50';

  return (

    <div className="App">
      <section className='Webpage'>
        <Header/>
    
        {/* Start TalkWithMe */}
        <TalkWithMe nickname='Leonardo'/>
        <TalkWithMe nickname='Cauã'/>
        <TalkWithMe nickname='Suzane'/>
        {/* End TalkWithMe */}
    
        {/* Start People */}
        <section className='SectionPeople'>
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
        </section>
        {/* End People */}
    
        {/* Start Buttons */}
        <Events/>
        {/* End Buttons */}

        {/* Start Conditional */}
        <Conditional/>
        {/* End Conditional */}
        
        {/*Start Forms */}
        <Forms/>
        {/*End Forms*/}
    
        <Footer/>
      </section>
    </div>
  );
}

export default App;
