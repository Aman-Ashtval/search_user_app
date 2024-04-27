import {Component} from 'react'

import AppItem from '../UserCard'
import file1 from '../../myData/file1';

import './index.css'
import UserCard from '../UserCard';

const SEARCH_ICON_URL =
  'https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png'

class Home extends Component {
  state = {
    searchInput: '',
    userData: [],
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  // getSearchResults = () => {
  //   const {searchInput} = this.state
  //   const searchResults = appsList.filter(eachApp =>
  //     eachApp.appName.toLowerCase().includes(searchInput.toLowerCase()),
  //   )

  //   return searchResults
  // }

    //   access file data
  getData = async() => {
    const response = await fetch(file1);
    const responseData = await response.text();
    const rows = responseData.split('\n');    
    const trimmedRows = rows.slice(2).map(each => each.trim());

    const data = trimmedRows.map(row => {
      const columns = row.split('|').map(each => each.trim());
      // console.log(columns);
      const filteredColumn = columns.filter(each => each !== '');
      return {
        name: filteredColumn[0],
        age: parseInt(filteredColumn[1]),
        country: filteredColumn[2],
        mobile: filteredColumn[3],
        email: filteredColumn[4]
      };
    })
    this.setState({userData:data});
  }

    componentDidMount(){
      this.getData();
    }

  render() {
    const {searchInput, userData} = this.state
    console.log(userData);
    // const searchResults = this.getSearchResults()
    // const filteredApps = this.getActiveTabApps(searchResults)

    return (
      <div className="app-container">
        <div className="app-initial-container">
          <h1 className="heading">Search User App</h1>
          <div className="search-input-container">
            <input
              type="search"
              placeholder="Search User Name..."
              className="search-input"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src={SEARCH_ICON_URL}
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="user-list">
            {userData.map(eachUser => (
              <UserCard userDetails={eachUser} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
