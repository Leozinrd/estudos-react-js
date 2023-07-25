import styles from './people.module.css';

import PropTypes from 'prop-types';

function People({EmployerName, Age, Profession, EmployerPicture}){



    return(
        <>
            <div className={styles.Peoples}>
                <section className={styles.People}>
                    <img className={styles.PeoplePicture} src={EmployerPicture} alt={EmployerName}/>
                    <h2 className="">Nome: {EmployerName}</h2>
                    <p className="">Idade: {Age}</p>
                    <p className="">Profissão: {Profession}</p>
                </section>
            </div>
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