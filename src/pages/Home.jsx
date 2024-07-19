const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-xl mb-8">This is a bare-bones application that you can modify and build upon.</p>
      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
        <ul className="list-disc list-inside text-left">
          <li>Modify the content in <code className="bg-background px-1 rounded">src/pages/Home.jsx</code></li>
          <li>Add new pages in the <code className="bg-background px-1 rounded">src/pages</code> directory</li>
          <li>Update the navigation in <code className="bg-background px-1 rounded">src/components/Navbar.jsx</code></li>
          <li>Customize the layout in <code className="bg-background px-1 rounded">src/components/Layout.jsx</code></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;