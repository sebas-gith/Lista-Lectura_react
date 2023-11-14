// eslint-disable-next-line react/prop-types
export const Filters = ({handleGenreFilter, handlePagesFilter, filters}) => {
  return (
    <form action="">
      <label htmlFor="pages">
        Filtrar por paginas
        <input
          type="range"
          name="pages"
          onChange={handlePagesFilter}
          id="genres"
          min={36}
          max={1200}
        />
        {/* eslint-disable-next-line react/prop-types*/}
        <span>{filters.minPages}</span>
      </label>

      <label htmlFor="genres">
        Filtrar por generos
        <select name="genres" onChange={handleGenreFilter} id="genres">
          <option value="all">Todas</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
        </select>
      </label>
    </form>
  );
};
