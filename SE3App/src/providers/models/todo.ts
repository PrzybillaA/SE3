import { Deserialize } from "./deserialize";

export class User implements Deserialize {

    id: number;
    titel: string;
    beschreibung: string;
    erstellungsDatum: Date;
    faelligkeitsdatum: Date;    

    deserialize(input: any) {
        Object.assign(this, input);

        return this;
    }
}
