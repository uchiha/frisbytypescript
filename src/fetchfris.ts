import * as frisby from 'frisby';

export class FetchFris{
    
    getResource(url: string){
        return frisby.get(url);
    }
    
}

