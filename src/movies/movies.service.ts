import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    return this.movies.find((movie) => movie.id === id);
  }

  create(movieData: CreateMovieDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  deleteOne(id: number): boolean {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  patch(movieId: number, updateData: UpdateMovieDto) {
    const movie = this.getOne(movieId);
    this.deleteOne(movieId);
    this.movies.push({ ...movie, ...updateData });
  }
}
