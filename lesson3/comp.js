Vue.component('new-component', {
    template: `
        <div>
            <h1>{{ title }}</h1>
            <p>{{ message }}</p>
        </div>
    `,
    data() {
        return {
            title: 'Новый компонент',
            message: 'Hello, Vue.js!'
        }
    },
})