export class AppController {
    constructor() {
        this.movies = [{title: 'star wars'}, {title: 'macgyver'}];
        this.str = 'some string';
    }
}

export default {
    template: `
        <div>App component content</div>
        <movie-search></movie-search>
        <movie-list testinput="qweqwe" testinput2="{a: 'qwe'}" movies1="$ctrl.movies" movies2="$ctrl.movies" primitive1="$ctrl.str" primitive2="$ctrl.str" primitive3="$ctrl.str"></movie-list>
        app movies: {{ $ctrl.movies }}
        app str: {{ $ctrl.str }}
    `,
    controller: AppController
};
