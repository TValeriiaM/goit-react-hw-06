import css from './SearchBox.module.css'

export default function SearchBox({ filter, onFilter }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.searchBoxInput}
        type="text"
        value={filter}
        onChange={event => {
          onFilter(event.target.value);
        }}
      />
    </div>
  );
}