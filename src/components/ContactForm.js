import { Button, Label, Col, FormGroup } from "reactstrap";
import { Formik, Field, Form } from 'formik';

const ContactForm = () => {
    return (
    <Formik
        initialValues={{
            fisrtName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: ''

        }}
        >
        <Form>
            <FormGroup Row>
                <Label htmlFor='firstName' md='2'>
                    First Name
                </Label>
                <Col md='10'>
                    <Field 
                        className='form-control'
                        placeholder ='First Name'
                        
                    />
                </Col>
            </FormGroup>
            <FormGroup Row>
                <Label htmlFor="lastName" md='2'>
                    Last Name
                </Label>
                <Col md='10'>
                    <Field 
                        className='form-control'
                        placeholder='Last Name'
                        name='lastName'
                    />
                </Col>
            </FormGroup>
            <FormGroup Row>
                <Label htmlFor="phoneNum" md='2'>
                    Phone
                </Label>
                <Col md='10'>
                    <Field 
                        name='phoneNum'
                        placeholder='Phone'
                        className='form-control'
                    />
                </Col>
            
            </FormGroup>
            <FormGroup Row>
                <Label htmlFor='email' md='2'>
                    Email
                </Label>
                <Col md='10'>
                    <Field 
                        className='form-control'
                        name='email'
                        placeholder='Email'
                        type='email'
                    />                   
                </Col>
            </FormGroup>
            <FormGroup Row>
                <Label check md={{size: 4, offset: 2}}>
                    May we contact you?
                </Label>
                <Col md='4'>
                    <Field className='form-control'>
                        
                    </Field>
                </Col>
            </FormGroup>
            <FormGroup Row>
                <Label htmlFor="feedback" md='2'>
                    Your Feedback
                </Label>
                <Col md='10'>
                    <Field className='form-control'>
                        
                    </Field>
                </Col>
            </FormGroup>
            <FormGroup Row>
            
            </FormGroup>
        </Form>
    </Formik>
    )
}

export default ContactForm;