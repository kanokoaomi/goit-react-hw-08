import styles from "./SearchBox.module.css"

const SearchBox = ({ inputValue, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <p>Find contacts by name:</p>
      <label>
        <input className={styles.input} name="search" type="text" value={inputValue}
          onChange={event => { handleChange(event.target.value) }} />
      </label>
    </div>
  )
}

export default SearchBox