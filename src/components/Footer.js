import styles from '../ForAllPages/Footer.module.css';

function Footer(){

    const emailCreator = 'LEONARDO.SILVA@ADVANCE.COM.BR';
    const urlGitHubImage = 'https://w7.pngwing.com/pngs/490/316/png-transparent-computer-icons-github-github-icon-cat-like-mammal-carnivoran-black.png';
    const creator = 'Leonardo';

    return (
        <>
        <footer className={styles.Footer}>
            <p className=''>Webpage created by {creator.toUpperCase()}</p>
            <h6>{emailCreator.toLowerCase()}</h6>
            <a className={styles.GitHubIcon} href='https://github.com/leozinrd' target='blank'>
                <img className={styles.WhatsappImage} src={urlGitHubImage} alt="GitHub"/></a>
      </footer>
        </>
    )

}

export default Footer;