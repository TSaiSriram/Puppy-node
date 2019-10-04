import chai from 'chai';
import chaiHttp from 'chai-http';
import 'mocha';
import puppyService from '../services/puppy.service';
import { Puppy, update_Puppy, del_Puppy, Puppy_body } from '../interfaces/puppy.interface';

chai.use(chaiHttp);
const expect = chai.expect;

// Get Puppies Service

describe('#GetPuppyService()', () => {
    it('should return response on call', () => {
        return puppyService.getPuppies()
            .then(res => {
                expect(res).to.be.a('object')
            })
    })
    it('should not return response on call', () => {
        return puppyService.getPuppies()
            .then(res => {
                expect(res).not.to.be.a('string')
            })
    })
})

// Post Method Puppy Service Data

describe('#PostPuppyService()', () => {

    // Sample data to send to database

    const puppy: Puppy_body = {
        puppy_age: 6,
        puppy_breed: "Dolmation",
        description: "Puppy is cute"
    }

    it('should send data to the database', () => {
        return puppyService.createPuppy(puppy)
            .then(res => {
                console.log(res.status)
                expect(res.status).to.be.equal(true)
            })
    })

    it('should not send data to the database', () => {
        return puppyService.createPuppy({})
            .then(res => {
                expect(res.status).to.be.equal(false)
            })
    })
})

// Updating puppy data using ID from the database

describe('#PutPuppyService()', () => {

    // Sample data to send to database

    const puppy: Puppy_body = {
        puppy_age: 7,
        puppy_breed: "Puppy update",
        description: "Puppy data updated"
    }
    const req_pass: any = { body: puppy, params: { id: 116 } }
    const req_fail: any = { body: puppy, params: { id: 55348594783597934 } }
    it('should update data to the database', () => {
        return puppyService.updatePuppy(req_pass)
            .then(res => {
                console.log(res.status, true)
                expect(res.status).to.be.equal(true)
            })
    })

    it('should not update data to the database', () => {
        return puppyService.updatePuppy(req_fail)
            .then(res => {
                expect(res.status).to.be.equal(false)
            })
    })
})

// Deleting puppy data using ID from the database

describe('#DeletePuppyService()', () => {

    // Sample data to send to database
    let req: any = { params: { id: 116 } }

    it('should delete a record from database', () => {
        return puppyService.deletePuppy(req)
            .then(res => {
                console.log(res.status)
                expect(res.status).to.be.equal(true)
            })
    })

    it('should not delete a record from database as the record does not exist', () => {
        return puppyService.deletePuppy(req)
            .then(res => {
                expect(res.status).to.be.equal(false)
            })
    })
}) 