import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Heading from '../components/Heading';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function Contact({ id }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const contactUsCollection = collection(db, 'contact_us');

  const submitForm = (e) => {
    e.preventDefault();
    addDoc(contactUsCollection, {
      Email: email,
      Phone: phone,
      Message: message,
    })
      .then(() => {
        alert('Successfully submitted!');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id={id} className='container' style={{ marginTop: '60px' }}>
      <Heading title='Contact Us' />
      <h4 className='mt-5 pt-4'>Please contact us for more information!</h4>
      <Form className='mt-3' onSubmit={submitForm}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            required={true}
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type='text'
            required={true}
            placeholder='Enter your phone number'
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Your message here:</Form.Label>
          <Form.Control
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Your message here'
            required={true}
            as='textarea'
            rows={5}
          />
        </Form.Group>
        <Button
          className='mt-3 px-5 py-2'
          id={"submit-form-btn"}
          style={{ float: 'right' }}
          type='submit'
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
