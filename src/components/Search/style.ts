import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto; 
`;

export const Content = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .search{
    display: flex;
    align-items: center;
    text-align: left;
    border: 1px solid;
    height: 2.1rem;
    width: 45%;
    font-size: 0.85rem;
    padding-left: 0.5rem;
    border-radius: 0.75rem;
    border: 1px solid #293256;

    .icon{
      width: 16px;
    }
  
    input{
      height: 1.80rem;
      width: 95%;
      font-size: 0.85rem;
      padding-left: 0.5rem;
      text-align: left;
      border-radius: 0.75rem;
      border: none;
      
      &:focus{
        outline: none;
      }
    }
  }
  
  button[type="submit"]{
    width:4rem;
    height: 2rem;
    margin: 0.75rem 0rem 0.75rem 0.75rem;
    border-radius: 0.75rem;
    border: 0;
    color: #F0E9D2;
    background-color: #293256;
    
    transition: filter 0.2s;
    &:hover{
      filter: brightness(1.15);
    }
  }
`;

export const Results = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem 2rem;
  padding: 1rem 0;
  margin-top: 0.5rem;
  text-align: center;
  justify-content: center;
  
  div{
    margin: 0 auto; //centraliza
    width: 128px;
    align-items: center;
    justify-content: center;

    .title{
      height: 3rem;
      display: flex;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;

      &:hover{
        height: 4.5rem;
        -webkit-line-clamp: 3;      
      }
    }
    
    .authors{
      height: 1.5rem;
      display: flex;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;   
    }
    
    a{
      text-decoration: none;
      color: #293256;

      &:hover{
        color: #3d4a81;
      }
          
      img{
        width: 128px;
        height: 190px;
      }
          
      p{
        margin-top: 0.5rem;
      }
    }
  }

  @media(max-width: 1000px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 700px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 320px){
    grid-template-columns: 1fr;
  };
`