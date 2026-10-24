import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsList } from './project-list';

describe('ProjectsList', () => {
  let component: ProjectsList;
  let fixture: ComponentFixture<ProjectsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsList],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
