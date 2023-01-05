import Heading from '../components/Heading';
import user1 from '../img/user1.jpg';
import user2 from '../img/user2.jpg';
import user3 from '../img/user3.jpg';
import user4 from '../img/user4.jpg';
import {Button, Card} from "react-bootstrap";

function Team({ id }) {
  return (
    <div
      className='container'
      style={{
        marginTop: '120px',
        paddingBottom: '120px',
      }}
    >
      <div id={id}>
        <Heading title='Our Team' />
        <div className='row justify-content-center gap-5 mt-5 pt-4'>
          <div className='col-lg-3 col-sm-12'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user1} />
              <Card.Body>
                <Card.Title>Riko</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col-lg-3 col-sm-12'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user2} />
              <Card.Body>
                <Card.Title>Kevin Lie</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
