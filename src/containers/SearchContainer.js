import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchField from '../components/SearchField'
import SearchMenuBar from '../components/SearchMenuBar'
import { getSearchResult, getCurrentResultType, getLastSearch } from '../selectors/search'
import { doSearch } from '../actions/search'
import SearchResultViewer from '../components/SearchResultViewer'

class SearchContainer extends Component {
  render() {
    const { doSearch, result, resultType, lastSearch } = this.props

    return(
      <div>
        <SearchField onSearch={keyword => doSearch(keyword)} lastSearch={lastSearch}></SearchField>
        { 
        result && 
        <div>
          <SearchMenuBar></SearchMenuBar>
          <SearchResultViewer result={result} resultType={resultType}></SearchResultViewer>
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  result: getSearchResult(state),
  resultType: getCurrentResultType(state),
  lastSearch: getLastSearch(state)
})

export default connect(mapStateToProps, {
  doSearch
})(SearchContainer)
