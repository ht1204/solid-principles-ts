export interface DatabaseStorage {
    insert(record: string): void;
}

export class MemoryStorage implements DatabaseStorage {
    private storage: string[];

    constructor() {
        this.storage = [];
    }

    public insert(record: string): void {
        this.storage.push(record);
    }

    public getMemoryStorage() {
        return this.storage;
    }
}

export class PostService {
    private db: DatabaseStorage;

    constructor(db: DatabaseStorage) {
        this.db = db;
    }

    createPost(title: string) {
        this.db.insert(title);
    }

    getPosts() {
        return this.db;
    }
}
