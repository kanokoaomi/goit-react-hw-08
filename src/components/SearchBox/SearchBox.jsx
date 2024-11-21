import { useDispatch, useSelector } from "react-redux"
import styles from "./SearchBox.module.css"
import { setFilter } from "../../redux/filters/slice"
import { selectFilter } from "../../redux/filters/selectors"

const SearchBox = () => {

  const filters = useSelector(selectFilter)
  const dispatch = useDispatch()

  return (
    <div className={styles.wrapper}>
      <p>Find contacts by name:</p>
      <label>
        <input className={styles.input} name="search" type="text" value={filters}
          onChange={(event) => {
            const action = setFilter(event.target.value)
            dispatch(action)
          }} />
      </label>
    </div>
  )
}

export default SearchBox