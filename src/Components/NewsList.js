import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import './NewsList.css'
import { Link } from "react-router-dom";
import Business from './Business';
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import { FaUser } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import 'bootstrap';
import "bootstrap/js/src/collapse.js";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Newspaper } from 'react-bootstrap-icons';
import {useLocation, useNavigate} from 'react-router-dom';  
import { Form,FormControl,Button } from 'react-bootstrap';
import UserDropdown from './UserDropdown';
import { useRef } from "react";

function NewsList({data}) {
  const location=useLocation()

  const [isOpen, setIsOpen] = useState(false);
    const [articles,setArticles] = useState([]);
    const [input,setInput] = useState("")
    const [search,setSearch] = useState("")
    const [expanded, setExpanded] = useState(false);
    const[value,setValue]=useState("")
    const [showOptions, setShowOptions] = useState(false);

    const [filteredResults, setFilteredResults] = useState([]);
    const [result, setResult] = useState({ articles: [] });


    async function News() {
      useEffect(() => {
        const fetchData = async () => {
          let response = await fetch(
            "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=32c33fd4552f42f4ba91b6f2af82185c"
          );
          let result = await response.json();
          console.log(result);
          console.log(result.articles);

          
          let p = result.articles.map((a) => {
            if (a.urlToImage) {
              return (
                <div className="container">
                  <div className="max-w-sm rounded overflow-hidden shadow-lg card_content">
                    <img className="w-full" src={a.urlToImage} alt="Image_" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{a.title}</div>
                      <p className="text-gray-700 text-base">{a.description}</p>
                      <a className="font-bold text-xl" href={a.url}>
                        Read more
                      </a>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #General
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        #News
                      </span>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          });
          
    
      console.log(p)
      setValue(p)
      console.log("user data"+data);

        };
        fetchData();
        
      }, []);
    }
    News()
    const typingRef = useRef();

useEffect(() => {
  const text =  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss";
  let index = 0;

  function type() {
    if (index < text.length) {
      const nextCharacter = String.fromCharCode(text.codePointAt(index));
      const currentText = typingRef.current.textContent;
      typingRef.current.textContent = currentText.slice(0, index) + nextCharacter + currentText.slice(index + 1);
      index++;
      setTimeout(type, 50);
    }
  }

  type();
}, []);

const [searchQuery, setSearchQuery] = useState('');
const [searchResults, setSearchResults] = useState(null);

const handleChange = (event) => {
  setSearchQuery(event.target.value);
}

const handleSubmit = (event) => {
  event.preventDefault();
  // Perform the search using the search query
  // You can use the searchQuery state variable to access the current value of the search input
  // Perform your search here and store the results in this variable
  let results = result.articles.filter(article => article.title.toLowerCase().includes(searchQuery.toLowerCase()));
  setSearchResults(results);
}

return (<>
<div class='wallpaper_container'>
        <div className="quote">
          <span ref={typingRef} className="typing">
          
          </span>
          <button className="get-started">Get Started</button>
        </div>
        
        <div className="animation"></div>
        
      </div>

<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

<div className='card1'>
<Navbar expanded={expanded}  expand="lg" id='navbar'>
      <Container fluid id='expenses'>
        
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 brand" navbarScroll>
            <Link id='color'
              to="/home" 
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">
              Home
          </span>
              
            </Link>
            <Link
              to="/business" id="color"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">Business</span>
              
            </Link>
            

            <Link
              to="/sports" id="color"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">Sports</span>
            </Link>
            <Link
              to="/technology" id='color'
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
             <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">Tech</span>
            </Link>
            <Link
              to="/health" id='color'
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">Health</span>
            </Link>
            <Link
              to="/science" id='color'
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">Science</span>
            </Link>
            <Link
              to="/articles" id='color'
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">Articles</span>
            </Link>
            <Link
              to="/tesla" id='color'
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">Tesla</span> 
            </Link>
            <Link
              to="/apple"
              className="nav-link" id='color'
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block  rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">Apple</span>
            </Link>
            <Link
              to="/usBusiness"

              className="nav-link" id='color'
              onClick={() => setExpanded(false)}
            >
              <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-light mr-2 mb-2 external_border">US</span>
            </Link>
          </Nav>
          <Form inline onSubmit={handleSubmit } className='searchbar'>
                <FormControl type="text" placeholder="Search" onChange={handleChange} />
                <Button variant="outline-success" type='submit'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    
</div>

<h1 id="h1">General News</h1>


<UserDropdown username={location.state.id} name={location.state.name} mobile={location.state.mobile} gender={location.state.gender} role = {location.state.role} age={location.state.age} />

<h4 id="greeting">Hello {location.state.name} </h4>
 <Link to="newspaper" id="newspaper"><button><Newspaper className='newspaper_icon'/></button></Link>

  {/* <IconContext.Provider value={{ color: 'grey' }}>
        <FaUser className="logo"onClick={() => setShowMenu(!showMenu)} />
        {showMenu && (
          <ul className="dropdown-menu">
            <li>Info</li>
            <li>Logout</li>
          </ul>
        )}
      </IconContext.Provider> */}


  

    
      {value}</div> </>
  
  
)}

export default  NewsList