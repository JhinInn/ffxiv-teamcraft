import { inject, TestBed } from '@angular/core/testing';
import { LazyDataService } from '../../core/data/lazy-data.service';
import { LazyDataTestService } from '../../../test/lazy-data-test-service';
import { StatsService } from './stats.service';
import { BaseParam } from './base-param';

describe('StatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: LazyDataService, useFactory: () => new LazyDataTestService() },
        StatsService
      ]
    });
  });

  it('should be created', inject([StatsService], (service: StatsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get base stats accurately', inject([StatsService], (service: StatsService) => {
    const statsEntries = [
      {
        job: 24,
        level: 73,
        tribe: 11,
        stats: [
          { id: BaseParam.MIND, value: 401 },
          { id: BaseParam.DIRECT_HIT_RATE, value: 367 },
          { id: BaseParam.CRITICAL_HIT, value: 367 },
          { id: BaseParam.DETERMINATION, value: 305 },
          { id: BaseParam.SPELL_SPEED, value: 367 },
          { id: BaseParam.PIETY, value: 305 },
          { id: BaseParam.VITALITY, value: 304, precision: -1 }
        ]
      },
      {
        job: 19,
        level: 79,
        tribe: 11,
        stats: [
          { id: BaseParam.STRENGTH, value: 334 },
          { id: BaseParam.DIRECT_HIT_RATE, value: 378 },
          { id: BaseParam.CRITICAL_HIT, value: 378 },
          { id: BaseParam.DETERMINATION, value: 335 },
          { id: BaseParam.SKILL_SPEED, value: 378 },
          { id: BaseParam.VITALITY, value: 415, precision: -1 },
          { id: BaseParam.TENACITY, value: 378 }
        ]
      },
      {
        job: 1,
        level: 79,
        tribe: 11,
        stats: [
          { id: BaseParam.STRENGTH, value: 317 },
          { id: BaseParam.DIRECT_HIT_RATE, value: 378 },
          { id: BaseParam.CRITICAL_HIT, value: 378 },
          { id: BaseParam.DETERMINATION, value: 335 },
          { id: BaseParam.SKILL_SPEED, value: 378 },
          { id: BaseParam.VITALITY, value: 382, precision: -1 },
          { id: BaseParam.TENACITY, value: 378 }
        ]
      },
      {
        job: 19,
        level: 80,
        tribe: 11,
        stats: [
          { id: BaseParam.STRENGTH, value: 339 },
          { id: BaseParam.VITALITY, value: 421, precision: -1 }
        ]
      },
      {
        job: 1,
        level: 80,
        tribe: 11,
        stats: [
          { id: BaseParam.STRENGTH, value: 322 },
          { id: BaseParam.VITALITY, value: 387, precision: -1 }
        ]
      }
    ];

    statsEntries.forEach(entry => {
      const stats = service.getRelevantBaseStats(entry.job)
        .reduce((acc, baseParamId) => {
          acc[baseParamId] = service.getBaseValue(baseParamId, entry.job, entry.level, entry.tribe);
          return acc;
        }, {});

      entry.stats.forEach(stat => {
        expect(stats[stat.id]).toBeCloseTo(stat.value,
          stat.precision || 0,
          `${BaseParam[stat.id]}, lvl ${entry.level}, job ${entry.job}, tribe ${entry.tribe}`);
      });
    });
  }));


});
