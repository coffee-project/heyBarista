import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspressoJournalComponent } from './espresso-journal.component';

describe('EspressoJournalComponent', () => {
  let component: EspressoJournalComponent;
  let fixture: ComponentFixture<EspressoJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspressoJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspressoJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
