const listwork = {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            newItemText: '',
        }
    },
    emits: ['add-item', 'remove-item'],
    methods: {
        addItem() {
            const newItem = {
                id: Date.now(),
                text: this.newItemText,
            }
            this.$emit('add-item', newItem)
            this.newItemText = ''
        },
        removeItem(itemId) {
            this.$emit('remove-item', itemId)
        },
    },
    template: `
        <h2>Список работ</h2>        
        <input type="text" v-model.lazy="newItemText" placeholder="Введите текст работы">
        <button @click="addItem">Добавить работу</button>
        <ul>
            <li v-for="item in tasks" :key="item.id">
            {{ item.text }}
            <button @click="removeItem(item.id)">Удалить работу</button>
            </li>
        </ul>
        `
}