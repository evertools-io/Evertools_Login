// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { LicenseService } from '../../services/license.service';
// Import Models
import { License } from '../../domain/evertools_login_db/license';

// START - USED SERVICES
/**
* LicenseService.create
*	@description CRUD ACTION create
*
* LicenseService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* LicenseService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a License
 */
@Component({
    selector: 'app-license-edit',
    templateUrl: 'license-edit.component.html',
    styleUrls: ['license-edit.component.css']
})
export class LicenseEditComponent implements OnInit {
    item: License;
    model: License;
    formValid: Boolean;

    constructor(
    private licenseService: LicenseService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new License();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.licenseService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save License
     *
     * @param {boolean} formValid Form validity check
     * @param License item License to save
     */
    save(formValid: boolean, item: License): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.licenseService.update(item).subscribe(data => this.goBack());
            } else {
                this.licenseService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



