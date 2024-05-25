import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const LogIn = () => {
    return (
        <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        
        onSubmit={async (values, { setSubmitting }) => {
            try {
            const response = await axios.post('/api/login', values);
            console.log(response.data);
            } catch (error) {
            console.error(error);
            }
            setSubmitting(false);
        }}
        >
        <Form>
            <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage name="email" component="div" />
            </div>
            <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage name="password" component="div" />
            </div>
            <button type="submit">Submit</button>
        </Form>
        </Formik>
    );
};

export default LogIn;