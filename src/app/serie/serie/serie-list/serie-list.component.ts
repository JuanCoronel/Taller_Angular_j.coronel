import { Component, OnInit } from '@angular/core';
import { serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<serie> = [];
  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series => {this.series = series;}));
  }

  ngOnInit() {
    this.getSeries();
  }

  calculateAverageSeasons(): number {
    const totalSeasons = this.series.reduce((total, current) => total + current.seasons, 0);
    const averageSeasons = totalSeasons / this.series.length;
    return averageSeasons;
  }

}
