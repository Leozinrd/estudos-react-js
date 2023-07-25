import styles from '../Footer/footer.module.css';

function Footer(){

    const emailCreator = 'LEONARDO.SILVA@ADVANCE.COM.BR';
    const urlGitHubImage = 'https://pngimg.com/d/github_PNG80.png';
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