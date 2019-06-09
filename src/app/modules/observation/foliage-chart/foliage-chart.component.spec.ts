import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoliageChartComponent } from './foliage-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule, ChartModule, DialogModule, InputTextModule, PanelModule, SharedModule, SidebarModule, TreeModule } from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';

describe('FoliageChartComponent', () => {
  let component: FoliageChartComponent;
  let fixture: ComponentFixture<FoliageChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FoliageChartComponent],
      imports: [
        HttpClientModule,
        BrowserModule,
        // PrimeNG Modules
        ButtonModule,
        ChartModule,
        DialogModule,
        InputTextModule,
        PanelModule,
        SharedModule,
        SidebarModule,
        TreeModule
      ]
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
