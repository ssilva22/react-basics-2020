import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Capitalize the fisrt letter to let React know this is a 
//special function.

function Greeting(){
return <h4>this is Sebastian and this is my first component</h4>;
}

ReactDOM.render(<Greeting />,document.getElementById('root'));

//You need to close closing tags as well as self-closing tags.
//You need to also enable js-react.
//ES7 React/Redux Extesnsion is pretty helpful

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Greetings() {
  return (
    <div>
      <h2>Sebastian Silva</h2>
      <p>This is a message written by me</p>
    </div>
  );
}

const Person = () => <h2>Sebastian Silva</h2>



const names=['john','peter','susan'];
const newName= names.map((name)=>{
  return <h1>{name}</h1>
});
console.log(newName);

import {books} from './books';
import Book from './Book';

function Booklist {
  return (
    <section className= 'booklist'>
      {books.map((book,index)=>{
        return <Book key={books.id} {...books}></Book>
      })}
    </section>
  )
}

const Book= ({img,title,author}) => {
  //attribute handler, eventHandler
  // onClick, onMouseOver.
  const clickHandler= (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World');
  }
  const complexExample= (author) =>{
    console.log(author);
  }

  return (
    <article className='book' onMouseOver={()=>{
      console.log(title);
    }}>
    <img src={img} alt= '' />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <button type="button">onClick={clickHandler}</button>
    <button type="button">onClick={complexExample}</button>
    </article>
  )
}

ReactDOM.render(<Booklist />,document.getElementById('root'));


/**********************-METHOD 1-********************* */
/*
function Booklist {
  return(
    <section className='booklist'>
      <article className='book'>
     <Book job='developer'/>
     <Book />
     <Book />
     <Book />
     </article>
    </section>
  );
}
const Book= (prop) => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
  
}

const Image = () => <img src="" alt=""/>

const Title= () => <h2>I Love You to the Moon and Back</h2>

const Author= () => <h1 style={{color:'#617d98',fontSize: '0.75rem', 
marginTop:'0.25rem'}}>Sebastian Silva</h1>

ReactDOM.render(<Booklist />,document.getElementById('root'));


 */



/****************************************************8*** */
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/

/*
/**********************-METHOD 2-********************* 
const firstBook={
img:'',
title: 'I Love You to the Moon and Back',
author: 'Amelia Hepworth',
};


const secondBook={
  img:'',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
  };
  


function Booklist {
  return(
    <section className='booklist'>
      <article className='book'>
     <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
     <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
     </article>
    </section>
  )
};

const Book= (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  )
  
}
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/***********************************************************/
/******************* METHOD 3---****************************

const books=[
{img:'',title: 'I Love You to the Moon and Back',author: 'Amelia Hepworth',}
,
 {img:'',title: 'Our Class is a Family',author: 'Shannon Olsen',}
 ,
]
const names=['john','peter','susan'];
const newName= names.map((name)=>{
  return <h1>{name}</h1>
});
console.log(newName);

function Booklist {
  return(
    <section className='booklist'>{books.map((book)=>{
      const {img,title,author}=book;
      return  <div> 
        <h3>{title}</h3>
        <h6>{author}</h6>
      </div>;
    })}</section>
  )
}

const Book= (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
    </article>
  )
  
}

*/
