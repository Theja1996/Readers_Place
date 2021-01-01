import React, { useState, useEffect, Fragment } from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  Button,
  Modal,
 
} from "reactstrap";
import axios from "axios";
import Image from "react";
import "./Book.css";
const BookCard = ({ infoLink, display_name }) => {
  // States
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const toggle = () => setModal(!modal);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/books/v3/lists/current/young-adult-hardcover.json?api-key=HG1dUBsr2sBOGun3XPRMNOljixL59uEy"
      )
      .then((res) => {
        console.log(res.data.results);
        setBooks(res.data.results.books);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const filterBooks = books.filter((books) => {
    return books.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Fragment className="fragment">
      <div className="fragment-container">
        <h1 className="fragment-heading">
          {" "}
          New York Times Best Selling Books List
        </h1>
        {/* {search} */}
        <input
          className="fragment-input"
          type="test"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <Button className="search">
          <i className="fas fa-search"></i>
        </Button>

        <Card className="card">
          {filterBooks.map((books, i) => {
            return (
              <CardBody key={i}>
                <CardTitle className="card-title">{books.title}</CardTitle>
                <CardImg
                  src={books.book_image}
                  alt={books.alt}
                  style={{ height: "300px", width: "250px" }}
                />

                <Button onClick={toggle}>More info</Button>
                <Modal isOpen={modal} toggle={toggle}>
                  <div className="modal-header d-flex justify-content-center"  style={{ backgroundColor:'lightblue',width:'450px' }}  >
                
                    <CardImg
                  src={books.book_image}
                  alt={books.alt}
                  style={{ height: "300px", width: "230px" }}
                /> 
           <ul >  <li type='non'>  <h6 style={{ fontWeight:'bold'}}>   {books.title}</h6></li>
        
            <li> auther : {books.author}</li>
                  <li>description :{books.description}</li>
                    <li> contributor:    {books.contributor}</li>
                      <li> amazon_product_url:  {books.amazon_product_url} </li></ul>
                    <button
                      aria-label="Close"
                      className="close"
                      type="button"
                      onClick={toggle}
                    >
                      <span style={{ borderRadius:'10px' }} aria-hidden={true}>X</span>
                    </button>
                  </div>

                  <div className="divider"></div>
                  <div className="right-silde">
                    <Button
                      style={{ justifyContent: "center", marginLeft: "150px" }}
                      onClick={books.amazon_product_url}
                      
                    >
                      Purchase from Amozon
                    </Button>
                  </div>
                </Modal>
              </CardBody>
            );
          })}
        </Card>
      </div>
    </Fragment>
  );
};


export default BookCard;
