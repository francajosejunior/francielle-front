import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import { Search, Add } from '@material-ui/icons'
import { Fab, TextField, InputBase } from '@material-ui/core'
import { SearchTextContext } from '../util/context'

const SearchableHeaderContainer = ({ title }) => {
  const [searchText, setSearchText] = useContext(SearchTextContext)

  return (
    <Header
      className="searchable-header"
      title={title}
      components={
        <div className="search">
          <div className="searchIcon">
            <Search />
          </div>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      }
    />
  )
}

export default SearchableHeaderContainer
