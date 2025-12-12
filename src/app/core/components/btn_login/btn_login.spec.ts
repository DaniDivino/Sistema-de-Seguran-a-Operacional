import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btn } from './btn_login';

describe('Btn', () => {
  let component: Btn;
  let fixture: ComponentFixture<Btn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btn]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Btn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
