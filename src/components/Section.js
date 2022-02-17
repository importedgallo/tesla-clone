import React from 'react'
import styled from 'styled-components'

function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
  return (
      <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{ title }</h1>
            <p> {description} </p>
        </ItemText>
        <Buttons>
            <ButtonGroup>
                <LeftButton>
                   { leftBtnText } 
                </LeftButton>
                <RightButton>
                   { rightBtnText } 
                </RightButton>
            </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg">
                </DownArrow>
        </Buttons>
      </Wrap>


  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical alignment
    align-items: center; //horizontal alignment

    background-image: ${props => `url("/images/${props.bgImage}")`};

`

const ItemText = styled.div`
   padding-top: 15vh;     
   text-align: center;
` 
const Buttons = styled.div`

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`
// inherits styles from LeftButton
const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.65;

`

const DownArrow = styled.img`
    height: 40px;
    cursor: pointer;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;

`
