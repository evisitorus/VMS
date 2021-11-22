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

    spyOn(profileAssetService, 'get').and.returnValue(res);
    component.ngOnInit();
    expect(profileAssetService.get).toHaveBeenCalled;
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

  it("test submit function save", () => {
    spyOn(component, "save");

    component.isNewData = true;
    component.submit();
    expect(component.save).toHaveBeenCalled();
  });

  it("test submit function update", () => {
    spyOn(component, "update");

    component.isNewData = false;
    component.submit();
    expect(component.update).toHaveBeenCalled();
  });

  it("test updateForm function", () => {
    let data: any = {
      nama: "testnama",
      jumlah: "testjumlah",
      tahunPembuatan: "testtahunpembuatan",
      id: "testid"
    };

    spyOn(component, "setFormValue");
    spyOn(component, "open");

    component.updateForm(data);

    expect(component.id).toBe(data.id);
    expect(component.data.namaAsset).toBe(data.nama);
    expect(component.data.jumlah).toBe(data.jumlah);
    expect(component.data.tahunPembuatan).toBe(data.tahunPembuatan);
    expect(component.isNewData).toBe(false);
  });

  it("test save function success", () => {
    let success = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });
    
    spyOn(component, "triggerPopUp");
    spyOn(component, "getData");
    spyOn(component, "close");

    spyOn(profileAssetService, "save").and.returnValue(success);
    component.save();
    expect(component.popUpMessage).toBe("Berhasil menyimpan data");
  });

  it("test update function success", () => {
    let success = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });
    
    spyOn(component, "triggerPopUp");
    spyOn(component, "getData");
    spyOn(component, "close");

    spyOn(profileAssetService, "update").and.returnValue(success);
    component.update();
    expect(component.popUpMessage).toBe("Berhasil memperbarui data");
  });

  it("test delete function success", () => {
    let success = new Observable((subscriber) => {
      subscriber.next(true);
      subscriber.complete();
    });

    let id = "10";
    
    spyOn(component, "triggerPopUp");
    spyOn(component, "getData");
    spyOn(component, "close");

    spyOn(profileAssetService, "delete").and.returnValue(success);
    component.delete(id);
    expect(component.popUpMessage).toBe("Berhasil menghapus data");
  });

  it("test save function failed", () => {
    let failed = new Observable((subscriber) => {
      subscriber.error(true);
      subscriber.complete();
    });
    
    spyOn(component, "triggerPopUp");
    spyOn(component, "getData");
    spyOn(component, "close");

    spyOn(profileAssetService, "save").and.returnValue(failed);
    component.save();
    expect(component.popUpMessage).toBe("Gagal menyimpan data");
  });

  it("test update function failed", () => {
    let failed = new Observable((subscriber) => {
      subscriber.error(true);
      subscriber.complete();
    });
    
    spyOn(component, "triggerPopUp");
    spyOn(component, "getData");
    spyOn(component, "close");

    spyOn(profileAssetService, "update").and.returnValue(failed);
    component.update();
    expect(component.popUpMessage).toBe("Gagal memperbarui data");
  });

  it("test delete function failed", () => {
    let failed = new Observable((subscriber) => {
      subscriber.error(true);
      subscriber.complete();
    });

    let id = "10";
    
    spyOn(component, "triggerPopUp");
    spyOn(component, "getData");
    spyOn(component, "close");

    spyOn(profileAssetService, "delete").and.returnValue(failed);
    component.delete(id);
    expect(component.popUpMessage).toBe("Gagal menghapus data");
  });

});
