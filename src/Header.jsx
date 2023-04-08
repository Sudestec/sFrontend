function Welcome() {
  return (
    <header class='container'>
      <hgroup>
        <h1>Welcome</h1>
        <small>Please sign in.</small>
      </hgroup>
    </header>

  );
}

export default function Header() {
  return (
    <Welcome/>
  );
}