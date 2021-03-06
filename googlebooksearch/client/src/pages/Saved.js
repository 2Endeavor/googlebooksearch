// Importing the React component. This is required for all pages
import React, { Component } from "react";
// Imporing Bootstrap components
import Jumbotron from "../components/Jumbotron";
// importing the card, book and footer components that will be referenced on this page
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
// IMporting the API that will be referenced on this page
import API from "../utils/API";
// Importing the bootstrap component that will be needed to render the page
import { Col, Row, Container } from "../components/Grid";
// This is pulling in a list of books
import { List } from "../components/List";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  };
// rendering the page that will be used to input books
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  // Map returns a brand new array that is the same length as the first. Whatever is returned from the callback at each iteration will be placed into that position of the new array
                  The key value is important inside React arrays and without it you will get an error
                  {this.state.books.map(book => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
                //The colon : is the else statement for if no books exist.
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
