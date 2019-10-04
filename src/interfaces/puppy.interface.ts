
export interface Puppy {
    puppy_id: number,
    puppy_age: number;
    puppy_breed: string;
    description: string;
}

export interface Puppy_body {
    puppy_age: number;
    puppy_breed: string;
    description: string;
}

export interface update_Puppy {
    body: {
        puppy_age: number;
        puppy_breed: string;
        description: string;
    },
    params: {
        id: number
    }
}

export interface del_Puppy { params: { id: number } }