import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTornamentComponent } from './create-tornament.component';

describe('CreateTornamentComponent', () => {
  let component: CreateTornamentComponent;
  let fixture: ComponentFixture<CreateTornamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTornamentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTornamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
