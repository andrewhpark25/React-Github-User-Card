import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
max-width: 800px;
margin: 50px auto;
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
`
const Container = styled.div`
width: 100%;
padding: 20px;
display: flex;
border-radius: 5px;
box-shadow: 0 1px 6px -2px #000;
background-color: #FFF;
margin-bottom: 30px;

`
const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 3px;
margin-right: 20px;

`
const Name = styled.p`
font-size: 1.8rem;
font-style: italic;
margin: 3px 0 10px;
`
const Address = styled.p`
font-size: 1.4rem;
margin-bottom: 3px;
}
`
const Follower = props => {
  return (
      <Page>
    <Container>
        <Image src={props.userImg}></Image> 
        <Name>{props.userName}</Name>
        <Address>Profile:<a href={props.address}> {props.address} </a></Address>
        </Container>
        </Page>
   
  )
}
export default Follower;
