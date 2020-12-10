import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { LicenseService } from '../../services/license.service';
// Import Models
import { License } from '../../domain/evertools_login_db/license';

// START - USED SERVICES
/**
* LicenseService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* LicenseService.list
*	@description CRUD ACTION list
*
* LicenseService.findByConnection_Code
*	@description CRUD ACTION findByConnection_Code
*
*/
// END - USED SERVICES

/**
 * This component shows a list of License
 * @class LicenseListComponent
 */
@Component({
    selector: 'app-license-list',
    templateUrl: './license-list.component.html',
    styleUrls: ['./license-list.component.css']
})
export class LicenseListComponent implements OnInit {
    list: License[];
    search: any = {};
    idSelected: string;
    constructor(
        private licenseService: LicenseService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.licenseService.list().subscribe(list => this.list = list);
    }

    /**
     * Select License to remove
     *
     * @param {string} id Id of the License to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected License
     */
    deleteItem() {
        this.licenseService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
