export default function Footer() {
  const today = new Date();
  return (
    <footer>
      <p>Copyright &copy;{today.getFullYear()}</p>
    </footer>
  );
}
