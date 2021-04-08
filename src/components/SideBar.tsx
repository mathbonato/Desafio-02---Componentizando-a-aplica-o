import { useState, useEffect } from 'react'

import { Button } from './Button';

import { GenreResponseProps } from '../App';
interface ISidebar {
  onSelectGenre: Function;
  genres: GenreResponseProps[];
  activeGenreId: number;
}

export function SideBar({ onSelectGenre, genres, activeGenreId }: ISidebar) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={activeGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}