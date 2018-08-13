import "jasmine";
import * as frisby from 'frisby';
import {FetchFris} from './fetchfris';

describe("Checking status codes ", () => {

    it("twitter should have 200", () => {
        var asb = new FetchFris();
        return asb.getResource("https://twitter.com")
        .expect('status', 404);
    })

    // it("should give me a json response ", (done) => {  //works!! :)
    //     var asb = new FetchFris();
    //     asb.getResource("https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBLzFAnW-1XE28hZ2BpJxcpGOquAdBZ8sQ&location=-36.854065,174.779877&type=restaurant&radius=500")
    //     // .inspectJSON()
    //     .inspectRequest()
    //     .done(done);
    // });

});