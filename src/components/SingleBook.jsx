import { Component } from 'react'
import { Card } from 'react-bootstrap'
// import CommentArea from './CommentArea'

const SingleBook = ()=> { 
  
  
    return (
      <>
        <Card
          // onClick={() => this.setState({ selected: !this.state.selected })}
          onClick={() => props.changeSelectedBook(props.book.asin)}
          style={{
            border:
              props.selectedBook === props.book.asin
                ? '3px solid red'
                : 'none',
          }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {book.title}
            </Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
      </>
    )
  
}

export default SingleBook
