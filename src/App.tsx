interface LinkProps {
  text: string;
}

function Button(props: LinkProps) {
  return <button className="bg-sky-500 px-4 h-10 rounded-full">{props.text}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Button text="Upload" />
      <Button text="Download" />
    </div>
    
  );
}

export default App
