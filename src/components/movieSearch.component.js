export class MovieSearchController {
}

export default {
    bindings: {
        onToggle: '&',
        todos: '='
    },
    template: `
    <div>movie search content</div>
  `,
    controller: MovieSearchController,
    controllerAs: 'vm'
}
