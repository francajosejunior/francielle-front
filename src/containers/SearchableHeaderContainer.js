import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
  useRef
} from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import { Search, Add, Close } from '@material-ui/icons'
import { Fab, TextField, InputBase, Button, Grid } from '@material-ui/core'
import { SearchTextContext } from '../util/context'
import './../scss/searchable-header.scss'

const SearchableHeaderContainer = ({ title }) => {
  const [searchText, setSearchText] = useContext(SearchTextContext)
  const [toggleSearch, setToggleSearch] = useState(false)

  useEffect(() => {
    if (!toggleSearch) {
      setSearchText('')
    }
  }, [toggleSearch])

  if (toggleSearch) {
    return (
      <div className="searchable-text">
        <Grid container>
          <Grid item xs={12}>
            <TextField
              fullWidth
              autoFocus
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </Grid>
        </Grid>
        <div className="searchable-text-close">
          <Button>
            <Close onClick={() => setToggleSearch(!toggleSearch)} />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="searchable-header">
      <Button>
        <Search onClick={() => setToggleSearch(!toggleSearch)} />
      </Button>
    </div>
  )
}

export default SearchableHeaderContainer
