import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormDemoComponent } from './contact-form-demo.component';

describe('ContactFormDemoComponent', () => {
  let component: ContactFormDemoComponent;
  let fixture: ComponentFixture<ContactFormDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactFormDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
