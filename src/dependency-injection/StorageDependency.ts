export class MemoryStorage {
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
    private db = new MemoryStorage();

    createPost(title: string) {
        this.db.insert(title);
    }

    getPosts() {
        return this.db;
    }
}
