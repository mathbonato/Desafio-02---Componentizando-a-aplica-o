import { GenreResponseProps } from '../App';

interface IHeader {
  selectedGenre: GenreResponseProps;
}

export function Header({ selectedGenre }: IHeader) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}