
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const HomePage = ()=>{
  return(
    <>
      <Navbar />
      <div style={{ color : "tomato", display : "flex", justifyContent : 'center' , alignItems : 'center', marginTop : 20}}>
      <h2>-- Our Products -- </h2>
      </div>
    <div style={{ display : 'flex', flexWrap : "wrap", margin : 25}}>
    <Card style={{ width: '18rem', margin : 5, padding : 5 }}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>

    </Card>
    <Card style={{ width: '18rem' , margin : 5, padding : 5}}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' , margin : 5, padding : 5}}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' , margin : 5, padding : 5}}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' , margin : 5, padding : 5 }}>
      <Card.Img variant="top" src="https://picsum.photos/200/100" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
    <Footer />
   
    </>
  )
}
export default HomePage;