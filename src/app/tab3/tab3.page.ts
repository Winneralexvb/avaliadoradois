import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  movieTitle: string = '';
  movieData: any;
  errorMessage: string = '';

  constructor(private movieService: MovieService, private navCtrl: NavController) { }

  ngOnInit() { }

  searchMovie(title: string) {
    if (!title) {
      this.errorMessage = 'Por favor, insira o nome de um filme';
      this.movieData = null;
      return;
    }

    this.movieService.getMovie(title).subscribe(
      (data) => {
        if (data.Response === 'False') {
          this.errorMessage = 'Filme não encontrado';
          this.movieData = null;
        } else {
          this.movieData = data;
          this.errorMessage = '';
        }
      },
      (error) => {
        this.errorMessage = 'Erro ao buscar o filme';
        this.movieData = null;
        console.error(error);
      }
    );
  }

  navigateTo(tab: string) {
    this.navCtrl.navigateRoot(`/tabs/${tab}`);
  }
}


