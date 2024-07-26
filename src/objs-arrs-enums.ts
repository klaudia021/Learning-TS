
//WORKING WITH OBJECTS AND ARRAYS
{

    const person2: object = {
        name: 'Lea',
        age: 32
    };
    
    //console.log(person2.name);  //does not work, because the person2 is only type of object, nothing explicit about it
    
    const person3: {
        name: string;
        age: number;
    } = {
        name: 'William',
        age: 32
    };
    
    //console.log(person3.);  //the IDE now shows the properties
    
    const person = {
        name: 'Klaudia',
        age: 25,
        hobbies: ['Sports', 'Cooking']
    };
    
    let favoriteActivities: string[];
    favoriteActivities = ['Fishing'];
    
    console.log(person);
    
    for (const hobby of person.hobbies) {
        console.log(hobby.toLocaleUpperCase());
    }
    
    const person4: {
        name: string;
        age: number;
        hobbies: string[];
        role: [number, string]; //this is a Tuple
    } = {
        name: 'Klaudia',
        age: 25,
        hobbies: ['Sports', 'Cooking'],
        role: [2, 'author']
    };
    
    person4.role.push('admin'); //push works on tuples
    //person4.role[1] = 2;    //This will not work, because of the Tuple
}

//WORKING WITH ENUMS
{
    enum Role {
        ADMIN,
        READ_ONLY,
        AUTHOR
    }

    const person = {
        name: 'Klaudia',
        age: 25,
        hobbies: ['Sports', 'Cooking'],
        role: Role.ADMIN
    }; 

    if (person.role === Role.ADMIN) {
        console.log('User is admin!');
    }

    //custom values:
    enum Role {
        ADMIN2 = 100,
        READ_ONLY2 = 20,
        AUTHOR2 = 40
    }

    const person2 = {
        name: 'Klaudia',
        age: 25,
        hobbies: ['Sports', 'Cooking'],
        role: Role.ADMIN2
    }; 

    if (person.role === Role.ADMIN2) {
        console.log('User is admin2!');
    }
}
