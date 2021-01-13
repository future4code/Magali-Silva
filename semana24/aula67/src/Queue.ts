class Queue {
    constructor (
        public frames: any[] = []
    ){}

    public isEmpty = (): boolean => this.frames.length === 0

    public enqueue(value: any): void {
        this.frames.length ++
        this.frames[this.frames.length - 1] = value
    }

    public unqueue(): any {
        const removedValue: any =  this.frames[this.frames.length - 1]
        this.frames[this.frames.length - 1] = undefined;
        this.frames.length -= 1

        return removedValue
    }

    public print(): void {
        for (let i = 0; i < this.frames.length; i++) {
            console.log(`Elemento ${i + 1}: `, this.frames[i]);
          }
    }
}

export const queue: Queue = new Queue()