import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { NewTicketComponent } from './new-ticket.component';

describe('NewTicketComponent', () => {
  let component: NewTicketComponent;
  let fixture: ComponentFixture<NewTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [NewTicketComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update input values when typing', () => {
    const titleInput = fixture.debugElement.query(By.css('input[name="title"]')).nativeElement;
    const requestTextarea = fixture.debugElement.query(
      By.css('textarea[name="request"]'),
    ).nativeElement;

    titleInput.value = 'Bug in header';
    titleInput.dispatchEvent(new Event('input'));

    requestTextarea.value = 'Header disappears on scroll.';
    requestTextarea.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(titleInput.value).toBe('Bug in header');
    expect(requestTextarea.value).toBe('Header disappears on scroll.');
  });
});
