import React from 'react';

import SearchForm from './search-form';
import ReposList from './repos-list';

const GITHUB_USER_REPOS_URL = 'https://api.github.com/users/{username}/repos';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      repos: []
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(username) {
    const url = GITHUB_USER_REPOS_URL.replace(/\{username\}/, username);
  	fetch(url)
  		.then(response => response.json())
      .then(repos => {
        this.setState({ repos });
      });
  }

  render() {
    return (
      <div>
        <SearchForm onSubmit={this.onSearch} />
        <ReposList repos={this.state.repos} />
      </div>
    );
  }

}

export default App;
