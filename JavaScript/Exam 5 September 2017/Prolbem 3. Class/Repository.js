class Repository {
    constructor(props) {
        this.validProperties = props;
        this.data = new Map();
        this.currentID = 0;
    }

    isValid(entity) {
        let entityKeys = Object.keys(entity);
        for (let key in this.validProperties) {
            if (entityKeys.includes(key) === false) {
                throw new Error(`Property ${key} is missing from the entity!`);
            }

            if (typeof entity[key] !== this.validProperties[key]) {
                throw new TypeError(`Property ${key} is of incorrect type!`);
            }
        }

        console.log(entityKeys.length);
        console.log(Object.keys(this.validProperties).length)
        if(entityKeys.length !== Object.keys(this.validProperties).length)
        throw new Error();

        return true;

    }

    add(entity) {
        this.isValid(entity);
        this.data.set(this.currentID, entity);
        return this.currentID++;
    }

    get(id)
    {
        if (!this.data.has(id)) {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }
        return this.data.get(id);
    }

    update(id, newEntity)
    {
        if(!this.data.has(id))
        {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.isValid(newEntity);
        this.data.set(id, newEntity);
    }

    del(id)
    {
        if(!this.data.has(id))
        {
            throw new Error(`Entity with id: ${id} does not exist!`);
        }

        this.data.delete(id);
    }

    get count()
    {
        return this.data.size;
    }
}

let props = {
    color: "string",
    length: "number"
};
let repo = new Repository(props);
repo.get(5);