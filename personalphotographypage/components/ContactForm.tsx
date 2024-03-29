import styles from '../styles/contactForm.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm: React.FC = () => {

  return (
    <Form id={styles.contact_form} action={`https://formsubmit.co/${process.env.EMAIL}`} method="POST">
      <input type="hidden" name="_captcha" value="false"/>
      <Form.Group className={styles.client_info}>
        <Form.Label>What type of photos do you need?</Form.Label>
        <Form.Select aria-label="Default select example" name="Genre" required>
          <option value="1">Wedding</option>
          <option value="2">Portraits</option>
          <option value="3">Family</option>
          <option value="4">General Inquiry</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className={styles.client_info}>
        <Form.Label>First & Last Name</Form.Label>
        <Form.Control type="input" name="Name" required/>
      </Form.Group>
      <Form.Group className={styles.client_info}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="Email" required/>
      </Form.Group>
      <Form.Group className={styles.client_info}>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name="Phone" required/>
      </Form.Group>
      <Form.Group className={styles.client_info}>
        <Form.Label>Tell us more about what you are looking for</Form.Label>
        <Form.Control type="textarea" name="More&nbsp;Info"/>
      </Form.Group>
      <Button className={styles.client_info} id={styles.submit_button} variant="secondary" type="submit">Submit</Button>
    </Form>
  )
}

export default ContactForm;
