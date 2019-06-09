import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoliageChartComponent } from './foliage-chart.component';

describe('FoliageChartComponent', () => {
  let component: FoliageChartComponent;
  let fixture: ComponentFixture<FoliageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoliageChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoliageChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
