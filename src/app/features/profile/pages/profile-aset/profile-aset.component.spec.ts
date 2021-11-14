import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { ProfileAssetService } from 'src/app/core/services/profile/profile-asset.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProfileAsetComponent } from './profile-aset.component';

describe('ProfileAsetComponent', () => {
  let component: ProfileAsetComponent;
  let fixture: ComponentFixture<ProfileAsetComponent>;
  let profileAssetService: ProfileAssetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAsetComponent ],
      imports: [
        CoreModule,
        SharedModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    profileAssetService = TestBed.inject(ProfileAssetService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test close fuction', () => {
    component.close();
    expect(component.opened).toBeFalsy;
  });

  it('test open fuction', () => {
    component.open();
    expect(component.opened).toBeTruthy;
  });

  it('test init function', () => {
    let sampleData = {
      'hydra:member' : [
        {
          name: "sample",
          jumlah: 10,
          tahunPembuatan: "2020"
        }
      ]
    };

    let res = new Observable((subscriber) => {
      subscriber.next(sampleData);
      subscriber.complete();
    });

    spyOn(profileAssetService, 'getDataAsset').and.returnValue(res);
    component.ngOnInit();
    expect(profileAssetService.getDataAsset).toHaveBeenCalled;
  });

  it('test mapData function', () => {
    let data = [
      {
        name: "sample1",
        jumlah: 10,
        tahunPembuatan: "2020"
      },
      {
        name: "sample2",
        jumlah: 11,
        tahunPembuatan: "2021"
      }
    ];

    let mappedData = component.mapData(data);
    expect(mappedData[0]['nama']).toBe('sample1');
  });

  it('test submit function success', () => {
    let res = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });

    spyOn(profileAssetService, 'saveProfileAsset').and.returnValue(res);

    component.submit();
    expect(component.popUpMessage).toBe('Berhasil menyimpan data');
  });

  it('test submit function failed', () => {
    let res = new Observable((subscriber) => {
      subscriber.error(true);
      subscriber.complete();
    });

    spyOn(profileAssetService, 'saveProfileAsset').and.returnValue(res);

    component.submit();
    expect(component.popUpMessage).toBe('Gagal menyimpan data');
  });

});
