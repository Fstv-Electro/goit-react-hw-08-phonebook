import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import Button from 'components/Button';
import { Form, Label, Title, Input } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Title>User name</Title>
        <Input type="text" name="name" placeholder="Jacob" />
      </Label>
      <Label>
        <Title>Email</Title>
        <Input type="email" name="email" placeholder="example@mail.com" />
      </Label>
      <Label>
        <Title>Password</Title>
        <Input type="password" name="password" placeholder="*******" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
