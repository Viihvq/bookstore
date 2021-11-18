// import { title, title } from "process";
import axios from "axios";
import {  useState } from "react";
import { Container, Content, Results } from "./style";
import { RepositoryBook } from "../../interfaces/IRepositoryBook";
import { formatPrice } from "../../util/format";
import {FaSearch } from "react-icons/fa"

export function Search(){
  const [title, setTitle] = useState('');
  const [books, setBooks] = useState<RepositoryBook>();

    // useEffect(() => {
    async function getItems(){  
      const {data} = await axios.get<RepositoryBook>('https://www.googleapis.com/books/v1/volumes?q='+title);
      setBooks(data);
        
    }
    // procuraLivro();
    // },[])
    
    console.log(books?.items)
    
    return(
      <Container>
      <Content>
        <div className="search">
          <FaSearch className="teste"/>
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
            <a href={book.saleInfo.buyLink} target="_blank" rel="noopener">
                <img 
                    src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : 'https://via.placeholder.com/128x190.png?text=Indisponivel'} 
                    alt="" 
                />
              <p className="title"><strong> {book.volumeInfo?.title} </strong></p>
              <p className="authors"> {book.volumeInfo.authors == undefined ? 'AUTOR INDEFINIDO' : book.volumeInfo.authors[0]} </p> 
              <p> {book.saleInfo?.saleability === "FOR_SALE" ? formatPrice(book.saleInfo.listPrice.amount)  : "PREÇO INDISPONÍVEL" }</p>
            </a>
            
          </div>
        )
      })}      
    </Results>  
    </Container>
  )
}

//<tbody>
// <a href={book.saleInfo.buyLink} target="_blank" >
//             <tr key={index}>
//               <td>               
//                 <img 
//                 src={book.volumeInfo.imageLinks?.thumbnail ? book.volumeInfo.imageLinks?.thumbnail : 'https://via.placeholder.com/128x190.png?text=Indisponivel'} 
//                 alt="" />
//               </td>
//               <td><strong>{book.volumeInfo.title}</strong></td>  
//               <td>{book.volumeInfo.authors[0]}</td>  
//               <td>{book.saleInfo.saleability == "FOR_SALE" ? book.saleInfo.listPrice.amount : "INDISPONÍVEL" }</td>
//               {/* <p>{book.volumeInfo.description}</p> 
//               livro, titulo, autor, preço
//             */}

//           </tr>       
//             </a>
//</tbody> 