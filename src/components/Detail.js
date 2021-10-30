import React , { useEffect, useState }from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from '../Firebase' 


function Detail() {
    const { id } = useParams();
    const [ movie , setMovie ] = useState();

    useEffect(() => {
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setMovie(doc.data());
            } else {

            }
        })
    }, [])

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src = {movie.coverImg} alt =""/>
                    </Background>
                    <Title>
                        <p>{movie.name}</p>
                    </Title>
                    <Controls>
                        <PlayButton>
                            <img src = "/images/play-icon-black.png" alt = ""/>
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton onClick = {movie.trailerLink}>
                            <img src = "/images/play-icon-white.png" alt = ""/>
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src = "/images/group-icon.png" alt = ""/>
                        </GroupWatchButton>
                    </Controls>
                    <SubTitles>
                        {movie.subtitle}
                    </SubTitles>
                    <Description>
                        {movie.description}
                    </Description>
                </>
            )}
            
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 130px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        margin-top: 70px;
        width: 100%;
        height:100%;
        object-fit: cover;
    }
`

const Title = styled.div`
    padding-top: 100px;
    margin-bottom: -40px;
    font-size: 60px; 
    font-weight: 500;
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.div`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;        
    color: black;
    background: rgb(249 , 249 , 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198 , 198 , 198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0 , 0 , 0 , 0.3);
    border: 1px solid rgb(249 , 249 , 249);
    color: rgb(249 , 249 , 249);
    text-transform: uppercase;
`
const AddButton = styled.button`
    margin-right: 16px;
    width-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0 , 0 , 0 , 0.6);
    cursor: pointer;
    
    span{
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0 , 0 , 0);
`
const SubTitles = styled.div`
    color: rgb(249 , 249 , 249);
    font-size: 20px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249 , 249 , 249);
    max-width: 650px; 
`

