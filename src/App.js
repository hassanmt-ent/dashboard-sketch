import logo from './logo.svg';



function App() {
  return (
   <div className="wrapper">
     <Router>
       <Sidebar/>
       <Route path='/' component={Main} />
     </Router>

    </div>
  );
}

export default App;
