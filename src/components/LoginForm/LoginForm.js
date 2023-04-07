import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import Button from 'components/Button';
import { Form, Label, Title, Input } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        <Title>Email</Title>
        <Input type="email" name="email" placeholder="example@mail.com" />
      </Label>
      <Label>
        <Title>Password</Title>
        <Input type="password" name="password" placeholder="******" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
