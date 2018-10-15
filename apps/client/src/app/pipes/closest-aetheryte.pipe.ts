import { Pipe, PipeTransform } from '@angular/core';
import { MapService } from '../modules/map/map.service';
import { Aetheryte } from '../core/data/aetheryte';
import { Observable } from 'rxjs';
import { Vector2 } from '../core/tools/vector2';
import { filter, map } from 'rxjs/operators';

@Pipe({
  name: 'closestAetheryte'
})
export class ClosestAetherytePipe implements PipeTransform {

  constructor(private mapService: MapService) {
  }

  transform(zoneid: number, position: Vector2): Observable<Aetheryte> {
    return this.mapService.getMapById(zoneid).pipe(
      filter(mapData => mapData !== undefined),
      map(mapData => this.mapService.getNearestAetheryte(mapData, position))
    );
  }

}