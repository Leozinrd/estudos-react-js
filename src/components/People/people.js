import { 
    Peoples, 
    SectionPeople, 
    PeoplePicture,
    TextPeople,
}   from './styles'

import PropTypes from 'prop-types';

function People({EmployerName, Age, Profession, EmployerPicture}){



    return(
        <>
            <Peoples>
                <SectionPeople>
                    <div>
                        <PeoplePicture src={EmployerPicture} alt={EmployerName}/>
                    </div>
                    <TextPeople>
                        <h2>Nome: {EmployerName}</h2>
                        <p>Idade: {Age}</p>
                        <p>Profissão: {Profession}</p>
                    </TextPeople>
                </SectionPeople>
            </Peoples>
        </>
    )
}

People.propTypes = {
    EmployerName: PropTypes.string.isRequired,
    Age: PropTypes.number.isRequired,
    Profession: PropTypes.string.isRequired,
    EmployerPicture: PropTypes.string.isRequired
}

export default People;