interface LinkProps {
  text: string;
}

function Link(props: LinkProps) {
  return <button>{props.text}</button>
}

function App() {
  return (
    <div>
      <Link text="Upload" />
    </div>
    
  );
}

export default App
