const counter = {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        increment() {
            this.counter++
        },
        decrement() {
            if (this.counter > 0) {
                this.counter--
            }
        }
    },
    template: `
        <div>
            <h5>Counter: {{ counter }}</h5>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </div>    
    `
}