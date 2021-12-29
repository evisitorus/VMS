import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelBarItemComponent, PanelBarItemModel } from '@progress/kendo-angular-layout';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test stateChange function', () => {
    let panel: PanelBarItemModel = {
      children: [],
      title: "testtitle",
      content: "testcontent",
      disabled: false,
      id: "sampleid",
      icon: "",
      iconClass: "",
      imageUrl: "",
      expanded: false,
      focused: true,
      selected: true
    };

    expect(component.stateChange([panel])).toBeFalsy;
  });

  it('test stateChange function else path', () => {
    let panel: PanelBarItemModel = {
      children: [],
      title: "testtitle",
      content: "testcontent",
      disabled: false,
      id: "info",
      icon: "",
      iconClass: "",
      imageUrl: "",
      expanded: false,
      focused: true,
      selected: true
    };

    expect(component.stateChange([panel])).toBeFalsy;
  });

});
