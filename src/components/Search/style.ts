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
  /* flex-direction: column; */

  .search{
    display: flex;
    align-items: center;
    text-align: left;
    border: 1px solid;
    height: 2.1rem;
    width: 40%;
    font-size: 0.85rem;
    padding-left: 0.5rem;
    border-radius: 0.75rem;
    border: 1px solid #293256;

    .teste{
      width: 16px;
    }
  
    input{
      height: 1.80rem;
      width: 85%;
      font-size: 0.85rem;
      padding-left: 0.5rem;
      text-align: left;
      border-radius: 0.75rem;
      border: none;
      
      &:focus{
        outline: none;
      }
    }
    
    @media(max-width: 1000px){
      width: 40%;
      input{
        width: 93%;
      }
    }

    @media(max-width: 700px){
      width: 65%;
      input{
        width: 85%;
      }
    } 
  }
  
  button[type="submit"]{
    width:4rem;
    height: 2rem;
    margin: 0.75rem;
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
  text-align: center;
  justify-content: center;
  
  div{
    /* div{ */

    .title{
      height: 45px;
      display: flex;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

      margin: 0 auto; //centraliza
      width: 128px;
      align-items: center;
      justify-content: center;
      
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
    /* } */
  }

  @media(max-width: 1000px){
  grid-template-columns: repeat(4, 1fr);
  
    div{
      align-items: center;
      justify-content: center;
    }
  }

  @media(max-width: 700px){
  grid-template-columns: 1fr 1fr 1fr;
  
    div{
      margin-top: 1rem;
      align-items: center;
      justify-content: center;
    }
  }

  @media(max-width: 512px){
  grid-template-columns: 1fr;
  
    div{
      margin-top: 1rem;
      align-items: center;
      justify-content: center;
    }
  };
`
  
  /* tbody{
    width: 128px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem 3rem;
    
    a{
      text-decoration: none;
      color: #293256;
      
      &:hover{
        color: #3d4a81;
      }
    }

    td{
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      &:first-child {
        height: 240px;
      }
      
      & + td{
        margin: 1rem 0;
        
      }
      
      &:last-child{
        height: 0.5rem;
      }
    }
    
    img{
      box-shadow: 3px 3px 3px #b8b8b8;
      height: 190px;
      width:128px;
    }
  } */