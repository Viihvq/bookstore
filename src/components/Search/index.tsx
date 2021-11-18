import axios from "axios";
import {  useState } from "react";
import { Container, Content, Results } from "./style";
import { RepositoryBook } from "../../interfaces/IRepositoryBook";
import { formatPrice } from "../../util/format";
import {FaSearch } from "react-icons/fa"

export function Search(){
  const [title, setTitle] = useState('');
  const [books, setBooks] = useState<RepositoryBook>();

    async function getItems(){  
      const {data} = await axios.get<RepositoryBook>('https://www.googleapis.com/books/v1/volumes?q='+title);
      setBooks(data);   
    }
    
    return(
      <Container>
      <Content>
        <div className="search">
          <FaSearch className="icon"/>
        <input 
          type="text" 
          placeholder="Digite o nome do livro"
          onChange={event => setTitle(event.target.value)}
          value={title} 
        />
        </div>
        
        <button 
          type="submit" 
          onClick={getItems}
          >
          Enviar
        </button>
      </Content>
      <Results>
        
      {books?.items.map((book, index) => {
        return(
          <div key={index}>
            <a href={book.saleInfo.buyLink} target="_blank" rel="noreferrer">
                <img 
                    src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : 'https://via.placeholder.com/128x190.png?text=Indisponivel'} 
                    alt="" 
                />
              <p className="title"><strong> {book.volumeInfo?.title} </strong></p>
              <p className="authors"> {book.volumeInfo.authors === undefined ? 'Autor indefinido' : book.volumeInfo.authors[0]} </p> 
              <p> {book.saleInfo?.saleability === "FOR_SALE" ? formatPrice(book.saleInfo.listPrice.amount)  : "Preço indisponível" }</p>
            </a>
          </div>
        )
      })}      
    </Results>  
    </Container>
  )
}