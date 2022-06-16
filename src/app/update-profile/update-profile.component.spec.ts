import { DebugElement, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { UpdateProfileComponent } from './update-profile.component';

describe('UpdateProfileComponent', () => {
  let component: UpdateProfileComponent;
  let fixture: ComponentFixture<UpdateProfileComponent>;
  let dat: any;
  let de: DebugElement;
  let button: ElementRef;
  let da: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
    button = de.query(By.css('button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /***  it(' Event emmitter', () => {});
  describe('change', () => {
    it('should emit when the button is clicked', () => {
      spyOn(component.data, 'emit');
      button.nativeElement.click();
      expect(component.data.emit).toHaveBeenCalled();
    });
  });**/
});
