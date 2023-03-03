import Footer from "./components/Footer/Footer";

import BlogNav from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import Home from "./pages/Home/Home";
import { BlogList, ArticlesFromTags } from "./pages/BlogList/BlogList";
import BlogArticle from "./pages/BlogList/BlogArticle";
import UserPage from "./pages/User/User";
import { Container } from "react-bootstrap";
function Tuts() {
  return (
    <h3>tuts</h3>
  )
}
const client = new ApolloClient({
  uri: 'https://galad-blog-backend.herokuapp.com/graphql', // 'https://galad-blog-backend.herokuapp.com/graphql', 'http://localhost:1337/graphql'
  cache: new InMemoryCache(),
})
function App() {
  return (
    <>

      <Router>
        <BlogNav />
        <ApolloProvider client={client}>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/tutorials' element={<Tuts />}></Route>
            <Route path='/blog' element={<BlogList />}></Route>
            <Route path='/portfolio' element={<Container className="tex-center my-auto fw-bold"><h1>Coming Soon</h1></Container>}></Route>
            <Route path='/post/:slug' element={<BlogArticle />}></Route>
            <Route path='/tag/:value' element={<ArticlesFromTags />}></Route>
            <Route path='/user/:username' element={<UserPage />}></Route>
          </Routes>
          <Footer />
        </ApolloProvider>
      </Router>



    </>

  );
}

export default App;
