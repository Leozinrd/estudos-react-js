import { Content, GitHubIcon } from './styles';

function Footer(){

    const emailCreator = 'LEONARDO.SILVA@ADVANCE.COM.BR';
    const urlGitHubImage = 'https://pngimg.com/d/github_PNG80.png';
    const creator = 'Leonardo';

    return (
        <>
        <Content>
            <p>Webpage created by {creator.toUpperCase()}</p>
            <h6>{emailCreator.toLowerCase()}</h6>
            <GitHubIcon href='https://github.com/leozinrd' target='blank'>
                <img src={urlGitHubImage} alt="GitHub"/>
            </GitHubIcon>
      </Content>
        </>
    )

}

export default Footer;