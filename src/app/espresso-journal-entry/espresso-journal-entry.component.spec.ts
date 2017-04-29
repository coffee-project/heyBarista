import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspressoJournalEntryComponent } from './espresso-journal-entry.component';

describe('EspressoJournalEntryComponent', () => {
  let component: EspressoJournalEntryComponent;
  let fixture: ComponentFixture<EspressoJournalEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspressoJournalEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspressoJournalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
