type Props = {
  login: string | undefined;
  user_id: string | undefined;
  token: string | undefined;
};

const LoginFormRes: React.FC<Props> = ({ login, user_id, token }) => {
  return (
    <div>
      <h2>Submitted Data:</h2>
      <p>login: {login}</p>
      <p>user_id: {user_id}</p>
      <p>token: {token}</p>
    </div>
  );
};

export default LoginFormRes;