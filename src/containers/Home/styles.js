import styled from 'styled-components'
import Background2 from '../../assets/ImagesPage/Background2.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: #fff;
    background: url(${Background2});
    padding-bottom: 2rem;

    h1 {
        font-size: 1.1rem;        
        margin-bottom: 10px;
        font-family: 'Tomorrow', sans-serif;
    }

    @media screen and (min-width: 320px) and (max-width: 600px) {
    height: auto;
    padding: 1rem;
    }
`
export const Image = styled.img`
    width: 25%;

    @media screen and (min-width: 320px) and (max-width: 600px) {
        width: 45%;
    }
`

export const Title = styled.div` 
    display: flex;    
    justify-content: center;  
    align-items: center;

    h2 {
        font-size: 2.3rem;
    }
`

export const Items = styled.div` 
    display: flex;    
    align-items: center;    
    margin: 1rem 5rem;

    p {
        font-size: 1.1rem;        
        margin-top: 10px;
        font-family: 'Tomorrow', sans-serif;
        padding-right: 10rem;        
    }

    

    @media screen and (min-width: 320px) and (max-width: 600px){
        padding: 0rem;  
        margin: 0rem 1.1rem 1rem 1.1rem;  

        p {
            font-size: 1rem;          
            margin-top: 1rem;
            padding-right: 0;
        }
}
`

export const ItemsLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 70%;

    img {
        width: 250px;
    }

    @media screen and (min-width: 320px) and (max-width: 600px){
        padding: 0rem;  
        margin: 0rem 1.1rem 1rem 1.1rem; 

        img {
            display: none;
        }
    }
`



