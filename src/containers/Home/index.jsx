import { Container, Image, Items, ItemsLogo, Title } from './styles'

import DefconImage from '../../assets/ImagesPage/defcon-logo.png'
import HYFImage from '../../assets/ImagesPage/HACK1.png'
import HYFLogo from '../../assets/ImagesPage/HACK4.png'

const Home = () => {

    return (
        <Container>
            <Title>
                <Image src={DefconImage} alt="Logo Defcon" />
                <h2>32</h2>
            </Title>
            <Items>
                <p>Hello, if you are reading this it means that you are also participating in DEFCON32 and I am very happy that you came here to learn more about our project.<br /><br />
                    We are a Brazilian community that encourages the entry of people into the cybersecurity area where we have developed a community of experts capable of
                    providing full support to anyone interested in entering the area.<br /><br />
                    We believe that only through education will we have the opportunity to develop a safer future for our entire society and if in any way you can contribute
                    to our project, we will be eternally grateful!<br /><br />
                    Make your donation and learn more about our project.<br /><br />
                    Thank you so much.<br /><br />
                    Ricardo Rocha<br />
                    Founder
                </p>
                <ItemsLogo>
                    <a href="https://www.ihackmyfuture.com/" target="_blank" rel="noopener noreferrer">
                        <img src={HYFImage} alt="Logo Hack Your Future" />
                    </a>
                    <a href="https://www.ihackmyfuture.com/" target="_blank" rel="noopener noreferrer">
                        <img src={HYFLogo} alt="Logo Hack Your Future" />
                    </a>
                </ItemsLogo>

            </Items >
            <h1>Make a donation</h1>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="business" value="5JETX8S53ZKT8" />
                <input type="hidden" name="no_recurring" value="0" />
                <input type="hidden" name="item_name" value="Hack Your Future - Project Brazil" />
                <input type="hidden" name="currency_code" value="BRL" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </Container >
    )
}

export default Home